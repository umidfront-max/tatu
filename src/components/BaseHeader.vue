<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuModal from './MenuModal.vue'
import ByModal from './ByModal.vue'
import SearchModal from './SearchModal.vue'

const _search = ref()
const modalRef = ref(null)
const buyerRef = ref(null)
const searchRef = ref(null)

const openModal = () => {
  modalRef.value.open()
}

// Asosiy menyu
const menuItems = ['Biz haqimizda', 'Fakultetlar', 'Talabalar', 'Yangiliklar', 'Vakansiyalar']

// Submenyu faqat “Fakultetlar” uchun
const facultyItems = [
  'Kompyuter injiniringi',
  'Dasturiy injiniring',
  'Telekommunikatsiya texnologiyalari',
  'Axborot xavfsizligi',
  'Axborot tizimlari',
  'Multimedia texnologiyalari',
]

const showFaculty = ref(false)
const showFacultyInModal = ref(false)
const activeItem = ref('Biz haqimizda')

const router = useRouter()
const route = useRoute()
const lang = ref('UZ')

function toggleLang() {
  lang.value = lang.value === 'UZ' ? 'EN' : 'UZ'
}
function handleRoute(item) {
  activeItem.value = item
  if (activeItem.value == 'Vakansiyalar') {
    router.push('vakancy')
  }
}
</script>

<template>
  <div class="bg-black-700 text-white">
    <header class="flex items-center container !py-5 justify-between">
      <!-- Logo -->
      <div @click="router.push('/')" class="flex gap-3 cursor-pointer items-center">
        <img class="max-xl:h-5" src="@/assets/img/logo1.png" alt="TUIT logo" />
        <p class="font-semibold text-lg">TUIT</p>
      </div>

      <!-- Navigation -->
      <nav class="flex max-[970px]:hidden gap-6 relative">
        <div
          v-for="item in menuItems"
          :key="item"
          class="relative"
          @mouseenter="item === 'Fakultetlar' && (showFaculty = true)"
          @mouseleave="item === 'Fakultetlar' && (showFaculty = false)"
        >
          <!-- Main item -->
          <button
            @click="handleRoute(item)"
            class="relative flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors pb-1 group"
            :class="activeItem === item && 'text-white'"
          >
            {{ item }}

            <!-- faqat Fakultetlar uchun pastga o‘q -->
            <svg
              v-if="item === 'Fakultetlar'"
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 transition-transform duration-300"
              :class="showFaculty ? 'rotate-180' : 'rotate-0'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>

            <span
              class="absolute left-1/2 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 transform -translate-x-1/2"
              :class="activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </button>

          <!-- Fakultetlar submenyusi -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="item === 'Fakultetlar' && showFaculty"
              class="absolute w-60 top-full left-0 mt-2 bg-black-800 shadow-lg rounded-lg p-3 flex flex-col gap-2 z-50"
            >
              <button
                v-for="faculty in facultyItems"
                :key="faculty"
                @click="activeItem = faculty"
                class="text-gray-300 hover:text-white transition-colors text-sm pb-1 group"
                :class="activeItem === faculty && 'text-white'"
              >
                {{ faculty }}
                <span
                  class="absolute left-1/2 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 transform -translate-x-1/2"
                  :class="activeItem === faculty ? 'w-full' : 'w-0 group-hover:w-full'"
                ></span>
              </button>
            </div>
          </transition>
        </div>
      </nav>

      <!-- Right side -->
      <div class="flex gap-2 items-center">
        <!-- Til tugmasi -->
        <button
         @click="router.push('/login')"
          class="px-4 py-2 rounded-2xl text-white bg-green-600 hover:bg-green-500 transition-colors max-xl:text-xs"
        >
          Tizimga kirish
        </button>

        <!-- Qidiruv -->
        <div
          class="w-40 max-[970px]:hidden h-10 flex justify-between bg-black-800 p-2 px-4 rounded-full"
        >
          <input
            class="text-white w-full text-sm outline-0 bg-transparent border-0"
            placeholder="Qidirish..."
            v-model="_search"
            type="text"
          />
          <img class="h-full" src="@/assets/img/search.svg" alt="search" />
        </div>

        <!-- Mobil menyu -->
        <button
          @click="openModal"
          class="max-xl:w-8 cursor-pointer max-xl:h-6.5 bg-black-800 rounded-full hidden max-[970px]:flex justify-center items-center"
        >
          <img src="@/assets/img/category.svg" alt="menu" />
        </button>
      </div>
    </header>

    <!-- Mobile Modal -->
    <MenuModal ref="modalRef">
      <nav class="flex flex-col gap-3 mt-6">
        <div v-for="item in menuItems" :key="item">
          <button
            class="relative flex items-center justify-between text-sm w-full text-gray-400 hover:text-white pb-1 group"
            @click.stop="item === 'Fakultetlar' && (showFacultyInModal = !showFacultyInModal)"
          >
            <div class="flex gap-2 items-center">
              <span>{{ item }}</span>
              <svg
                v-if="item === 'Fakultetlar'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 transition-transform duration-300"
                :class="showFacultyInModal ? 'rotate-180' : 'rotate-0'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div
              v-if="item === 'Fakultetlar' && showFacultyInModal"
              class="pl-4 mt-2 flex flex-col gap-2"
            >
              <button
                v-for="faculty in facultyItems"
                :key="faculty"
                class="text-gray-400 hover:text-white transition-colors text-sm pb-1"
              >
                {{ faculty }}
              </button>
            </div>
          </transition>
        </div>
      </nav>

      <!-- Social icons -->
      <div class="gap-4 border-t border-gray-500 pt-4 flex justify-end pr-1 mt-4">
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/ins.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/soc.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/x.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/youtube.svg"
          alt=""
        />
      </div>
    </MenuModal>

    <ByModal ref="buyerRef" />
    <SearchModal ref="searchRef" />
  </div>
</template>

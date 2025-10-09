<script setup>
import { ref, onMounted } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import router from '@/router'

const applications = ref([])

// Sahifa yuklanganda LocalStorage-dan ma’lumotlarni olish
onMounted(() => {
  console.log(localStorage.getItem('applications'))

  const stored = localStorage.getItem('applications')
  console.log('stored')

  applications.value = stored ? JSON.parse(stored) : []
  console.log(applications.value)
})
</script>

<template>
  <div class="bg-black min-h-screen p-8">
    <div class="flex gap-8 items-center cursor-pointer">
      <div @click="router.push('/')" class="flex gap-3 bg-[#445] px-3 py-1 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <p>Bosh sahifaga</p>
      </div>
      <router-link to="/dashboard" class="bg-[#445] px-3 py-1 rounded-lg">Vakansiya</router-link>
      <router-link to="/employee" class="bg-[#445] px-3 py-1 border border-black rounded-lg"
        >Kandidantlar</router-link
      >
    </div>
    <div class="container">
      <section class="py-10">
        <h2 class="text-3xl font-bold text-white text-center mb-8">📋 Arizalar ro‘yxati</h2>

        <div v-if="applications?.length" class="!bg-[#2f2f2f] p-6 rounded-2xl shadow-lg">
          <el-table class="!bg-black" :data="applications">
            <el-table-column prop="name" label="Ism va familiya" min-width="150" />
            <el-table-column prop="phone" label="Telefon" min-width="130" />
            <el-table-column prop="email" label="Email" min-width="150" />
            <el-table-column prop="position" label="Lavozim" min-width="120" />
            <el-table-column prop="department" label="Bo‘lim / Fakultet" min-width="140" /> -->
            <el-table-column prop="fileName" label="Rezyume" min-width="140">
              <template #default="{ row }">
                <span v-if="row.fileName">{{ row?.fileName }}</span>
                <span v-else class="text-gray-400">—</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="message"
              label="Qo‘shimcha izoh"
              min-width="220"
              show-overflow-tooltip
            />
          </el-table>
        </div>

        <div v-else class="text-center text-gray-300 mt-10">
          <p>📭 Hozircha hech qanday ariza mavjud emas.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* Jadval hover effekti butunlay qora bo‘lib qolishi uchun */
.el-table__row:hover {
  background-color: black !important;
}

/* Hover paytida kataklar ham qora bo‘lsin */
.el-table__cell:hover {
  background-color: black !important;
  color: white !important;
}

/* Element Plus hover rangini global darajada bekor qilish */
:root {
  --el-table-row-hover-bg-color: black !important;
}

/* Sarlavha va katak dizayni bir xil */
.el-table th.el-table__cell,
.el-table__cell {
  background-color: black !important;
  color: white !important;
}

/* Aktiv link chiroyli bo‘lsin */
.router-link-active {
  border: 1px white dashed !important;
}
</style>

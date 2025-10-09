<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
import { Briefcase, Clock, MapPin, DollarSign, GraduationCap } from 'lucide-vue-next'

// 🔹 Default vakansiyalar
const defaultVacancies = [
  {
    id: 1,
    title: 'Frontend dasturchi',
    description:
      'Universitetning rasmiy veb-portalini rivojlantirish va texnik qo‘llab-quvvatlash.',
    time: 'To‘liq stavka (09:00 - 18:00)',
    salary: '7 000 000 - 10 000 000 so‘m',
    location: 'Buxoro, BuxDPI binosi',
    degree: 'Axborot texnologiyalari fakulteti',
  },
  {
    id: 2,
    title: 'Matematika o‘qituvchisi',
    description: 'Talabalarga oliy matematika fanidan dars berish va ilmiy ishlarni boshqarish.',
    time: 'Yarim stavka',
    salary: '5 000 000 - 7 000 000 so‘m',
    location: 'Buxoro, 2-bino',
    degree: 'Matematika va informatika kafedrasi',
  },
  {
    id: 3,
    title: 'Labarant (kompyuter sinfida)',
    description: 'Kompyuter sinflarini texnik holatda saqlash, talabalar uchun yordam ko‘rsatish.',
    time: 'To‘liq stavka',
    salary: '4 500 000 - 6 000 000 so‘m',
    location: 'Buxoro, Bosh binoning 1-qavati',
    degree: 'Axborot markazi',
  },
]

// 🔹 Reactive ro‘yxat
const vacancies = ref([])

// 🔹 LocalStorage’dan o‘qish
onMounted(() => {
  const saved = localStorage.getItem('vacancies')
  vacancies.value = saved ? JSON.parse(saved) : defaultVacancies
})
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold text-white/80 text-center mb-10">🧑‍💼 Vakansiyalar</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(v, i) in vacancies"
        :key="i"
        class="!bg-[#2f2f2f] rounded-2xl shadow-lg hover:shadow-xl duration-300 p-6 border border-gray-700 flex flex-col justify-between"
      >
        <div>
          <h3 class="text-xl font-semibold !text-white mb-2 flex items-center gap-2">
            <Briefcase class="w-5 h-5 text-blue-600" />
            {{ v.title }}
          </h3>
          <p class="text-sm text-white/80 mb-4">
            {{ v.description }}
          </p>
        </div>

        <div class="space-y-2 text-sm text-white/90">
          <div class="flex items-center gap-2">
            <Clock class="w-4 h-4 text-indigo-400" />
            <span>{{ v.time }}</span>
          </div>
          <div class="flex items-center gap-2">
            <DollarSign class="w-4 h-4 text-green-400" />
            <span>{{ v.salary }}</span>
          </div>
          <div class="flex items-center gap-2">
            <MapPin class="w-4 h-4 text-red-400" />
            <span>{{ v.location }}</span>
          </div>
          <div class="flex items-center gap-2">
            <GraduationCap class="w-4 h-4 text-purple-400" />
            <span>{{ v.degree }}</span>
          </div>
        </div>

        <button
          @click="router.push('/vakancy/' + v.id)"
          class="mt-6 bg-blue-600 text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-blue-700 duration-200 w-full"
        >
          Ariza topshirish
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #000; /* Asosiy fon qora */
  min-height: 100vh;
  padding: 2rem;
}
</style>

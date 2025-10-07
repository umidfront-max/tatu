<template>
  <main class="">
    <!-- Banner -->
    <section class="relative  text-white py-16 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-2">Universitet Yangiliklari</h1>
        <p class="text-lg opacity-90">So‘nggi yangiliklar va e’lonlardan xabardor bo‘ling</p>
      </div>
      <div class="absolute inset-0 "></div>
    </section>

    <!-- News Grid -->
    <section class="container !py-16">
      <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        <article
          v-for="(news, index) in newsList"
          :key="index"
          class="bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
        >
          <img :src="news.image" alt="news image" class="w-full h-56 object-cover" />
          <div class="p-6 ">
            <div class="flex items-center gap-2 text-sm text-gray-300 mb-3">
              <Calendar class="w-4 h-4" />
              <span>{{ news.date }}</span>
            </div>
            <h2 class="text-xl text-gray-300 font-semibold mb-2 line-clamp-2">
              {{ news.title }}
            </h2>
            <p class="text-gray-400 line-clamp-3 !mb-4">
              {{ news.description }}
            </p>
            <button
              class="flex items-center text-blue-700 hover:text-blue-900 font-medium transition"
            >
              Batafsil
              <ArrowRight class="ml-1 w-4 h-4" />
            </button>
          </div>
        </article>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Calendar, ArrowRight } from "lucide-vue-next";

const currentPage = ref(1);
const totalPages = 5;

const newsList = ref([
  {
    image: "/news1.jpg",
    date: "7-oktabr, 2025",
    title: "Talabalar uchun yangi kutubxona ochildi",
    description:
      "Universitet hududida zamonaviy kutubxona faoliyat boshladi. Bu yerda talabalar uchun elektron resurslar ham mavjud.",
  },
  {
    image: "/news2.jpg",
    date: "5-oktabr, 2025",
    title: "O‘qituvchilar kuni nishonlandi 🎉",
    description:
      "Bugun Universitetda O‘qituvchilar kuni tantanali ravishda nishonlandi. Tabriklar, sovg‘alar va minnatdorchilik so‘zlari bilan to‘ldi.",
  },
  {
    image: "/news3.jpg",
    date: "2-oktabr, 2025",
    title: "Yangi o‘quv yilining ilk dars kuni",
    description:
      "1-oktabrdan boshlab yangi o‘quv yili boshlandi. Darslarda qatnashgan talabalar yangi maqsadlar bilan o‘qishni boshladi.",
  },

]);
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

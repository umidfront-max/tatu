<script setup>
import { ref } from "vue"
import { Send, Upload, FileText } from "lucide-vue-next"
import { ElMessage } from "element-plus"
import { useRouter } from "vue-router"

const router = useRouter()

const form = ref({
  name: "",
  phone: "",
  email: "",
  position: "",
  department: "",
  file: null,
  message: "",
})

const handleFileUpload = (e) => {
  form.value.file = e.target.files[0]
}

const handleSubmit = () => {
  // LocalStorage-dan mavjud arizalarni olish
  const existingApplications = JSON.parse(localStorage.getItem("applications") || "[]")

  // Yangi arizani yaratish
  const newApplication = {
    id: Date.now(),
    ...form.value,
    fileName: form.value.file ? form.value.file.name : null,
  }

  // Arizani massivga qo‘shish
  existingApplications.push(newApplication)

  // LocalStorage-ga saqlash
  localStorage.setItem("applications", JSON.stringify(existingApplications))

  // Foydalanuvchiga xabar
  ElMessage.success("Arizangiz muvaffaqiyatli yuborildi! 🎉")

  // Formani tozalash
  form.value = {
    name: "",
    phone: "",
    email: "",
    position: "",
    department: "",
    file: null,
    message: "",
  }

  // Oldingi sahifaga qaytish
  setTimeout(() => router.go(-1), 1000)
}
</script>

<template>
  <section class="container mx-auto py-14 px-4">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-white">📨 Ariza topshirish</h2>
      <p class="text-gray-300 mt-2 max-w-2xl mx-auto">
        Quyidagi formani to‘ldiring. Biz siz bilan tez orada bog‘lanamiz.
      </p>
    </div>

    <div class="max-w-3xl mx-auto !bg-[#2f2f2f] shadow-lg rounded-2xl p-8 border border-gray-100">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Ism -->
        <div>
          <label class="block text-gray-100 font-medium mb-2">Ism va familiya</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Masalan: Sadullayev O'tkir"
            class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Telefon -->
        <div>
          <label class="block text-gray-100 font-medium mb-2">Telefon raqami</label>
          <input
            v-model="form.phone"
            type="tel"
            required
            placeholder="+998 90 123 45 67"
            class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-100 font-medium mb-2">Email manzilingiz</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Masalan: example@buxdpi.uz"
            class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Lavozim -->
        <div>
          <label class="block text-gray-100 font-medium mb-2">Lavozim</label>
          <input
            v-model="form.position"
            type="text"
            required
            placeholder="Masalan: Frontend dasturchi"
            class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Bo‘lim -->
        <div>
          <label class="block text-gray-100 font-medium mb-2">Bo‘lim / Fakultet</label>
          <input
            v-model="form.department"
            type="text"
            placeholder="Masalan: Axborot texnologiyalari fakulteti"
            class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Fayl -->
        <div>
          <label class="block text-gray-100 font-medium mb-2 flex items-center gap-2">
            <FileText class="w-5 h-5 text-blue-600" />
            Rezyume (CV)
          </label>
          <div
            class="border border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:bg-gray-50"
          >
            <input
              type="file"
              @change="handleFileUpload"
              accept=".pdf,.doc,.docx"
              class="hidden"
              id="fileUpload"
            />
            <label
              for="fileUpload"
              class="text-blue-600 font-medium flex flex-col items-center gap-2"
            >
              <Upload class="w-6 h-6" />
              <span v-if="form.file">{{ form.file.name }}</span>
              <span v-else>Faylni tanlang</span>
            </label>
          </div>
        </div>

        <!-- Qo‘shimcha izoh -->
        <div>
          <label class="block text-gray-100 font-medium mb-2">Qo‘shimcha izoh</label>
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Agar qo‘shimcha ma’lumot bo‘lsa, shu yerda yozing..."
            class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
        </div>

        <!-- Yuborish -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 duration-200 font-medium"
          >
            <Send class="w-5 h-5" />
            Arizani yuborish
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

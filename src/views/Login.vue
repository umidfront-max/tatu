<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <h1 class="text-2xl   font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Kirish
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label
            class="blocktext-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            for="username"
            >Login</label
          >
          <input
            id="username"
            v-model="username"
            type="text"
            autocomplete="username"
            class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Loginni yozing"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            for="password"
            >Parol</label
          >
          <div class="relative">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Parolni yozing"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-2 top-2 text-sm text-gray-500 dark:text-gray-300"
            >
              {{ showPassword ? 'Yashirish' : 'Ko‘rsatish' }}
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="remember" class="h-4 w-4 rounded" />
            <span class="text-gray-600 dark:text-gray-300">Eslab qolish</span>
          </label>
          <a href="#" class="text-primary text-sm">Parolni unutdingizmi?</a>
        </div>

        <div>
          <el-button
            @click="handleLogin"
            :disabled="loading"
            class="w-full !py-4.5 rounded-lg my-4 !text-white hover:!bg-[#333] bg-primary disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
          >
            {{ loading ? 'Tekshirilmoqda...' : 'Kirish' }}
          </el-button>
        </div>
      </form>

      <div v-if="error" class="mt-4 text-red-600 text-sm">{{ error }}</div>
      <div v-if="success" class="mt-4 text-green-600 text-sm">{{ success }}</div>

   
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const remember = ref(false)
const loading = ref(false)
const error = ref('')
const success = ref('')

function handleLogin() {
  error.value = ''
  success.value = ''

  if (!username.value || !password.value) {
    error.value = 'Iltimos, login va parolni kiriting.'
    return
  }

  loading.value = true

  if (username.value === 'admin' && password.value === 'admin') {
    success.value = 'Muvaffaqiyatli kirdingiz — hush kelibsiz!'
    if (remember.value) {
      localStorage.setItem('auth', JSON.stringify({ user: 'admin', ts: Date.now() }))
    }
    router.push({ path: '/dashboard' }).catch(() => {})
  } else {
    error.value = 'Notog‘ri login yoki parol.'
  }

  loading.value = false
}
</script>

<style scoped>
:root {
  --primary: #2563eb;
}

.bg-primary {
  background-color: var(--primary);
}
.text-primary {
  color: var(--primary);
}
.focus\:ring-2:focus {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}
</style>

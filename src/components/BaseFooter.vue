<script setup></script>

<template>
  <div class="bg-black-700 text-white">
    <footer
      class="grid grid-cols-3 max-md:grid-cols-1 max-md:flex max-md:flex-col max-md:gap-8 !pt-10 !pb-12 container border-b border-black-600"
    >
      <!-- About TUIT -->
      <div>
        <h2 class="uppercase text-xl max-sm:text-base font-semibold italic">
          Biz haqimizda
        </h2>
        <div class="flex flex-col gap-2 mt-3">
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Universitet tarixi
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Rahbariyat
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Missiya va maqsad
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Rasmiy hujjatlar
          </a>
        </div>
      </div>

      <!-- Useful Links -->
      <div>
        <h2 class="uppercase text-xl max-sm:text-base font-semibold italic">
          Foydali havolalar
        </h2>
        <div class="flex flex-col gap-2 mt-3">
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Abituriyentlar uchun
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Talabalar portali
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Elektron kutubxona
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Ilmiy faoliyat
          </a>
          <a
            class="text-sm text-gray-400 hover:text-white duration-300"
            href="#!"
          >
            Yangiliklar
          </a>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <h2 class="uppercase text-xl max-sm:text-base font-semibold italic">
          Aloqa
        </h2>
        <div class="flex flex-col gap-2 mt-3 text-sm text-gray-400">
          <p>
            <strong>Manzil:</strong> Toshkent shahri, Amir Temur ko‘chasi, 108
          </p>
          <p>
            <strong>Telefon:</strong>
            <a href="tel:+998712380610" class="hover:text-white duration-300"
              >+998 (71) 238-06-10</a
            >
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:info@tuit.uz" class="hover:text-white duration-300"
              >info@tuit.uz</a
            >
          </p>
          <p>
            <strong>Ish vaqti:</strong> Dushanba - Juma, 9:00 - 18:00
          </p>
        </div>

        <!-- Social icons -->
        <div
          class="gap-4 flex justify-start pr-1 mt-6"
        >
          <img
            class="h-6 opacity-80 hover:opacity-100 duration-200"
            src="@/assets/img/ins.svg"
            alt="Instagram"
          />
          <img
            class="h-6 opacity-80 hover:opacity-100 duration-200"
            src="@/assets/img/soc.svg"
            alt="Facebook"
          />
          <img
            class="h-6 opacity-80 hover:opacity-100 duration-200"
            src="@/assets/img/x.svg"
            alt="X (Twitter)"
          />
          <img
            class="h-6 opacity-80 hover:opacity-100 duration-200"
            src="@/assets/img/youtube.svg"
            alt="YouTube"
          />
        </div>
      </div>
    </footer>

    <!-- Bottom bar -->
    <div class="flex justify-between items-center container !py-4 text-gray-400 text-xs max-sm:flex-col max-sm:gap-2">
      <p>© 2025 — Toshkent Axborot Texnologiyalari Universiteti</p>
      <a href="#!" class="hover:text-white duration-300">Maxfiylik siyosati</a>
    </div>
  </div>
</template>

<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto ">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 max-w-5xl mx-auto"
      >
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt=""
                  />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    @click="menu = !menu"
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4">
              <a
                href="#"
                class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >Barang
              </a>
              <a
                href="#"
                class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >Jasa
              </a>
              <a
                href="#"
                class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >Tentang
              </a>
              <a
                href="#"
                class="ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
                >Login
              </a>
            </div>
          </nav>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div class="rounded-lg shadow-md">
            <div
              v-show="menu"
              class="rounded-lg bg-white shadow-xs overflow-hidden"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <button
                    @click="menu = !menu"
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >Barang
                </a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >Jasa
                </a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  >Tentang
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Cari barang atau jasa
              <br class="xl:hidden" />
              <span class="text-indigo-600">yang gratis!</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Di Gratisin, kami menyediakan layanan jasa atau barang di
              Indonesia dengan tanpa harga, atau
              <span class="text-indigo-500">gratis</span>!
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Lihat listing
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Grup Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {}
}
</script>

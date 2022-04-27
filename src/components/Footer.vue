<template>
  <div class="bg-black rounded-xl mx-3">
    <div class="flex flex-wrap overflow-hidden">
      <div class="md:w-2/5 p-4">
        <div class="flex flex-wrap overflow-hidden w-full">
          <div class="md:w-1/3">
            <h1 class="text-white font-bold">AWARDS</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">Academy Awards</h1>
              <h1 class="text-white text-sm py-1">Emmy Awards</h1>
              <h1 class="text-white text-sm py-1">BAFTA Awards</h1>
            </div>
          </div>
          <div class="md:w-1/3">
            <h1 class="text-white font-bold">COMPANY</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">About</h1>
              <h1 class="text-white text-sm py-1">Contact</h1>
              <h1 class="text-white text-sm py-1">F.A.Q</h1>
              <h1 class="text-white text-sm py-1">Donate</h1>
              <h1 class="text-white text-sm py-1">Sitemap</h1>
            </div>
          </div>
          <div class="md:w-1/3">
            <h1 class="text-white font-bold">LEGAL</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">Privacy</h1>
              <h1 class="text-white text-sm py-1">Terms</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-3/5 p-4">
        <div class="flex flex-wrap overflow-hidden w-full">
          <div class="md:w-1/2">
            <h1 class="text-white font-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div class="mt-3">
              <h1 class="text-gray-200 text-sm py-1">
                The latest news and articles sent to your inbox weekly
              </h1>
              <form action="/" class="email-subscribe mb-2">
                <div class="flex">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <br />
                  <br />
                  <input type="submit" value="subscribe" />
                </div>
              </form>
            </div>
          </div>
          <div class="md:w-1/2">
            <h1 class="text-white font-bold mb-3">
              EVERYWHERE AT ANY TIME YOU LIKE
            </h1>
            <div class="flex flex-wrap overflow-hidden">
              <div class="sm:w-1/3 p-1">
                <img src="@/assets/image/google-play.png" class="h-10" alt="" />
              </div>
              <div class="sm:w-1/3 p-1">
                <img src="@/assets/image/apple-tv.png" class="h-10" alt="" />
              </div>
              <div class="sm:w-1/3 p-1">
                <img
                  src="@/assets/image/mac-app-store.png"
                  class="h-10"
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-wrap overflow-hidden">
              <div class="sm:w-1/3 p-1">
                <img src="@/assets/image/apple-tv.png" class="h-10" alt="" />
              </div>
              <div class="sm:w-1/3 p-1">
                <img src="@/assets/image/microsoft.png" class="h-10" alt="" />
              </div>
              <div class="sm:w-1/3 p-1">
                <img
                  src="@/assets/image/amazon-appstore.png"
                  class="h-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="bg-white mx-4" />
    <div class="flex px-4 mb-3">
      <logo />
      <p class="text-white text-sm mt-4 ml-3" style="width: 100%">
        © 2021 Awards Box, All rights reserved.Film data from TMDb & Wikipedia
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          class="eye-state float-right w-full mx-2"
        />
        <font-awesome-icon
          :icon="['fab', 'facebook']"
          class="eye-state float-right w-full"
        />
      </p>
    </div>
  </div>
</template>
<style scoped>
/* @import "~/assets/css/styles.css"; */
</style>
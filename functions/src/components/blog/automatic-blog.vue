<template>
  <div
    class="md:w-1/4 sm:w-1/2 overflow-hidden rounded-md overflow-hidden mb-3"
  >
    <div class="mx-2">
      <img src="@/assets/image/Image (1).png" class="w-full" />

      <div class="px-3 bg-back-white dark:bg-black">
        <div class="text-lg py-2 dark:text-white">The Coldest Sunset</div>
        <div class="dark:text-white text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis lectus magna fringilla urna. Etiam tempor orci eu
            lobortis. Integer quis auctor elit sed vulputate mi sit. Lacinia
            <span v-if="readMore"></span>
            <span v-else>...</span>
          </p>

          <p v-show="readMore">
            Ligula ullamcorper malesuada proin libero nunc consequat interdum
            varius. Turpis egestas pretium aenean pharetra magna ac placerat.
            Sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec. Sed cras ornare arcu dui. Aliquam vestibulum morbi
            blandit cursus. Adipiscing elit ut aliquam purus sit amet. Aenean
            sed adipiscing diam donec adipiscing tristique risus nec. Ut etiam
            sit amet nisl purus
          </p>
          <button @click="readMore = !readMore" style="">
            <span v-if="readMore" class="readMore"> Read Less </span>
            <span v-else class="readMore"> Read More </span>
          </button>
        </div>
        <div class="mt-2">
          <span
            class="inline-block bg-custom-gray rounded-full px-2 py-1 text-sm text-white mb-2"
            style="font-size: 11px"
          >
            <font-awesome-icon :icon="['fas', 'star']" />
            Won 14 Awards
          </span>
          <span
            class="inline-block bg-custom-gray rounded-full px-2 py-1 text-sm text-white mb-2"
            style="font-size: 11px"
          >
            <font-awesome-icon :icon="['fas', 'flag']" />
            20 Nominations
          </span>
        </div>
        <div class="pt-1 pb-2 dark:text-white">
          Where to Watch
          <div class="flex flex-wrap overflow-hidden pr-4">
            <div class="w-1/4 overflow-hidden p-1">
              <img src="@/assets/image/image 22.png" class="w-full" />
            </div>
            <div class="w-1/4 overflow-hidden p-1">
              <img src="@/assets/image/image 23.png" class="w-full" />
            </div>
            <div class="w-1/4 overflow-hidden p-1">
              <img src="@/assets/image/image 21.png" class="w-full" />
            </div>
            <div class="w-1/4 overflow-hidden p-1">
              <img src="@/assets/image/Group 105.png" class="w-full" />
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
      readMore: false,
    };
  },
};
</script>
<style scoped>
.readMore {
  font-weight: bold;
}
</style>

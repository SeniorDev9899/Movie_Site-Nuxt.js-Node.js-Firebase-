<template>
  <div class="lg:w-1/3 text-sm mb-2">
    <div class="flex flex-wrap overflow-hidden">
      <div class="md:w-1/2 dark:text-white">
        <img src="@/assets/images/Rectangle 12.png" class="w-full" />
      </div>
      <div class="md:w-1/2 dark:text-white px-2">
        <p class="text-lg mb-2">Eternal Sunshine of the Spotless Mind(2014)</p>
        <p>
          qua. Venenatis lectus magna fringilla urna. Etiam tempor orci eu
          lobortis. Integer quis auctod vulputate mi sit. Lacinia utate mi sr
          elit se
          <span v-if="readMore"></span>
          <span v-else>...</span>
        </p>

        <p v-show="readMore">
          Ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius. Turpis egestas pretium aenean pharetra magna ac placerat. Sed
          egestas egestas fringilla phasellus faucibus scelerisque eleifend
        </p>
        <button
          class="bg-black text-white rounded-full p-1 text-xs awards"
          @click="readMore = !readMore"
        >
          <span v-if="readMore" class="flex">
            <font-awesome-icon
              :icon="['fas', 'eye']"
              style="margin: 3px 0px 0px; width: 21px"
              class="eye-state"
            />
            <lottie
              :width="20"
              :height="20"
              :options="lottieOptions"
              v-on:animCreated="handleAnimation"
              style=" auto"
              class="eye-active"
            />
            Read Less
          </span>
          <span v-else class="flex">
            <font-awesome-icon
              :icon="['fas', 'eye']"
              style="margin: 3px 0px 0px; width: 21px"
              class="eye-state"
            />
            <lottie
              :width="20"
              :height="20"
              :options="lottieOptions"
              v-on:animCreated="handleAnimation"
              style=" auto"
              class="eye-active"
            />
            Read More
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/eye.json";
export default {
  components: {
    lottie,
  },
  data() {
    return {
      readMore: false,
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>
<style>
.awards .eye-state,
.awards:hover .eye-active {
  display: block;
}
.awards .eye-active,
.awards:hover .eye-state {
  display: none;
}
</style>

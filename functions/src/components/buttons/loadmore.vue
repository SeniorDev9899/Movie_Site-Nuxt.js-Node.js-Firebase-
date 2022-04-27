<template>
  <div class="loadmore my-3">
    <button
      type="button"
      class="rounded-full text-white bg-black px-3 py-2 text-sm"
    >
      <div class="flex">
        <lottie
          :width="34"
          :height="24"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
        <p>Load More</p>
      </div>
    </button>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/dot.json";

export default {
  components: {
    lottie,
  },
  data() {
    return {
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

<style scoped>
.loadmore {
  text-align: center;
}
</style>
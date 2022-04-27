<template>
  <div
    class="seeall text-sm text-white mt-2 bg-black rounded-full px-2 awards"
    style="height: 27px; padding-top: 2px"
  >
    <font-awesome-icon
      :icon="['fas', 'eye']"
      style="margin: 2px; margin-top: 4px"
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
    See all
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

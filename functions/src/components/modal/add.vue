<template>
  <div id="add-modal" v-if="show">
    <div @click="$emit('close')">
      <div class="flex">
        <div class="flex-1">
          <b><p class="ml-3 mt-3 text-lg add-stranger mb-2 stranger">Stranger Things 3</p></b>
        </div>
        <div class="flex mt-1 mr-1">
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </div>
      </div>
    </div>
    <div class="flex bg-custom-gray rounded-full mb-1 padding10 mx-2">
      <button>
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="add-selection-se"
          style="color: white; width: 2em"
        />
        <lottie
              :options="lottieOptionsHeart"
              v-on:animCreated="handleAnimationHeart"
              class="add-hover"
              style="
                width: 40px;
                height: 40px;
                margin-top: -33px;
              "
            />
        </button>
      <div class="text-lg text-white add-favor addSpell">Add to Favourites</div>
    </div>

    <div class="flex bg-custom-gray rounded-full mb-1 padding10 mx-2">
      <button>
      <font-awesome-icon
        :icon="['fas', 'plus-circle']"
        class="add-selection-se"
        style="color: white; width: 2em"
      />
      <lottie
              :options="lottieOptionsPlus"
              v-on:animCreated="handleAnimationPlus"
              class="add-hover"
              style="
                width: 40px;
                height: 40px;
                margin-top: -33px;
              "
            />
      </button>
      <div class="text-lg text-white add-favor addSpell">Add to Watchlist</div>
    </div>

    <div class="flex bg-custom-gray rounded-full mb-1 padding10 mx-2">
      <button>
      <font-awesome-icon
        :icon="['fas', 'plus-circle']"
        class="add-selection-se"
        style="color: white; width: 2em"
      />
      <lottie
              :options="lottieOptionsPlus"
              v-on:animCreated="handleAnimationPlus"
              class="add-hover"
              style="
                width: 40px;
                height: 40px;
                margin-top: -33px;
              "
            />
      </button>
      <div class="text-lg text-white add-favor addSpell">Seen It</div>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationDataHeart from '~/assets/lottie/heart.json';
import * as animationDataPlus from '~/assets/lottie/plus.json';

export default {
  
  props: ["show"],
  components: {
    lottie,
  },
  data() {
    return{
      lottieOptionsHeart: { animationData: animationDataHeart.default },
      lottieOptionsPlus: { animationData: animationDataPlus.default },

      animHeart: null,
      animPlus: null
    }
    
  },
  methods: {
      handleAnimationHeart: function (anim) {
        this.animHeart = anim;
      },
      handleAnimationPlus: function (anim) {
        this.animPlus = anim;
      }
    }
};

</script>
<style scoped>
/* @import "~/assets/css/styles.css"; */

@media only screen and (max-width: 640px) {
  .stranger {
    font-size: 9px;
  }
  .addSpell {
    font-size: 8px;
  }
  #add-modal {
    margin-top: 0px;
  }
}

.padding10{
  padding: 10px;
}
</style>
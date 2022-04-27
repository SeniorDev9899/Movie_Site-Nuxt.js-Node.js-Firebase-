<template>
  <div>
    <div class="flex">
      <div class="dark:text-white my-3 flex-1 text-lg font-bold">
        Golden Bear Award-Winning 1950 Movies
      </div>
      <div class="dark:text-white mb-1 mt-2 flex">
        <a href="/whole-show">
          <see-all />
        </a>
      </div>
    </div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="movie in trendingMovies" :key="movie.id">
        <add-modal
          :show="movie.id === eyeVisibleId"
          @close="onToggleEye(movie.id)"
        ></add-modal>
        <button
          v-if="movie.id !== eyeVisibleId"
          @click="onToggleEye(movie.id)"
          style="float: right; margin-right: 33px"
          class="awards"
        >
          <font-awesome-icon
            :icon="['fas', 'ellipsis-h']"
            class="add-selection"
          />
          <lottie
            :width="18"
            :height="20"
            :options="lottieOptions"
            v-on:animCreated="handleAnimation"
            class="add-hover"
            style="
              width: 18px;
              height: 20px;
              overflow: hidden;
              margin: 0px auto;
              margin-top: 4px;
              margin-left: 4px;
            "
          />
        </button>
        <img
          :src="movie.info.image"
          alt=""
          class="rounded-3xl shadow-md"
          data-v-2a183b29=""
          style="width: 100%"
        />
        <!-- <img
          src="@/assets/image/movie.jpg"
          alt=""
          class="rounded-3xl shadow-md w-full"
          data-v-2a183b29=""
          style="width: 100%; background-color: #555"

        /> -->
        <div class="pt-2" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            {{ movie.title }}
          </h1>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import AddModal from "@/components/modal/add";
import "swiper/swiper-bundle.css";
import SeeAll from "../buttons/seeall";
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/threePoint.json";

export default {
  components: {
    AddModal,
    SeeAll,
    lottie,
  },
  data() {
    return {
      trendingMovies: [],
      eyeVisibleId: "",
      swiperOptions: {
        slidesPerView: 9,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      },
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    };
  },
  methods: {
    onToggleEye(movieId) {
      this.eyeVisibleId = this.eyeVisibleId === movieId ? "" : movieId;
    },
  },
  created() {
    setTimeout(() => {
      this.trendingMovies = this.$store.state.AllOfTrendingMovies;
      console.log(
        "trending movies in carousel component ===>",
        this.trendingMovies
      );
    }, 3000);
  },
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
</style>

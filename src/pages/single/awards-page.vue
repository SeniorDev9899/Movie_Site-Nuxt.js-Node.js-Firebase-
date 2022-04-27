<template>
  <div>
    <award-top />
    <award-des />
    <award-case />
    <award-case />
    <award-case />
    <award-case />
    <award-case />
    <load-more />
  </div>
</template>	
<script>
import AwardTop from "@/components/single/award/awardtop";
import AwardDes from "@/components/single/award/description";
import AwardCase from "@/components/carousel/award";
import LoadMore from "@/components/buttons/loadmore";
import "swiper/swiper-bundle.css";

export default {
  components: {
    AwardTop,
    AwardDes,
    AwardCase,
    LoadMore,
  },
  data() {
    return {
      trendingMovies: [],
      eyeVisibleId: "",
      swiperOptions: {
        slidesPerView: 5,
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

          1424: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      },
    };
  },
};
</script>
<style scoped>
@import "~/assets/css/styles.css";
</style>

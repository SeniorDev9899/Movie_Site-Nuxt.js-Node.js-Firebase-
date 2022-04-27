<template>
  <div class="xl:w-1/2 mt-1">
    <div
      class="flex flex-wrap overflow-hidden shadow-md bg-back-white dark:bg-black rounded-lg mr-2 px-3 pt-2"
    >
      <div class="w-1/4 px-2 mt-3">
        <img src="@/assets/image/permovie-test.png" />
        <div class="pt-2" data-v-2a183b29="">
          <h1 class="dark:text-white text-xs" data-v-2a183b29="">
            Eternal Sunshine of the Spotless Mind(2014)
          </h1>
        </div>
        <div class="flex flex-wrap overflow-hidden mt-3">
          <div class="w-1/3">
            <img src="~/assets/image/watch/Rectangle.png" class="rounded-lg" />
          </div>
          <div class="w-1/3">
            <img src="~/assets/image/watch/Rectangle (0).png" />
          </div>
          <div class="w-1/3">
            <img src="~/assets/image/watch/Rectangle (1).png" />
          </div>
        </div>
      </div>
      <div class="w-3/4 p-1">
        <div class="flex flex-wrap overflow-hidden mx-2 my-1">
          <div class="flex-1">
            <div class="text-xl dark:text-white font-bold">Awards</div>
          </div>
          <div class="flex">
            <a href="/single/personaward-movie-tv">
              <see-all />
            </a>
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden px-1 pb-2">
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden mx-2 my-1">
          <div class="flex-1">
            <div class="text-xl font-bold dark:text-white">Nominations</div>
          </div>
          <div class="flex">
            <a href="/single/personaward-movie-tv">
              <see-all />
            </a>
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden px-1 pb-2">
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
          <div class="xl:w-1/3 mb-1">
            <div
              class="bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2"
            >
              <h1>5</h1>
              <p class="text-sm">1st Acedemy Awards (1927)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PerMovie from "@/components/searchfilter/movie/per-movie";
import EachStarBg from "@/components/single/award/eachstar";
import SeeAll from "@/components/buttons/seeall";

export default {
  components: {
    PerMovie,
    EachStarBg,
    SeeAll,
  },
};
</script>
<template>
  <div class="mx-3">
    <person-top />
    <!-- <modal ref="modal" /> -->

    <b-modal id="modal-1" hide-footer hide-header>
      <img
        src="@/assets/image/image 30.png"
        alt=""
        style="display: block; margin-left: auto; margin-right: auto"
      />
      <label for="" class="font-bold">Name of list</label>
      <br />
      <input
        type="text"
        style="border: 1px solid; width: 100%; border-radius: 5px"
      />
      <label for="" class="font-bold mt-3"
        >Watchlist description (optional)</label
      >
      <br />
      <input
        type="text"
        style="border: 1px solid; width: 100%; border-radius: 5px"
      />
      <label for="" class="font-bold mt-3">Tags(optional)</label>
      <br />
      <input
        type="text"
        style="border: 1px solid; width: 100%; border-radius: 5px"
        placeholder="Enter tags - example. top 20"
      />
      <button
        class="font-bold bg-yellow-400 my-3 px-3 p-2 rounded-full"
        style="display: block; margin-left: auto; margin-right: auto"
      >
        Create
      </button>
    </b-modal>
    <per-tv-gray-modal ref="modalfor" />
    <div class="flex flex-wrap overflow-hidden">
      <div class="xl:w-1/2 md:w-1/2 sm:w-1/1 px-2">
        <div class="flex my-3 pl-1">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Watchlists
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't created a Watchlist
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2">
            <b-button
              v-b-modal.modal-1
              class="p-0"
              style="background: none; border: none; padding: 0"
              ><per-watchlist
            /></b-button>
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
        </div>
        <div class="flex my-2 pl-1 mt-5">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite TV-Shows
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Tv-Show
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden rounded-lg">
          <div class="w-1/3 px-1 my-2">
            <b-button
              style="padding: 0px; border: none; background: none"
              v-b-modal.modal-center
              ><per-tv-gray
            /></b-button>
            <b-modal
              id="modal-center"
              hide-footer
              hide-header
              centered
              title="BootstrapVue"
            >
              <img
                src="@/assets/image/image 30.png"
                alt=""
                style="display: block; margin-left: auto; margin-right: auto"
              />
              <label for="">Add Movies or TV-Shows(Max. 50)</label>
              <input
                type="text"
                name=""
                id=""
                style="width: 100%; border: 1px solid; border-radius: 5px"
              />
              <div class="flex flex-wrap overflow-hidden my-2">
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap overflow-hidden my-2">
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
                <div class="w-1/4">
                  <img src="@/assets/image/permovie-test.png" alt="" />
                  <div class="pt-2" data-v-2a183b29="">
                    <h1 class="dark:text-white text-xs" data-v-2a183b29="">
                      Eternal Sunshine of the Spotless Mind(2014)
                    </h1>
                  </div>
                </div>
              </div>
              <load-more />
              <button
                class="bg-yellow-400 rounded-full font-bold p-2 px-3"
                style="display: block; margin-left: auto; margin-right: auto"
              >
                Save
              </button>
            </b-modal>
          </div>
          <div class="w-1/3 px-1 my-2">
            <per-tv-gray />
          </div>
          <div class="w-1/3 px-1 my-2">
            <per-tv-gray />
          </div>
        </div>
        <div class="flex mt-4 mb-2 pl-1">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite Actors
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Actors
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontent">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite Editors
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Editors
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite Editors
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Editors
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontents">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
      </div>
      <div class="xl:w-1/2 md:w-1/2 sm:w-1/1 px-2">
        <div class="flex my-2">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite Movies
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Movies
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden mt-4 mb-2">
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Seen It
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added Seen It
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
          <div class="w-1/3">
            <div class="flex flex-wrap overflow-hidden px-1">
              <per-tv-gray />
            </div>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite Directors
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Directors
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
          <div class="w-1/5 p-1 morecontentfour">
            <img src="~/assets/image/actorupload.png" class="rounded-full" />
            <h1 class="text-center text-sm dark:text-white"></h1>
          </div>
        </div>
        <div class="flex mt-4 mb-2">
          <div class="text-lg dark:text-white" style="margin-top: -4px">
            Favourite Awards
          </div>
          <div class="text-sm bg-black rounded-full text-white px-2 mx-2">
            The user hasn't added favourite Awards
          </div>
        </div>

        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2">
            <per-watchlist />
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
          <div class="w-1/2">
            <per-watchlist />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>	
<script>
import PersonTop from "@/components/single/person/top";
import WatchList from "@/components/user/watchlist";
import PerWatchlist from "@/components/user/perwatchlist";
import Modal from "@/components/user/modal";
import PerTvGrayModal from "@/components/user/per-tvshow-gray-modal";
import PerTvGray from "@/components/user/per-tvshow-gray";
import LoadMore from "@/components/buttons/loadmore";
export default {
  components: {
    PersonTop,
    WatchList,
    PerWatchlist,
    Modal,
    PerTvGrayModal,
    PerTvGray,
    LoadMore,
  },
  data() {},
  methods: {
    openModal() {
      this.$refs.modal.show();
    },
    openModalfortv() {
      this.$refs.modalfor.show();
    },
  },
  mounted() {},
};
</script>
<style scoped>
.modal-header {
  border-bottom: none !important;
}
.modal-footer {
  display: none;
}
</style>

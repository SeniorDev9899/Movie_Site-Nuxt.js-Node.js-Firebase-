<template>
  <div class="rounded-xl">
    <lottie
      :width="200"
      :height="200"
      :options="lottieOptions.logo"
      v-on:animCreated="handleAnimation($event, 'logoHov')"
    />
    <div class="text-sm" style="text-align: center">
      <p class="mt-2 text-lg font-bold">Hi Username</p>
      <p class="mb-3 text-lg font-bold">Welcome to Awards Box!</p>
      <p class="mt-4 mb-2">
        Fantastic that you have signed up for the Awards Box. We are going to
        walkthrough the basic settings and you are ready to go!
      </p>
    </div>
    <p class="text-lg font-bold">Complete your Profile</p>
    <div class="flex">
      <div class="flex-1">
        <div class="flex my-2">
          <p>Select your Avatar</p>
          <!-- <div class="flex bg-black rounded-full px-2 pt-1 mx-2">
            <font-awesome-icon
              :icon="['fas', 'cloud-upload-alt']"
              class="text-white"
            />
            <p class="text-xs text-white">or click to upload</p>
          </div> -->
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-3
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-3" visible accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex">
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
            <div class="middle">
              <!-- @click="toggle = !toggle" -->
              <!-- <font-awesome-icon
                :icon="['fas', 'heart']"
                style="width: 10px"
                class="heart"
              /> -->
              <!-- v-show="toggle" -->
              <lottie
                :width="20"
                :height="20"
                :options="lottieOptions.heart"
                v-on:animCreated="handleAnimation($event, 'heartHov')"
              />
            </div>
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
        </div>
        <div class="flex">
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
          <div class="w-1/6 profileAvatar">
            <img
              src="@/assets/image/Group 234.png"
              alt=""
              class="w-full image"
            />
          </div>
        </div>
      </b-card>
    </b-collapse>

    <div class="flex">
      <div class="flex-1">
        <div class="flex my-3">
          <p>Choose Your Favourite Awards</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-4
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-4" accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex">
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-black rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-white rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-black rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-white rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-white rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-black rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-white rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-black">Emmy Awards</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 sm:w-1/1">
            <div class="shadow-md bg-black rounded-xl text-center p-4 m-1 box">
              <p class="pt-2 text-white">Emmy Awards</p>
            </div>
          </div>
        </div>
      </b-card>
    </b-collapse>
    <div class="flex my-2">
      <div class="flex-1">
        <div class="flex">
          <p>Select your Avatar</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-5
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-5" accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex mb-2">
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
        </div>
        <load-more />
      </b-card>
    </b-collapse>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <p>Choose Your Favourite People</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-6
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-6" accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex">
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/Ellipse 32.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Millie Bobby Brown Acting
            </h1>
          </div>
        </div>
        <load-more />
      </b-card>
    </b-collapse>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <p>Select your Avatar</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-7
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-7" accordion="my-accordion">
      <b-card style="border: none">
        <div class="flex">
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
          <div class="w-1/4">
            <img
              src="@/assets/image/permovie-test-1.png"
              alt=""
              class="w-full box"
            />
            <h1 class="text-black text-xs" data-v-2a183b29="">
              Eternal Sunshine of the Spotless Mind(2014)
            </h1>
          </div>
        </div>
        <load-more />
      </b-card>
    </b-collapse>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <p>Create Watchlist</p>
        </div>
      </div>
      <div class="flex">
        <b-button
          v-b-toggle.accordion-10
          class="m-1"
          style="
            overflow-anchor: none;
            background: none;
            border: none;
            padding: 0;
          "
          ><font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black"
        /></b-button>
      </div>
    </div>
    <b-collapse id="accordion-10" accordion="my-accordion">
      <b-card style="border: none">
        <img src="@/assets/image/image 30.png" alt="" class="logo" />
        <label for="fname" class="font-bold w-full">Name of list</label>
        <input type="text" id="fname" name="fname" class="in-thanks" />
        <label for="fname" class="font-bold mt-3">Watchlist description </label
        ><br />
        <textarea
          rows="3"
          cols="40"
          name="comment"
          form="usrform"
          class="in-thanks"
        ></textarea>
        <label for="fname" class="font-bold">Tags(optional)</label><br />
        <input type="text" id="fname" name="fname" class="in-thanks" />
        <button
          @click="hide"
          type="submit"
          value="Submit"
          class="create-btn"
          style=""
        >
          Create
        </button>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
import LoadMore from "@/components/buttons/loadmore";
import lottie from "vue-lottie/src/lottie.vue";
import * as logoData from "~/assets/lottie/logo.json";
import * as heartHover from "~/assets/lottie/heartHover.json";

export default {
  components: {
    LoadMore,
    lottie,
  },
  data() {
    return {
      toggle: false,
      anim: {
        logoHov: null,
        heartHov: null,
      },
      lottieOptions: {
        logo: { animationData: logoData.default },
        heart: { animationData: heartHover.default },
      },
    };
  },
  methods: {
    handleAnimation: function (anim, type) {
      this.anim[type] = anim;
    },
  },
};
</script>
<style scoped>
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
.modal-footer {
  display: none;
}
.in-thanks {
  width: 100%;
  border: 1px solid;
  border-radius: 6px;
  padding: 4px;
}
.create-btn {
  background: #fee123;
  border-radius: 52px;
  font-weight: bold;
  outline: none !important;
  padding: 5px 15px 5px 15px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.profileAvatar:hover .image {
  -webkit-filter: brightness(40%);
}
.box:hover {
  -webkit-filter: brightness(40%);
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 29%;
  left: 8.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.heart {
  color: white;
  border-radius: 13px;
  display: flex;
  font-size: 9px;
}
.profileAvatar:hover .middle {
  opacity: 1;
}
</style>
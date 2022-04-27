<template>
  <div class="mx-3 mt-4">
    <div class="flex flex-wrap overflow-hidden">
      <img
        src="~/assets/image/image 25.png"
        class="rounded-2xl xl:h-92 w-full"
      />
      <img
        src="~/assets/image/Group 234.png"
        class="rounded-full w-32 h-32 -mt-20 ml-20 person-img"
      />
      <h1 class="my-3 pt-1 dark:text-white">Millie Bobby Brown</h1>
      <div
        class="flex flex-wrap overflow text-xs bg-black rounded-full text-white my-3 mx-2 py-1 px-2"
      >
        <p class="">Change Avatar</p>
      </div>
      <div
        class="flex flex-wrap overflow text-xs bg-black rounded-full text-white my-3 mx-2 py-1 px-2"
      >
        <p class="">Change Cover Photo</p>
      </div>
    </div>
    <div class="flex m-3">
      <p class="font-bold text-xl dark:text-white">Settings</p>
    </div>
    <div class="">
      <nav class="tabs flex flex-col sm:flex-row">
        <button
          data-target="accountSettings"
          class="tab text-white bg-black mx-3 my-1 px-5 rounded-full py-2 blockfocus:outline-none"
        >
          Account Settings
        </button>
        <button
          data-target="Password"
          class="tab text-white bg-black mx-3 my-1 px-5 rounded-full py-2 blockfocus:outline-none"
        >
          Password
        </button>
        <button
          data-target="socialProfiles"
          class="tab text-white bg-black mx-3 my-1 px-5 rounded-full py-2 blockfocus:outline-none"
        >
          Social Profiles
        </button>
        <button
          data-target="Notifications"
          class="tab text-white bg-black mx-3 my-1 px-5 rounded-full py-2 blockfocus:outline-none"
        >
          Notifications
        </button>
        <button
          data-target="editProfile"
          class="tab text-white bg-black mx-3 my-1 px-5 rounded-full py-2 blockfocus:outline-none"
        >
          Edit Profile
        </button>
      </nav>
    </div>

    <div id="panels" class="mx-3">
      <div class="accountSettings tab-content active py-5">
        <form action="/action_page.php">
          <label for="fname" class="dark:text-white font-bold">Name</label
          ><br />
          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <label for="fname" class="dark:text-white font-bold"
            >Email address</label
          ><br />
          <input
            type="email"
            id="email"
            name="email"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <button class="bg-black text-white p-1 rounded-full px-3">
            Verify E-mail
          </button>
          <br />
          <label for="fname" class="mt-2 dark:text-white font-bold"
            >Username</label
          ><br />
          <input
            type="text"
            id="name"
            name="username"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <p class="dark:text-white">
            Your Profile URL: https://awardsbox.com/mickymouse
          </p>
          <br />
          <div class="flex">
            <div class="flex-1">
              <p class="font-bold dark:text-white">Public Profile</p>
              <br />
              <p>Visiable to everyone</p>
            </div>
            <div class="flex">
              <!-- <lottie-animation path="@/assets/lottie/lf20_lqiiythr.json" /> -->
            </div>
          </div>
          <label for="fname" class="font-bold mt-3">Location</label><br />
          <input
            type="text"
            id="fname"
            name="fname"
            class="w-full py-1"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <div class="flex">
            <div class="flex-1">
              <p class="dark:text-white font-bold">Privacy Prefences</p>
              <p class="dark:text-white text-sm">
                When you visit our website, it may store information through
                your browser from specific services, usually in the form of
                cookies. Here you can change your Privacy preferences. It is
                worth noting that blocking some types of cookies may impact your
                experience on our website and the services we are able to offer.
              </p>
              <p class="dark:text-white my-2 font-bold text-sm">
                Click to enable/disable Google Analytics tracking code.
              </p>
              <p class="dark:text-white my-2 font-bold text-sm">
                Click to enable/disable Google Fonts.
              </p>
              <p class="dark:text-white my-2 font-bold text-sm">
                Click to enable/disable Google Maps.
              </p>
              <p class="dark:text-white my-2 font-bold text-sm">
                Click to enable/disable video embeds.
              </p>
              <div class="flex">
                <div class="flex-1">
                  <p class="dark:text-white my-2 font-bold text-sm">
                    Close Account
                  </p>
                </div>
                <div class="flex">
                  <button
                    class="bg-black rounded-full p-1 text-white px-2 text-sm"
                  >
                    close Account
                  </button>
                </div>
              </div>
              <p class="dark:text-white">
                Delete your account and account data
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="bg-yellow-400 p-2 my-2 rounded-full font-bold"
          >
            Save Change
          </button>
        </form>
      </div>
      <div class="Password tab-content py-5">
        <form action="/action_page.php">
          <label for="fname" class="dark:text-white font-bold"
            >New Password</label
          ><br />

          <input
            type="password"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br /><br />
          <p class="dark:text-white text-sm">Minimum 6 characters</p>
          <label for="fname" class="dark:text-white font-bold"
            >Confirm New Password</label
          ><br />
          <input
            type="password"
            id="email"
            name="email"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          />

          <button
            type="submit"
            class="bg-yellow-400 p-2 my-2 rounded-full font-bold"
          >
            Change
          </button>
        </form>
      </div>
      <div class="socialProfiles tab-content py-5">
        <form action="/action_page.php">
          <label for="fname" class="dark:text-white font-bold">Twitter</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">One-click sign in</p>
          <div class="flex my-1">
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mr-2"
            >
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Connect to Twitter</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mx-2"
            >
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Connect to Twitter</p>
            </button>
          </div>

          <label for="fname" class="dark:text-white font-bold">Facebook</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">One-click sign in</p>
          <div class="flex my-1">
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mr-2"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Connect to Facebook</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mx-2"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Facebook</p>
            </button>
          </div>
          <label for="fname" class="dark:text-white font-bold">Facebook</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">
            One-click sign in only (not shown on profile)
          </p>
          <div class="flex my-1">
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mr-2"
            >
              <font-awesome-icon
                :icon="['fab', 'google']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Connect to Google</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mx-2"
            >
              <font-awesome-icon
                :icon="['fab', 'google']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Facebook</p>
            </button>
          </div>
          <label for="fname" class="dark:text-white font-bold">Google</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <p class="dark:text-white text-sm my-1">
            One-click sign in only (not shown on profile)
          </p>
          <div class="flex my-1">
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mr-2"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Connect to Apple</p>
            </button>
            <button
              class="flex bg-black text-white rounded-full px-1 py-1 mx-2"
            >
              <font-awesome-icon
                :icon="['fab', 'apple']"
                style="margin-top: 4px; margin-right: 2px"
              />
              <p style="font-size: 14px">Apple</p>
            </button>
          </div>
          <label for="fname" class="dark:text-white font-bold mt-3"
            >Instagram</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <label for="fname" class="dark:text-white font-bold mt-3"
            >Medium</label
          ><br />

          <input
            type="text"
            id="name"
            name="name"
            class="w-full py-1 px-2"
            style="width: 100%; border: 1px solid; border-radius: 5px"
          /><br />
          <button
            type="submit"
            class="bg-yellow-400 p-2 my-2 rounded-full font-bold"
          >
            Update Social Profiles
          </button>
        </form>
      </div>
      <div class="Notifications tab-content py-5">
        <p class="font-bold">Alerts & Notifications</p>
        <p>Send me:</p>
        <p class="font-bold mt-4">Awards Box Communication</p>
        <p>Get Awards Box news, announcements, and product updates</p>
        <p class="font-bold mt-4">Awards Box Activity</p>
        <p>Get important notifications about you or activity you've missed</p>
        <p class="font-bold mt-4">Weekly Newsletters</p>
        <p>Subscribe me to:</p>
        <p class="font-bold mt-4">Recommendations</p>
        <p>Award Wnning Movies, TV-Shows recommendations</p>
        <button
          type="submit"
          class="bg-yellow-400 p-2 my-2 rounded-full font-bold"
        >
          Update Notifications
        </button>
      </div>
      <div class="editProfile tab-content py-5">other info</div>
    </div>
  </div>
</template>

<script>
// import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
// import animationData from "../../../assets/lottie/lf20_lqiiythr.json";
export default {
  components: {
    // animationData,
  },
  mounted() {
    const tabs = document.querySelectorAll(".tabs");
    const tab = document.querySelectorAll(".tab");
    const panel = document.querySelectorAll(".tab-content");

    function onTabClick(event) {
      // deactivate existing active tabs and panel

      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
      }

      for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
      }

      // activate new tabs and panel
      event.target.classList.add("active");
      let classString = event.target.getAttribute("data-target");
      console.log(classString);
      document
        .getElementById("panels")
        .getElementsByClassName(classString)[0]
        .classList.add("active");
    }

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", onTabClick, false);
    }
  },
};
</script>
<style scoped>
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
</style>
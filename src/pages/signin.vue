<template>
  <div class="flex flex-wrap overflow-hidden">
    <div
      class="block-left p-3"
      style="display: block; margin-left: auto; margin-right: auto"
    >
      <div class="signin">
        <div class="">
          <img src="@/assets/image/logo.png" alt="" />
          <p class="text-xl mt-3">Sign in to your account</p>
          <p>Continue with</p>
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/4">
            <div class="bg-black text-center m-1 p-1 rounded-full">
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="bg-white rounded-full"
                style="width: 20px; height: 20px; padding: 1px"
              />
            </div>
          </div>
          <div class="w-1/4">
            <div class="bg-black text-center m-1 p-1 rounded-full">
              <font-awesome-icon
                :icon="['fab', 'google']"
                class="bg-white rounded-full"
                style="width: 20px; height: 20px; padding: 1px"
              />
            </div>
          </div>
          <div class="w-1/4">
            <div class="bg-black text-center m-1 p-1 rounded-full">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="bg-white rounded-full"
                style="width: 20px; height: 20px; padding: 1px"
              />
            </div>
          </div>
          <div class="w-1/4">
            <div class="bg-black text-center m-1 p-1 rounded-full">
              <font-awesome-icon
                :icon="['fab', 'apple']"
                class="bg-white rounded-full"
                style="width: 20px; height: 20px; padding: 1px"
              />
            </div>
          </div>
        </div>
        <form action="/action_page.php">
          <label for="fname">Email address</label>
          <input
            type="email"
            id="fname"
            name="fname"
            class="inputs"
          /><br /><br />
          <label for="lname">Username</label>
          <input
            type="text"
            id="lname"
            name="lname"
            class="inputs"
          /><br /><br />
          <label for="lname">Password</label>
          <input
            type="password"
            id="lname"
            name="lname"
            class="inputs"
          /><br /><br />
          <label class="container"
            >Creating an account means you’re okay with our Terms of Service,
            Privacy Policy, and our default Notification Settings.
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <div class="flex">
            <label class="container"
              >Remember me
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
            <p style="font-size: 11px; color: #828181">Forgot your password?</p>
          </div>
          <button class="w-full bg-black text-white py-1 rounded-full my-1">
            <font-awesome-icon
              :icon="['fas', 'lock']"
              class="bg-black rounded-full"
              style="width: 20px; height: 20px; padding: 1px margin-top:2px;"
            />
            <span>Sign In</span>
          </button>
          <button class="w-full bg-black text-white py-1 rounded-full my-1">
            <font-awesome-icon
              :icon="['fas', 'user-plus']"
              class="bg-black rounded-full"
              style="width: 20px; height: 20px; padding: 1px margin-top:2px;"
            />
            <span>Sign Up</span>
          </button>
        </form>
        <div class="flex"></div>
      </div>
    </div>
    <div class="block-right p-3" style="background: #fafafa">
      <div class="hand" style="">
        <p>Hi</p>
        <img src="@/assets/image/image 1.png" alt="" />
        <p>Discover 80.000+ Award-Winning Movies & TV-Shows</p>
        <h5>
          Find your favourite Award-Winning or Nominated Actor, Director, Writer
          and many...
        </h5>
        <h1>This image/gif/svg will support Lottie</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "signin",
};
</script>
<style scoped>
.block-left {
  width: 50%;
  height: 100vh;
  background-color: white;
  float: left;
}
.block-right {
  width: 50%;
  height: 100vh;
  background-color: #fafafa;
  float: left;
}

/* MEDIA QUERIES FOR 545px <= Resolutions */

@media (max-width: 800px) {
  .block-left {
    display: block;
    width: 100%;
  }
  .block-right {
    display: none;
  }
}
.signin {
  width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
}
.hand {
  text-align: center;
}
.hand p {
  display: inline-block;
  font-size: 60px;
  font-weight: bold;
  margin-top: 38px;
}

.hand img {
  display: inline-block;
  margin-top: -38px;
}
.hand h5 {
  margin-top: 30px;
}
.hand h1 {
  color: #ab0808;
  font-weight: bold;
  font-size: 29px;
  margin-top: 9%;
}
.inputs {
  width: 100%;
  border: 1px solid;
  border-radius: 7px;
  height: 33px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 3px;
  left: 2px;
  height: 18px;
  width: 18px;
  border-radius: 6px;
  border: 1px solid;
}

/* On mouse-over, add a grey background color */

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
@media only screen and (max-width: 650px) {
  .signin {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6%;
  }
}
</style>

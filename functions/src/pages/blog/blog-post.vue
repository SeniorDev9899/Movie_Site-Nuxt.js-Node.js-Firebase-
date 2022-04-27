<template>
  <div class="">
    <div class="flex flex-wrap overflow-hidden mx-3 mt-4">
      <img
        src="~/assets/image/company-top-test.png"
        class="rounded-2xl xl:h-92 company-top-test w-full"
      />
    </div>
    <div class="flex flex-wrap overflow-hidden mx-3" style="padding: 8px 0 8px">

            <div id="app">
                <vue-masonry-wall :items="items" :options="{width: 350, padding: {2: 6,default: 6},}" :ssr="{columns: 4}">
                  <template v-slot:default="{item}">
                    <div class="Item">
                      <div class="">
                      <a href="/blog/single-blog-post"><img  :src="item.image"  class="w-full" /></a>

                      <div class=" bg-back-white dark:bg-black" v-if="item.title">
                        <div class="text-xl p-2 font-bold dark:text-white">{{item.title}}</div>
                        <div class="dark:text-white text-sm">
                          <p class="pl-2 pr-2 text-lg">
                            {{item.read}}
                            <span v-if="readMore"></span>
                            <span v-else>...</span>
                          </p>
                          <p v-show="readMore" class="pl-2 pr-2 text-lg">
                            {{item.readMore}}
                          </p>
                          <button @click="readMore = !readMore" class="pl-2 pr-2 text-lg">
                            <span v-if="readMore" class="readMore"> Read Less </span>
                            <span v-else class="readMore"> Read More </span>
                          </button>
                          <div class="flex">
                            <div class="w-1/4">
                              <p class="bg-custom-gray text-white m-2 text-center rounded-full">
                                movie
                              </p>
                            </div>
                            <div class="w-1/4">
                              <p class="bg-custom-gray text-white m-2 text-center rounded-full">
                                awards
                              </p>
                            </div>

                            <div class="w-1/4">
                              <p class="bg-custom-gray text-white m-2 text-center rounded-full">
                                actor
                              </p>
                            </div>

                            <div class="w-1/4">
                              <p class="bg-custom-gray text-white m-2 text-center rounded-full">
                                director
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    </div>
                  </template>
                </vue-masonry-wall>
            </div>

    </div>
    <div style="display: none">
      <img src="@/assets/image/Image (2).png" />
      <img src="@/assets/image/Image (3).png" />
      <img src="@/assets/image/Image (4).png" />
      <img src="@/assets/image/Image (5).png" />
      <img src="@/assets/image/Image (6).png" />
      <img src="@/assets/image/Image (7).png" />
      <img src="@/assets/image/Group 286.png" />
    </div>
  </div>
</template>

<script>

  import VueMasonryWall from "vue-masonry-wall";

  export default {
    name: 'app',
    components: {VueMasonryWall},
    data() {
      return {
        items: [
          {title: 'The Coldest Sunset', image: '/_nuxt/src/assets/image/Image (2).png', read: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Venenatis lectus magna fringilla urna. Etiam tempororci eu lobortis. Integer quis auctor elit sed vulputate misit. Lacinia', readMore: 'Ligula ullamcorper malesuada proin libero nunc consequatinterdum varius. Turpis egestas pretium aenean pharetramagna ac placerat. Sed egestas egestas fringilla phasellusfaucibus scelerisque eleifend donec. Sed cras ornare arcudui. Aliquam vestibulum morbi blandit cursus. Adipiscingelit ut aliquam purus sit amet. Aenean sed adipiscing diamdonec adipiscing tristique risus nec. Ut etiam sit amet nislpurus'},
          {title: 'The Coldest Sunset', image: '/_nuxt/src/assets/image/Image (4).png', read: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Venenatis lectus magna fringilla urna. Etiam tempororci eu lobortis. Integer quis auctor elit sed vulputate misit. Lacinia', readMore: 'Ligula ullamcorper malesuada proin libero nunc consequatinterdum varius. Turpis egestas pretium aenean pharetramagna ac placerat. Sed egestas egestas fringilla phasellusfaucibus scelerisque eleifend donec. Sed cras ornare arcudui. Aliquam vestibulum morbi blandit cursus. Adipiscingelit ut aliquam purus sit amet. Aenean sed adipiscing diamdonec adipiscing tristique risus nec. Ut etiam sit amet nislpurus'},
          {title: '', image: '/_nuxt/src/assets/image/Group 286.png', read: '', readMore: ''},
          {title: 'The Coldest Sunset', image: '/_nuxt/src/assets/image/Image (2).png', read: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Venenatis lectus magna fringilla urna. Etiam tempororci eu lobortis. Integer quis auctor elit sed vulputate misit. Lacinia', readMore: 'Ligula ullamcorper malesuada proin libero nunc consequatinterdum varius. Turpis egestas pretium aenean pharetramagna ac placerat. Sed egestas egestas fringilla phasellusfaucibus scelerisque eleifend donec. Sed cras ornare arcudui. Aliquam vestibulum morbi blandit cursus. Adipiscingelit ut aliquam purus sit amet. Aenean sed adipiscing diamdonec adipiscing tristique risus nec. Ut etiam sit amet nislpurus'},
          {title: 'The Coldest Sunset', image: '/_nuxt/src/assets/image/Image (3).png', read: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Venenatis lectus magna fringilla urna. Etiam tempororci eu lobortis. Integer quis auctor elit sed vulputate misit. Lacinia', readMore: 'Ligula ullamcorper malesuada proin libero nunc consequatinterdum varius. Turpis egestas pretium aenean pharetramagna ac placerat. Sed egestas egestas fringilla phasellusfaucibus scelerisque eleifend donec. Sed cras ornare arcudui. Aliquam vestibulum morbi blandit cursus. Adipiscingelit ut aliquam purus sit amet. Aenean sed adipiscing diamdonec adipiscing tristique risus nec. Ut etiam sit amet nislpurus'},
          {title: 'The Coldest Sunset', image: '/_nuxt/src/assets/image/Image (5).png', read: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Venenatis lectus magna fringilla urna. Etiam tempororci eu lobortis. Integer quis auctor elit sed vulputate misit. Lacinia', readMore: 'Ligula ullamcorper malesuada proin libero nunc consequatinterdum varius. Turpis egestas pretium aenean pharetramagna ac placerat. Sed egestas egestas fringilla phasellusfaucibus scelerisque eleifend donec. Sed cras ornare arcudui. Aliquam vestibulum morbi blandit cursus. Adipiscingelit ut aliquam purus sit amet. Aenean sed adipiscing diamdonec adipiscing tristique risus nec. Ut etiam sit amet nislpurus'},
          {title: '', image: '/_nuxt/src/assets/image/Image (7).png', read: '', readMore: ''},
          {title: '', image: '/_nuxt/src/assets/image/Group 286.png', read: '', readMore: ''},
          {title: '', image: '/_nuxt/src/assets/image/Image (6).png', read: '', readMore: ''},
          {title: '', image: '/_nuxt/src/assets/image/Image (7).png', read: '', readMore: ''},

        ],
        readMore: false,
      }
    },

  }

</script>
<style scoped>
.readMore {
  font-weight: bold;
}

.Item {
    overflow: hidden;
    border-radius: 8px;
    width: 100%;
    background: #F5F5F5;
  }
</style>

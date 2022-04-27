exports.ids = [10];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/permovie-test.dca9742.png";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3609334c", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/loadmore.vue?vue&type=template&id=1080a1dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loadmore my-3"},[_vm._ssrNode("<button type=\"button\" class=\"rounded-full text-white bg-black px-3 py-2 text-sm\" data-v-1080a1dc>","</button>",[_vm._ssrNode("<div class=\"flex\" data-v-1080a1dc>","</div>",[_c('lottie',{attrs:{"width":34,"height":24,"options":_vm.lottieOptions},on:{"animCreated":_vm.handleAnimation}}),_vm._ssrNode(" <p data-v-1080a1dc>Load More</p>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/buttons/loadmore.vue?vue&type=template&id=1080a1dc&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-lottie/src/lottie.vue + 4 modules
var lottie = __webpack_require__(5);

// EXTERNAL MODULE: ./src/assets/lottie/dot.json
var dot = __webpack_require__(106);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/loadmore.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loadmorevue_type_script_lang_js_ = ({
  components: {
    lottie: lottie["a" /* default */]
  },

  data() {
    return {
      anim: null,
      // for saving the reference to the animation
      lottieOptions: {
        animationData: dot
      }
    };
  },

  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
});
// CONCATENATED MODULE: ./src/components/buttons/loadmore.vue?vue&type=script&lang=js&
 /* harmony default export */ var buttons_loadmorevue_type_script_lang_js_ = (loadmorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/buttons/loadmore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_loadmorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1080a1dc",
  "d8bde128"
  
)

/* harmony default export */ var loadmore = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 106:
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.20\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":60,\"ip\":0,\"op\":60,\"w\":1200,\"h\":1200,\"nm\":\"Comp 1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.2,\"y\":0},\"t\":0,\"s\":[460,600,0],\"to\":[0,-16.667,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":15,\"s\":[460,500,0],\"to\":[0,0,0],\"ti\":[0,-16.667,0]},{\"t\":40,\"s\":[460,600,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-208,-6,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[60.714,60.714,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[112,112],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-208,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.2,\"y\":0},\"t\":10,\"s\":[600,600,0],\"to\":[0,-16.667,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":25,\"s\":[600,500,0],\"to\":[0,0,0],\"ti\":[0,-16.667,0]},{\"t\":50,\"s\":[600,600,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-208,-6,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[60.714,60.714,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[112,112],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-208,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.2,\"y\":0},\"t\":20,\"s\":[740,600,0],\"to\":[0,-16.667,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":35,\"s\":[740,500,0],\"to\":[0,0,0],\"ti\":[0,-16.667,0]},{\"t\":60,\"s\":[740,600,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-208,-6,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[60.714,60.714,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[112,112],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-208,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loadmore_vue_vue_type_style_index_0_id_1080a1dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loadmore_vue_vue_type_style_index_0_id_1080a1dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loadmore_vue_vue_type_style_index_0_id_1080a1dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loadmore_vue_vue_type_style_index_0_id_1080a1dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loadmore_vue_vue_type_style_index_0_id_1080a1dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loadmore[data-v-1080a1dc]{text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchfilter/movie/per-movie.vue?vue&type=template&id=71634280&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden justify-center\"><div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div></div> <div class=\"flex flex-wrap overflow-hidden justify-center\"><div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div></div> <div class=\"flex flex-wrap overflow-hidden justify-center\"><div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div></div> <div class=\"flex flex-wrap overflow-hidden justify-center\"><div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div></div> <div class=\"flex flex-wrap overflow-hidden justify-center\"><div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div> <div class=\"md:w-1/6 sm:w-1/3 p-2\"><a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n            Eternal Sunshine of the Spotless Mind(2014)\n          </h1></div></a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchfilter/movie/per-movie.vue?vue&type=template&id=71634280&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/searchfilter/movie/per-movie.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3993bb64"
  
)

/* harmony default export */ var per_movie = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle.e5db908.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (0).937be68.png";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (1).a3b8c82.png";

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (11).a2ee793.png";

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (7).a4c3bf4.png";

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (8).0d32dec.png";

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (9).cfd24e2.png";

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (10).9961bb3.png";

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (12).d0ee131.png";

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("f682afd2", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4ca78fc2", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (2).b6880e4.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (3).6e77884.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (4).6800edd.png";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (5).a28b6e0.png";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (6).63721fb.png";

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (13).377f7dc.png";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (14).1f0a587.png";

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (15).d9a7669.png";

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (16).d1574a6.png";

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (17).470c1a1.png";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (18).f7078ba.png";

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (19).53f2301.png";

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (20).617b795.png";

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (21).5ca7778.png";

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (22).2c8962b.png";

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (23).ab63dd1.png";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (24).81cdfed.png";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (25).141c8fa.png";

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("5d295e65", content, true)

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-slider-dot{position:absolute;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;transform:translate(100%,-50%)}.vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}.vue-slider{position:relative;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("bd24c34c", content, true)

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-rail{background-color:#ccc;border-radius:15px}.vue-slider-process{background-color:#3498db;border-radius:15px}.vue-slider-mark{z-index:4}.vue-slider-mark:first-child .vue-slider-mark-step,.vue-slider-mark:last-child .vue-slider-mark-step{display:none}.vue-slider-mark-step{width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.16)}.vue-slider-mark-label{font-size:14px;white-space:nowrap}.vue-slider-dot-handle{cursor:pointer;width:100%;height:100%;border-radius:50%;background-color:#fff;box-sizing:border-box;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32)}.vue-slider-dot-handle-focus{box-shadow:0 0 1px 2px rgba(52,152,219,.36)}.vue-slider-dot-handle-disabled{cursor:not-allowed;background-color:#ccc}.vue-slider-dot-tooltip-inner{font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border-color:#3498db;background-color:#3498db;box-sizing:content-box}.vue-slider-dot-tooltip-inner:after{content:\"\";position:absolute}.vue-slider-dot-tooltip-inner-top:after{top:100%;left:50%;transform:translate(-50%);height:0;width:0;border:5px solid transparent;border-top-color:inherit}.vue-slider-dot-tooltip-inner-bottom:after{bottom:100%;left:50%;transform:translate(-50%);height:0;width:0;border:5px solid transparent;border-bottom-color:inherit}.vue-slider-dot-tooltip-inner-left:after{left:100%;top:50%;transform:translateY(-50%);height:0;width:0;border:5px solid transparent;border-left-color:inherit}.vue-slider-dot-tooltip-inner-right:after{right:100%;top:50%;transform:translateY(-50%);height:0;width:0;border:5px solid transparent;border-right-color:inherit}.vue-slider-dot-tooltip-wrapper{opacity:0;transition:all .3s}.vue-slider-dot-tooltip-wrapper-show{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterAll_vue_vue_type_style_index_0_id_16e596f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterAll_vue_vue_type_style_index_0_id_16e596f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterAll_vue_vue_type_style_index_0_id_16e596f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterAll_vue_vue_type_style_index_0_id_16e596f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterAll_vue_vue_type_style_index_0_id_16e596f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body[data-v-16e596f6]{font-family:\"Inter\",sans-serif}#add-modal[data-v-16e596f6]{position:absolute;background:#fff;border-radius:19px;padding:5px;width:90%;top:20px;z-index:10;left:5%}#add-modal .flex .flex-1 p[data-v-16e596f6]{outline:none!important}.add-selection-se[data-v-16e596f6]{font-size:18px;margin-top:4px;margin-left:3px;color:#fff;padding-right:2px}ul[data-v-16e596f6]{list-style:none;padding:0}ul .inner[data-v-16e596f6]{overflow:hidden;display:none}.max-w-4xl[data-v-16e596f6]{max-width:100%}.md\\:px-0[data-v-16e596f6]{margin-left:16px;margin-right:16px}.shadow[data-v-16e596f6]{box-shadow:1px 16px 61px -12px rgba(0,0,0,.36)}.maincolor[data-v-16e596f6]{background-color:#f7f7f7}.thumb:hover .middle[data-v-16e596f6],.thumbs:hover .middle[data-v-16e596f6]{opacity:1}.top-letter[data-v-16e596f6]{margin-left:10px;margin-top:6px;margin-bottom:4px}.text[data-v-16e596f6],.top-letter[data-v-16e596f6]{font-size:9px;display:flex}.text[data-v-16e596f6]{background-color:#000;color:#fff;margin:2px 10px 5px;border-radius:10px;padding:2px}.text img[data-v-16e596f6]{width:12%;margin-left:3%!important}.thumbs img[data-v-16e596f6]{max-width:316%;margin-left:-87%;margin-top:0;opacity:1;height:auto;transition:.5s ease}.carousel-content[data-v-16e596f6]{position:fixed;bottom:2%;color:#000;font-size:12px;width:10%}.academy[data-v-16e596f6],.carousel-content[data-v-16e596f6]{font-family:inherit;font-style:normal;font-weight:400}.academy[data-v-16e596f6]{font-size:15.78px;margin-bottom:12px;margin-top:2%;font-weight:700}.seeall[data-v-16e596f6]{float:right;display:flex}.seeall img[data-v-16e596f6]{width:16px;height:17px;margin:auto 6px auto auto}.carousel-wrapper[data-v-16e596f6]{padding:40px}.img-wrapper img[data-v-16e596f6]{margin:auto;width:200px;height:100px}.dummy_page[data-v-16e596f6]{height:200px;width:100%;background-color:#f0f0f0;text-align:center;box-sizing:border-box;padding:60px 0}.social ul li[data-v-16e596f6]{display:inline-block;padding-right:5px!important}.clearfix[data-v-16e596f6]{clear:both}.load_left[data-v-16e596f6]{-webkit-animation:slide-left .4s linear;animation:slide-left .4s linear}[data-v-16e596f6]:root{--color:#243746;--color-primary:#158876;--color-secondary:#0e2233;--bg:#f3f5f4;--bg-secondary:#fff;--border-color:#ddd}.dark-mode[data-v-16e596f6]{--color:#ebf4f1;--color-primary:#41b38a;--color-secondary:#fdf9f3;--bg:#091a28;--bg-secondary:#071521;--border-color:#0d2538}.sepia-mode[data-v-16e596f6]{--color:#433422;--color-secondary:#504231;--bg:#f1e7d0;--bg-secondary:#eae0c9;--border-color:#ded0bf}.col[data-v-16e596f6]{padding:1em;margin:0 2px 2px 0}#section[data-v-16e596f6]{word-wrap:break-word}.moretext[data-v-16e596f6]{display:none}.col-complementary[data-v-16e596f6],.col-main[data-v-16e596f6]{flex:1}.hide[data-v-16e596f6]{display:none}.blog-image[data-v-16e596f6]{margin:0 auto;border:1px solid #ddd;overflow:hidden;border-radius:15px;box-shadow:3px 3px 10px #ccc;width:274px;height:274px}.blog-image img[data-v-16e596f6]{max-width:200%;height:auto;margin-left:-50%;margin-top:-10%}.news p[data-v-16e596f6]{margin-top:12px;font-weight:400}.showReadmore[data-v-16e596f6]{color:#fff;background:#1a202c;border-radius:18px;padding:4px;display:table;margin-top:20px}.showReadmore[data-v-16e596f6]:hover{text-decoration:none}.showReadmores[data-v-16e596f6]{display:table}.showReadmores[data-v-16e596f6]:hover{text-decoration:none}.showReadmores img[data-v-16e596f6]{width:18px}.email-subscribe[data-v-16e596f6]{display:flex;font-size:14px}.email-subscribe input[data-v-16e596f6]{border-radius:25px;padding-right:12px;padding-left:12px;outline:none;margin-right:9px;height:32px;margin-top:16px}.never[data-v-16e596f6]{width:111px}.neverr[data-v-16e596f6]{width:42%;margin:auto}.older[data-v-16e596f6]{display:flex}.older p[data-v-16e596f6]{color:#fff;font-size:12px;margin-top:10px}.thumbcircle[data-v-16e596f6]{margin:0 auto;border:1px solid #ddd;overflow:hidden;width:200px;height:200px;box-shadow:3px 3px 10px #ccc;border-radius:62%}.thumbcircle img[data-v-16e596f6]{width:200%;height:auto;margin-left:-50%;margin-top:-10%}#loadMore[data-v-16e596f6]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMore[data-v-16e596f6]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMores[data-v-16e596f6]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMores[data-v-16e596f6]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMoress[data-v-16e596f6]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMoress[data-v-16e596f6]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMoresss[data-v-16e596f6]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMoresss[data-v-16e596f6]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMorefour[data-v-16e596f6]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMorefour[data-v-16e596f6]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMorefive[data-v-16e596f6]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMorefive[data-v-16e596f6]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}.in[data-v-16e596f6]{border:1px solid #000;outline:none;border-radius:10px;margin-top:4px}.megu[data-v-16e596f6]{background-color:#c7bfbf;padding-right:100%;margin-top:10px}.overimg[data-v-16e596f6]{position:relative;font-family:Arial}.img-block[data-v-16e596f6]{position:absolute;bottom:163px;right:88px;color:#fff;width:104px}.mailto-link[data-v-16e596f6]{position:relative;padding:8px 0}.mailto-message[data-v-16e596f6]{top:1px;left:58%;margin-bottom:-5px;transform:translate(-50%,-100%);position:absolute;display:none;width:auto;white-space:nowrap;font-size:14px;background-color:#000;color:#fff;padding:2px 6px;border-radius:16px}.mailto-link:focus .mailto-message[data-v-16e596f6],.mailto-link:hover .mailto-message[data-v-16e596f6],.mailto-link[focus-within] .mailto-message[data-v-16e596f6]{display:block}.mailto-link:focus-within .mailto-message[data-v-16e596f6],.mailto-link:focus .mailto-message[data-v-16e596f6],.mailto-link:hover .mailto-message[data-v-16e596f6]{display:block}.well[data-v-16e596f6]{border:1px solid;border-radius:21px}.mengli[data-v-16e596f6]{border:1px solid;outline:none}.toggle-checkbox[data-v-16e596f6]:checked{right:0;border-color:#000;outline:none}.toggle-checkbox:checked+.toggle-label[data-v-16e596f6]{background-color:#000;outline:none}.dd[data-v-16e596f6]{border:solid}.switch[data-v-16e596f6]{position:relative;display:inline-block;width:55px;height:27px}.switch input[data-v-16e596f6]{opacity:0;width:0;height:0}.slider[data-v-16e596f6]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#fff;border:1px solid}.slider[data-v-16e596f6],.slider[data-v-16e596f6]:before{position:absolute;transition:.4s}.slider[data-v-16e596f6]:before{content:\"\";height:23px;width:25px;left:2px;bottom:1px;background-color:#181818;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}input:checked+.slider[data-v-16e596f6]{background-color:#fff}input:focus+.slider[data-v-16e596f6]{box-shadow:0 0 1px #fff}input:checked+.slider[data-v-16e596f6]:before{transform:translateX(26px)}.slider.round[data-v-16e596f6]{border-radius:34px}.slider.round[data-v-16e596f6]:before{border-radius:50%}label[data-v-16e596f6]{margin-bottom:0}.checkbox-container[data-v-16e596f6]{display:block;position:relative;padding-left:21px;cursor:pointer;font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-container input[data-v-16e596f6]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[data-v-16e596f6]{position:absolute;top:0;left:0;height:15px;width:15px;background-color:#fff;border-radius:50%;border:1px solid;margin-top:2px}.checkbox-container input:checked~.checkmark[data-v-16e596f6]{background-color:#000}.checkmark[data-v-16e596f6]:after{content:\"\";position:absolute;display:none}.checkbox-container input:checked~.checkmark[data-v-16e596f6]:after{display:block}#modal[data-v-16e596f6]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);display:table;transition:opacity .3s ease}.modal-wrapper[data-v-16e596f6]{display:table-cell;vertical-align:middle}.modal-container[data-v-16e596f6]{background:#fff;width:376px;border-radius:5px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease;padding:16px 22px;margin:68px auto 0}.modal-container input[data-v-16e596f6]{width:100%;border:1px solid;border-radius:6px;padding-left:5px;padding-top:2px;padding-bottom:2px;outline:none}.modal-container textarea[data-v-16e596f6]{width:100%;border:1px solid;border-radius:7px;outline:none;padding-left:5px}.create-btn[data-v-16e596f6]{background:#fee123;border-radius:52px;margin-left:8em;font-weight:700;outline:none!important;padding:5px 15px;margin-top:10px}.leftbutton:active p[data-v-16e596f6],.leftbutton:hover p[data-v-16e596f6]{color:#faf089;text-decoration:none}.nav-bottom[data-v-16e596f6]{display:none}@media only screen and (min-width:640px){.layout[data-v-16e596f6]{display:flex}}@media only screen and (min-width:1280px){.contain[data-v-16e596f6]{width:1200px;margin:0 auto}}@media only screen and (max-width:1180px){.img-block[data-v-16e596f6]{position:absolute;bottom:241px;right:155px;color:#fff;width:104px}}@media only screen and (max-width:1139px){.contain .social[data-v-16e596f6]{width:1000px;display:block}.social h1[data-v-16e596f6]{margin:0}.carousel-content[data-v-16e596f6]{width:16%}}@media only screen and (max-width:950px){.carousel-content[data-v-16e596f6]{width:17%}}@media only screen and (max-width:768px){.carousel-content[data-v-16e596f6]{width:25%}}@media only screen and (max-width:600px){.carousel-content[data-v-16e596f6]{width:33%}.fif[data-v-16e596f6]{width:50%}.albi[data-v-16e596f6],.zhuan[data-v-16e596f6]{width:100%}.academy[data-v-16e596f6]{width:100%!important}.person-img[data-v-16e596f6]{width:5em;height:5em;margin-top:-13%;margin-left:7%}.singleblog[data-v-16e596f6]{margin-top:-21%}.singleblogimg[data-v-16e596f6]{height:189px!important}.footer-col[data-v-16e596f6]{width:48%!important}.add-selection[data-v-16e596f6]{margin-top:11px;padding:2px}}@media only screen and (max-width:438px){.add-selection[data-v-16e596f6]{margin-top:11px;padding:2px}.add-favor[data-v-16e596f6],.add-stranger[data-v-16e596f6]{font-size:8px}#add-modal[data-v-16e596f6]{position:absolute;background:#fff;border-radius:6px;padding:1px;width:92%;margin-left:3px}.nav-bottom[data-v-16e596f6]{display:block}}.card-body[data-v-16e596f6]{flex:1 1 auto;min-height:1px;padding:0}.card[data-v-16e596f6]{border:none;background:none}.btn-secondary[data-v-16e596f6]:hover{color:#000}.borderLine[data-v-16e596f6]{border:1px solid}.slidecontainer[data-v-16e596f6],.sliders[data-v-16e596f6]{width:100%}.sliders[data-v-16e596f6]{-webkit-appearance:none;height:1px;outline:none;transition:opacity .2s}.sliders[data-v-16e596f6]:hover{opacity:1}.sliders[data-v-16e596f6]::-webkit-sliders-thumb{-webkit-appearance:none;appearance:none;border-radius:10rem;width:12px;height:12px;background:#000;cursor:pointer}div.mytree div[data-v-16e596f6]{padding-left:5px}div.mytree div.parent div[data-v-16e596f6]{display:none;cursor:default}div.mytree div.parent[data-v-16e596f6]{cursor:pointer}.germany[data-v-16e596f6]{background-image:url(https://cdn4.iconfinder.com/data/icons/world-flags-12/512/Untitled-2-10-128.png);display:inline-block;vertical-align:middle;width:24px;height:24px;background-size:100%;margin-right:5px;background-repeat:no-repeat}.genre[data-v-16e596f6]{margin-right:66%!important}.genre[data-v-16e596f6],.known[data-v-16e596f6]{font-weight:700}.known[data-v-16e596f6]{outline:none;margin-right:54%}.vue-slider-mark-label[data-v-16e596f6]{margin-top:-30px!important}.vue-slider[data-v-16e596f6]{padding:30px 0 15px!important;width:auto!important;height:3px!important}.custom-dot[data-v-16e596f6]{width:100%;height:100%;border-radius:50%;background-color:#252525;transition:all .3s}.custom-dot[data-v-16e596f6]:hover{transform:rotate(45deg)}.custom-dot.focus[data-v-16e596f6]{border-radius:50%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mulans.4fdd0be.png";

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_for_all_vue_vue_type_style_index_0_id_4a87e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_for_all_vue_vue_type_style_index_0_id_4a87e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_for_all_vue_vue_type_style_index_0_id_4a87e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_for_all_vue_vue_type_style_index_0_id_4a87e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_for_all_vue_vue_type_style_index_0_id_4a87e7cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tab-content[data-v-4a87e7cc]{display:none}.tab-content.active[data-v-4a87e7cc]{display:block}.topNav[data-v-4a87e7cc]{float:none;position:absolute;top:5%;left:51%;transform:translate(-50%,-50%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/search-for-all.vue?vue&type=template&id=4a87e7cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"topNav\" data-v-4a87e7cc>","</div>",[_vm._ssrNode("<nav class=\"tabs flex flex-col sm:flex-row mt-3\" data-v-4a87e7cc>","</nav>",[_vm._ssrNode("<button data-target=\"panel-1\" class=\"tab text-xl text-center hover:text-yellow bg-black text-white rounded-full px-2 py-1 mr-2 movie mt-1\" data-v-4a87e7cc>","</button>",[_c('font-awesome-icon',{attrs:{"data-target":"panel-1","icon":['fas', 'film']}}),_vm._ssrNode("\n        Movies\n      ")],2),_vm._ssrNode(" "),_vm._ssrNode("<button data-target=\"panel-2\" class=\"tab text-xl text-center bg-black text-white rounded-full px-2 py-1 mr-2 Tv-Shows mt-1\" data-v-4a87e7cc>","</button>",[_c('font-awesome-icon',{attrs:{"data-target":"panel-2","icon":['fas', 'video']}}),_vm._ssrNode("\n        Tv-Shows\n      ")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"panels\" data-v-4a87e7cc>","</div>",[_vm._ssrNode("<div class=\"panel-1 tab-content active py-5 mt-3\" data-v-4a87e7cc>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap mx-3 mt-4 justify-center\" data-v-4a87e7cc>","</div>",[_vm._ssrNode("<div class=\"sm:w-1/5 p-2\" style=\"min-width: 260px\" data-v-4a87e7cc>","</div>",[_c('filter-all-case')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm:w-4/5\" data-v-4a87e7cc>","</div>",[_c('per-movie'),_vm._ssrNode(" "),_c('load-more')],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"panel-2 tab-content py-5\" data-v-4a87e7cc>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap mx-3 mt-4\" data-v-4a87e7cc>","</div>",[_vm._ssrNode("<div class=\"md:w-1/5 p-2\" data-v-4a87e7cc>","</div>",[_c('filter-all-case')],1),_vm._ssrNode(" <div class=\"md:w-4/5\" data-v-4a87e7cc>There will be Tv-show</div>")],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/search-for-all.vue?vue&type=template&id=4a87e7cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchfilter/FilterAll.vue?vue&type=template&id=16e596f6&scoped=true&
var FilterAllvue_type_template_id_16e596f6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"260px"}},[_vm._ssrNode("<div class=\"shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white\" data-v-16e596f6>","</div>",[_vm._ssrNode("<div class=\"flex\" data-v-16e596f6>","</div>",[_vm._ssrNode("<div class=\"text-xl p-2 flex\" style=\"width: 100%\" data-v-16e596f6>","</div>",[_vm._ssrNode("\n        Sort\n        "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","margin-left":"75%","margin-top":"-4px","outline":"none","font-size":"17px"},attrs:{"variant":"primary"}},[_c('font-awesome-icon',{staticClass:"dark:text-white",attrs:{"icon":['fas', 'chevron-down']}})],1)],2)]),_vm._ssrNode(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-1","visible":""}},[_c('p',{staticClass:"text-md px-2"},[_vm._v("Sort Results By")]),_vm._v(" "),_c('b-form-select',{staticClass:"mb-3 mx-2 text-sm dark:bg-custom-gray dark:text-white",staticStyle:{"width":"94%","border-radius":"6px"},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('b-form-select-option',{attrs:{"value":null}},[_vm._v("\n          Awards Ascending\n        ")]),_vm._v(" "),_c('b-form-select-option',{attrs:{"value":"a"}},[_vm._v("\n          Release Date Descending\n        ")]),_vm._v(" "),_c('b-form-select-option',{attrs:{"value":"b"}},[_vm._v("\n          Release Ascending\n        ")]),_vm._v(" "),_c('b-form-select-option',{attrs:{"value":null}},[_vm._v("\n          Title (A-Z)\n        ")]),_vm._v(" "),_c('b-form-select-option',{attrs:{"value":"a"}},[_vm._v(" Title (Z-A) ")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white my-3\" data-v-16e596f6>","</div>",[_vm._ssrNode("<div class=\"DemoBS2 pb-2\" data-v-16e596f6>","</div>",[_vm._ssrNode("<button type=\"button\" id=\"toggle-btn\" data-toggle=\"collapse\" data-target=\"#toggle-filters\" class=\"mx-2 flex rounded-full\" style=\"outline: none\" data-v-16e596f6>","</button>",[_vm._ssrNode("<p class=\"text-xl mr-4\" data-v-16e596f6>Filters</p> "),_c('font-awesome-icon',{staticClass:"ml-2",staticStyle:{"font-size":"9px","margin-top":"14px","margin-right":"3px"},attrs:{"icon":['fas', 'sync-alt']}}),_vm._ssrNode(" <p class=\"text-xs mt-2\" data-v-16e596f6>clear filter</p> "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":true}}],staticClass:"m-1",staticStyle:{"overflow-anchor":"none","background":"none","border":"none","padding":"0rem","padding-left":"62px","outline":"none"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white",attrs:{"icon":['fas', 'chevron-down']}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-16e596f6>","</div>",[_c('b-collapse',{attrs:{"id":"collapse-3"}},[_c('b-card',[_c('div',{staticClass:"p-2 m-2"},[_c('p',{staticClass:"text-xs mb-2",staticStyle:{"padding-top":"7px","font-weight":"bold"}},[_vm._v("\n                Show Me\n              ")]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Everything\n                "),_c('input',{attrs:{"type":"checkbox","checked":"checked"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("I Haven`t Seen\n                "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("I Have Seen\n                "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})])])]),_vm._v(" "),_c('div',{staticClass:"collapse show p-2 m-2",attrs:{"id":"toggle-filters"}},[_c('div',{staticClass:"flex"},[_c('p',{staticClass:"text-xs",staticStyle:{"padding-top":"7px","font-weight":"bold"}},[_vm._v("\n                Awards\n              ")]),_vm._v(" "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-Awards",modifiers:{"collapse-Awards":true}}],staticClass:"m-1",staticStyle:{"overflow-anchor":"none","background":"none","padding":"0","border":"none","margin-left":"75% !important","margin-top":"2% !important","outline":"none"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white",attrs:{"icon":['fas', 'chevron-down']}})],1)]),_vm._v(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-Awards"}},[_c('b-card',[_c('div',{staticClass:"mytree text-xs"},[_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-21",modifiers:{"collapse-21":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v("\n                        Academy Awards\n                      ")],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-21"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-21-inner",modifiers:{"collapse-21-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-21-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-22-inner",modifiers:{"collapse-22-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-22-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-31",modifiers:{"collapse-31":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v("\n                        Emmy Awards\n                      ")],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-31"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-31-inner",modifiers:{"collapse-31-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-31-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-32-inner",modifiers:{"collapse-32-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-32-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-41",modifiers:{"collapse-41":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v("\n                        BAFTA Awards\n                      ")],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-41"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-41-inner",modifiers:{"collapse-41-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-41-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-42-inner",modifiers:{"collapse-42-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-42-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-51",modifiers:{"collapse-51":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v("\n                        Cannes Awards\n                      ")],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-51"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-51-inner",modifiers:{"collapse-51-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-51-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-52-inner",modifiers:{"collapse-52-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-52-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-61",modifiers:{"collapse-61":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('span',[_vm._v("Berlin International Film Awards")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-61"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-61-inner",modifiers:{"collapse-61-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-61-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-62-inner",modifiers:{"collapse-62-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-62-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-71",modifiers:{"collapse-71":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('span',[_vm._v("Golden Globe Awards")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-71"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-71-inner",modifiers:{"collapse-71-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-71-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-72-inner",modifiers:{"collapse-72-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-72-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('div',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-81",modifiers:{"collapse-81":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem","width":"100%"},attrs:{"variant":"primary"}},[_c('p',{staticClass:"flex dark:text-white"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('span',[_vm._v("Golden Globe Awards")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"id":"collapse-81"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-81-inner",modifiers:{"collapse-81-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-81-inner"}},[_c('b-card',[_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-82-inner",modifiers:{"collapse-82-inner":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","font-size":"12px","padding":"0rem"},attrs:{"size":"sm"}},[_c('div',{staticClass:"flex"},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}}),_vm._v(" "),_c('p',{staticClass:"dark:text-white"},[_vm._v("Best Picture")])],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2 text-black dark:text-white",attrs:{"id":"collapse-82-inner"}},[_c('p',{staticStyle:{"margin-left":"20px"}},[_vm._v("SecondCaractory")])])],1)],1)],1)],1)],1)]),_vm._v(" "),_c('p',{staticClass:"text-xs"},[_c('label',{staticClass:"checkbox-container mt-3"},[_vm._v("All\n                    "),_c('input',{attrs:{"type":"checkbox","checked":"checked"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Winner\n                    "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container mb-3"},[_vm._v("Nominee\n                    "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})])])])],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('div',{staticClass:"text-xs flex",staticStyle:{"font-weight":"bold"}},[_c('p',[_vm._v("Awards Year")])]),_vm._v(" "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-year",modifiers:{"collapse-year":true}}],staticStyle:{"background":"none","border":"none","margin-left":"57%","overflow-anchor":"none","outline":"none"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",staticStyle:{"margin-left":"52%"},attrs:{"icon":['fas', 'chevron-down']}})],1)]),_vm._v(" "),_c('b-collapse',{staticClass:"mt-2",attrs:{"visible":"","id":"collapse-year"}},[_c('b-card',[_c('div',[_c('vue-slider',{staticClass:"text-black dark:text-white",attrs:{"min":1927,"max":2021,"tooltip":'always',"process-style":{ backgroundColor: '#675f5f' },"tooltip-style":{ backgroundColor: '#fff', color: '#252525', borderColor: '#252525' },"enable-cross":false},scopedSlots:_vm._u([{key:"dot",fn:function(ref){
var focus = ref.focus;
return [_c('div',{class:['custom-dot', { focus: focus }]})]}}]),model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)])],1),_vm._v(" "),_c('div',[_c('div',{staticClass:"flex"},[_c('p',{staticClass:"text-xs mt-3 genre"},[_vm._v("By Genre")]),_vm._v(" "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-Genre",modifiers:{"collapse-Genre":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","padding-top":"11px","outline":"none"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",staticStyle:{"margin-left":"52%"},attrs:{"icon":['fas', 'chevron-down']}})],1)]),_vm._v(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-Genre"}},[_c('b-card',[_c('div',{},[_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Action\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Adventure\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Animation\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Comedy\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Crime\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Documentary\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Drama\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Family\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Fantasy\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      History\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Horror\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Music\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Mystery\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Romance\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Science Fiction\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      Thriller\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      TV Movie\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                      War\n                    ")]),_vm._v(" "),_c('button',{staticClass:"text-xs bg-custom-gray rounded-full text-white px-2 py-1"},[_vm._v("\n                      Western\n                    ")])])])],1)],1),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('p',{staticClass:"text-xs mt-3 known"},[_vm._v("By Known For")]),_vm._v(" "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-byKnown",modifiers:{"collapse-byKnown":true}}],staticStyle:{"overflow-anchor":"none","background":"none","color":"black","border":"none","padding-top":"11px","outline":"none"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",staticStyle:{"margin-left":"52%"},attrs:{"icon":['fas', 'chevron-down']}})],1)]),_vm._v(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-byKnown"}},[_c('b-card',[_c('label',{staticClass:"checkbox-container"},[_vm._v("Acting\n                  "),_c('input',{attrs:{"type":"checkbox","checked":"checked"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Directing\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Visual Effects\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Production\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Camera\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Art\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Lighting\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Costume & Make-Up\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Sound\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Editing\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Crew\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})]),_vm._v(" "),_c('label',{staticClass:"checkbox-container"},[_vm._v("Writing\n                  "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"checkmark"})])])],1),_vm._v(" "),_c('div',{staticClass:"text-xs"},[_c('div',{staticClass:"flex"},[_c('p',{staticClass:"mt-4 mb-2 dark:text-white font-bold",staticStyle:{"margin-right":"125px"}},[_vm._v("\n                  By Company\n                ")]),_vm._v(" "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-Company",modifiers:{"collapse-Company":true}}],staticClass:"m-1",staticStyle:{"background":"none","border":"none","outline":"none","font-size":"15px","padding-top":"12px"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",staticStyle:{"margin-left":"52%"},attrs:{"icon":['fas', 'chevron-down']}})],1)]),_vm._v(" "),_c('b-collapse',{attrs:{"visible":"","id":"collapse-Company"}},[_c('b-card',[_c('div',{staticClass:"bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                    Fox Film\n                  ")]),_vm._v(" "),_c('div',{staticClass:"bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                    Metro-Goldwyn-Mayer\n                  ")]),_vm._v(" "),_c('div',{staticClass:"bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                    Paramount Pictures\n                  ")]),_vm._v(" "),_c('div',{staticClass:"bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                    RKO Radio Pictures\n                  ")]),_vm._v(" "),_c('div',{staticClass:"bg-custom-gray rounded-full text-white px-2 py-1 my-1"},[_vm._v("\n                    United Artists\n                  ")])])],1)],1)],1)],1)],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white my-3 px-2\" data-v-16e596f6>","</div>",[_vm._ssrNode("<div class=\"flex\" data-v-16e596f6>","</div>",[_vm._ssrNode("<p class=\"text-xl mr-4\" style=\"margin-right: 29% !important\" data-v-16e596f6>\n        Where to Watch\n      </p> "),_c('div',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-where",modifiers:{"collapse-where":true}}],staticStyle:{"outline":"none"}},[_c('font-awesome-icon',{staticClass:"text-black dark:text-white mt-1 mr-2",attrs:{"icon":['fas', 'chevron-down']}})],1)],2),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"id":"collapse-where"}},[_c('b-card',[_c('p',{staticClass:"text-xs"},[_vm._v("Country")]),_vm._v(" "),_c('form',{attrs:{"action":"/"}},[_c('select',{staticClass:"text-xs w-full rounded-lg dark:text-black",staticStyle:{"outline":"none","border":"solid 1px"},attrs:{"name":"cars","id":"cars"}},[_c('option',{attrs:{"value":"volvo"}},[_c('span',[_vm._v(" Germany")])]),_vm._v(" "),_c('option',{attrs:{"value":"saab"}},[_vm._v("Canada")]),_vm._v(" "),_c('option',{attrs:{"value":"opel"}},[_vm._v("United State")]),_vm._v(" "),_c('option',{attrs:{"value":"audi"}},[_vm._v("France")]),_vm._v(" "),_c('option',{attrs:{"value":"audi"}},[_vm._v("England")])])]),_vm._v(" "),_c('div',{staticClass:"flex flex-wrap overflow-hidden"},[_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(116),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(117),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(121),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(205),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(206),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(207),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(208),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(209),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(138),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(139),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(140),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(141),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(136),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(142),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(210),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(211),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(212),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(213),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(214),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(215),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(216),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(217),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(218),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(219),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(220),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(221),"alt":"","data-v-2a183b29":""}})]),_vm._v(" "),_c('div',{staticClass:"w-1/4 p-1"},[_c('img',{staticClass:"rounded-lg shadow-md w-full",attrs:{"src":__webpack_require__(222),"alt":"","data-v-2a183b29":""}})])])])],1)],2)],2)}
var FilterAllvue_type_template_id_16e596f6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchfilter/FilterAll.vue?vue&type=template&id=16e596f6&scoped=true&

// EXTERNAL MODULE: external "vue-slider-component/dist-css/vue-slider-component.umd.min.js"
var vue_slider_component_umd_min_js_ = __webpack_require__(98);
var vue_slider_component_umd_min_js_default = /*#__PURE__*/__webpack_require__.n(vue_slider_component_umd_min_js_);

// EXTERNAL MODULE: ./node_modules/vue-slider-component/dist-css/vue-slider-component.css
var vue_slider_component = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/vue-slider-component/theme/default.css
var theme_default = __webpack_require__(225);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchfilter/FilterAll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import theme


/* harmony default export */ var FilterAllvue_type_script_lang_js_ = ({
  components: {
    VueSlider: vue_slider_component_umd_min_js_default.a
  },

  data() {
    return {
      value: [1970, 2001],
      marks: [1927, 2021]
    };
  }

});
// CONCATENATED MODULE: ./src/components/searchfilter/FilterAll.vue?vue&type=script&lang=js&
 /* harmony default export */ var searchfilter_FilterAllvue_type_script_lang_js_ = (FilterAllvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/searchfilter/FilterAll.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(227)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searchfilter_FilterAllvue_type_script_lang_js_,
  FilterAllvue_type_template_id_16e596f6_scoped_true_render,
  FilterAllvue_type_template_id_16e596f6_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "16e596f6",
  "9493813a"
  
)

/* harmony default export */ var FilterAll = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchfilter/movie/TvShow.vue?vue&type=template&id=d3a3ec46&
var TvShowvue_type_template_id_d3a3ec46_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap overflow-hidden"},[_vm._ssrNode("<div class=\"md:w-1/2\">","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden\">","</div>",[_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"md:w-1/2\">","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden\">","</div>",[_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4 p-2\">","</div>",[_c('each-tv')],1)],2)])],2)}
var TvShowvue_type_template_id_d3a3ec46_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchfilter/movie/TvShow.vue?vue&type=template&id=d3a3ec46&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchfilter/movie/eachtv.vue?vue&type=template&id=28942438&
var eachtvvue_type_template_id_28942438_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<a href=\"/single/movie\"><img"+(_vm._ssrAttr("src",__webpack_require__(229)))+" alt data-v-2a183b29 class=\"rounded-xl shadow-md w-full\"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n        Eternal Sunshine of the Spotless Mind(2014)\n      </h1></div></a>")])}
var eachtvvue_type_template_id_28942438_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/searchfilter/movie/eachtv.vue?vue&type=template&id=28942438&

// CONCATENATED MODULE: ./src/components/searchfilter/movie/eachtv.vue

var script = {}


/* normalize component */

var eachtv_component = Object(componentNormalizer["a" /* default */])(
  script,
  eachtvvue_type_template_id_28942438_render,
  eachtvvue_type_template_id_28942438_staticRenderFns,
  false,
  null,
  null,
  "df6fd836"
  
)

/* harmony default export */ var eachtv = (eachtv_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/searchfilter/movie/TvShow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TvShowvue_type_script_lang_js_ = ({
  components: {
    EachTv: eachtv
  }
});
// CONCATENATED MODULE: ./src/components/searchfilter/movie/TvShow.vue?vue&type=script&lang=js&
 /* harmony default export */ var movie_TvShowvue_type_script_lang_js_ = (TvShowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/searchfilter/movie/TvShow.vue





/* normalize component */

var TvShow_component = Object(componentNormalizer["a" /* default */])(
  movie_TvShowvue_type_script_lang_js_,
  TvShowvue_type_template_id_d3a3ec46_render,
  TvShowvue_type_template_id_d3a3ec46_staticRenderFns,
  false,
  null,
  null,
  "0b108b3e"
  
)

/* harmony default export */ var TvShow = (TvShow_component.exports);
// EXTERNAL MODULE: ./src/components/searchfilter/movie/per-movie.vue + 2 modules
var per_movie = __webpack_require__(111);

// EXTERNAL MODULE: ./src/components/buttons/loadmore.vue + 4 modules
var loadmore = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/search-for-all.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var search_for_allvue_type_script_lang_js_ = ({
  components: {
    FilterAllCase: FilterAll,
    TvShow: TvShow,
    PerMovie: per_movie["default"],
    LoadMore: loadmore["a" /* default */]
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
      } // activate new tabs and panel


      event.target.classList.add("active");
      let classString = event.target.getAttribute("data-target");
      console.log(classString);
      document.getElementById("panels").getElementsByClassName(classString)[0].classList.add("active");
    }

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", onTabClick, false);
    }
  }

});
// CONCATENATED MODULE: ./src/pages/search-for-all.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_search_for_allvue_type_script_lang_js_ = (search_for_allvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/search-for-all.vue



function search_for_all_injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var search_for_all_component = Object(componentNormalizer["a" /* default */])(
  pages_search_for_allvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  search_for_all_injectStyles,
  "4a87e7cc",
  "13367090"
  
)

/* harmony default export */ var search_for_all = __webpack_exports__["default"] = (search_for_all_component.exports);

/* nuxt-component-imports */
installComponents(search_for_all_component, {PerMovie: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=search-for-all.js.map
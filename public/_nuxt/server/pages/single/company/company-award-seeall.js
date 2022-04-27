exports.ids = [16];
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

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c6d0e27a", content, true, context)
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/seeall.vue?vue&type=template&id=76b99c39&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"seeall text-sm text-white mt-2 bg-black rounded-full px-2 awards",staticStyle:{"height":"27px","padding-top":"2px"}},[_c('font-awesome-icon',{staticClass:"eye-state",staticStyle:{"margin":"2px","margin-top":"4px"},attrs:{"icon":['fas', 'eye']}}),_vm._ssrNode(" "),_c('lottie',{staticClass:"eye-active",staticStyle:{},attrs:{"width":20,"height":20,"options":_vm.lottieOptions},on:{"animCreated":_vm.handleAnimation}}),_vm._ssrNode("\n  See all\n")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/buttons/seeall.vue?vue&type=template&id=76b99c39&

// EXTERNAL MODULE: ./node_modules/vue-lottie/src/lottie.vue + 4 modules
var lottie = __webpack_require__(5);

// EXTERNAL MODULE: ./src/assets/lottie/eye.json
var eye = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buttons/seeall.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var seeallvue_type_script_lang_js_ = ({
  components: {
    lottie: lottie["a" /* default */]
  },

  data() {
    return {
      anim: null,
      // for saving the reference to the animation
      lottieOptions: {
        animationData: eye
      }
    };
  },

  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
});
// CONCATENATED MODULE: ./src/components/buttons/seeall.vue?vue&type=script&lang=js&
 /* harmony default export */ var buttons_seeallvue_type_script_lang_js_ = (seeallvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/buttons/seeall.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_seeallvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "fee4e942"
  
)

/* harmony default export */ var seeall = __webpack_exports__["a"] = (component.exports);

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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seeall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seeall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seeall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seeall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seeall_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".awards .eye-state,.awards:hover .eye-active{display:block}.awards .eye-active,.awards:hover .eye-state{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/company-top-test.d606b3e.png";

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("087584d3", content, true, context)
};

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle.e5db908.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (0).937be68.png";

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("96f636a8", content, true, context)
};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle (1).a3b8c82.png";

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveacademy_vue_vue_type_style_index_0_id_5b43c9a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveacademy_vue_vue_type_style_index_0_id_5b43c9a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveacademy_vue_vue_type_style_index_0_id_5b43c9a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveacademy_vue_vue_type_style_index_0_id_5b43c9a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveacademy_vue_vue_type_style_index_0_id_5b43c9a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-width:640px){.academy[data-v-5b43c9a5]{width:100%;margin-bottom:10px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/fiveacademy.vue?vue&type=template&id=5b43c9a5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xl:w-1/5 academy"},[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden shadow-md rounded-lg mr-2 px-3 pt-2 bg-back-white dark:bg-black\" data-v-5b43c9a5>","</div>",[_vm._ssrNode("<div class=\"w-1/5\" data-v-5b43c9a5>","</div>",[_c('font-awesome-icon',{staticClass:"dark:text-white",attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode(" <div class=\"w-4/5\" data-v-5b43c9a5><p class=\"font-bold dark:text-white\" data-v-5b43c9a5>5 Academy Awards</p> <div data-v-5b43c9a5><div data-v-5b43c9a5><p class=\"dark:text-white\" data-v-5b43c9a5>Best Actor</p> <p class=\"dark:text-white\" data-v-5b43c9a5>Best Director</p> <p class=\"dark:text-white\" data-v-5b43c9a5>Best Picture</p></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.readMore) ? '' : 'none' }))+" data-v-5b43c9a5><p class=\"dark:text-white\" data-v-5b43c9a5>Best Picture</p></div> <button class=\"text-custom-gray rounded-full px-1 py-1 text-sm\" data-v-5b43c9a5>"+((_vm.readMore)?("<span data-v-5b43c9a5><a data-show=\"Readmore\" Readmore-collapse=\"false\" class=\"showReadmores\" style=\"color: #6d7380\" data-v-5b43c9a5>...</a></span>"):("<span data-v-5b43c9a5><a data-show=\"Readmore\" Readmore-collapse=\"false\" class=\"showReadmores\" style=\"color: #6d7380\" data-v-5b43c9a5>...</a></span>"))+"</button></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/fiveacademy.vue?vue&type=template&id=5b43c9a5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/fiveacademy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var fiveacademyvue_type_script_lang_js_ = ({
  data() {
    return {
      readMore: false
    };
  }

});
// CONCATENATED MODULE: ./src/components/single/fiveacademy.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_fiveacademyvue_type_script_lang_js_ = (fiveacademyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/fiveacademy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_fiveacademyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b43c9a5",
  "195a871c"
  
)

/* harmony default export */ var fiveacademy = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sixstar_vue_vue_type_style_index_0_id_64531dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sixstar_vue_vue_type_style_index_0_id_64531dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sixstar_vue_vue_type_style_index_0_id_64531dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sixstar_vue_vue_type_style_index_0_id_64531dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sixstar_vue_vue_type_style_index_0_id_64531dc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-width:640px){.sixstar[data-v-64531dc6]{width:100%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/person/award.vue?vue&type=template&id=6ae7afd0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xl:w-1/2 mt-1"},[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden shadow-md bg-back-white dark:bg-black rounded-lg mr-2 px-3 pt-2\">","</div>",[_vm._ssrNode("<div class=\"w-1/4 px-2 mt-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+"> <div data-v-2a183b29 class=\"pt-2\"><h1 data-v-2a183b29 class=\"dark:text-white text-xs\">\n          Eternal Sunshine of the Spotless Mind(2014)\n        </h1></div> <div class=\"flex flex-wrap overflow-hidden mt-3\"><div class=\"w-1/3\"><img"+(_vm._ssrAttr("src",__webpack_require__(116)))+" class=\"rounded-lg\"></div> <div class=\"w-1/3\"><img"+(_vm._ssrAttr("src",__webpack_require__(117)))+"></div> <div class=\"w-1/3\"><img"+(_vm._ssrAttr("src",__webpack_require__(121)))+"></div></div></div> "),_vm._ssrNode("<div class=\"w-3/4 p-1\">","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-2 my-1\">","</div>",[_vm._ssrNode("<div class=\"flex-1\"><div class=\"text-xl dark:text-white font-bold\">Awards</div></div> "),_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<a href=\"/single/personaward-movie-tv\">","</a>",[_c('see-all')],1)])],2),_vm._ssrNode(" <div class=\"flex flex-wrap overflow-hidden px-1 pb-2\"><div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div></div> "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-2 my-1\">","</div>",[_vm._ssrNode("<div class=\"flex-1\"><div class=\"text-xl font-bold dark:text-white\">Nominations</div></div> "),_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<a href=\"/single/personaward-movie-tv\">","</a>",[_c('see-all')],1)])],2),_vm._ssrNode(" <div class=\"flex flex-wrap overflow-hidden px-1 pb-2\"><div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div> <div class=\"xl:w-1/3 mb-1\"><div class=\"bg-custom-white dark:bg-custom-gray dark:text-white text-center mx-1 py-2 rounded-lg px-2\"><h1>5</h1> <p class=\"text-sm\">1st Acedemy Awards (1927)</p></div></div></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/person/award.vue?vue&type=template&id=6ae7afd0&

// EXTERNAL MODULE: ./src/components/searchfilter/movie/per-movie.vue + 2 modules
var per_movie = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/award/eachstar.vue?vue&type=template&id=0784a628&
var eachstarvue_type_template_id_0784a628_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:" shadow-md dark:bg-custom-gray dark:text-white rounded-lg text-center m-2 p-8"},[_vm._ssrNode("<div class=\"flex mx-24\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}}),_vm._ssrNode(" <h1 class=\"text-3xl\">6</h1>")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\">1st Academy Awards <br> (1927)</h1>")],2)}
var eachstarvue_type_template_id_0784a628_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/award/eachstar.vue?vue&type=template&id=0784a628&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/award/eachstar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  eachstarvue_type_template_id_0784a628_render,
  eachstarvue_type_template_id_0784a628_staticRenderFns,
  false,
  null,
  null,
  "b58f7b80"
  
)

/* harmony default export */ var eachstar = (component.exports);
// EXTERNAL MODULE: ./src/components/buttons/seeall.vue + 4 modules
var seeall = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/person/award.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var awardvue_type_script_lang_js_ = ({
  components: {
    PerMovie: per_movie["default"],
    EachStarBg: eachstar,
    SeeAll: seeall["a" /* default */]
  }
});
// CONCATENATED MODULE: ./src/components/single/person/award.vue?vue&type=script&lang=js&
 /* harmony default export */ var person_awardvue_type_script_lang_js_ = (awardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/single/person/award.vue





/* normalize component */

var award_component = Object(componentNormalizer["a" /* default */])(
  person_awardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "172d7e64"
  
)

/* harmony default export */ var award = __webpack_exports__["a"] = (award_component.exports);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/award/sixstar.vue?vue&type=template&id=64531dc6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div class=\"text-xl mx-3 my-3 dark:text-white\" data-v-64531dc6><h1 data-v-64531dc6>\n      How many <span class=\"font-bold\" data-v-64531dc6>Awards</span>Awards did The SpongeBob\n      Movie: Sponge on the Run (2020) win?\n    </h1></div> <div class=\"flex flex-wrap overflow-hidden shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg mx-3 py-4 px-3\" data-v-64531dc6><div data-v-64531dc6><h1 class=\"object-center\" data-v-64531dc6>\n        The SpongeBob Movie: Sponge on the Run (2020) won 15\n        <span class=\"font-bold\" data-v-64531dc6>Awards</span></h1></div></div> "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/2 sm:w-1/1 sixstar\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"shadow-md bg-back-white dark:bg-black dark:text-white rounded-lg text-center my-2 mr-1 p-8\" data-v-64531dc6>","</div>",[_vm._ssrNode("<div class=\"text-3xl\" style=\"display: block; margin-left: auto; margin-right: auto\" data-v-64531dc6>","</div>",[_vm._ssrNode("<span data-v-64531dc6>","</span>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"10px","margin-right":"15px"},attrs:{"icon":['fas', 'star']}})],1),_vm._ssrNode("\n          6\n        ")],2),_vm._ssrNode(" <h1 class=\"text-base pt-2\" data-v-64531dc6>\n          1st Academy Awards <br data-v-64531dc6>\n          (1927)\n        </h1>")],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/award/sixstar.vue?vue&type=template&id=64531dc6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/award/sixstar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sixstarvue_type_script_lang_js_ = ({
  components: {},

  mounted() {}

});
// CONCATENATED MODULE: ./src/components/single/award/sixstar.vue?vue&type=script&lang=js&
 /* harmony default export */ var award_sixstarvue_type_script_lang_js_ = (sixstarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/award/sixstar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  award_sixstarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64531dc6",
  "cb046a52"
  
)

/* harmony default export */ var sixstar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("04ed8255", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/award/company-top.vue?vue&type=template&id=17c4cc0d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap overflow-hidden mx-3 mt-4"},[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden\" data-v-17c4cc0d>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(114)))+" class=\"rounded-2xl xl:h-92 w-full\" data-v-17c4cc0d> <img"+(_vm._ssrAttr("src",__webpack_require__(145)))+" class=\"rounded-full w-32 h-32 -mt-20 ml-20 person-img\" style=\"border: solid white 1px\" data-v-17c4cc0d> "),_vm._ssrNode("<div class=\"mx-2 my-1\" data-v-17c4cc0d>","</div>",[_vm._ssrNode("<h1 class=\"dark:text-white\" data-v-17c4cc0d>\n        Beverly Hills, California, United States\n      </h1> "),_vm._ssrNode("<div class=\"flex\" data-v-17c4cc0d>","</div>",[_c('font-awesome-icon',{staticClass:"dark:text-white",staticStyle:{"margin-top":"3px","margin-right":"6px"},attrs:{"icon":['fas', 'link']}}),_vm._ssrNode(" <h1 class=\"dark:text-white\" data-v-17c4cc0d>Home Page</h1>")],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/award/company-top.vue?vue&type=template&id=17c4cc0d&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/award/company-top.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17c4cc0d",
  "228be6a8"
  
)

/* harmony default export */ var company_top = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mgm-logo-e1551810978728.84c6829.jpg";

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_top_vue_vue_type_style_index_0_id_17c4cc0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_top_vue_vue_type_style_index_0_id_17c4cc0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_top_vue_vue_type_style_index_0_id_17c4cc0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_top_vue_vue_type_style_index_0_id_17c4cc0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_top_vue_vue_type_style_index_0_id_17c4cc0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body[data-v-17c4cc0d]{font-family:\"Inter\",sans-serif}#add-modal[data-v-17c4cc0d]{position:absolute;background:#fff;border-radius:19px;padding:5px;width:90%;top:20px;z-index:10;left:5%}#add-modal .flex .flex-1 p[data-v-17c4cc0d]{outline:none!important}.add-selection-se[data-v-17c4cc0d]{font-size:18px;margin-top:4px;margin-left:3px;color:#fff;padding-right:2px}ul[data-v-17c4cc0d]{list-style:none;padding:0}ul .inner[data-v-17c4cc0d]{overflow:hidden;display:none}.max-w-4xl[data-v-17c4cc0d]{max-width:100%}.md\\:px-0[data-v-17c4cc0d]{margin-left:16px;margin-right:16px}.shadow[data-v-17c4cc0d]{box-shadow:1px 16px 61px -12px rgba(0,0,0,.36)}.maincolor[data-v-17c4cc0d]{background-color:#f7f7f7}.thumb:hover .middle[data-v-17c4cc0d],.thumbs:hover .middle[data-v-17c4cc0d]{opacity:1}.top-letter[data-v-17c4cc0d]{margin-left:10px;margin-top:6px;margin-bottom:4px}.text[data-v-17c4cc0d],.top-letter[data-v-17c4cc0d]{font-size:9px;display:flex}.text[data-v-17c4cc0d]{background-color:#000;color:#fff;margin:2px 10px 5px;border-radius:10px;padding:2px}.text img[data-v-17c4cc0d]{width:12%;margin-left:3%!important}.thumbs img[data-v-17c4cc0d]{max-width:316%;margin-left:-87%;margin-top:0;opacity:1;height:auto;transition:.5s ease}.carousel-content[data-v-17c4cc0d]{position:fixed;bottom:2%;color:#000;font-size:12px;width:10%}.academy[data-v-17c4cc0d],.carousel-content[data-v-17c4cc0d]{font-family:inherit;font-style:normal;font-weight:400}.academy[data-v-17c4cc0d]{font-size:15.78px;margin-bottom:12px;margin-top:2%;font-weight:700}.seeall[data-v-17c4cc0d]{float:right;display:flex}.seeall img[data-v-17c4cc0d]{width:16px;height:17px;margin:auto 6px auto auto}.carousel-wrapper[data-v-17c4cc0d]{padding:40px}.img-wrapper img[data-v-17c4cc0d]{margin:auto;width:200px;height:100px}.dummy_page[data-v-17c4cc0d]{height:200px;width:100%;background-color:#f0f0f0;text-align:center;box-sizing:border-box;padding:60px 0}.social ul li[data-v-17c4cc0d]{display:inline-block;padding-right:5px!important}.clearfix[data-v-17c4cc0d]{clear:both}.load_left[data-v-17c4cc0d]{-webkit-animation:slide-left .4s linear;animation:slide-left .4s linear}[data-v-17c4cc0d]:root{--color:#243746;--color-primary:#158876;--color-secondary:#0e2233;--bg:#f3f5f4;--bg-secondary:#fff;--border-color:#ddd}.dark-mode[data-v-17c4cc0d]{--color:#ebf4f1;--color-primary:#41b38a;--color-secondary:#fdf9f3;--bg:#091a28;--bg-secondary:#071521;--border-color:#0d2538}.sepia-mode[data-v-17c4cc0d]{--color:#433422;--color-secondary:#504231;--bg:#f1e7d0;--bg-secondary:#eae0c9;--border-color:#ded0bf}.col[data-v-17c4cc0d]{padding:1em;margin:0 2px 2px 0}#section[data-v-17c4cc0d]{word-wrap:break-word}.moretext[data-v-17c4cc0d]{display:none}.col-complementary[data-v-17c4cc0d],.col-main[data-v-17c4cc0d]{flex:1}.hide[data-v-17c4cc0d]{display:none}.blog-image[data-v-17c4cc0d]{margin:0 auto;border:1px solid #ddd;overflow:hidden;border-radius:15px;box-shadow:3px 3px 10px #ccc;width:274px;height:274px}.blog-image img[data-v-17c4cc0d]{max-width:200%;height:auto;margin-left:-50%;margin-top:-10%}.news p[data-v-17c4cc0d]{margin-top:12px;font-weight:400}.showReadmore[data-v-17c4cc0d]{color:#fff;background:#1a202c;border-radius:18px;padding:4px;display:table;margin-top:20px}.showReadmore[data-v-17c4cc0d]:hover{text-decoration:none}.showReadmores[data-v-17c4cc0d]{display:table}.showReadmores[data-v-17c4cc0d]:hover{text-decoration:none}.showReadmores img[data-v-17c4cc0d]{width:18px}.email-subscribe[data-v-17c4cc0d]{display:flex;font-size:14px}.email-subscribe input[data-v-17c4cc0d]{border-radius:25px;padding-right:12px;padding-left:12px;outline:none;margin-right:9px;height:32px;margin-top:16px}.never[data-v-17c4cc0d]{width:111px}.neverr[data-v-17c4cc0d]{width:42%;margin:auto}.older[data-v-17c4cc0d]{display:flex}.older p[data-v-17c4cc0d]{color:#fff;font-size:12px;margin-top:10px}.thumbcircle[data-v-17c4cc0d]{margin:0 auto;border:1px solid #ddd;overflow:hidden;width:200px;height:200px;box-shadow:3px 3px 10px #ccc;border-radius:62%}.thumbcircle img[data-v-17c4cc0d]{width:200%;height:auto;margin-left:-50%;margin-top:-10%}#loadMore[data-v-17c4cc0d]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMore[data-v-17c4cc0d]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMores[data-v-17c4cc0d]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMores[data-v-17c4cc0d]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMoress[data-v-17c4cc0d]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMoress[data-v-17c4cc0d]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMoresss[data-v-17c4cc0d]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMoresss[data-v-17c4cc0d]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMorefour[data-v-17c4cc0d]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMorefour[data-v-17c4cc0d]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMorefive[data-v-17c4cc0d]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMorefive[data-v-17c4cc0d]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}.in[data-v-17c4cc0d]{border:1px solid #000;outline:none;border-radius:10px;margin-top:4px}.megu[data-v-17c4cc0d]{background-color:#c7bfbf;padding-right:100%;margin-top:10px}.overimg[data-v-17c4cc0d]{position:relative;font-family:Arial}.img-block[data-v-17c4cc0d]{position:absolute;bottom:163px;right:88px;color:#fff;width:104px}.mailto-link[data-v-17c4cc0d]{position:relative;padding:8px 0}.mailto-message[data-v-17c4cc0d]{top:1px;left:58%;margin-bottom:-5px;transform:translate(-50%,-100%);position:absolute;display:none;width:auto;white-space:nowrap;font-size:14px;background-color:#000;color:#fff;padding:2px 6px;border-radius:16px}.mailto-link:focus .mailto-message[data-v-17c4cc0d],.mailto-link:hover .mailto-message[data-v-17c4cc0d],.mailto-link[focus-within] .mailto-message[data-v-17c4cc0d]{display:block}.mailto-link:focus-within .mailto-message[data-v-17c4cc0d],.mailto-link:focus .mailto-message[data-v-17c4cc0d],.mailto-link:hover .mailto-message[data-v-17c4cc0d]{display:block}.well[data-v-17c4cc0d]{border:1px solid;border-radius:21px}.mengli[data-v-17c4cc0d]{border:1px solid;outline:none}.toggle-checkbox[data-v-17c4cc0d]:checked{right:0;border-color:#000;outline:none}.toggle-checkbox:checked+.toggle-label[data-v-17c4cc0d]{background-color:#000;outline:none}.dd[data-v-17c4cc0d]{border:solid}.switch[data-v-17c4cc0d]{position:relative;display:inline-block;width:55px;height:27px}.switch input[data-v-17c4cc0d]{opacity:0;width:0;height:0}.slider[data-v-17c4cc0d]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#fff;border:1px solid}.slider[data-v-17c4cc0d],.slider[data-v-17c4cc0d]:before{position:absolute;transition:.4s}.slider[data-v-17c4cc0d]:before{content:\"\";height:23px;width:25px;left:2px;bottom:1px;background-color:#181818;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}input:checked+.slider[data-v-17c4cc0d]{background-color:#fff}input:focus+.slider[data-v-17c4cc0d]{box-shadow:0 0 1px #fff}input:checked+.slider[data-v-17c4cc0d]:before{transform:translateX(26px)}.slider.round[data-v-17c4cc0d]{border-radius:34px}.slider.round[data-v-17c4cc0d]:before{border-radius:50%}label[data-v-17c4cc0d]{margin-bottom:0}.checkbox-container[data-v-17c4cc0d]{display:block;position:relative;padding-left:21px;cursor:pointer;font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-container input[data-v-17c4cc0d]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[data-v-17c4cc0d]{position:absolute;top:0;left:0;height:15px;width:15px;background-color:#fff;border-radius:50%;border:1px solid;margin-top:2px}.checkbox-container input:checked~.checkmark[data-v-17c4cc0d]{background-color:#000}.checkmark[data-v-17c4cc0d]:after{content:\"\";position:absolute;display:none}.checkbox-container input:checked~.checkmark[data-v-17c4cc0d]:after{display:block}#modal[data-v-17c4cc0d]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);display:table;transition:opacity .3s ease}.modal-wrapper[data-v-17c4cc0d]{display:table-cell;vertical-align:middle}.modal-container[data-v-17c4cc0d]{background:#fff;width:376px;border-radius:5px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease;padding:16px 22px;margin:68px auto 0}.modal-container input[data-v-17c4cc0d]{width:100%;border:1px solid;border-radius:6px;padding-left:5px;padding-top:2px;padding-bottom:2px;outline:none}.modal-container textarea[data-v-17c4cc0d]{width:100%;border:1px solid;border-radius:7px;outline:none;padding-left:5px}.create-btn[data-v-17c4cc0d]{background:#fee123;border-radius:52px;margin-left:8em;font-weight:700;outline:none!important;padding:5px 15px;margin-top:10px}.leftbutton:active p[data-v-17c4cc0d],.leftbutton:hover p[data-v-17c4cc0d]{color:#faf089;text-decoration:none}.nav-bottom[data-v-17c4cc0d]{display:none}@media only screen and (min-width:640px){.layout[data-v-17c4cc0d]{display:flex}}@media only screen and (min-width:1280px){.contain[data-v-17c4cc0d]{width:1200px;margin:0 auto}}@media only screen and (max-width:1180px){.img-block[data-v-17c4cc0d]{position:absolute;bottom:241px;right:155px;color:#fff;width:104px}}@media only screen and (max-width:1139px){.contain .social[data-v-17c4cc0d]{width:1000px;display:block}.social h1[data-v-17c4cc0d]{margin:0}.carousel-content[data-v-17c4cc0d]{width:16%}}@media only screen and (max-width:950px){.carousel-content[data-v-17c4cc0d]{width:17%}}@media only screen and (max-width:768px){.carousel-content[data-v-17c4cc0d]{width:25%}}@media only screen and (max-width:600px){.carousel-content[data-v-17c4cc0d]{width:33%}.fif[data-v-17c4cc0d]{width:50%}.albi[data-v-17c4cc0d],.zhuan[data-v-17c4cc0d]{width:100%}.academy[data-v-17c4cc0d]{width:100%!important}.person-img[data-v-17c4cc0d]{width:5em;height:5em;margin-top:-13%;margin-left:7%}.singleblog[data-v-17c4cc0d]{margin-top:-21%}.singleblogimg[data-v-17c4cc0d]{height:189px!important}.footer-col[data-v-17c4cc0d]{width:48%!important}.add-selection[data-v-17c4cc0d]{margin-top:11px;padding:2px}}@media only screen and (max-width:438px){.add-selection[data-v-17c4cc0d]{margin-top:11px;padding:2px}.add-favor[data-v-17c4cc0d],.add-stranger[data-v-17c4cc0d]{font-size:8px}#add-modal[data-v-17c4cc0d]{position:absolute;background:#fff;border-radius:6px;padding:1px;width:92%;margin-left:3px}.nav-bottom[data-v-17c4cc0d]{display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2123e6e3", content, true, context)
};

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_award_seeall_vue_vue_type_style_index_0_id_729ba7f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_award_seeall_vue_vue_type_style_index_0_id_729ba7f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_award_seeall_vue_vue_type_style_index_0_id_729ba7f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_award_seeall_vue_vue_type_style_index_0_id_729ba7f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_award_seeall_vue_vue_type_style_index_0_id_729ba7f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body[data-v-729ba7f3]{font-family:\"Inter\",sans-serif}#add-modal[data-v-729ba7f3]{position:absolute;background:#fff;border-radius:19px;padding:5px;width:90%;top:20px;z-index:10;left:5%}#add-modal .flex .flex-1 p[data-v-729ba7f3]{outline:none!important}.add-selection-se[data-v-729ba7f3]{font-size:18px;margin-top:4px;margin-left:3px;color:#fff;padding-right:2px}ul[data-v-729ba7f3]{list-style:none;padding:0}ul .inner[data-v-729ba7f3]{overflow:hidden;display:none}.max-w-4xl[data-v-729ba7f3]{max-width:100%}.md\\:px-0[data-v-729ba7f3]{margin-left:16px;margin-right:16px}.shadow[data-v-729ba7f3]{box-shadow:1px 16px 61px -12px rgba(0,0,0,.36)}.maincolor[data-v-729ba7f3]{background-color:#f7f7f7}.thumb:hover .middle[data-v-729ba7f3],.thumbs:hover .middle[data-v-729ba7f3]{opacity:1}.top-letter[data-v-729ba7f3]{margin-left:10px;margin-top:6px;margin-bottom:4px}.text[data-v-729ba7f3],.top-letter[data-v-729ba7f3]{font-size:9px;display:flex}.text[data-v-729ba7f3]{background-color:#000;color:#fff;margin:2px 10px 5px;border-radius:10px;padding:2px}.text img[data-v-729ba7f3]{width:12%;margin-left:3%!important}.thumbs img[data-v-729ba7f3]{max-width:316%;margin-left:-87%;margin-top:0;opacity:1;height:auto;transition:.5s ease}.carousel-content[data-v-729ba7f3]{position:fixed;bottom:2%;color:#000;font-size:12px;width:10%}.academy[data-v-729ba7f3],.carousel-content[data-v-729ba7f3]{font-family:inherit;font-style:normal;font-weight:400}.academy[data-v-729ba7f3]{font-size:15.78px;margin-bottom:12px;margin-top:2%;font-weight:700}.seeall[data-v-729ba7f3]{float:right;display:flex}.seeall img[data-v-729ba7f3]{width:16px;height:17px;margin:auto 6px auto auto}.carousel-wrapper[data-v-729ba7f3]{padding:40px}.img-wrapper img[data-v-729ba7f3]{margin:auto;width:200px;height:100px}.dummy_page[data-v-729ba7f3]{height:200px;width:100%;background-color:#f0f0f0;text-align:center;box-sizing:border-box;padding:60px 0}.social ul li[data-v-729ba7f3]{display:inline-block;padding-right:5px!important}.clearfix[data-v-729ba7f3]{clear:both}.load_left[data-v-729ba7f3]{-webkit-animation:slide-left .4s linear;animation:slide-left .4s linear}[data-v-729ba7f3]:root{--color:#243746;--color-primary:#158876;--color-secondary:#0e2233;--bg:#f3f5f4;--bg-secondary:#fff;--border-color:#ddd}.dark-mode[data-v-729ba7f3]{--color:#ebf4f1;--color-primary:#41b38a;--color-secondary:#fdf9f3;--bg:#091a28;--bg-secondary:#071521;--border-color:#0d2538}.sepia-mode[data-v-729ba7f3]{--color:#433422;--color-secondary:#504231;--bg:#f1e7d0;--bg-secondary:#eae0c9;--border-color:#ded0bf}.col[data-v-729ba7f3]{padding:1em;margin:0 2px 2px 0}#section[data-v-729ba7f3]{word-wrap:break-word}.moretext[data-v-729ba7f3]{display:none}.col-complementary[data-v-729ba7f3],.col-main[data-v-729ba7f3]{flex:1}.hide[data-v-729ba7f3]{display:none}.blog-image[data-v-729ba7f3]{margin:0 auto;border:1px solid #ddd;overflow:hidden;border-radius:15px;box-shadow:3px 3px 10px #ccc;width:274px;height:274px}.blog-image img[data-v-729ba7f3]{max-width:200%;height:auto;margin-left:-50%;margin-top:-10%}.news p[data-v-729ba7f3]{margin-top:12px;font-weight:400}.showReadmore[data-v-729ba7f3]{color:#fff;background:#1a202c;border-radius:18px;padding:4px;display:table;margin-top:20px}.showReadmore[data-v-729ba7f3]:hover{text-decoration:none}.showReadmores[data-v-729ba7f3]{display:table}.showReadmores[data-v-729ba7f3]:hover{text-decoration:none}.showReadmores img[data-v-729ba7f3]{width:18px}.email-subscribe[data-v-729ba7f3]{display:flex;font-size:14px}.email-subscribe input[data-v-729ba7f3]{border-radius:25px;padding-right:12px;padding-left:12px;outline:none;margin-right:9px;height:32px;margin-top:16px}.never[data-v-729ba7f3]{width:111px}.neverr[data-v-729ba7f3]{width:42%;margin:auto}.older[data-v-729ba7f3]{display:flex}.older p[data-v-729ba7f3]{color:#fff;font-size:12px;margin-top:10px}.thumbcircle[data-v-729ba7f3]{margin:0 auto;border:1px solid #ddd;overflow:hidden;width:200px;height:200px;box-shadow:3px 3px 10px #ccc;border-radius:62%}.thumbcircle img[data-v-729ba7f3]{width:200%;height:auto;margin-left:-50%;margin-top:-10%}#loadMore[data-v-729ba7f3]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMore[data-v-729ba7f3]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMores[data-v-729ba7f3]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMores[data-v-729ba7f3]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMoress[data-v-729ba7f3]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMoress[data-v-729ba7f3]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMoresss[data-v-729ba7f3]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMoresss[data-v-729ba7f3]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMorefour[data-v-729ba7f3]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMorefour[data-v-729ba7f3]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}#loadMorefive[data-v-729ba7f3]{width:200px;color:#fff;display:block;text-align:center;margin:20px auto;padding:10px;border-radius:100px;border:1px solid transparent;background-color:#1a202c;transition:.3s;height:45px}#loadMorefive[data-v-729ba7f3]:hover{color:#000;background-color:#fff;border:1px solid #000;text-decoration:none}.in[data-v-729ba7f3]{border:1px solid #000;outline:none;border-radius:10px;margin-top:4px}.megu[data-v-729ba7f3]{background-color:#c7bfbf;padding-right:100%;margin-top:10px}.overimg[data-v-729ba7f3]{position:relative;font-family:Arial}.img-block[data-v-729ba7f3]{position:absolute;bottom:163px;right:88px;color:#fff;width:104px}.mailto-link[data-v-729ba7f3]{position:relative;padding:8px 0}.mailto-message[data-v-729ba7f3]{top:1px;left:58%;margin-bottom:-5px;transform:translate(-50%,-100%);position:absolute;display:none;width:auto;white-space:nowrap;font-size:14px;background-color:#000;color:#fff;padding:2px 6px;border-radius:16px}.mailto-link:focus .mailto-message[data-v-729ba7f3],.mailto-link:hover .mailto-message[data-v-729ba7f3],.mailto-link[focus-within] .mailto-message[data-v-729ba7f3]{display:block}.mailto-link:focus-within .mailto-message[data-v-729ba7f3],.mailto-link:focus .mailto-message[data-v-729ba7f3],.mailto-link:hover .mailto-message[data-v-729ba7f3]{display:block}.well[data-v-729ba7f3]{border:1px solid;border-radius:21px}.mengli[data-v-729ba7f3]{border:1px solid;outline:none}.toggle-checkbox[data-v-729ba7f3]:checked{right:0;border-color:#000;outline:none}.toggle-checkbox:checked+.toggle-label[data-v-729ba7f3]{background-color:#000;outline:none}.dd[data-v-729ba7f3]{border:solid}.switch[data-v-729ba7f3]{position:relative;display:inline-block;width:55px;height:27px}.switch input[data-v-729ba7f3]{opacity:0;width:0;height:0}.slider[data-v-729ba7f3]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#fff;border:1px solid}.slider[data-v-729ba7f3],.slider[data-v-729ba7f3]:before{position:absolute;transition:.4s}.slider[data-v-729ba7f3]:before{content:\"\";height:23px;width:25px;left:2px;bottom:1px;background-color:#181818;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}input:checked+.slider[data-v-729ba7f3]{background-color:#fff}input:focus+.slider[data-v-729ba7f3]{box-shadow:0 0 1px #fff}input:checked+.slider[data-v-729ba7f3]:before{transform:translateX(26px)}.slider.round[data-v-729ba7f3]{border-radius:34px}.slider.round[data-v-729ba7f3]:before{border-radius:50%}label[data-v-729ba7f3]{margin-bottom:0}.checkbox-container[data-v-729ba7f3]{display:block;position:relative;padding-left:21px;cursor:pointer;font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-container input[data-v-729ba7f3]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[data-v-729ba7f3]{position:absolute;top:0;left:0;height:15px;width:15px;background-color:#fff;border-radius:50%;border:1px solid;margin-top:2px}.checkbox-container input:checked~.checkmark[data-v-729ba7f3]{background-color:#000}.checkmark[data-v-729ba7f3]:after{content:\"\";position:absolute;display:none}.checkbox-container input:checked~.checkmark[data-v-729ba7f3]:after{display:block}#modal[data-v-729ba7f3]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);display:table;transition:opacity .3s ease}.modal-wrapper[data-v-729ba7f3]{display:table-cell;vertical-align:middle}.modal-container[data-v-729ba7f3]{background:#fff;width:376px;border-radius:5px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease;padding:16px 22px;margin:68px auto 0}.modal-container input[data-v-729ba7f3]{width:100%;border:1px solid;border-radius:6px;padding-left:5px;padding-top:2px;padding-bottom:2px;outline:none}.modal-container textarea[data-v-729ba7f3]{width:100%;border:1px solid;border-radius:7px;outline:none;padding-left:5px}.create-btn[data-v-729ba7f3]{background:#fee123;border-radius:52px;margin-left:8em;font-weight:700;outline:none!important;padding:5px 15px;margin-top:10px}.leftbutton:active p[data-v-729ba7f3],.leftbutton:hover p[data-v-729ba7f3]{color:#faf089;text-decoration:none}.nav-bottom[data-v-729ba7f3]{display:none}@media only screen and (min-width:640px){.layout[data-v-729ba7f3]{display:flex}}@media only screen and (min-width:1280px){.contain[data-v-729ba7f3]{width:1200px;margin:0 auto}}@media only screen and (max-width:1180px){.img-block[data-v-729ba7f3]{position:absolute;bottom:241px;right:155px;color:#fff;width:104px}}@media only screen and (max-width:1139px){.contain .social[data-v-729ba7f3]{width:1000px;display:block}.social h1[data-v-729ba7f3]{margin:0}.carousel-content[data-v-729ba7f3]{width:16%}}@media only screen and (max-width:950px){.carousel-content[data-v-729ba7f3]{width:17%}}@media only screen and (max-width:768px){.carousel-content[data-v-729ba7f3]{width:25%}}@media only screen and (max-width:600px){.carousel-content[data-v-729ba7f3]{width:33%}.fif[data-v-729ba7f3]{width:50%}.albi[data-v-729ba7f3],.zhuan[data-v-729ba7f3]{width:100%}.academy[data-v-729ba7f3]{width:100%!important}.person-img[data-v-729ba7f3]{width:5em;height:5em;margin-top:-13%;margin-left:7%}.singleblog[data-v-729ba7f3]{margin-top:-21%}.singleblogimg[data-v-729ba7f3]{height:189px!important}.footer-col[data-v-729ba7f3]{width:48%!important}.add-selection[data-v-729ba7f3]{margin-top:11px;padding:2px}}@media only screen and (max-width:438px){.add-selection[data-v-729ba7f3]{margin-top:11px;padding:2px}.add-favor[data-v-729ba7f3],.add-stranger[data-v-729ba7f3]{font-size:8px}#add-modal[data-v-729ba7f3]{position:absolute;background:#fff;border-radius:6px;padding:1px;width:92%;margin-left:3px}.nav-bottom[data-v-729ba7f3]{display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/company/company-award-seeall.vue?vue&type=template&id=729ba7f3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('company-top'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('load-more'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('load-more')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/single/company/company-award-seeall.vue?vue&type=template&id=729ba7f3&scoped=true&

// EXTERNAL MODULE: ./src/components/single/award/company-top.vue + 2 modules
var company_top = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/single/fiveacademy.vue + 4 modules
var fiveacademy = __webpack_require__(125);

// EXTERNAL MODULE: ./src/components/buttons/seeall.vue + 4 modules
var seeall = __webpack_require__(110);

// EXTERNAL MODULE: ./src/components/single/person/award.vue + 7 modules
var award = __webpack_require__(129);

// EXTERNAL MODULE: ./src/components/single/award/sixstar.vue + 4 modules
var sixstar = __webpack_require__(130);

// EXTERNAL MODULE: ./src/components/buttons/loadmore.vue + 4 modules
var loadmore = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/company/company-award-seeall.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var company_award_seeallvue_type_script_lang_js_ = ({
  components: {
    CompanyTop: company_top["default"],
    FiveAcademy: fiveacademy["a" /* default */],
    SeeAll: seeall["a" /* default */],
    AwardBox: award["a" /* default */],
    SixStar: sixstar["a" /* default */],
    LoadMore: loadmore["a" /* default */]
  },

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/single/company/company-award-seeall.vue?vue&type=script&lang=js&
 /* harmony default export */ var company_company_award_seeallvue_type_script_lang_js_ = (company_award_seeallvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/single/company/company-award-seeall.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(284)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  company_company_award_seeallvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "729ba7f3",
  "157addd9"
  
)

/* harmony default export */ var company_award_seeall = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CompanyTop: __webpack_require__(134).default})


/***/ })

};;
//# sourceMappingURL=company-award-seeall.js.map
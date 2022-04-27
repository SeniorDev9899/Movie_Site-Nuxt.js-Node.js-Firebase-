exports.ids = [20];
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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 25.224f58a.png";

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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 161.1a3b0a8.png";

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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/person/top.vue?vue&type=template&id=4146d84d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap overflow-hidden mx-3 mt-4"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(124)))+" class=\"rounded-2xl xl:h-92 w-full\"> <img"+(_vm._ssrAttr("src",__webpack_require__(128)))+" class=\"rounded-full w-32 h-32 -mt-20 ml-20 person-img\"> <h1 class=\"my-3 pt-1 dark:text-white\">Millie Bobby Brown</h1> <div class=\"flex flex-wrap overflow text-sm bg-black rounded-full text-white my-3 mx-2 py-1 px-2\"><svg width=\"25\" height=\"20\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.48182 8.10195C3.71739 7.53323 4.06268 7.01648 4.49796 6.58121C4.93323 6.14593 5.44998 5.80064 6.0187 5.56507C6.58742 5.3295 7.19696 5.20825 7.81254 5.20825C8.42812 5.20825 9.03766 5.3295 9.60638 5.56507C10.1751 5.80064 10.6918 6.14593 11.1271 6.58121L12.5 7.95413L13.873 6.58121C14.752 5.70213 15.9443 5.20826 17.1875 5.20826C18.4307 5.20826 19.623 5.70213 20.5021 6.58121C21.3812 7.46029 21.8751 8.65258 21.8751 9.89579C21.8751 11.139 21.3812 12.3313 20.5021 13.2104L12.5 21.2125L4.49796 13.2104C4.06268 12.7751 3.71739 12.2584 3.48182 11.6896C3.24625 11.1209 3.125 10.5114 3.125 9.89579C3.125 9.28022 3.24625 8.67067 3.48182 8.10195Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg> <p>Add to Favourites</p></div> "),_vm._ssrNode("<div class=\"m-3\">","</div>",[_c('font-awesome-icon',{staticClass:"dark:text-white",staticStyle:{"margin-top":"7px"},attrs:{"icon":['fab', 'instagram']}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"m-3\">","</div>",[_c('font-awesome-icon',{staticClass:"dark:text-white",staticStyle:{"margin-top":"7px"},attrs:{"icon":['fab', 'twitter']}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/person/top.vue?vue&type=template&id=4146d84d&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/person/top.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b4588dc8"
  
)

/* harmony default export */ var person_top = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("65f8c72e", content, true, context)
};

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0224cb41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0224cb41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0224cb41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0224cb41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0224cb41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-width:640px){.academy[data-v-0224cb41]{width:100%;margin-bottom:10px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/person.vue?vue&type=template&id=0224cb41&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('person-top'),_vm._ssrNode(" "),_c('text-part'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 my-3\" data-v-0224cb41>","</div>",[_vm._ssrNode("<div class=\"flex-1\" data-v-0224cb41><div class=\"text-xl dark:text-white\" data-v-0224cb41>\n        What <span class=\"font-bold\" data-v-0224cb41>Awards</span> has Millie Bobby Brown won?\n      </div></div> "),_vm._ssrNode("<div class=\"flex\" data-v-0224cb41>","</div>",[_vm._ssrNode("<a href=\"/single/personaward\" data-v-0224cb41>","</a>",[_c('see-all')],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 pb-3\" data-v-0224cb41>","</div>",[_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 my-3\" data-v-0224cb41>","</div>",[_vm._ssrNode("<div class=\"flex-1\" data-v-0224cb41><div class=\"text-xl dark:text-white\" data-v-0224cb41>\n        What Nominations has Millie Bobby Brown got?\n      </div></div> "),_vm._ssrNode("<div class=\"flex\" data-v-0224cb41>","</div>",[_vm._ssrNode("<a href=\"/single/personaward\" data-v-0224cb41>","</a>",[_c('see-all')],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 pb-3\" data-v-0224cb41>","</div>",[_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy')],2),_vm._ssrNode(" <div class=\"flex flex-wrap overflow-hidden mx-3 my-3\" data-v-0224cb41><div class=\"flex\" data-v-0224cb41><div class=\"text-xl dark:text-white\" data-v-0224cb41>\n        Millie Bobby Brown’s Awards and Nominations\n      </div></div></div> "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 pb-3 moreflex\" data-v-0224cb41>","</div>",[_c('award-box'),_vm._ssrNode(" "),_c('award-box'),_vm._ssrNode(" "),_c('award-box'),_vm._ssrNode(" "),_c('award-box'),_vm._ssrNode(" "),_c('award-box'),_vm._ssrNode(" "),_c('award-box')],2),_vm._ssrNode(" "),_c('load-more')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/single/person.vue?vue&type=template&id=0224cb41&scoped=true&

// EXTERNAL MODULE: ./src/components/single/person/top.vue + 2 modules
var person_top = __webpack_require__(131);

// EXTERNAL MODULE: ./src/components/single/fiveacademy.vue + 4 modules
var fiveacademy = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/person/text.vue?vue&type=template&id=295d0b54&
var textvue_type_template_id_295d0b54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap overflow-hidden mx-3 bg-back-white dark:bg-black dark:text-white rounded-lg shadow-md p-3"},[_vm._ssrNode("<h1 class=\"font-bold\">Biography</h1> <p class=\"text-sm\">\n    Millie Bobby Brown (born 19 February 2004) is an English actress and\n    producer. She was born in Spain, to British parents. They moved to\n    Orlando, Florida in 2011, where Millie went to acting workshops to pass\n    the time on a Saturday, and it was there that a top Hollywood talent scout\n    called and told Millie's parents that &quot;she has instincts you cannot\n    teach.&quot; She advised Millie's parents that Millie could &quot;mix it with the\n    best kids in Hollywood.&quot; They packed up and drove from Orlando to Los\n    Angeles, and within a week, Millie was meeting with the town's top\n    children's talent agencies. She was offered representation by all the\n    agents that she met. Within three months of being in Hollywood, Millie was\n    offered the role of young Alice in ABC's Once Upon a Time in Wonderland.\n    In November 2013, after just one self-taped audition, and without meeting\n    the producers/directors, Millie was offered the role of Madison O'Donnell\n    in BBC America's show, &quot;Intruders.&quot;\n  </p> <hr class=\"bg-black\"> <div class=\"flex megu bg-custom-gray pr-full mt-10\"><hr class=\"text-black\"></div> <div class=\"xl:w-1/2\"><h1 class=\"font-bold pt-3\">Known For</h1> <h1 class=\"text-sm\">Acting</h1> <h1 class=\"font-bold pt-3\">Known Credits</h1> <h1 class=\"text-sm\">Acting</h1> <h1 class=\"font-bold pt-3\">Gender</h1> <h1 class=\"text-sm\">Female</h1></div> <div class=\"xl:w-1/2\"><h1 class=\"font-bold pt-3\">Birthday</h1> <h1 class=\"text-sm\">Acting</h1> <h1 class=\"font-bold pt-3\">Place of Birth</h1> <h1 class=\"text-sm\">Acting</h1> <h1 class=\"font-bold pt-3\">Also Known As</h1> <h1 class=\"text-sm\">\n      Birth Marbella, Málaga, Andalusia, Spain Also Known As Millie Brown 밀리\n      바비 브라운 밀리 보비 브라운 Μίλι Μπόμπι Μπράουν Μίλι Μπράουν\n      米莉·博比·布朗\n    </h1></div>")])}
var textvue_type_template_id_295d0b54_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/person/text.vue?vue&type=template&id=295d0b54&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/person/text.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  textvue_type_template_id_295d0b54_render,
  textvue_type_template_id_295d0b54_staticRenderFns,
  false,
  null,
  null,
  "15059776"
  
)

/* harmony default export */ var person_text = (component.exports);
// EXTERNAL MODULE: ./src/components/buttons/seeall.vue + 4 modules
var seeall = __webpack_require__(110);

// EXTERNAL MODULE: ./src/components/single/person/award.vue + 7 modules
var award = __webpack_require__(129);

// EXTERNAL MODULE: ./src/components/buttons/loadmore.vue + 4 modules
var loadmore = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/person.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var personvue_type_script_lang_js_ = ({
  components: {
    PersonTop: person_top["a" /* default */],
    FiveAcademy: fiveacademy["a" /* default */],
    TextPart: person_text,
    SeeAll: seeall["a" /* default */],
    AwardBox: award["a" /* default */],
    LoadMore: loadmore["a" /* default */]
  },

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/single/person.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_personvue_type_script_lang_js_ = (personvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/single/person.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var person_component = Object(componentNormalizer["a" /* default */])(
  single_personvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0224cb41",
  "a43045fe"
  
)

/* harmony default export */ var person = __webpack_exports__["default"] = (person_component.exports);

/***/ })

};;
//# sourceMappingURL=person.js.map
exports.ids = [9];
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.711fc56.png";

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("50d6c3e8", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0983b57f", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 10.d351ef1.png";

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 11.8efba85.png";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 12 (3).dc87fca.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 13 (1).e644918.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 32.f0e42be.png";

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47b6edc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47b6edc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47b6edc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47b6edc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_47b6edc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_bfd9a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_bfd9a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_bfd9a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_bfd9a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_bfd9a6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".inputs[data-v-bfd9a6b4]{width:100%;border:1px solid;border-radius:7px;height:33px}.container input[data-v-bfd9a6b4]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.sign[data-v-bfd9a6b4]{margin-left:auto;margin-right:auto}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/landing.vue?vue&type=template&id=bfd9a6b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div class=\"landingfirst bg-black rounded-xl m-2\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden px-8 py-3\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"w-full md:w-3/5 px-4\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<h1 class=\"text-white text-sm mb-3\" data-v-bfd9a6b4>\n          Movies, TV-Shows, Actors, Actress, Directors, Writers, Editors...\n        </h1> <p class=\"text-xl text-white my-2\" data-v-bfd9a6b4>\n          Discover Awards &amp; Nominations around the World!\n        </p> "),_vm._ssrNode("<div class=\"bg-white p-2 rounded-xl my-3\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<h1 class=\"mt-4 mb-2\" data-v-bfd9a6b4>18th Academy Award Winning Movies</h1> "),_c('swiper',{attrs:{"options":_vm.swiperOption}},[_c('swiper-slide',[_c('img',{attrs:{"src":__webpack_require__(196),"alt":""}}),_vm._v(" "),_c('h1',{staticClass:"text-xs",attrs:{"data-v-2a183b29":""}},[_vm._v("\n                Eternal Sunshine of the Spotless Mind(2014)\n              ")])]),_vm._v(" "),_c('swiper-slide',[_c('img',{attrs:{"src":__webpack_require__(197),"alt":""}}),_vm._v(" "),_c('h1',{staticClass:"text-xs",attrs:{"data-v-2a183b29":""}},[_vm._v("\n                Eternal Sunshine of the Spotless Mind(2014)\n              ")])]),_vm._v(" "),_c('swiper-slide',[_c('img',{attrs:{"src":__webpack_require__(198),"alt":""}}),_vm._v(" "),_c('h1',{staticClass:"text-xs",attrs:{"data-v-2a183b29":""}},[_vm._v("\n                Eternal Sunshine of the Spotless Mind(2014)\n              ")])]),_vm._v(" "),_c('swiper-slide',[_c('img',{attrs:{"src":__webpack_require__(199),"alt":""}}),_vm._v(" "),_c('h1',{staticClass:"text-xs",attrs:{"data-v-2a183b29":""}},[_vm._v("\n                Eternal Sunshine of the Spotless Mind(2014)\n              ")])]),_vm._v(" "),_c('swiper-slide',[_c('img',{attrs:{"src":__webpack_require__(101),"alt":""}}),_vm._v(" "),_c('h1',{staticClass:"text-xs",attrs:{"data-v-2a183b29":""}},[_vm._v("\n                Eternal Sunshine of the Spotless Mind(2014)\n              ")])])],1),_vm._ssrNode(" "),_c('load-more')],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"md:w-2/5 p-2\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"sign px-5\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div data-v-bfd9a6b4><img"+(_vm._ssrAttr("src",__webpack_require__(137)))+" alt style=\"width: 115px\" data-v-bfd9a6b4> <p class=\"text-xl mt-3 text-white\" data-v-bfd9a6b4>Sign in to your account</p> <p class=\"text-white text-sm\" data-v-bfd9a6b4>Continue with</p></div> "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"w-1/4\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"bg-white text-center m-1 p-1 rounded-full\" data-v-bfd9a6b4>","</div>",[_c('font-awesome-icon',{staticClass:"bg-white rounded-full",staticStyle:{"width":"20px","height":"20px","padding":"1px"},attrs:{"icon":['fab', 'facebook']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"bg-white text-center m-1 p-1 rounded-full\" data-v-bfd9a6b4>","</div>",[_c('font-awesome-icon',{staticClass:"bg-white rounded-full",staticStyle:{"width":"20px","height":"20px","padding":"1px"},attrs:{"icon":['fab', 'google']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"bg-white text-center m-1 p-1 rounded-full\" data-v-bfd9a6b4>","</div>",[_c('font-awesome-icon',{staticClass:"bg-white rounded-full",staticStyle:{"width":"20px","height":"20px","padding":"1px"},attrs:{"icon":['fab', 'twitter']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4\" data-v-bfd9a6b4>","</div>",[_vm._ssrNode("<div class=\"bg-white text-center m-1 p-1 rounded-full\" data-v-bfd9a6b4>","</div>",[_c('font-awesome-icon',{staticClass:"bg-white rounded-full",staticStyle:{"width":"20px","height":"20px","padding":"1px"},attrs:{"icon":['fab', 'apple']}})],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<form action=\"/action_page.php\" data-v-bfd9a6b4>","</form>",[_vm._ssrNode("<label for=\"fname\" class=\"text-white text-sm\" data-v-bfd9a6b4>Email address</label> <input type=\"email\" id=\"fname\" name=\"fname\" class=\"inputs\" data-v-bfd9a6b4><br data-v-bfd9a6b4><br data-v-bfd9a6b4> <label for=\"lname\" class=\"text-white text-sm\" data-v-bfd9a6b4>Username</label> <input type=\"text\" id=\"lname\" name=\"lname\" class=\"inputs\" data-v-bfd9a6b4><br data-v-bfd9a6b4><br data-v-bfd9a6b4> <label for=\"lname\" class=\"text-white text-sm\" data-v-bfd9a6b4>Password</label> <input type=\"password\" id=\"lname\" name=\"lname\" class=\"inputs\" data-v-bfd9a6b4><br data-v-bfd9a6b4><br data-v-bfd9a6b4> <label class=\"container text-white text-sm\" data-v-bfd9a6b4>Creating an account means you’re okay with our Terms of\n              Service, Privacy Policy, and our default Notification Settings.\n              <input type=\"checkbox\" checked=\"checked\" data-v-bfd9a6b4> <span class=\"checkmark\" data-v-bfd9a6b4></span></label> "),_vm._ssrNode("<button class=\"w-full bg-white text-white py-1 rounded-full my-1\" data-v-bfd9a6b4>","</button>",[_c('font-awesome-icon',{staticClass:"text-black rounded-full",staticStyle:{"width":"20px","height":"20px","padding":"1px margin-top:2px"},attrs:{"icon":['fas', 'user-plus']}}),_vm._ssrNode(" <span class=\"text-black\" data-v-bfd9a6b4>Sign Up</span>")],2)],2)],2)])],2)]),_vm._ssrNode(" <div class=\"landingfirst bg-black rounded-xl m-2\" data-v-bfd9a6b4><div class=\"flex flex-wrap overflow-hidden px-8 py-3\" data-v-bfd9a6b4><div class=\"md:w-3/5 px-4\" data-v-bfd9a6b4><h1 class=\"mb-3\" style=\"font-size: 47px; color: #ffdd22\" data-v-bfd9a6b4>\n          Everywhere at anytime you like\n        </h1> <p class=\"text-xl text-white\" style=\"font-size: 35px\" data-v-bfd9a6b4>\n          Awards Box available on smart TV, Apple TV, Android TV, mobile\n          phone, tablet, internet browser and PWA for free.\n        </p></div> <div class=\"md:w-2/5 p-2\" data-v-bfd9a6b4><img"+(_vm._ssrAttr("src",__webpack_require__(200)))+" alt data-v-bfd9a6b4></div></div></div> "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden m-2\" data-v-bfd9a6b4>","</div>",[_c('award-box'),_vm._ssrNode(" "),_c('award-box'),_vm._ssrNode(" "),_c('award-box'),_vm._ssrNode(" "),_c('award-box')],2),_vm._ssrNode(" "),_c('footer-side')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/landing.vue?vue&type=template&id=bfd9a6b4&scoped=true&

// EXTERNAL MODULE: ./src/components/buttons/loadmore.vue + 4 modules
var loadmore = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=template&id=47b6edc2&scoped=true&
var footervue_type_template_id_47b6edc2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-black rounded-xl mx-3"},[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden\" data-v-47b6edc2><div class=\"md:w-2/5 p-4\" data-v-47b6edc2><div class=\"flex flex-wrap overflow-hidden w-full\" data-v-47b6edc2><div class=\"md:w-1/3\" data-v-47b6edc2><h1 class=\"text-white font-bold\" data-v-47b6edc2>AWARDS</h1> <div class=\"mt-3\" data-v-47b6edc2><h1 class=\"text-gray-200 text-sm py-1\" data-v-47b6edc2>Academy Awards</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>Emmy Awards</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>BAFTA Awards</h1></div></div> <div class=\"md:w-1/3\" data-v-47b6edc2><h1 class=\"text-white font-bold\" data-v-47b6edc2>COMPANY</h1> <div class=\"mt-3\" data-v-47b6edc2><h1 class=\"text-gray-200 text-sm py-1\" data-v-47b6edc2>About</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>Contact</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>F.A.Q</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>Donate</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>Sitemap</h1></div></div> <div class=\"md:w-1/3\" data-v-47b6edc2><h1 class=\"text-white font-bold\" data-v-47b6edc2>LEGAL</h1> <div class=\"mt-3\" data-v-47b6edc2><h1 class=\"text-gray-200 text-sm py-1\" data-v-47b6edc2>Privacy</h1> <h1 class=\"text-white text-sm py-1\" data-v-47b6edc2>Terms</h1></div></div></div></div> <div class=\"md:w-3/5 p-4\" data-v-47b6edc2><div class=\"flex flex-wrap overflow-hidden w-full\" data-v-47b6edc2><div class=\"md:w-1/2\" data-v-47b6edc2><h1 class=\"text-white font-bold\" data-v-47b6edc2>SUBSCRIBE TO OUR NEWSLETTER</h1> <div class=\"mt-3\" data-v-47b6edc2><h1 class=\"text-gray-200 text-sm py-1\" data-v-47b6edc2>\n              The latest news and articles sent to your inbox weekly\n            </h1> <form action=\"/\" class=\"email-subscribe mb-2\" data-v-47b6edc2><div class=\"flex\" data-v-47b6edc2><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter your email\" data-v-47b6edc2> <br data-v-47b6edc2> <br data-v-47b6edc2> <input type=\"submit\" value=\"subscribe\" data-v-47b6edc2></div></form></div></div> <div class=\"md:w-1/2\" data-v-47b6edc2><h1 class=\"text-white font-bold mb-3\" data-v-47b6edc2>\n            EVERYWHERE AT ANY TIME YOU LIKE\n          </h1> <div class=\"flex flex-wrap overflow-hidden\" data-v-47b6edc2><div class=\"sm:w-1/3 p-1\" data-v-47b6edc2><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt class=\"h-10\" data-v-47b6edc2></div> <div class=\"sm:w-1/3 p-1\" data-v-47b6edc2><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt class=\"h-10\" data-v-47b6edc2></div> <div class=\"sm:w-1/3 p-1\" data-v-47b6edc2><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt class=\"h-10\" data-v-47b6edc2></div></div> <div class=\"flex flex-wrap overflow-hidden\" data-v-47b6edc2><div class=\"sm:w-1/3 p-1\" data-v-47b6edc2><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt class=\"h-10\" data-v-47b6edc2></div> <div class=\"sm:w-1/3 p-1\" data-v-47b6edc2><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt class=\"h-10\" data-v-47b6edc2></div> <div class=\"sm:w-1/3 p-1\" data-v-47b6edc2><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt class=\"h-10\" data-v-47b6edc2></div></div></div></div></div></div> <hr class=\"bg-white mx-4\" data-v-47b6edc2> "),_vm._ssrNode("<div class=\"flex px-4 mb-3\" data-v-47b6edc2>","</div>",[_c('logo'),_vm._ssrNode(" "),_vm._ssrNode("<p class=\"text-white text-sm mt-4 ml-3\" style=\"width: 100%\" data-v-47b6edc2>","</p>",[_vm._ssrNode("\n      © 2021 Awards Box, All rights reserved.Film data from TMDb &amp; Wikipedia\n      "),_c('font-awesome-icon',{staticClass:"eye-state float-right w-full mx-2",attrs:{"icon":['fab', 'twitter']}}),_vm._ssrNode(" "),_c('font-awesome-icon',{staticClass:"eye-state float-right w-full",attrs:{"icon":['fab', 'facebook']}})],2)],2)],2)}
var footervue_type_template_id_47b6edc2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/footer.vue?vue&type=template&id=47b6edc2&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  footervue_type_template_id_47b6edc2_scoped_true_render,
  footervue_type_template_id_47b6edc2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "47b6edc2",
  "6887165e"
  
)

/* harmony default export */ var footer = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(24).default})

// EXTERNAL MODULE: ./src/components/single/person/award.vue + 7 modules
var award = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/landing.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var landingvue_type_script_lang_js_ = ({
  layout: "signin",
  components: {
    LoadMore: loadmore["a" /* default */],
    FooterSide: footer,
    AwardBox: award["a" /* default */]
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 9,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          618: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./src/pages/landing.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_landingvue_type_script_lang_js_ = (landingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/landing.vue



function landing_injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var landing_component = Object(componentNormalizer["a" /* default */])(
  pages_landingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  landing_injectStyles,
  "bfd9a6b4",
  "3c54a2a2"
  
)

/* harmony default export */ var landing = __webpack_exports__["default"] = (landing_component.exports);

/***/ })

};;
//# sourceMappingURL=landing.js.map
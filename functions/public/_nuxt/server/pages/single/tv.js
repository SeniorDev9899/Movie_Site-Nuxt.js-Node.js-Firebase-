exports.ids = [23];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/permovie-test.dca9742.png";

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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Ellipse 32.5663839.png";

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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 30.119dc57.png";

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/actorlist/actor.vue?vue&type=template&id=c7ec01a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-2"},[_vm._ssrNode("<a href=\"/single/person\"><img"+(_vm._ssrAttr("src",__webpack_require__(118)))+" class=\"rounded-full w-full\"> <h1 class=\"text-center dark:text-white text-xs\">\n      Millie Bobby Brown Acting\n    </h1></a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/actorlist/actor.vue?vue&type=template&id=c7ec01a2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/actorlist/actor.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ffacd26"
  
)

/* harmony default export */ var actor = __webpack_exports__["a"] = (component.exports);

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jlJ8nDhMhCYJuzOw3f52CP1W8MW 1.603ef73.png";

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bt4xA9WZE9P1wiRILRFt0Zh2wmV 1.61c549f.png";

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/user/sharemodal.vue?vue&type=template&id=56f68e33&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-container"},[_vm._ssrNode("<div class=\"flex\"><div class=\"flex-1\"><p class=\"font-bold\">Share It</p></div></div> "),_vm._ssrNode("<div class=\"flex flex-wrapper overflow-hidden\">","</div>",[_vm._ssrNode("<div class=\"w-1/3 mr-1\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px"},attrs:{"icon":['fab', 'facebook']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on Facebook</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/3 mr-1\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px","color":"black","background":"white","border-radius":"59%"},attrs:{"icon":['fab', 'twitter']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on Twitter</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/3\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px"},attrs:{"icon":['fab', 'reddit']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on Reddit</p>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrapper overflow-hidden mt-2\">","</div>",[_vm._ssrNode("<div class=\"w-1/3 mr-1\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px"},attrs:{"icon":['fab', 'facebook-messenger']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on Messenger</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/3 mr-1\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px"},attrs:{"icon":['fab', 'pinterest']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on Pinterest</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/3\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px"},attrs:{"icon":['fab', 'telegram']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on Telegram</p>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrapper overflow-hidden mt-2\">","</div>",[_vm._ssrNode("<div class=\"w-1/3 mr-1\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px"},attrs:{"icon":['fab', 'whatsapp']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on WhatsApp</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/3 mr-1\">","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px","width":"14px","height":"14px","background":"white","color":"black","border-radius":"12px"},attrs:{"icon":['fab', 'linkedin-in']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Share on LinkedIn</p>")],2)])],2),_vm._ssrNode(" <div class=\"flex-1 mt-2\"><p class=\"font-bold\">Page Link</p></div> "),_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<div class=\"flex-1\"><input type=\"text\" value=\"https://awardsbox.com/\" id=\"data\" style=\"width: 100%; border: 1px solid; border-radius: 5px\"></div> "),_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full px-1 py-1 mx-2\">","</div>",[_c('font-awesome-icon',{staticStyle:{"margin-top":"4px","margin-right":"2px","width":"14px","height":"14px","background":"white","color":"black","border-radius":"12px","padding":"2px"},attrs:{"icon":['fas', 'copy']}}),_vm._ssrNode(" <p style=\"font-size: 14px\">Copy Link</p>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/user/sharemodal.vue?vue&type=template&id=56f68e33&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/user/sharemodal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sharemodalvue_type_script_lang_js_ = ({
  data() {
    return {
      showModal: false
    };
  },

  mounted() {},

  methods: {
    show() {
      this.showModal = true;
    },

    hide() {
      this.showModal = false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/user/sharemodal.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_sharemodalvue_type_script_lang_js_ = (sharemodalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/user/sharemodal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_sharemodalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7851ad99"
  
)

/* harmony default export */ var sharemodal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/actorlist/actorforeight.vue?vue&type=template&id=21ce497a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap overflow-hidden"},[_vm._ssrNode("<div class=\"w-1/4\">","</div>",[_c('per-actor')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4\">","</div>",[_c('per-actor')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4\">","</div>",[_c('per-actor')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/4\">","</div>",[_c('per-actor')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/actorlist/actorforeight.vue?vue&type=template&id=21ce497a&

// EXTERNAL MODULE: ./src/components/actorlist/actor.vue + 2 modules
var actor = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/actorlist/actorforeight.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var actorforeightvue_type_script_lang_js_ = ({
  components: {
    PerActor: actor["a" /* default */]
  }
});
// CONCATENATED MODULE: ./src/components/actorlist/actorforeight.vue?vue&type=script&lang=js&
 /* harmony default export */ var actorlist_actorforeightvue_type_script_lang_js_ = (actorforeightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/actorlist/actorforeight.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  actorlist_actorforeightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e9854e8"
  
)

/* harmony default export */ var actorforeight = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/moviebackdrop.vue?vue&type=template&id=3909a619&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap overflow-hidden content-center mx-3"},[_vm._ssrNode("<div class=\"xl:w-1/5 md:w-1/5 sm:w-1/ overflow-hidden\"><div class=\"py-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(143)))+" class=\"object-contain w-full\"></div></div> <div class=\"xl:w-4/5 md:w-4/5 sm:w-4/5 overflow-hidden\"><div class=\"py-3 mx-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(144)))+" class=\"object-contain w-full\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/moviebackdrop.vue?vue&type=template&id=3909a619&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/moviebackdrop.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "816efbb0"
  
)

/* harmony default export */ var moviebackdrop = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Reactangle-hulu.67f63e6.png";

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/addfavourite.vue?vue&type=template&id=151946b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden shadow-md  rounded-lg mr-2 px-3 dark:bg-custom-gray py-3"},[_vm._ssrNode("<div class=\"w-1/1 overflow-hidden my-2 mx-4\">","</div>",[_vm._ssrNode("<div class=\"flex bg-black text-white rounded-full p-1\">","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'heart']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\">Add to Favourites</h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/1 overflow-hidden my-2 mx-4\">","</div>",[_vm._ssrNode("<div class=\"flex bg-black text-white rounded-full p-1 \">","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'plus']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\">Add to Watchlist</h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/1 overflow-hidden my-2 mx-4\">","</div>",[_vm._ssrNode("<div class=\"flex bg-black text-white rounded-full p-1\">","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'check']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\">Seen it</h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/1 overflow-hidden mt-2 mb-1 mx-4\">","</div>",[_vm._ssrNode("<div class=\"flex bg-black text-white rounded-full p-1 \">","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'share-alt']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\">Share it</h1>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/addfavourite.vue?vue&type=template&id=151946b2&

// EXTERNAL MODULE: ./src/components/user/sharemodal.vue + 4 modules
var sharemodal = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/addfavourite.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var addfavouritevue_type_script_lang_js_ = ({
  components: {
    ShareModal: sharemodal["a" /* default */]
  },
  methods: {
    openModal() {
      this.$refs.sharemodal.show();
    },

    sharemodal() {
      this.$refs.modalfor.show();
    }

  }
});
// CONCATENATED MODULE: ./src/components/single/addfavourite.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_addfavouritevue_type_script_lang_js_ = (addfavouritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/addfavourite.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_addfavouritevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b707d114"
  
)

/* harmony default export */ var addfavourite = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/flagacademy.vue?vue&type=template&id=4db5945d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xl:w-1/5 academy"},[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden shadow-md rounded-lg mr-2 px-3 pt-2 bg-back-white dark:bg-black\" data-v-4db5945d>","</div>",[_vm._ssrNode("<div class=\"w-1/5\" data-v-4db5945d>","</div>",[_c('font-awesome-icon',{staticClass:"dark:text-white",attrs:{"icon":['fas', 'flag']}})],1),_vm._ssrNode(" <div class=\"w-4/5\" data-v-4db5945d><p class=\"font-bold dark:text-white\" data-v-4db5945d>5 Academy Awards</p> <div data-v-4db5945d><div data-v-4db5945d><p class=\"dark:text-white\" data-v-4db5945d>Best Actor</p> <p class=\"dark:text-white\" data-v-4db5945d>Best Director</p> <p class=\"dark:text-white\" data-v-4db5945d>Best Picture</p></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.readMore) ? '' : 'none' }))+" data-v-4db5945d><p class=\"dark:text-white\" data-v-4db5945d>Best Picture</p></div> <button class=\"text-custom-gray rounded-full px-1 py-1 text-sm\" data-v-4db5945d>"+((_vm.readMore)?("<span data-v-4db5945d><a data-show=\"Readmore\" Readmore-collapse=\"false\" class=\"showReadmores\" style=\"color: #6d7380\" data-v-4db5945d>...</a></span>"):("<span data-v-4db5945d><a data-show=\"Readmore\" Readmore-collapse=\"false\" class=\"showReadmores\" style=\"color: #6d7380\" data-v-4db5945d>...</a></span>"))+"</button></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/flagacademy.vue?vue&type=template&id=4db5945d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/flagacademy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var flagacademyvue_type_script_lang_js_ = ({
  data() {
    return {
      readMore: false
    };
  }

});
// CONCATENATED MODULE: ./src/components/single/flagacademy.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_flagacademyvue_type_script_lang_js_ = (flagacademyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/flagacademy.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_flagacademyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4db5945d",
  "3d97a622"
  
)

/* harmony default export */ var flagacademy = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/SpongeBobMovie.vue?vue&type=template&id=4f6bd073&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden shadow-md rounded-lg mr-2 px-3 bg-back-white dark:bg-black"},[_vm._ssrNode("<h1 class=\"text-xl pt-2 dark:text-white\">\n    The SpongeBob Movie: Sponge on the Run (2020)\n  </h1> <p class=\"text-sm pt-2 dark:text-white\">\n    When his best friend Gary is suddenly snatched away, SpongeBob takes\n    Patrick on a madcap mission far beyond Bikini Bottom to save their\n    pink-shelled pal.\n  </p> <a href=\"/single/company/company\"><p class=\"text-sm pt-2 dark:text-white\">Metro-Goldwyn-Mayer</p></a> <p class=\"text-sm pt-2 dark:text-white\">(US)</p> <p class=\"text-sm pt-2 dark:text-white\">\n    Animation, Fantasy, Adventure, Comedy, Family\n  </p> <p class=\"text-sm pt-2 dark:text-white pb-2\">1h 35m</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/SpongeBobMovie.vue?vue&type=template&id=4f6bd073&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/SpongeBobMovie.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "036f843a"
  
)

/* harmony default export */ var SpongeBobMovie = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/single/wheretowatch.vue?vue&type=template&id=aa12f6da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden px-3 pb-2"},[_vm._ssrNode("<h1 class=\"text-xl pt-2 dark:text-white\">Where to Watch</h1> <div class=\"flex flex-wrap overflow0-hidden content-conter pt-3\"><div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(116)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(117)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(138)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(136)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(153)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(139)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(140)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(141)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(136)))+"></div> <div class=\"w-1/5 overflow-hidden\"><img"+(_vm._ssrAttr("src",__webpack_require__(142)))+"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/single/wheretowatch.vue?vue&type=template&id=aa12f6da&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/single/wheretowatch.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "41d9278a"
  
)

/* harmony default export */ var wheretowatch = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(270);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("65477230", content, true, context)
};

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_style_index_0_id_6913dd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_style_index_0_id_6913dd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_style_index_0_id_6913dd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_style_index_0_id_6913dd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_style_index_0_id_6913dd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-footer[data-v-6913dd71],.modal-header[data-v-6913dd71]{display:none}@media only screen and (max-width:640px){.academy[data-v-6913dd71]{width:100%;margin-bottom:10px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/tv.vue?vue&type=template&id=6913dd71&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('movie-drop'),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"bv-modal-example","hide-footer":"","hide-header":""}},[_c('div',{staticClass:"d-block text-center"}),_vm._v(" "),_c('img',{staticStyle:{"display":"block","margin-left":"auto","margin-right":"auto"},attrs:{"src":__webpack_require__(132),"alt":""}}),_vm._v(" "),_c('share-modal')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden content-center mx-3 pb-3\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"xl:w-2/4 md:w-2/4\" data-v-6913dd71>","</div>",[_c('sponge-bob')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/4 bg-back-white dark:bg-black shadow-md rounded-lg px-3 pb-2\" data-v-6913dd71>","</div>",[_c('to-watch')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-1/4 md:w-1/4 pl-1 shadow-md rounded-lg px-3 bg-back-white dark:bg-black py-3 w-full\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"overflow-hidden\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"w-1/1 overflow-hidden my-2 mx-4\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full p-1\" data-v-6913dd71>","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'heart']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\" data-v-6913dd71>\n              Add to Favourites\n            </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/1 overflow-hidden my-2 mx-4\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full p-1\" data-v-6913dd71>","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'plus']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\" data-v-6913dd71>\n              Add to Watchlist\n            </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/1 overflow-hidden my-2 mx-4\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"flex bg-custom-gray text-white rounded-full p-1\" data-v-6913dd71>","</div>",[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'check']}}),_vm._ssrNode(" <h1 class=\"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1\" data-v-6913dd71>\n              Seen it\n            </h1>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-1/1 overflow-hidden mt-2 mb-1 mx-4\" data-v-6913dd71>","</div>",[_c('b-button',{staticStyle:{"background":"none","border":"none","padding":"0"},attrs:{"id":"show-btn"},on:{"click":function($event){return _vm.$bvModal.show('bv-modal-example')}}},[_c('div',{staticClass:"flex bg-custom-gray text-white rounded-full p-1"},[_c('font-awesome-icon',{staticClass:"pt-1",attrs:{"icon":['fas', 'share-alt']}}),_vm._v(" "),_c('h1',{staticClass:"text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1"},[_vm._v("\n                Share it\n              ")])],1)])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 my-3\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"xl:w-4/5\" data-v-6913dd71><div class=\"text-xl dark:text-white\" data-v-6913dd71>\n        What <span class=\"font-bold\" data-v-6913dd71>Awards </span> have the The SpongeBob\n        Movie: Sponge on the Run (2020)won?\n      </div></div> "),_vm._ssrNode("<div class=\"xl:w-1/5\" data-v-6913dd71>","</div>",[_vm._ssrNode("<a href=\"/single/movieaward\" data-v-6913dd71>","</a>",[_c('see-all')],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 pb-3\" data-v-6913dd71>","</div>",[_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy'),_vm._ssrNode(" "),_c('five-academy')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 my-3\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"xl:w-4/5\" data-v-6913dd71><div class=\"text-xl dark:text-white\" data-v-6913dd71>\n        What <span class=\"font-bold\" data-v-6913dd71>Nominations </span> have the The\n        SpongeBob Movie: Sponge on the Run (2020)?\n      </div></div> "),_vm._ssrNode("<div class=\"xl:w-1/5\" data-v-6913dd71>","</div>",[_vm._ssrNode("<a href=\"/single/movieaward\" data-v-6913dd71>","</a>",[_c('see-all')],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 pb-3\" data-v-6913dd71>","</div>",[_c('flag-academy'),_vm._ssrNode(" "),_c('flag-academy'),_vm._ssrNode(" "),_c('flag-academy'),_vm._ssrNode(" "),_c('flag-academy'),_vm._ssrNode(" "),_c('flag-academy')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-3 pb-3\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"xl:w-2/5\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-2 my-3\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"xl:w-4/5\" data-v-6913dd71><div class=\"text-xl dark:text-white\" data-v-6913dd71>Cast &amp; Crew</div></div> "),_vm._ssrNode("<div class=\"xl:w-1/5\" data-v-6913dd71>","</div>",[_c('see-all')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden shadow-md rounded-lg mr-2 px-3 py-4 bg-back-white dark:bg-black\" data-v-6913dd71>","</div>",[_c('actor-eight'),_vm._ssrNode(" "),_c('actor-eight')],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"xl:w-3/5\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-2 my-3\" data-v-6913dd71>","</div>",[_vm._ssrNode("<div class=\"xl:w-4/5\" data-v-6913dd71><div class=\"text-xl dark:text-white\" data-v-6913dd71>\n            Related Award Winning Movies\n          </div></div> "),_vm._ssrNode("<div class=\"xl:w-1/5\" data-v-6913dd71>","</div>",[_c('see-all')],1)],2),_vm._ssrNode(" <div class=\"flex flex-wrap overflow-hidden rounded-lg mr-2 px-3 pt-2\" data-v-6913dd71><div class=\"xl:w-1/3 px-1\" data-v-6913dd71><a href=\"/single/movie\" data-v-6913dd71><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\" data-v-6913dd71> <div data-v-2a183b29 class=\"pt-2\" data-v-6913dd71><h1 data-v-2a183b29 class=\"dark:text-white text-xs\" data-v-6913dd71>\n                Eternal Sunshine of the Spotless Mind(2014)\n              </h1></div></a></div> <div class=\"xl:w-1/3 px-1\" data-v-6913dd71><a href=\"/single/movie\" data-v-6913dd71><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\" data-v-6913dd71> <div data-v-2a183b29 class=\"pt-2\" data-v-6913dd71><h1 data-v-2a183b29 class=\"dark:text-white text-xs\" data-v-6913dd71>\n                Eternal Sunshine of the Spotless Mind(2014)\n              </h1></div></a></div> <div class=\"xl:w-1/3 px-1\" data-v-6913dd71><a href=\"/single/movie\" data-v-6913dd71><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt data-v-2a183b29 class=\"w-full\" data-v-6913dd71> <div data-v-2a183b29 class=\"pt-2\" data-v-6913dd71><h1 data-v-2a183b29 class=\"dark:text-white text-xs\" data-v-6913dd71>\n                Eternal Sunshine of the Spotless Mind(2014)\n              </h1></div></a></div></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/single/tv.vue?vue&type=template&id=6913dd71&scoped=true&

// EXTERNAL MODULE: ./src/components/single/moviebackdrop.vue + 2 modules
var moviebackdrop = __webpack_require__(151);

// EXTERNAL MODULE: ./src/components/single/SpongeBobMovie.vue + 2 modules
var SpongeBobMovie = __webpack_require__(157);

// EXTERNAL MODULE: ./src/components/single/wheretowatch.vue + 2 modules
var wheretowatch = __webpack_require__(158);

// EXTERNAL MODULE: ./src/components/single/addfavourite.vue + 4 modules
var addfavourite = __webpack_require__(154);

// EXTERNAL MODULE: ./src/components/single/fiveacademy.vue + 4 modules
var fiveacademy = __webpack_require__(125);

// EXTERNAL MODULE: ./src/components/buttons/seeall.vue + 4 modules
var seeall = __webpack_require__(110);

// EXTERNAL MODULE: ./src/components/single/flagacademy.vue + 4 modules
var flagacademy = __webpack_require__(155);

// EXTERNAL MODULE: ./src/components/actorlist/actorforeight.vue + 4 modules
var actorforeight = __webpack_require__(150);

// EXTERNAL MODULE: ./src/components/searchfilter/movie/per-movie.vue + 2 modules
var per_movie = __webpack_require__(111);

// EXTERNAL MODULE: ./src/components/user/sharemodal.vue + 4 modules
var sharemodal = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/tv.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var tvvue_type_script_lang_js_ = ({
  components: {
    MovieDrop: moviebackdrop["a" /* default */],
    SpongeBob: SpongeBobMovie["a" /* default */],
    ToWatch: wheretowatch["a" /* default */],
    AddFavo: addfavourite["a" /* default */],
    FiveAcademy: fiveacademy["a" /* default */],
    SeeAll: seeall["a" /* default */],
    FlagAcademy: flagacademy["a" /* default */],
    ActorEight: actorforeight["a" /* default */],
    PerMovie: per_movie["default"],
    ShareModal: sharemodal["a" /* default */]
  },
  methods: {
    openModal() {
      this.$refs.modal.show();
    },

    openModalshare() {
      this.$refs.modalshare.show();
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/single/tv.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_tvvue_type_script_lang_js_ = (tvvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/single/tv.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(269)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_tvvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6913dd71",
  "ab1648a4"
  
)

/* harmony default export */ var tv = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tv.js.map
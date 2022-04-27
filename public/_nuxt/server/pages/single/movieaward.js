exports.ids = [19];
exports.modules = {

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jlJ8nDhMhCYJuzOw3f52CP1W8MW 1.603ef73.png";

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bt4xA9WZE9P1wiRILRFt0Zh2wmV 1.61c549f.png";

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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/movieaward.vue?vue&type=template&id=30077617&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('movie-drop'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('load-more'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('six-star'),_vm._ssrNode(" "),_c('load-more')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/single/movieaward.vue?vue&type=template&id=30077617&scoped=true&

// EXTERNAL MODULE: ./src/components/single/moviebackdrop.vue + 2 modules
var moviebackdrop = __webpack_require__(151);

// EXTERNAL MODULE: ./src/components/single/award/sixstar.vue + 4 modules
var sixstar = __webpack_require__(130);

// EXTERNAL MODULE: ./src/components/buttons/loadmore.vue + 4 modules
var loadmore = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/single/movieaward.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var movieawardvue_type_script_lang_js_ = ({
  components: {
    MovieDrop: moviebackdrop["a" /* default */],
    SixStar: sixstar["a" /* default */],
    LoadMore: loadmore["a" /* default */]
  },

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/single/movieaward.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_movieawardvue_type_script_lang_js_ = (movieawardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/single/movieaward.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_movieawardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "30077617",
  "91fe364e"
  
)

/* harmony default export */ var movieaward = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=movieaward.js.map
exports.ids = [2];
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("75dedc74", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/blog/automatic-blog.vue?vue&type=template&id=42909706&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md:w-1/4 sm:w-1/2 overflow-hidden rounded-md overflow-hidden mb-3"},[_vm._ssrNode("<div class=\"mx-2\" data-v-42909706>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(235)))+" class=\"w-full\" data-v-42909706> "),_vm._ssrNode("<div class=\"px-3 bg-back-white dark:bg-black\" data-v-42909706>","</div>",[_vm._ssrNode("<div class=\"text-lg py-2 dark:text-white\" data-v-42909706>The Coldest Sunset</div> <div class=\"dark:text-white text-sm\" data-v-42909706><p data-v-42909706>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          Venenatis lectus magna fringilla urna. Etiam tempor orci eu\n          lobortis. Integer quis auctor elit sed vulputate mi sit. Lacinia\n          "+((_vm.readMore)?("<span data-v-42909706></span>"):("<span data-v-42909706>...</span>"))+"</p> <p"+(_vm._ssrStyle(null,null, { display: (_vm.readMore) ? '' : 'none' }))+" data-v-42909706>\n          Ligula ullamcorper malesuada proin libero nunc consequat interdum\n          varius. Turpis egestas pretium aenean pharetra magna ac placerat.\n          Sed egestas egestas fringilla phasellus faucibus scelerisque\n          eleifend donec. Sed cras ornare arcu dui. Aliquam vestibulum morbi\n          blandit cursus. Adipiscing elit ut aliquam purus sit amet. Aenean\n          sed adipiscing diam donec adipiscing tristique risus nec. Ut etiam\n          sit amet nisl purus\n        </p> <button data-v-42909706>"+((_vm.readMore)?("<span class=\"readMore\" data-v-42909706> Read Less </span>"):("<span class=\"readMore\" data-v-42909706> Read More </span>"))+"</button></div> "),_vm._ssrNode("<div class=\"mt-2\" data-v-42909706>","</div>",[_vm._ssrNode("<span class=\"inline-block bg-custom-gray rounded-full px-2 py-1 text-sm text-white mb-2\" style=\"font-size: 11px\" data-v-42909706>","</span>",[_c('font-awesome-icon',{attrs:{"icon":['fas', 'star']}}),_vm._ssrNode("\n          Won 14 Awards\n        ")],2),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"inline-block bg-custom-gray rounded-full px-2 py-1 text-sm text-white mb-2\" style=\"font-size: 11px\" data-v-42909706>","</span>",[_c('font-awesome-icon',{attrs:{"icon":['fas', 'flag']}}),_vm._ssrNode("\n          20 Nominations\n        ")],2)],2),_vm._ssrNode(" <div class=\"pt-1 pb-2 dark:text-white\" data-v-42909706>\n        Where to Watch\n        <div class=\"flex flex-wrap overflow-hidden pr-4\" data-v-42909706><div class=\"w-1/4 overflow-hidden p-1\" data-v-42909706><img"+(_vm._ssrAttr("src",__webpack_require__(236)))+" class=\"w-full\" data-v-42909706></div> <div class=\"w-1/4 overflow-hidden p-1\" data-v-42909706><img"+(_vm._ssrAttr("src",__webpack_require__(237)))+" class=\"w-full\" data-v-42909706></div> <div class=\"w-1/4 overflow-hidden p-1\" data-v-42909706><img"+(_vm._ssrAttr("src",__webpack_require__(238)))+" class=\"w-full\" data-v-42909706></div> <div class=\"w-1/4 overflow-hidden p-1\" data-v-42909706><img"+(_vm._ssrAttr("src",__webpack_require__(239)))+" class=\"w-full\" data-v-42909706></div></div></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/blog/automatic-blog.vue?vue&type=template&id=42909706&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/blog/automatic-blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var automatic_blogvue_type_script_lang_js_ = ({
  data() {
    return {
      readMore: false
    };
  }

});
// CONCATENATED MODULE: ./src/components/blog/automatic-blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_automatic_blogvue_type_script_lang_js_ = (automatic_blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/blog/automatic-blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_automatic_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "42909706",
  "21979bb8"
  
)

/* harmony default export */ var automatic_blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Image (1).dae6c92.png";

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 22.7009b73.png";

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 23.3aec176.png";

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 21.c76baad.png";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 105.0d4613f.png";

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_automatic_blog_vue_vue_type_style_index_0_id_42909706_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_automatic_blog_vue_vue_type_style_index_0_id_42909706_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_automatic_blog_vue_vue_type_style_index_0_id_42909706_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_automatic_blog_vue_vue_type_style_index_0_id_42909706_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_automatic_blog_vue_vue_type_style_index_0_id_42909706_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".readMore[data-v-42909706]{font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/blog/automatic-blog.vue?vue&type=template&id=2aeea79a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"mx-3\"><p class=\"dark:text-white mb-1 mt-2 text-xl\">\n      Academy Award-Winning 1950 Movies\n    </p></div> "),_vm._ssrNode("<div class=\"flex flex-wrap overflow-hidden mx-2\">","</div>",[_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog'),_vm._ssrNode(" "),_c('automatic-blog')],2),_vm._ssrNode(" "),_c('load-more')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/blog/automatic-blog.vue?vue&type=template&id=2aeea79a&

// EXTERNAL MODULE: ./src/components/blog/automatic-blog.vue + 4 modules
var automatic_blog = __webpack_require__(195);

// EXTERNAL MODULE: ./src/components/buttons/loadmore.vue + 4 modules
var loadmore = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/blog/automatic-blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var automatic_blogvue_type_script_lang_js_ = ({
  components: {
    AutomaticBlog: automatic_blog["default"],
    LoadMore: loadmore["a" /* default */]
  },

  mounted() {},

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./src/pages/blog/automatic-blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_automatic_blogvue_type_script_lang_js_ = (automatic_blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/blog/automatic-blog.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_automatic_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36051ad4"
  
)

/* harmony default export */ var blog_automatic_blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AutomaticBlog: __webpack_require__(195).default})


/***/ })

};;
//# sourceMappingURL=automatic-blog.js.map
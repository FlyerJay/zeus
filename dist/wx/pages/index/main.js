require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(113);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fd5e527_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5fd5e527"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fd5e527_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fd5e527", Component.options)
  } else {
    hotAPI.reload("data-v-5fd5e527", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_message_notify__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_demand_item__ = __webpack_require__(47);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dots: true,
      autoplay: true,
      interval: 5000,
      duration: 100,
      circular: true,
      swiperItems: [{
        text: '你好',
        image: '../../static/banner/banner0.jpg'
      }, {
        text: '很好',
        image: '../../static/banner/banner1.jpg'
      }, {
        text: '很好',
        image: '../../static/banner/banner2.jpg'
      }],
      message: '',
      messageList: [],
      demandPage: 1,
      demandList: []
    };
  },


  components: {
    'message-notify': __WEBPACK_IMPORTED_MODULE_1__components_message_notify__["a" /* default */],
    'demand-item': __WEBPACK_IMPORTED_MODULE_2__components_demand_item__["a" /* default */]
  },

  mounted: function mounted() {
    this.getMessageIndex();
    this.getDemandList();
  },


  methods: {
    // 获取首页重要通知
    getMessageIndex: function getMessageIndex() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/message/list',
        data: { messageType: 1 }
      }).then(function (response) {
        if (response.code === 200) _this.messageList = response.data.row;
      });
    },
    navigateToDemand: function navigateToDemand() {
      wx.switchTab({ url: '../demand/main' });
    },
    navigateToProduct: function navigateToProduct() {
      wx.navigateTo({ url: '../product/main' });
    },
    navigateToMarket: function navigateToMarket() {
      wx.navigateTo({ url: '../market/main' });
    },
    navigateToList: function navigateToList() {
      wx.navigateTo({ url: '../demand-list/main' });
    },
    getDemandList: function getDemandList() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: '/demand/list',
        data: {
          page: this.demandPage,
          pageSize: 5
        }
      }).then(function (response) {
        if (response.code === 200) {
          _this2.demandList = response.data.row;
        }
      });
    }

    // loadMore () {
    //   this.demandPage ++
    //   ajax({
    //     url: '/demand/list',
    //     data: {
    //       page: this.demandPage
    //     }
    //   }).then(response => {
    //     if (response.code === 200) {
    //       this.demandList.push(...response.data.row)
    //       this.$set(this, 'demandList', this.demandList)
    //     }
    //   })
    // },

    // scrollToLower () {
    //   this.loadMore()
    // }

  }
});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_message_notify_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0ef22585_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_message_notify_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ef22585"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_message_notify_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0ef22585_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_message_notify_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/message-notify.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] message-notify.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ef22585", Component.options)
  } else {
    hotAPI.reload("data-v-0ef22585", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'message-notify',

    description: '首页消息通知 - 滚动',

    props: {
        messageList: Array,
        duration: {
            type: Number,
            default: 5000
        }
    },

    data: function data() {
        return {
            timeObserve: null,
            activeIndex: -1,
            animationData: {},
            animation: null
        };
    },
    created: function created() {
        var _this = this;

        this.timeObserve = setInterval(function () {
            if (_this.activeIndex < _this.messageList.length - 1 && _this.messageList.length !== 0) {
                _this.activeIndex++;
            } else {
                _this.activeIndex = 0;
            }
        }, this.duration);
        this.animation = wx.createAnimation({ duration: 2000 });
    },


    watch: {
        activeIndex: function activeIndex() {
            var _this2 = this;

            wx.nextTick(function () {
                _this2.notifyAnimate();
            });
        }
    },

    methods: {
        notifyAnimate: function notifyAnimate() {
            var _this3 = this;

            var query = wx.createSelectorQuery();
            query.select('.notify-text').boundingClientRect();
            query.select('.notify-content').boundingClientRect();
            query.exec(function (result) {
                var nodeText = result[0];
                var nodeContent = result[1];
                if (!nodeText || !nodeContent) return;
                if (nodeText.width + 10 > nodeContent.width) {
                    _this3.animation.translateX(nodeContent.width - nodeText.width - 40).step();
                    _this3.animationData = _this3.animation.export();
                }
            });
            this.animation.translateX(0).step();
            this.animationData = this.animation.export();
        }
    },

    computed: {
        notify: function notify() {
            if (this.activeIndex >= 0) return this.messageList[this.activeIndex];
            return {};
        },
        timeFormat: function timeFormat() {
            if (this.notify.createTime) {
                var date = new Date(this.notify.createTime - 0);
                return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* formatDate */])(date);
            }
            return '';
        }
    },

    beforeDestroy: function beforeDestroy() {
        clearInterval(this.timeObserve);
        this.timeObserve = null;
    }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message-notify"
  }, [_c('text', {
    staticClass: "iconfont icon-notify"
  }), _vm._v(" "), _c('div', {
    staticClass: "notify-content"
  }, [_c('text', {
    staticClass: "notify-text",
    attrs: {
      "animation": _vm.animationData
    }
  }, [_vm._v(_vm._s(_vm.notify.message || '重要通知'))])]), _vm._v(" "), _c('text', {
    staticClass: "notify-time"
  }, [_vm._v(_vm._s(_vm.timeFormat))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ef22585", esExports)
  }
}

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page index"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.dots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "circular": _vm.circular
    }
  }, _vm._l((_vm.swiperItems), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "banner-image",
      attrs: {
        "src": item.image
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "menu"
  }, [_c('div', {
    staticClass: "menu-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "tap": _vm.navigateToProduct
    }
  }, [_c('i', {
    staticClass: "iconfont icon-product"
  }), _vm._v(" "), _c('p', [_vm._v("现货查询")])], 1), _vm._v(" "), _c('div', {
    staticClass: "menu-item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": _vm.navigateToDemand
    }
  }, [_c('i', {
    staticClass: "iconfont icon-demand"
  }), _vm._v(" "), _c('p', [_vm._v("定制需求")])], 1), _vm._v(" "), _c('div', {
    staticClass: "menu-item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.navigateToMarket
    }
  }, [_c('i', {
    staticClass: "iconfont icon-report"
  }), _vm._v(" "), _c('p', [_vm._v("行情信息")])], 1)]), _vm._v(" "), (_vm.messageList.length > 0) ? _c('message-notify', {
    attrs: {
      "messageList": _vm.messageList,
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "demand-list-title"
  }, [_c('text', [_vm._v("定制需求列表")]), _vm._v(" "), _c('text', {
    staticClass: "view-more",
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.navigateToList
    }
  }, [_vm._v("查看更多"), _c('text', {
    staticClass: "iconfont icon-arrow"
  })])]), _vm._v(" "), _c('scroll-view', {
    staticClass: "demand-list",
    attrs: {
      "scroll-y": "",
      "enable-back-to-top": ""
    }
  }, _vm._l((_vm.demandList), function(item, index) {
    return _c('demand-item', {
      key: index,
      attrs: {
        "data": item,
        "mpcomid": '2-' + index
      }
    })
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fd5e527", esExports)
  }
}

/***/ })

},[112]);
//# sourceMappingURL=main.js.map
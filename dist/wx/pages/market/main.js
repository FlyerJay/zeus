require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(131);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ddb8b846_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ddb8b846"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ddb8b846_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/market/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ddb8b846", Component.options)
  } else {
    hotAPI.reload("data-v-ddb8b846", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_market_item__ = __webpack_require__(134);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_2__utils_data__["a" /* specList */].forEach(function (item) {
    return item.unshift('全部');
});
__WEBPACK_IMPORTED_MODULE_2__utils_data__["b" /* typeList */].unshift('全部');

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'market',

    description: '行情信息',

    data: function data() {
        return {
            marketList: [], // 行情信息列表
            addressList: [], // 地址列表
            supplierList: [], // 供应商列表
            specList: __WEBPACK_IMPORTED_MODULE_2__utils_data__["a" /* specList */],
            typeList: __WEBPACK_IMPORTED_MODULE_2__utils_data__["b" /* typeList */],
            query: {
                page: 1,
                spec: '',
                address: '',
                type: '',
                supplierName: ''
            },
            continueLoadVisible: false,
            isLoading: false
        };
    },


    components: {
        'market-item': __WEBPACK_IMPORTED_MODULE_3__components_market_item__["a" /* default */]
    },

    mounted: function mounted() {
        this.getMarketList();
        this.getAddressList();
        this.getSupplierList();
    },


    methods: {
        getMarketList: function getMarketList() {
            var _this = this;

            this.query.page = 1;
            wx.showLoading({ title: '加载中' });
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/price/list',
                data: this.query
            }).then(function (response) {
                wx.hideLoading();
                if (response.code === 200) {
                    _this.marketList = response.data.row;
                    _this.canLoad(response.data.totalCount);
                }
                return true;
            });
        },
        getAddressList: function getAddressList() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/supplier/address'
            }).then(function (response) {
                if (response.code === 200) {
                    _this2.addressList = response.data.map(function (item) {
                        return item.address;
                    });
                    _this2.addressList.unshift('全部');
                }
            });
        },
        getSupplierList: function getSupplierList() {
            var _this3 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/supplier/list',
                data: {
                    page: 1,
                    pageSize: 100
                }
            }).then(function (response) {
                if (response.code === 200) {
                    _this3.supplierList = response.data.row.filter(function (item) {
                        return item.isValide === 1;
                    }).map(function (item) {
                        return item.supplierName;
                    });
                    _this3.supplierList.unshift('全部');
                }
            });
        },
        changeSpec: function changeSpec(e) {
            var oldValue = this.query.spec;
            var specArray = [];
            var spec1 = this.specList[0][e.mp.detail.value[0]];
            var spec2 = this.specList[1][e.mp.detail.value[1]];
            var spec3 = this.specList[2][e.mp.detail.value[2]];
            if (spec1 !== '全部') specArray.push(spec1);
            if (spec2 !== '全部') specArray.push(spec2);
            if (spec3 !== '全部') specArray.push(spec3);
            this.query.spec = specArray.join('*');

            if (oldValue !== this.query.spec) {
                this.getMarketList();
            }
        },
        changeType: function changeType(e) {
            var oldValue = this.query.type;
            this.query.type = this.typeList[e.mp.detail.value];
            if (this.query.type === '全部') {
                this.query.type = '';
            }
            if (oldValue !== this.query.type) {
                this.getMarketList();
            }
        },
        changeAddress: function changeAddress(e) {
            var oldValue = this.query.address;
            this.query.address = this.addressList[e.mp.detail.value];
            if (this.query.address === '全部') {
                this.query.address = '';
            }
            if (oldValue !== this.query.address) {
                this.getMarketList();
            }
        },
        changeSupllier: function changeSupllier(e) {
            var oldValue = this.query.supplierName;
            this.query.supplierName = this.supplierList[e.mp.detail.value];
            if (this.query.supplierName === '全部') {
                this.query.supplierName = '';
            }
            if (oldValue !== this.query.supplierName) {
                this.getMarketList();
            }
        },


        // 可以加载更多吗 ？
        canLoad: function canLoad(total) {
            if (this.marketList.length !== 0 && this.marketList.length < total) {
                this.continueLoadVisible = true;
            } else {
                this.continueLoadVisible = false;
            }
        },
        continueLoad: function continueLoad(e) {
            var _this4 = this;

            this.query.page++;
            this.isLoading = true;
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/price/list',
                data: this.query
            }).then(function (response) {
                _this4.isLoading = false;
                if (response.code === 200) {
                    var _marketList;

                    (_marketList = _this4.marketList).push.apply(_marketList, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(response.data.row));
                    _this4.canLoad(response.data.totalCount);
                }
            });
        },


        // 数据重置
        reset: function reset() {
            this.isLoading = false;
            this.marketList = [];
            this.addressList = [];
            this.supplierList = [];
            this.query.page = 1;
            this.query.spec = '';
            this.query.type = '';
            this.query.address = '';
            this.query.supplierName = '';
            this.continueLoadVisible = false;
            this.isLoading = false;
        }
    },

    onPullDownRefresh: function onPullDownRefresh(a) {
        this.reset();
        this.getMarketList().then(function () {
            wx.stopPullDownRefresh();
        });
        this.getAddressList();
        this.getSupplierList();
    }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_market_item_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0aae5cbe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_market_item_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0aae5cbe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_market_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0aae5cbe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_market_item_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/market-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] market-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0aae5cbe", Component.options)
  } else {
    hotAPI.reload("data-v-0aae5cbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'market-item',

    description: '行情信息',

    props: {
        data: Object
    }
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "market-item"
  }, [_c('div', {
    staticClass: "data-part"
  }, [_c('div', {
    staticClass: "data spec"
  }, [_vm._v("\n            " + _vm._s(_vm.data.spec) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "data-part"
  }, [_c('div', {
    staticClass: "data-line"
  }, [_c('div', {
    staticClass: "data type"
  }, [_vm._v("\n                " + _vm._s(_vm.data.type) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "data update-time"
  }, [_vm._v("\n                " + _vm._s(_vm.data.lastUpdateTime) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "data-line"
  }, [_c('div', {
    staticClass: "data supplier"
  }, [_vm._v("\n                " + _vm._s(_vm.data.supplierName) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "data price"
  }, [_vm._v("\n                " + _vm._s(_vm.data.value) + "\n            ")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0aae5cbe", esExports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "market page"
  }, [_c('div', {
    staticClass: "market-filter"
  }, [_c('div', {
    staticClass: "filter-item"
  }, [_c('picker', {
    attrs: {
      "range": _vm.specList,
      "mode": "multiSelector",
      "eventid": '0'
    },
    on: {
      "change": _vm.changeSpec
    }
  }, [_c('div', {
    staticClass: "filter-picker"
  }, [(_vm.query.spec) ? [_c('text', [_vm._v(_vm._s(_vm.query.spec))])] : [_c('text', [_vm._v("规格")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2)])], 1), _vm._v(" "), _c('div', {
    staticClass: "filter-item"
  }, [_c('picker', {
    attrs: {
      "range": _vm.typeList,
      "eventid": '1'
    },
    on: {
      "change": _vm.changeType
    }
  }, [_c('div', {
    staticClass: "filter-picker"
  }, [(_vm.query.type) ? [_c('text', [_vm._v(_vm._s(_vm.query.type))])] : [_c('text', [_vm._v("类型")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2)])], 1), _vm._v(" "), _c('div', {
    staticClass: "filter-item"
  }, [_c('picker', {
    attrs: {
      "range": _vm.addressList,
      "eventid": '2'
    },
    on: {
      "change": _vm.changeAddress
    }
  }, [_c('div', {
    staticClass: "filter-picker"
  }, [(_vm.query.address) ? [_c('text', [_vm._v(_vm._s(_vm.query.address))])] : [_c('text', [_vm._v("供应商所在地")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2)])], 1), _vm._v(" "), _c('div', {
    staticClass: "filter-item"
  }, [_c('picker', {
    attrs: {
      "range": _vm.supplierList,
      "eventid": '3'
    },
    on: {
      "change": _vm.changeSupllier
    }
  }, [_c('div', {
    staticClass: "filter-picker"
  }, [(_vm.query.supplierName) ? [_c('text', [_vm._v(_vm._s(_vm.query.supplierName))])] : [_c('text', [_vm._v("供应商名称")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2)])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "market-list"
  }, [_vm._l((_vm.marketList), function(item, index) {
    return _c('market-item', {
      key: index,
      attrs: {
        "data": item,
        "mpcomid": '8-' + index
      }
    })
  }), _vm._v(" "), (_vm.continueLoadVisible) ? _c('div', {
    staticClass: "continue"
  }, [_c('button', {
    attrs: {
      "loading": _vm.isLoading,
      "eventid": '4'
    },
    on: {
      "click": _vm.continueLoad
    }
  }, [_vm._v("加载更多")])], 1) : _vm._e()], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ddb8b846", esExports)
  }
}

/***/ })

},[130]);
//# sourceMappingURL=main.js.map
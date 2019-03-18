require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(140);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bd5c284_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4bd5c284"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bd5c284_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/product/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bd5c284", Component.options)
  } else {
    hotAPI.reload("data-v-4bd5c284", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_item__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_data__ = __webpack_require__(28);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'product',

    description: '现货查询',

    data: function data() {
        return {
            originList: [], // 未排序的数据
            productList: [], // 排序后的数据
            query: {
                page: 1,
                spec: '', // 规格
                type: '', // 类型
                address: '' // 供应商所在地
            },
            specList: __WEBPACK_IMPORTED_MODULE_3__utils_data__["a" /* specList */],
            typeList: __WEBPACK_IMPORTED_MODULE_3__utils_data__["b" /* typeList */],
            addressList: [],
            sortMethod: '', // 排序方式
            sortDialogVisible: false, // 排序窗口是否可见
            continueLoadVisible: false, // 继续加载是否可见
            isLoading: false
        };
    },


    components: {
        'product-item': __WEBPACK_IMPORTED_MODULE_2__components_product_item__["a" /* default */]
    },

    mounted: function mounted() {
        this.getProductList();
        this.getAddressList();
    },


    watch: {
        sortMethod: function sortMethod() {
            this.sort();
        }
    },

    methods: {
        getProductList: function getProductList() {
            var _this = this;

            this.query.page = 1;
            wx.showLoading({ title: '数据加载中' });
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/product/list',
                data: this.query
            }).then(function (response) {
                wx.hideLoading();
                if (response.code === 200) {
                    _this.originList = response.data.row;
                    _this.canLoad(response.data.totalCount);
                    _this.sort();
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
                this.getProductList();
            }
        },
        changeType: function changeType(e) {
            var oldValue = this.query.type;
            this.query.type = this.typeList[e.mp.detail.value];
            if (this.query.type === '全部') {
                this.query.type = '';
            }
            if (oldValue !== this.query.type) {
                this.getProductList();
            }
        },
        changeAddress: function changeAddress(e) {
            var oldValue = this.query.address;
            this.query.address = this.addressList[e.mp.detail.value];
            if (this.query.address === '全部') {
                this.query.address = '';
            }
            if (oldValue !== this.query.address) {
                this.getProductList();
            }
        },


        // 排序
        sort: function sort() {
            // shallow copy
            var sortList = this.originList.slice();
            switch (this.sortMethod) {
                case 1:
                    this.productList = sortList.sort(function (a, b) {
                        return a.value - b.value;
                    });
                    break;
                case 2:
                    this.productList = sortList.sort(function (a, b) {
                        return b.value - a.value;
                    });
                    break;
                case 3:
                    this.productList = sortList.sort(function (a, b) {
                        return a.purePrice - b.purePrice;
                    });
                    break;
                case 4:
                    this.productList = sortList.sort(function (a, b) {
                        return b.purePrice - a.purePrice;
                    });
                    break;
                default:
                    this.productList = this.originList;
            }
        },


        // 可以加载更多吗 ？
        canLoad: function canLoad(total) {
            if (this.originList.length !== 0 && this.originList.length < total) {
                this.continueLoadVisible = true;
            } else {
                this.continueLoadVisible = false;
            }
        },


        // 继续加载
        continueLoad: function continueLoad() {
            var _this3 = this;

            this.query.page++;
            this.isLoading = true;
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/product/list',
                data: this.query
            }).then(function (response) {
                _this3.isLoading = false;
                if (response.code === 200) {
                    var _originList;

                    (_originList = _this3.originList).push.apply(_originList, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(response.data.row));
                    _this3.canLoad(response.data.totalCount);
                    _this3.sort();
                }
            });
        },


        // 数据重置
        reset: function reset() {
            this.isLoading = false;
            this.originList = [];
            this.productList = [];
            this.addressList = [];
            this.query.page = 1;
            this.query.spec = '';
            this.query.type = '';
            this.query.address = '';
            this.sortMethod = '';
            this.sortDialogVisible = false;
            this.continueLoadVisible = false;
            this.isLoading = false;
        }
    },

    onPullDownRefresh: function onPullDownRefresh(a) {
        this.reset();
        this.getProductList().then(function () {
            wx.stopPullDownRefresh();
        });
        this.getAddressList();
    }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_product_item_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2613f532_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_product_item_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2613f532"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_product_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2613f532_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_product_item_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/product-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] product-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2613f532", Component.options)
  } else {
    hotAPI.reload("data-v-2613f532", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'product-item',

    props: {
        data: Object
    },

    computed: {
        specFormat: function specFormat() {
            if (!this.data.spec) return '-';
            var specArr = this.data.spec.split('*');
            return (specArr[0] + ' * ' + specArr[1] + ' *' + specArr[2]).trim();
        },
        updateTimeFormat: function updateTimeFormat() {
            if (!this.data.lastUpdateTime) return '-';
            var time = this.data.lastUpdateTime + '';
            var year = time.slice(0, 4);
            var month = time.slice(4, 6);
            var date = time.slice(6, 8);
            return year + '/' + month + '/' + date;
        },
        benifitAdjustFormat: function benifitAdjustFormat() {
            if (!this.data.benifitAdjust) return '';
            return Math.abs(this.data.benifitAdjust);
        }
    },

    mounted: function mounted() {}
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "product-item"
  }, [_c('div', {
    staticClass: "data-part"
  }, [_c('div', {
    staticClass: "part spec"
  }, [_vm._v(_vm._s(_vm.specFormat))]), _vm._v(" "), _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "data-line clearfix"
  }, [_c('div', {
    staticClass: "data lastupdate-time"
  }, [_vm._v(_vm._s(_vm.updateTimeFormat))]), _vm._v(" "), _c('div', {
    staticClass: "data type"
  }, [_vm._v(_vm._s(_vm.data.type))]), _vm._v(" "), _c('div', {
    staticClass: "data supplier"
  }, [_c('div', {
    staticClass: "supplier-name"
  }, [_vm._v(_vm._s(_vm.data.supplierName))])])]), _vm._v(" "), _c('div', {
    staticClass: "data-line clearfix"
  }, [(_vm.data.value) ? _c('div', {
    staticClass: "data price"
  }, [_c('text', {
    staticClass: "iconfont icon-price"
  }), _vm._v(" "), _c('text', [_vm._v(_vm._s(_vm.data.value))])]) : _c('div', {
    staticClass: "data invalid"
  }, [_vm._v("\n                    暂无\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "data benifit"
  }, [_c('text', [_vm._v(_vm._s(_vm.data.benifit))]), _vm._v(" "), (_vm.data.benifitAdjust > 0) ? [_c('text', {
    staticClass: "iconfont icon-drop"
  }), _vm._v(" "), _c('text', {
    staticClass: "benifit-adjust drop"
  }, [_vm._v(_vm._s(_vm.benifitAdjustFormat))])] : _vm._e(), _vm._v(" "), (_vm.data.benifitAdjust < 0) ? [_c('text', {
    staticClass: "iconfont icon-rise"
  }), _vm._v(" "), _c('text', {
    staticClass: "benifit-adjust rise"
  }, [_vm._v(_vm._s(_vm.benifitAdjustFormat))])] : _vm._e()], 2), _vm._v(" "), (_vm.data.purePrice) ? _c('div', {
    staticClass: "data pure-price"
  }, [_c('text', {
    staticClass: "iconfont icon-price"
  }), _vm._v(" "), _c('text', [_vm._v(_vm._s(_vm.data.purePrice))])]) : _c('div', {
    staticClass: "data invalid"
  }, [_vm._v("\n                    暂无\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "data-part"
  }, [_c('div', {
    staticClass: "part long"
  }, [_vm._v(_vm._s(_vm.data.long) + "米")]), _vm._v(" "), _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "data-line clearfix"
  }, [_c('div', {
    staticClass: "data amount"
  }, [_vm._v(_vm._s(_vm.data.inventoryAmount) + "件")]), _vm._v(" "), _c('div', {
    staticClass: "data per"
  }, [_vm._v(_vm._s(_vm.data.perAmount) + "支/件")]), _vm._v(" "), _c('div', {
    staticClass: "data freight"
  }, [_c('text', {
    staticClass: "iconfont icon-transform"
  }), _vm._v(" "), _c('text', [_vm._v(_vm._s(_vm.data.freight))])])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2613f532", esExports)
  }
}

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "product page"
  }, [_c('div', {
    staticClass: "product-filter"
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
    staticClass: "filter-item",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.sortDialogVisible = !_vm.sortDialogVisible
      }
    }
  }, [_c('text', [_vm._v("排序")]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-sort"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "product-list"
  }, [_vm._l((_vm.productList), function(item, index) {
    return _c('product-item', {
      key: index,
      attrs: {
        "data": item,
        "mpcomid": '6_' + index
      }
    })
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.productList.length === 0),
      expression: "productList.length === 0"
    }],
    staticClass: "empty"
  }, [_vm._v("\n            暂无数据~\n        ")]), _vm._v(" "), (_vm.continueLoadVisible) ? _c('div', {
    staticClass: "continue"
  }, [_c('button', {
    attrs: {
      "loading": _vm.isLoading,
      "eventid": '4'
    },
    on: {
      "click": _vm.continueLoad
    }
  }, [_vm._v("加载更多")])], 1) : _vm._e()], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sortDialogVisible),
      expression: "sortDialogVisible"
    }],
    staticClass: "sort"
  }, [_c('div', {
    staticClass: "sort-method",
    class: {
      'selected': !_vm.sortMethod
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.sortMethod = ''
      }
    }
  }, [_c('text', [_vm._v("默认排序")])]), _vm._v(" "), _c('div', {
    staticClass: "sort-method",
    class: {
      'selected': _vm.sortMethod === 1
    },
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.sortMethod = 1
      }
    }
  }, [_c('text', [_vm._v("按出厂价由低到高")]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-drop"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sort-method",
    class: {
      'selected': _vm.sortMethod === 2
    },
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.sortMethod = 2
      }
    }
  }, [_c('text', [_vm._v("按出厂价由高到低")]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-rise"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sort-method",
    class: {
      'selected': _vm.sortMethod === 3
    },
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.sortMethod = 3
      }
    }
  }, [_c('text', [_vm._v("按开单价由低到高")]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-drop"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sort-method",
    class: {
      'selected': _vm.sortMethod === 4
    },
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.sortMethod = 4
      }
    }
  }, [_c('text', [_vm._v("按开单价由高到低")]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-rise"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sortDialogVisible),
      expression: "sortDialogVisible"
    }],
    staticClass: "sort-mask",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": function($event) {
        _vm.sortDialogVisible = false
      }
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4bd5c284", esExports)
  }
}

/***/ })

},[139]);
//# sourceMappingURL=main.js.map
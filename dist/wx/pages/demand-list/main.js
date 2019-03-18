require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demand-list page"
  }, [_c('div', {
    staticClass: "demand-filter"
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
      "range": _vm.stateList,
      "eventid": '1'
    },
    on: {
      "change": _vm.changeState
    }
  }, [_c('div', {
    staticClass: "filter-picker"
  }, [(_vm.query.stateStr) ? [_c('text', [_vm._v(_vm._s(_vm.query.stateStr))])] : [_c('text', [_vm._v("状态")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2)])], 1), _vm._v(" "), _c('div', {
    staticClass: "filter-item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": function($event) {
        _vm.demandUserDialogVisible = true
      }
    }
  }, [(_vm.query.demandUser) ? [_c('text', [_vm._v(_vm._s(_vm.query.demandUser))])] : [_c('text', [_vm._v("销售")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2), _vm._v(" "), _c('x-dialog', {
    attrs: {
      "visible": _vm.demandUserDialogVisible,
      "eventid": '6',
      "mpcomid": '6'
    },
    on: {
      "clickMask": _vm.cancelDemandUser
    }
  }, [_c('div', {
    staticClass: "dialog-content"
  }, [_c('div', {
    staticClass: "input-control"
  }, [_c('label', {
    attrs: {
      "for": "demandUser"
    }
  }, [_vm._v("销售")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query.demandUser),
      expression: "query.demandUser"
    }],
    attrs: {
      "type": "text",
      "name": "demandUser",
      "maxlength": "5",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.query.demandUser)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query.demandUser = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "toolbar"
  }, [_c('button', {
    attrs: {
      "size": "mini",
      "eventid": '4'
    },
    on: {
      "click": _vm.cancelDemandUser
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('button', {
    attrs: {
      "size": "mini",
      "type": "primary",
      "eventid": '5'
    },
    on: {
      "click": _vm.confirmDemandUser
    }
  }, [_vm._v("确定")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "filter-item",
    attrs: {
      "eventid": '7'
    },
    on: {
      "tap": function($event) {
        _vm.customNameDialogVisible = true
      }
    }
  }, [(_vm.query.customName) ? [_c('text', [_vm._v(_vm._s(_vm.query.customName))])] : [_c('text', [_vm._v("客户名称")])], _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-select"
  })], 2), _vm._v(" "), _c('x-dialog', {
    attrs: {
      "visible": _vm.customNameDialogVisible,
      "eventid": '11',
      "mpcomid": '9'
    },
    on: {
      "clickMask": _vm.cancelCustomName
    }
  }, [_c('div', {
    staticClass: "dialog-content"
  }, [_c('div', {
    staticClass: "input-control"
  }, [_c('label', {
    attrs: {
      "for": "customName"
    }
  }, [_vm._v("销售")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query.customName),
      expression: "query.customName"
    }],
    attrs: {
      "type": "text",
      "name": "customName",
      "maxlength": "5",
      "eventid": '8'
    },
    domProps: {
      "value": (_vm.query.customName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query.customName = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "toolbar"
  }, [_c('button', {
    attrs: {
      "size": "mini",
      "eventid": '9'
    },
    on: {
      "click": _vm.cancelCustomName
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('button', {
    attrs: {
      "size": "mini",
      "type": "primary",
      "eventid": '10'
    },
    on: {
      "click": _vm.confirmCustomName
    }
  }, [_vm._v("确定")])], 1)])])], 1), _vm._v(" "), _c('div', {
    staticClass: "list-container"
  }, [_vm._l((_vm.demandList), function(item, index) {
    return _c('demand-item', {
      key: index,
      attrs: {
        "data": item,
        "mpcomid": '10-' + index
      }
    })
  }), _vm._v(" "), (_vm.continueLoadVisible) ? _c('div', {
    staticClass: "continue"
  }, [_c('button', {
    attrs: {
      "loading": _vm.isLoading,
      "eventid": '12'
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
     require("vue-hot-reload-api").rerender("data-v-7dcd2396", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(93);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7dcd2396_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dcd2396"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7dcd2396_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/demand-list/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dcd2396", Component.options)
  } else {
    hotAPI.reload("data-v-7dcd2396", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_data__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_demand_item__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dialog__ = __webpack_require__(48);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'demand-list',

    description: '需求列表',

    data: function data() {
        return {
            demandList: [], // 需求列表,
            specList: __WEBPACK_IMPORTED_MODULE_2__utils_data__["a" /* specList */],
            stateList: ['全部', '未报价', '待反馈', '已反馈', '未成交', '已成交'], // 状态列表
            query: {
                page: 1,
                customName: '', // 客户名称
                demandUser: '', // 销售员
                state: '', // 需求状态
                createTime: '', // 提交开始时间
                endTime: '', // 提交结束时间
                stateStr: '' // 需求状态显示用
            },
            continueLoadVisible: false,
            isLoading: false,
            demandUserDialogVisible: false,
            customNameDialogVisible: false
        };
    },


    components: {
        'demand-item': __WEBPACK_IMPORTED_MODULE_3__components_demand_item__["a" /* default */],
        'x-dialog': __WEBPACK_IMPORTED_MODULE_4__components_dialog__["a" /* default */]
    },

    mounted: function mounted() {
        this.getDemandList();
    },


    methods: {
        getDemandList: function getDemandList() {
            var _this = this;

            wx.showLoading({ title: '加载中' });
            this.page = 1;
            return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/demand/list',
                data: this.query
            }).then(function (response) {
                wx.hideLoading();
                if (response.code === 200) {
                    _this.demandList = response.data.row;
                    _this.canLoad(response.data.totalCount);
                }
                return true;
            });
        },


        // 可以加载更多吗 ？
        canLoad: function canLoad(total) {
            if (this.demandList.length !== 0 && this.demandList.length < total) {
                this.continueLoadVisible = true;
            } else {
                this.continueLoadVisible = false;
            }
        },
        continueLoad: function continueLoad() {
            var _this2 = this;

            this.page++;
            this.isLoading = true;
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
                url: '/demand/list',
                data: this.query
            }).then(function (response) {
                _this2.isLoading = false;
                if (response.code === 200) {
                    var _demandList;

                    (_demandList = _this2.demandList).push.apply(_demandList, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(response.data.row));
                    _this2.canLoad(response.data.totalCount);
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
                this.getDemandList();
            }
        },
        changeState: function changeState(e) {
            var oldValue = this.query.state;
            this.query.stateStr = this.stateList[e.mp.detail.value];
            this.query.state = e.mp.detail.value;

            if (this.query.stateStr === '全部') {
                this.query.stateStr = '';
                this.query.state = '';
            } else {
                this.query.state--;
            }

            if (oldValue !== this.query.state) {
                this.getDemandList();
            }
        },
        cancelDemandUser: function cancelDemandUser() {
            this.query.demandUser = '';
            this.demandUserDialogVisible = false;
        },
        confirmDemandUser: function confirmDemandUser() {
            this.demandUserDialogVisible = false;
            this.getDemandList();
        },
        cancelCustomName: function cancelCustomName() {
            this.query.customName = '';
            this.customNameDialogVisible = false;
        },
        confirmCustomName: function confirmCustomName() {
            this.customNameDialogVisible = false;
            this.getDemandList();
        },
        reset: function reset() {
            this.demandList = [];
            this.query.page = 1;
            this.query.customName = '';
            this.query.demandUser = '';
            this.query.state = '';
            this.query.stateStr = '';
            this.query.createTime = '';
            this.query.endTime = '';
            this.continueLoadVisible = '';
            this.isLoading = '';
            this.demandUserDialogVisible = false;
            this.customNameDialogVisible = false;
        }
    },

    onPullDownRefresh: function onPullDownRefresh() {
        this.reset();
        this.getDemandList().then(function () {
            wx.stopPullDownRefresh();
        });
    }
});

/***/ })

},[92]);
//# sourceMappingURL=main.js.map
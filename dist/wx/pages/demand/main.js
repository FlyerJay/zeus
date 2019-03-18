require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(108);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_46f0f32c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46f0f32c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_46f0f32c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/demand/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46f0f32c", Component.options)
  } else {
    hotAPI.reload("data-v-46f0f32c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: '定制需求上传',

    data: function data() {
        return {
            demandList: [],
            createMode: true,
            form: {
                type: '', // 品类
                spec: '', // 规格
                long: '', // 长度
                amount: '', // 数量
                unit: '支', // 数量单位 - 支|件
                weight: '0.00' // 重量 - 吨
            },
            comment: '',
            region: '',
            address: '',
            customerName: '',
            customerPhone: '',
            typeList: ['方矩管', '镀锌带方矩管', '热镀锌方矩管', '圆管', '镀锌带圆管', '热镀锌圆管', '镀锌角钢', '镀锌槽钢', '其他'],
            specList: [['20', '25', '30', '40', '50', '60', '70', '80', '90', '100'], ['20', '25', '30', '40', '50', '60', '70', '80', '90', '100'], ['1.00', '1.25', '1.50', '1.75', '2.00', '2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00', '4.25', '4.50', '4.75', '5.00', '5.25', '5.50', '5.75', '6.00', '6.50', '7.00', '7.50', '8.00', '8.50', '9.00', '9.50', '10.00', '10.50', '11.00']],
            longList: ['6m', '9m', '12m'],
            unitList: ['支', '件']
        };
    },


    computed: {
        weight: function weight() {
            // 动态计算重量
            if (!this.form.spec || !this.form.long || !this.form.amount) return '0.00';
            if (this.form.unit === '件') return '0.00';

            if (this.form.type.includes('矩管')) {
                var specArr = this.form.spec.split('*');
                var height = +specArr[0];
                var width = +specArr[1];
                var land = +specArr[2];
                var long = +this.form.long.replace('m', '') || 6;
                var perimeter = (height + width) * 2;
                var amount = this.form.unit === '支' ? this.form.amount : this.form.amount * 50;
                var weight = ((perimeter / 3.14 - land) * land * long * 0.02466 * amount / 1000).toFixed(2);
                return weight;
            } else if (this.form.type.includes('圆')) {
                var _specArr = this.form.spec.split('*');
                var _perimeter = +_specArr[0];
                var _land = +_specArr[1];
                var _long = +this.form.long.replace('m', '') || 6;
                var _amount = this.form.unit === '支' ? this.form.amount : this.form.amount * 50;
                var _weight = (_perimeter * _land * _long * 0.02466 * _amount / 1000).toFixed(2);
                return _weight;
            } else if (this.form.type.includes('槽') || this.form.type.includes('钢')) {
                var _specArr2 = this.form.spec.split('#');
                var unitWeight = +_specArr2[1].replace(/kg/, '');
                var _amount2 = this.form.unit === '支' ? this.form.amount : this.form.amount * 50;
                var _weight2 = (unitWeight * _amount2 / 1000).toFixed(2);
                return _weight2;
            } else {
                return '0.00';
            }
        },


        // 是否自定规格
        customSpec: function customSpec() {
            return this.form.type.includes('矩管');
        }
    },

    watch: {
        weight: function weight(newVal) {
            this.form.weight = newVal;
        }
    },

    methods: {
        createHandler: function createHandler() {
            this.createMode = false;
        },
        saveHandler: function saveHandler() {
            if (!this.form.type) {
                wx.showToast({
                    icon: 'none',
                    title: '请选择品类'
                });
                return;
            }
            if (!this.form.spec) {
                wx.showToast({
                    icon: 'none',
                    title: '请选择规格'
                });
                return;
            }
            if (!this.form.long) {
                wx.showToast({
                    icon: 'none',
                    title: '请选择长度'
                });
                return;
            }
            if (!this.form.amount) {
                wx.showToast({
                    icon: 'none',
                    title: '请填写数量'
                });
                return;
            }
            if (this.form.weight === '0.00') {
                wx.showToast({
                    icon: 'none',
                    title: '数量太少'
                });
                return;
            }
            var form = {
                type: this.form.type,
                spec: this.form.spec,
                long: this.form.long,
                amount: this.form.amount,
                unit: this.form.unit,
                weight: this.form.weight
            };
            this.demandList.push(form);
            this.resetForm();
            this.createMode = true;
        },
        cancelHandler: function cancelHandler() {
            this.resetForm();
            this.createMode = true;
        },
        removeHandler: function removeHandler(index) {
            this.demandList.splice(index, 1);
        },
        changeType: function changeType(e) {
            this.form.type = this.typeList[e.mp.detail.value];
        },
        changeSpec: function changeSpec(e) {
            this.form.spec = this.specList[0][e.mp.detail.value[0]] + '*' + this.specList[1][e.mp.detail.value[1]] + '*' + this.specList[2][e.mp.detail.value[2]];
        },
        changeLong: function changeLong(e) {
            this.form.long = this.longList[e.mp.detail.value];
        },
        changeRegion: function changeRegion(e) {
            var value = e.mp.detail.value;
            if (value[0] === value[1]) {
                this.region = value[0] + value[2];
            } else {
                this.region = value.join('');
            }
        },
        amountInput: function amountInput(e) {
            // TODO
        },
        commentInput: function commentInput(e) {
            // TODO
        },
        addressInput: function addressInput(e) {
            // TODO
        },
        changeUnit: function changeUnit(e) {
            this.form.unit = this.unitList[e.mp.detail.value];
        },
        resetForm: function resetForm() {
            this.form.type = '';
            this.form.amount = '';
            this.form.spec = '';
            this.form.long = '';
            this.form.weight = '0.00';
        },
        reset: function reset() {
            this.resetForm();
            this.demandList = [];
            this.createMode = true;
            this.address = '';
            this.region = '';
            this.comment = '';
            this.customerName = '';
            this.customerPhone = '';
        },
        submit: function submit() {
            var _this = this;

            var demandList = this.demandList.map(function (item) {
                return {
                    spec: item.spec,
                    demandWeight: item.weight,
                    demandAmount: item.amount + item.unit,
                    type: item.type
                };
            });
            if (demandList.length === 0) {
                wx.showToast({ icon: 'none', title: '请添加产品' });
                return;
            }
            var destination = this.region + this.address;
            wx.showLoading({ title: '加载中' });
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
                url: '/demand/add',
                data: {
                    demandDetails: demandList,
                    destination: destination,
                    customerName: this.customerName,
                    customerPhone: this.customerPhone,
                    comment: this.comment
                },
                method: 'POST'
            }).then(function (response) {
                wx.hideLoading();
                if (response.code === 200) {
                    _this.reset();
                    wx.showToast({ icon: 'success', title: '提交成功' });
                } else {
                    wx.showToast({ icon: 'error', title: response.msg });
                }
            });
        }
    }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page demand"
  }, [(_vm.demandList.length > 0) ? _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.demandList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('text', [_vm._v(_vm._s(item.type))]), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.spec))]), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.long))]), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.amount + item.unit))]), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.weight) + "吨")]), _vm._v(" "), _c('text', {
      staticClass: "iconfont icon-minus",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.removeHandler(index)
        }
      }
    })])
  })) : _vm._e(), _vm._v(" "), (!_vm.createMode) ? _c('div', {
    staticClass: "create-from"
  }, [_c('div', {
    staticClass: "form-item"
  }, [_c('picker', {
    attrs: {
      "range": _vm.typeList,
      "eventid": '1'
    },
    on: {
      "change": _vm.changeType
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('text', {
    staticClass: "label"
  }, [_vm._v("品类")]), _vm._v(" "), _c('text', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.form.type))]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-arrow"
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [(_vm.customSpec) ? [_c('picker', {
    attrs: {
      "range": _vm.specList,
      "mode": "multiSelector",
      "eventid": '2'
    },
    on: {
      "change": _vm.changeSpec
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('text', {
    staticClass: "label"
  }, [_vm._v("规格")]), _vm._v(" "), _c('text', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.form.spec))]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-arrow"
  })])])] : [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("规格")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.spec),
      expression: "form.spec"
    }],
    attrs: {
      "type": "text",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.form.spec)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.spec = $event.target.value
      }
    }
  })]], 2), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("长度")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.long),
      expression: "form.long"
    }],
    attrs: {
      "type": "text",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.form.long)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.long = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.amount),
      expression: "form.amount"
    }],
    staticClass: "inner-input",
    attrs: {
      "type": "number",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.form.amount)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.form.amount = $event.target.value
      }, _vm.amountInput]
    }
  }), _vm._v(" "), _c('picker', {
    attrs: {
      "range": _vm.unitList,
      "eventid": '6'
    },
    on: {
      "change": _vm.changeUnit
    }
  }, [_c('div', {
    staticClass: "inner-picker"
  }, [_c('text', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.form.unit))]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-arrow"
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("重量")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.weight),
      expression: "form.weight"
    }],
    attrs: {
      "type": "text",
      "eventid": '7'
    },
    domProps: {
      "value": (_vm.form.weight)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.weight = $event.target.value
      }
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.createMode) ? [_c('div', {
    staticClass: "create-demand"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '8'
    },
    on: {
      "click": _vm.createHandler
    }
  }, [_vm._v("添加"), _c('text', {
    staticClass: "icon-add iconfont"
  })])], 1)] : [_c('div', {
    staticClass: "create-demand"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '9'
    },
    on: {
      "click": _vm.saveHandler
    }
  }, [_vm._v("保存"), _c('text', {
    staticClass: "icon-save iconfont"
  })]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "warn",
      "eventid": '10'
    },
    on: {
      "click": _vm.cancelHandler
    }
  }, [_vm._v("取消"), _c('text', {
    staticClass: "icon-rollback iconfont"
  })])], 1)], _vm._v(" "), _c('div', {
    staticClass: "supplement-form"
  }, [_c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("补充说明")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    attrs: {
      "type": "text",
      "eventid": '11'
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('picker', {
    attrs: {
      "mode": "region",
      "eventid": '12'
    },
    on: {
      "change": _vm.changeRegion
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('text', {
    staticClass: "label"
  }, [_vm._v("收货地址")]), _vm._v(" "), _c('text', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.region))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("详细地址")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    attrs: {
      "type": "text",
      "eventid": '13'
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("客户姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.customerName),
      expression: "customerName"
    }],
    attrs: {
      "type": "text",
      "eventid": '14'
    },
    domProps: {
      "value": (_vm.customerName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.customerName = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("客户电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.customerPhone),
      expression: "customerPhone"
    }],
    attrs: {
      "type": "text",
      "eventid": '15'
    },
    domProps: {
      "value": (_vm.customerPhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.customerPhone = $event.target.value
      }
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "submit-button-group"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '16'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])], 1)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46f0f32c", esExports)
  }
}

/***/ })

},[107]);
//# sourceMappingURL=main.js.map
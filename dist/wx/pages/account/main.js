require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(58);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d368a42_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(91);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d368a42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d368a42_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/account/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d368a42", Component.options)
  } else {
    hotAPI.reload("data-v-2d368a42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
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


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'bind',

    description: '首次登录时绑定账号',

    data: function data() {
        return {
            // bindMode 为true表示首次绑定
            bindMode: false,
            form: {
                account: '',
                password: '',
                company: '',
                comId: ''
            },
            companyList: ['南京奎鑫', '武汉奎鑫', '西安奎鑫', '长春奎鑫', '沈阳奎鑫', '山东奎鑫', '南昌奎鑫', '重庆奎鑫'],
            companyCode: ['01', '02', '03', '04', '05', '06', '07', '08']
        };
    },
    mounted: function mounted() {
        this.applyLogin();
    },


    computed: {
        // 绑定按钮是否可用
        isDisabled: function isDisabled() {
            return !(this.form.account && this.form.password && this.form.company);
        }
    },

    methods: {
        // 调用登录获取jscode
        applyLogin: function applyLogin() {
            var self = this;
            wx.login({
                success: function success(response) {
                    if (response.code) {
                        wx.showLoading({ title: '获取用户信息' });
                        self.getOpenId(response.code);
                    }
                }
            });
        },


        // 通过code获取用户openid
        getOpenId: function getOpenId(code) {
            var self = this;
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
                url: '/user/openid',
                data: { code: code }
            }).then(function (response) {
                if (response.code === 200) {
                    wx.hideLoading();
                    wx.showLoading({ title: '获取用户状态' });
                    wx.setStorage({
                        key: 'userTag',
                        data: response.data,
                        success: function success() {
                            var data = JSON.parse(response.data);
                            self.judgeBinded(data.openid);
                        }
                    });
                }
            });
        },


        // 通过openid判断用户是否绑定，如已绑定则直接跳转首页，如未登录则显示绑定页面，让用户绑定账号
        judgeBinded: function judgeBinded(openid) {
            var _this = this;

            wx.hideLoading();
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
                url: '/user/loginbyopenid',
                data: { openid: openid },
                method: 'POST'
            }).then(function (response) {
                if (response.code === 200) {
                    wx.switchTab({ url: '../index/main' });
                    // wx.navigateTo({ url: '../product/main' })
                } else {
                    _this.bindMode = true;
                }
            });
        },
        changeCompany: function changeCompany(e) {
            this.form.company = this.companyList[e.mp.detail.value];
            this.form.comId = this.companyCode[e.mp.detail.value];
        },
        getUserInfo: function getUserInfo(e) {
            var userInfo = e.mp.detail.userInfo;
            wx.showLoading({ title: '正在绑定用户信息' });
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
                url: '/user/login',
                data: {
                    userId: this.form.account,
                    password: this.form.password,
                    comId: this.form.comId
                },
                method: 'POST'
            }).then(function (response) {
                var userTag = JSON.parse(wx.getStorageSync('userTag'));
                Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
                    url: '/user/bind',
                    data: {
                        nickName: userInfo.nickName,
                        avatarUrl: userInfo.avatarUrl,
                        openid: userTag.openid
                    },
                    method: 'POST'
                }).then(function (response) {
                    wx.hideLoading();
                    if (response.code === 200) {
                        wx.switchTab({ url: '../index/main' });
                    } else {
                        wx.showToast({
                            title: response.msg
                        });
                    }
                });
            });
        }
    }
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page bind"
  }, [(_vm.bindMode) ? _c('div', {
    staticClass: "bind-form"
  }, [_c('p', [_vm._v("第一次使用微信小程序登录，需要进行账号绑定，请您输入以下信息并提交绑定")]), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("账号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.account),
      expression: "form.account"
    }],
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.account)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.account = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("密码")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    attrs: {
      "type": "password",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('picker', {
    attrs: {
      "range": _vm.companyList,
      "eventid": '2'
    },
    on: {
      "change": _vm.changeCompany
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('text', {
    staticClass: "label"
  }, [_vm._v("公司")]), _vm._v(" "), _c('text', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.form.company))]), _vm._v(" "), _c('text', {
    staticClass: "iconfont icon-arrow"
  })])])], 1), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "type": "primary",
      "disabled": _vm.isDisabled,
      "open-type": "getUserInfo",
      "eventid": '3'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("绑定账号")])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d368a42", esExports)
  }
}

/***/ })

},[57]);
//# sourceMappingURL=main.js.map
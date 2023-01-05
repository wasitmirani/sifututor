"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_student-invoice_invoice_ViewInvoiceComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    active_name: {
      type: String,
      required: true
    },
    previous: {
      type: Array,
      required: false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/BreadcrumbComponent.vue */ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ViewInvoiceComponent",
  components: {
    breadcrumb: _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {},
      edit_mode: false,
      slug: "",
      errors: []
    };
  },
  methods: {
    getFees: function getFees(items) {
      console.log(items);
      var fees = items === null || items === void 0 ? void 0 : items.map(function (item) {
        return item.amount;
      });

      if (fees) {
        var sum = fees.reduce(function (partialSum, a) {
          return partialSum + a;
        }, 0);
        return sum;
      } // let fees=items.map(x=>x.amount);
      //


      return 0;
    },
    update_form: function update_form() {},
    getInvoice: function getInvoice(id) {
      var _this = this;

      axios.get('/student-invoice/' + id).then(function (res) {
        // console.log('res', res.data.student);
        _this.form = res.data.invoice;
        _this.edit_mode = true;
      })["catch"](function (err) {
        _this.errors = err.response.data;

        _this.$root.alertNotify(err.response.status, null, "error", err.response.data);

        _this.$router.push('/student-invoices/invoice');
      });
    }
  },
  mounted: function mounted() {
    this.slug = this.$route.params.slug;
    this.getInvoice(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=template&id=49bd74a6":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=template&id=49bd74a6 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "aria-label": "breadcrumb"
};
var _hoisted_2 = {
  "class": "breadcrumb"
};
var _hoisted_3 = {
  "class": "breadcrumb-item"
};
var _hoisted_4 = {
  href: "javascript:void(0);"
};
var _hoisted_5 = {
  "class": "breadcrumb-item active"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dashboard")];
    }),
    _: 1
    /* STABLE */

  })])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.previous, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "breadcrumb-item",
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: item.link
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.active_name), 1
  /* TEXT */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row invoice-preview"
};
var _hoisted_2 = {
  "class": "col-xl-9 col-md-8 col-12 mb-md-0 mb-4"
};
var _hoisted_3 = {
  "class": "card invoice-preview-card"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-between flex-xl-row flex-md-column flex-sm-row flex-column m-sm-3 m-0"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"mb-xl-0 mb-4\"><div class=\"d-flex svg-illustration mb-4 gap-2 align-items-center\"><img src=\"/assets/img/logo/blacklogo.png\" width=\"120\" alt=\"\" srcset=\"\"><span class=\"app-brand-text fw-bold fs-4\"><!-- Sifututor --></span></div><h4 class=\"mb-2\">Student Invoice</h4><!-- &lt;p class=&quot;mb-2&quot;&gt;San Diego County, CA 91905, USA&lt;/p&gt;\r\n                  &lt;p class=&quot;mb-0&quot;&gt;+1 (123) 456 7891, +44 (876) 543 2198&lt;/p&gt; --></div>", 1);

var _hoisted_7 = {
  "class": "fw-semibold mb-2"
};
var _hoisted_8 = {
  "class": "mb-2 pt-1"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Invoice Date:", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "fw-semibold"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-0"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row p-sm-3 p-0\">\r\n                <div class=\"col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-4 mb-sm-0 mb-4\">\r\n                  <h6 class=\"mb-3\">Invoice To:</h6>\r\n                  <p class=\"mb-1\">Thomas shelby</p>\r\n                  <p class=\"mb-1\">Shelby Company Limited</p>\r\n                  <p class=\"mb-1\">Small Heath, B10 0HF, UK</p>\r\n                  <p class=\"mb-1\">718-986-6062</p>\r\n                  <p class=\"mb-0\">peakyFBlinders@gmail.com</p>\r\n                </div>\r\n                <div class=\"col-xl-6 col-md-12 col-sm-7 col-12\">\r\n                  <h6 class=\"mb-4\">Bill To:</h6>\r\n                  <table>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td class=\"pe-4\">Total Due:</td>\r\n                        <td><strong>$12,110.55</strong></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"pe-4\">Bank name:</td>\r\n                        <td>American Bank</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"pe-4\">Country:</td>\r\n                        <td>United States</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"pe-4\">IBAN:</td>\r\n                        <td>ETD95476213874685</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"pe-4\">SWIFT code:</td>\r\n                        <td>BR91905</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div> ")], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "table-responsive border-top"
};
var _hoisted_14 = {
  "class": "table m-0"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Description of classes"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Hours"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Unit Price "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Total Price")])], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "text-nowrap"
};
var _hoisted_17 = {
  "class": "text-nowrap"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, " Commitment Fees: ", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "text-danger"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, " Grand Total :", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "text-success ml-4"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body mx-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-semibold"
}, "Note:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Management Remark:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Customer Remark:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1) This invoice is computer generated and no signature is required"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 2) Payment is due within 3 working days of issuance of this invoice"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 3) You can pay online via online banking by clicking the button PAY NOW or alternatively can transfer to account no below : "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" MAYBANK - 562115516678 SIFU EDU & LEARNING SDN BHD ")])])])], -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "col-xl-3 col-md-4 col-12 invoice-actions"
};
var _hoisted_30 = {
  "class": "card"
};
var _hoisted_31 = {
  "class": "card-body"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary d-grid w-100 mb-2 waves-effect waves-light",
  "data-bs-toggle": "offcanvas",
  "data-bs-target": "#sendInvoiceOffcanvas"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-flex align-items-center justify-content-center text-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ti ti-send ti-xs me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Send Invoice")])], -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-label-secondary d-grid w-100 mb-2 waves-effect"
}, " Download ", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "btn btn-label-secondary d-grid w-100 mb-2 waves-effect",
  role: "button",
  onclick: "window.print();"
}, " Print ", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary d-grid w-100 waves-effect waves-light",
  "data-bs-toggle": "offcanvas",
  "data-bs-target": "#addPaymentOffcanvas"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-flex align-items-center justify-content-center text-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ti ti-currency-dollar ti-xs me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Payment")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" breadcrumb "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: _ctx.slug,
    previous: [{
      name: 'Student Invoice Details',
      link: '/student-invoices/invoice'
    }]
  }, null, 8
  /* PROPS */
  , ["active_name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /breadcrumb "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, "INVOICE #" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.form.slug), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.form.invoice_date), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"pt-1\">\r\n                    <span>Date Due:</span>\r\n                    <span class=\"fw-semibold\">May 25, 2021</span>\r\n                  </div> ")])])]), _hoisted_11, _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.form.invoice_items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.subject.name) + "--", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.subject.code), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.quantity), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, "RM " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.subject.cost), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "RM " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.quantity * item.subject.cost), 1
    /* TEXT */
    )]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_18, _hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_22, " RM -" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getFees(this.form.deductions_items)), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_23, _hoisted_24, _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_27, "RM " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.form.total_amount - $options.getFees(this.form.deductions_items)), 1
  /* TEXT */
  )])])])])]), _hoisted_28])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /Invoice "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Actions "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, _hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/student-invoices/invoice/edit/".concat(_ctx.form.slug, "/").concat(_ctx.form.uid),
    "class": "btn btn-label-secondary d-grid w-100 mb-2 waves-effect"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit Invoice ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), _hoisted_35])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /Invoice Actions ")])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/ts/vue/backend/components/BreadcrumbComponent.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadcrumbComponent_vue_vue_type_template_id_49bd74a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadcrumbComponent.vue?vue&type=template&id=49bd74a6 */ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=template&id=49bd74a6");
/* harmony import */ var _BreadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadcrumbComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BreadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BreadcrumbComponent_vue_vue_type_template_id_49bd74a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/components/BreadcrumbComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewInvoiceComponent_vue_vue_type_template_id_7f19ae7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c */ "./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c");
/* harmony import */ var _ViewInvoiceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewInvoiceComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ViewInvoiceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ViewInvoiceComponent_vue_vue_type_template_id_7f19ae7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BreadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BreadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BreadcrumbComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewInvoiceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewInvoiceComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewInvoiceComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=template&id=49bd74a6":
/*!***************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=template&id=49bd74a6 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BreadcrumbComponent_vue_vue_type_template_id_49bd74a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BreadcrumbComponent_vue_vue_type_template_id_49bd74a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BreadcrumbComponent.vue?vue&type=template&id=49bd74a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/BreadcrumbComponent.vue?vue&type=template&id=49bd74a6");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c":
/*!***********************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewInvoiceComponent_vue_vue_type_template_id_7f19ae7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ViewInvoiceComponent_vue_vue_type_template_id_7f19ae7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student-invoice/invoice/ViewInvoiceComponent.vue?vue&type=template&id=7f19ae7c");


/***/ })

}]);
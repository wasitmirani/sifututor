"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_staff_staff-list_CreateStaffListComponent_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ValidationComponent",
  props: ["errors", "value"],
  methods: {
    getMessage: function getMessage(value) {
      if (value) {
        return value[0];
      }
    }
  },
  mounted: function mounted() {// console.log('errors', errors);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/BreadcrumbComponent.vue */ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue");
/* harmony import */ var _StaffListForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffListForm.vue */ "./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateStafftListComponent",
  components: {
    breadcrumb: _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    StaffListForm: _StaffListForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ValidateInputComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/ValidateInputComponent.vue */ "./resources/ts/vue/backend/components/ValidateInputComponent.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StaffListForm",
  components: {
    ValidateInput: _components_ValidateInputComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['edit_mode', 'form'],
  data: function data() {
    return {
      staff: {},
      errors: [],
      loading: false
    };
  },
  methods: {
    updateStaffList: function updateStaffList(data) {
      var _this = this;

      axios.put('/staff/' + this.staff.id, data).then(function (res) {
        _this.$router.push('/staff/staff-list');
      })["catch"](function (err) {
        _this.errors = err.response.data;

        _this.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    createStaffList: function createStaffList(data) {
      var _this2 = this;

      axios.post('/staff', data).then(function (res) {
        _this2.$router.push('/staff/staff-list');
      })["catch"](function (err) {
        _this2.errors = err.response.data;

        _this2.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      this.loading = true;

      var data = _objectSpread({}, this.staff);

      if (!this.edit_mode) {
        this.createStaffList(data);
      } else {
        this.updateStaffList(data);
      }

      setTimeout(function () {
        _this3.loading = false;
      }, 1000);
    }
  },
  mounted: function mounted() {
    if (this.edit_mode) {// this.product = [];
      // this.product = this.form;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=template&id=57e2a366":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=template&id=57e2a366 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "text-danger"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return this.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getMessage(this.errors[$props.value])), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=template&id=67b95c6e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=template&id=67b95c6e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-sm-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  var _component_StaffListForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StaffListForm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: "Add Staff",
    previous: [{
      name: 'Staff',
      link: '/staff/staff-list'
    }]
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StaffListForm)])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=template&id=5c936544":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=template&id=5c936544 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card mb-4"
};
var _hoisted_2 = {
  "class": "row g-3 mb-4"
};
var _hoisted_3 = {
  "class": "col-md-6"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-StartWorkingDate"
}, "Start Working Date", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "col-md-6"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Designation"
}, "Designation", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "col-md-6"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-BasicSalary"
}, "Basic Salary", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "col-md-6"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-StaffType"
}, "Staff Type", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Probation", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Intern", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Part-Time", -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_11, _hoisted_12, _hoisted_13];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Personal Information", -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "row g-3"
};
var _hoisted_17 = {
  "class": "col-md-4"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Fullname"
}, "Full Name", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "col-md-4"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Nickname"
}, "Nick Name", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "col-md-4"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Gender"
}, "Gender", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Male", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Female", -1
/* HOISTED */
);

var _hoisted_25 = [_hoisted_23, _hoisted_24];
var _hoisted_26 = {
  "class": "col-md-4"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Age"
}, "Age", -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "col-md-4"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-DateBirth"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "col-md-4"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-DateBirth"
}, "Nric", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "col-md-6"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-MaritalStatus"
}, "Marital Status", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Single", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Married", -1
/* HOISTED */
);

var _hoisted_36 = [_hoisted_34, _hoisted_35];
var _hoisted_37 = {
  "class": "col-md-6"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-child"
}, "No of Children", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "col-sm-12"
};
var _hoisted_40 = {
  "class": "form-check form-check-primary"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "customCheckPrimary"
}, "Spouse Is Working", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "col-md-6"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-email"
}, "Email", -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "input-group input-group-merge"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "multicol-email2"
}, "@example.com", -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "col-md-6"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Phone-No"
}, "Phone No", -1
/* HOISTED */
);

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-4 mx-n4"
}, null, -1
/* HOISTED */
);

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Address", -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "row g-3"
};
var _hoisted_51 = {
  "class": "col-md-4"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-StreetAddress1"
}, "Street Address 1", -1
/* HOISTED */
);

var _hoisted_53 = {
  "class": "col-md-4"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-StreetAddress2"
}, "Street Address 2", -1
/* HOISTED */
);

var _hoisted_55 = {
  "class": "col-md-4"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-PostCode"
}, "PostCode", -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "col-md-6"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-State"
}, "State", -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Select</option><option>Selangor</option><option>Penang</option><option>Johor</option><option>Kuala Lumpur</option><option>Negeri Sembilan</option><option>Melaka</option><option>Pahang</option><option>Perlis</option><option>Perak</option><option>Kedah</option><option>Terengganu</option><option>Kelantan</option><option>Serawak</option><option>Sabah</option><option>Putrajaya</option>", 16);

var _hoisted_75 = [_hoisted_59];
var _hoisted_76 = {
  "class": "col-md-6"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-City"
}, "City", -1
/* HOISTED */
);

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option>Pulau Indah</option><option>Pulau Ketam</option><option>Puncak Alam</option><option>Rasa</option><option>Rawang</option><option>Sabak Bernam</option><option>Sekinchan</option><option>Semenyih</option><option>Sepang</option><option>Serdang</option><option>Serendah</option><option>Seri Kembangan</option><option>Shah Alam</option><option>Subang Jaya</option><option>Sungai Besar</option><option>Sungai Buloh</option><option>Sungai Pelek</option><option>Tanjong Karang</option><option>Tanjong Sepat</option><option>Telok Panglima Garang</option>", 20);

var _hoisted_98 = [_hoisted_78];
var _hoisted_99 = {
  "class": "col-md-12"
};

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "basic-icon-default-Remark"
}, "Remark", -1
/* HOISTED */
);

var _hoisted_101 = {
  "class": "input-group input-group-merge"
};

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-4 mx-n4"
}, null, -1
/* HOISTED */
);

var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "EPF & Tax Information", -1
/* HOISTED */
);

var _hoisted_104 = {
  "class": "row g-3"
};
var _hoisted_105 = {
  "class": "col-md-6"
};

var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-EPFNo"
}, "EPF No", -1
/* HOISTED */
);

var _hoisted_107 = {
  "class": "col-md-6"
};

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Tax-No"
}, "Tax No", -1
/* HOISTED */
);

var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary me-sm-3 me-1"
}, "Submit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "reset",
  "class": "btn btn-label-secondary"
}, "Cancel")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$errors, _ctx$errors2, _ctx$errors3, _ctx$errors4, _ctx$errors5, _ctx$errors6, _ctx$errors7, _ctx$errors8, _ctx$errors9, _ctx$errors10, _ctx$errors11, _ctx$errors12, _ctx$errors13, _ctx$errors14, _ctx$errors15, _ctx$errors16, _ctx$errors17, _ctx$errors18, _ctx$errors19, _ctx$errors20, _ctx$errors21, _ctx$errors22, _ctx$errors23, _ctx$errors24, _ctx$errors25, _ctx$errors26, _ctx$errors27, _ctx$errors28, _ctx$errors29, _ctx$errors30, _ctx$errors31, _ctx$errors32, _ctx$errors33, _ctx$errors34, _ctx$errors35, _ctx$errors36, _ctx$errors37, _ctx$errors38, _ctx$errors39, _ctx$errors40, _ctx$errors41, _ctx$errors42, _ctx$errors43, _ctx$errors44;

  var _component_validate_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validate-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "card-body",
    onSubmit: _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.staff.start_date = $event;
    }),
    id: "StartWorkingDate",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors = _ctx.errors) === null || _ctx$errors === void 0 ? void 0 : _ctx$errors.errors, 'start_date'))),
    placeholder: "Start Working Date"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.start_date]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors2 = _ctx.errors) === null || _ctx$errors2 === void 0 ? void 0 : _ctx$errors2.errors,
    value: "start_date"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-Designation",
    placeholder: "Designation",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.staff.designation = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors3 = _ctx.errors) === null || _ctx$errors3 === void 0 ? void 0 : _ctx$errors3.errors, 'designation')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.designation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors4 = _ctx.errors) === null || _ctx$errors4 === void 0 ? void 0 : _ctx$errors4.errors,
    value: "designation"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-BasicSalary",
    placeholder: "Basic Salary",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.staff.basic_salary = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors5 = _ctx.errors) === null || _ctx$errors5 === void 0 ? void 0 : _ctx$errors5.errors, 'basic_salary')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.basic_salary]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors6 = _ctx.errors) === null || _ctx$errors6 === void 0 ? void 0 : _ctx$errors6.errors,
    value: "basic_salary"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-StaffType",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors7 = _ctx.errors) === null || _ctx$errors7 === void 0 ? void 0 : _ctx$errors7.errors, 'staff_type'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.staff.staff_type = $event;
    })
  }, _hoisted_14, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.staff.staff_type]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors8 = _ctx.errors) === null || _ctx$errors8 === void 0 ? void 0 : _ctx$errors8.errors,
    value: "staff_type"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <hr class=\"my-4 mx-n4\" /> "), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.staff.full_name = $event;
    }),
    id: "Fullname",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors9 = _ctx.errors) === null || _ctx$errors9 === void 0 ? void 0 : _ctx$errors9.errors, 'full_name'))),
    placeholder: "Full Name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.full_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors10 = _ctx.errors) === null || _ctx$errors10 === void 0 ? void 0 : _ctx$errors10.errors,
    value: "full_name"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-Nickname",
    placeholder: "Nick Name",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.staff.nick_name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors11 = _ctx.errors) === null || _ctx$errors11 === void 0 ? void 0 : _ctx$errors11.errors, 'nick_name')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.nick_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors12 = _ctx.errors) === null || _ctx$errors12 === void 0 ? void 0 : _ctx$errors12.errors,
    value: "nick_name"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-Gender",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors13 = _ctx.errors) === null || _ctx$errors13 === void 0 ? void 0 : _ctx$errors13.errors, 'gender'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.staff.gender = $event;
    })
  }, _hoisted_25, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.staff.gender]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors14 = _ctx.errors) === null || _ctx$errors14 === void 0 ? void 0 : _ctx$errors14.errors,
    value: "gender"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-Age",
    placeholder: "Age",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.staff.age = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors15 = _ctx.errors) === null || _ctx$errors15 === void 0 ? void 0 : _ctx$errors15.errors, 'age')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.age]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors16 = _ctx.errors) === null || _ctx$errors16 === void 0 ? void 0 : _ctx$errors16.errors,
    value: "age"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    id: "multicol-DateBirth",
    placeholder: "Date of Birth",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.staff.dob = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors17 = _ctx.errors) === null || _ctx$errors17 === void 0 ? void 0 : _ctx$errors17.errors, 'dob')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.dob]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors18 = _ctx.errors) === null || _ctx$errors18 === void 0 ? void 0 : _ctx$errors18.errors,
    value: "dob"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-DateBirth",
    placeholder: "Nric",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.staff.nric = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors19 = _ctx.errors) === null || _ctx$errors19 === void 0 ? void 0 : _ctx$errors19.errors, 'nric')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.nric]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors20 = _ctx.errors) === null || _ctx$errors20 === void 0 ? void 0 : _ctx$errors20.errors,
    value: "nric"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-MaritalStatus",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors21 = _ctx.errors) === null || _ctx$errors21 === void 0 ? void 0 : _ctx$errors21.errors, 'marital_status'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return _ctx.staff.marital_status = $event;
    })
  }, _hoisted_36, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.staff.marital_status]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors22 = _ctx.errors) === null || _ctx$errors22 === void 0 ? void 0 : _ctx$errors22.errors,
    value: "marital_status"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "multicol-child",
    placeholder: "No Of Children",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return _ctx.staff.no_of_children = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors23 = _ctx.errors) === null || _ctx$errors23 === void 0 ? void 0 : _ctx$errors23.errors, 'no_of_children')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.no_of_children]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors24 = _ctx.errors) === null || _ctx$errors24 === void 0 ? void 0 : _ctx$errors24.errors,
    value: "no_of_children"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "customCheckPrimary",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return _ctx.staff.spouse_is_Working = $event;
    }),
    "true-value": 1,
    "false-value": 0
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.staff.spouse_is_Working]]), _hoisted_41])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "multicol-email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors25 = _ctx.errors) === null || _ctx$errors25 === void 0 ? void 0 : _ctx$errors25.errors, 'email'))),
    placeholder: "john.doe",
    "aria-label": "john.doe",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return _ctx.staff.email = $event;
    }),
    "aria-describedby": "multicol-email2"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.email]]), _hoisted_45]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors26 = _ctx.errors) === null || _ctx$errors26 === void 0 ? void 0 : _ctx$errors26.errors,
    value: "email"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "multicol-Phone-No",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return _ctx.staff.phone = $event;
    }),
    placeholder: "Phone No",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors27 = _ctx.errors) === null || _ctx$errors27 === void 0 ? void 0 : _ctx$errors27.errors, 'phone')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.phone]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors28 = _ctx.errors) === null || _ctx$errors28 === void 0 ? void 0 : _ctx$errors28.errors,
    value: "phone"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_48, _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-StreetAddress1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors29 = _ctx.errors) === null || _ctx$errors29 === void 0 ? void 0 : _ctx$errors29.errors, 'street_address_1'))),
    placeholder: "Street Address 1",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return _ctx.staff.street_address_1 = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.street_address_1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors30 = _ctx.errors) === null || _ctx$errors30 === void 0 ? void 0 : _ctx$errors30.errors,
    value: "street_address_1"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-StreetAddress2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors31 = _ctx.errors) === null || _ctx$errors31 === void 0 ? void 0 : _ctx$errors31.errors, 'street_address_2'))),
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return _ctx.staff.street_address_2 = $event;
    }),
    placeholder: "Street Address 2"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.street_address_2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors32 = _ctx.errors) === null || _ctx$errors32 === void 0 ? void 0 : _ctx$errors32.errors,
    value: "street_address_2"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-PostCode",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors33 = _ctx.errors) === null || _ctx$errors33 === void 0 ? void 0 : _ctx$errors33.errors, 'post_code'))),
    placeholder: "PostCode",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return _ctx.staff.post_code = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.post_code]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors34 = _ctx.errors) === null || _ctx$errors34 === void 0 ? void 0 : _ctx$errors34.errors,
    value: "post_code"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-State",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors35 = _ctx.errors) === null || _ctx$errors35 === void 0 ? void 0 : _ctx$errors35.errors, 'state'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return _ctx.staff.state = $event;
    })
  }, _hoisted_75, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.staff.state]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors36 = _ctx.errors) === null || _ctx$errors36 === void 0 ? void 0 : _ctx$errors36.errors,
    value: "state"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-State",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors37 = _ctx.errors) === null || _ctx$errors37 === void 0 ? void 0 : _ctx$errors37.errors, 'city'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return _ctx.staff.city = $event;
    })
  }, _hoisted_98, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.staff.city]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors38 = _ctx.errors) === null || _ctx$errors38 === void 0 ? void 0 : _ctx$errors38.errors,
    value: "city"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "3",
    id: "basic-icon-default-Remark",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors39 = _ctx.errors) === null || _ctx$errors39 === void 0 ? void 0 : _ctx$errors39.errors, 'remark'))),
    placeholder: "Remark",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return _ctx.staff.remark = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.remark]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors40 = _ctx.errors) === null || _ctx$errors40 === void 0 ? void 0 : _ctx$errors40.errors,
    value: "remark"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_102, _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [_hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-EPFNo",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return _ctx.staff.epf_no = $event;
    }),
    placeholder: "EPF No",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors41 = _ctx.errors) === null || _ctx$errors41 === void 0 ? void 0 : _ctx$errors41.errors, 'epf_no')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.epf_no]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors42 = _ctx.errors) === null || _ctx$errors42 === void 0 ? void 0 : _ctx$errors42.errors,
    value: "epf_no"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [_hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-Tax-No",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return _ctx.staff.tax_no = $event;
    }),
    placeholder: "Tax No",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors43 = _ctx.errors) === null || _ctx$errors43 === void 0 ? void 0 : _ctx$errors43.errors, 'tax_no')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.staff.tax_no]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors44 = _ctx.errors) === null || _ctx$errors44 === void 0 ? void 0 : _ctx$errors44.errors,
    value: "tax_no"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_109], 32
  /* HYDRATE_EVENTS */
  )]);
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
/* harmony import */ var F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BreadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BreadcrumbComponent_vue_vue_type_template_id_49bd74a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/components/BreadcrumbComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/components/ValidateInputComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/ValidateInputComponent.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ValidateInputComponent_vue_vue_type_template_id_57e2a366__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidateInputComponent.vue?vue&type=template&id=57e2a366 */ "./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=template&id=57e2a366");
/* harmony import */ var _ValidateInputComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidateInputComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ValidateInputComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ValidateInputComponent_vue_vue_type_template_id_57e2a366__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/components/ValidateInputComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateStaffListComponent_vue_vue_type_template_id_67b95c6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateStaffListComponent.vue?vue&type=template&id=67b95c6e */ "./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=template&id=67b95c6e");
/* harmony import */ var _CreateStaffListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateStaffListComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateStaffListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateStaffListComponent_vue_vue_type_template_id_67b95c6e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue":
/*!***************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StaffListForm_vue_vue_type_template_id_5c936544__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaffListForm.vue?vue&type=template&id=5c936544 */ "./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=template&id=5c936544");
/* harmony import */ var _StaffListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffListForm.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StaffListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StaffListForm_vue_vue_type_template_id_5c936544__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue"]])
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

/***/ "./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidateInputComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidateInputComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ValidateInputComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStaffListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStaffListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateStaffListComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaffListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaffListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StaffListForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=template&id=57e2a366":
/*!******************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=template&id=57e2a366 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidateInputComponent_vue_vue_type_template_id_57e2a366__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidateInputComponent_vue_vue_type_template_id_57e2a366__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ValidateInputComponent.vue?vue&type=template&id=57e2a366 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/components/ValidateInputComponent.vue?vue&type=template&id=57e2a366");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=template&id=67b95c6e":
/*!********************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=template&id=67b95c6e ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStaffListComponent_vue_vue_type_template_id_67b95c6e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStaffListComponent_vue_vue_type_template_id_67b95c6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateStaffListComponent.vue?vue&type=template&id=67b95c6e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/CreateStaffListComponent.vue?vue&type=template&id=67b95c6e");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=template&id=5c936544":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=template&id=5c936544 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaffListForm_vue_vue_type_template_id_5c936544__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaffListForm_vue_vue_type_template_id_5c936544__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StaffListForm.vue?vue&type=template&id=5c936544 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/staff/staff-list/StaffListForm.vue?vue&type=template&id=5c936544");


/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_class-schedule_schedule-history_EditScheduleHistoryComponent_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/BreadcrumbComponent.vue */ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue");
/* harmony import */ var _ScheduleHistoryForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleHistoryForm.vue */ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditScheduleHistoryComponent",
  components: {
    breadcrumb: _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ScheduleHistoryForm: _ScheduleHistoryForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      form: {},
      edit_mode: false,
      slug: ""
    };
  },
  methods: {
    getScheduleHistory: function getScheduleHistory(id) {
      var _this = this;

      axios.get('/getScheduleHistory/' + id).then(function (res) {
        _this.form = res.data.subject;
        _this.edit_mode = true;
      })["catch"](function (err) {
        _this.errors = err.response.data;

        _this.$root.alertNotify(err.response.status, null, "error", err.response.data);

        _this.$router.push('/chart-account');
      });
    }
  },
  mounted: function mounted() {
    this.slug = this.$route.params.slug;
    this.getScheduleHistory(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ValidateInputComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/ValidateInputComponent.vue */ "./resources/ts/vue/backend/components/ValidateInputComponent.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ScheduleHistoryForm",
  components: {
    ValidateInput: _components_ValidateInputComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['edit_mode', 'form'],
  data: function data() {
    return {
      historyInfo: {},
      errors: [],
      loading: false,
      subjectList: [],
      tutorList: [{
        id: '1',
        name: '‘AFIFAH BINTI MOHD AMIN'
      }, {
        id: '2',
        name: '‘umar Bin Faizel Amri'
      }, {
        id: '3',
        name: 'Abdul Fattah Bin Haron'
      }]
    };
  },
  methods: {
    updateScheduleHistory: function updateScheduleHistory(data) {
      var _this = this;

      axios.put('/schedule-history/' + this.historyInfo.id, data).then(function (res) {// this.$router.push('/subject/subject-list');
      })["catch"](function (err) {
        _this.errors = err.response.data;

        _this.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    createScheduleHistory: function createScheduleHistory(data) {
      var _this2 = this;

      axios.post('/schedule-history', data).then(function (res) {// this.$router.push('/subject/subject-list');
      })["catch"](function (err) {
        _this2.errors = err.response.data;

        _this2.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      this.loading = true;

      var data = _objectSpread({}, this.historyInfo);

      if (!this.edit_mode) {
        this.createScheduleHistory(data);
      } else {
        this.updateScheduleHistory(data);
      }

      setTimeout(function () {
        _this3.loading = false;
      }, 1000);
    },
    getSubjectList: function getSubjectList() {
      var _this4 = this;

      axios.get('/subject-list').then(function (res) {
        _this4.subjectList = res.data.subjects;
      })["catch"](function (err) {
        _this4.errors = err.response.data;

        _this4.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getSubjectList();

    if (this.edit_mode) {// this.historyInfo = [];
      // this.historyInfo = this.form;
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

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dashboard");

var _hoisted_6 = {
  "class": "breadcrumb-item active"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
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
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.active_name), 1
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  var _component_ScheduleHistoryForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScheduleHistoryForm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" breadcrumb "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: _ctx.slug,
    previous: [{
      name: 'Schedule History',
      link: "/class-schedules/schedule-history/".concat(_ctx.slug, "/").concat(this.$route.params.id)
    }]
  }, null, 8
  /* PROPS */
  , ["active_name", "previous"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /breadcrumb "), _ctx.edit_mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ScheduleHistoryForm, {
    key: 0,
    edit_mode: _ctx.edit_mode,
    form: _ctx.form
  }, null, 8
  /* PROPS */
  , ["edit_mode", "form"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=template&id=9955bf68":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=template&id=9955bf68 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "row g-3"
};
var _hoisted_3 = {
  "class": "col-md-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-name"
}, "Tutor", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "col-md-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-date"
}, "Date", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "col-md-4"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Subject"
}, "Subject", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  slot: "noResult"
}, "Oops! No elements found. Consider changing the search query.", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "col-md-6"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Start Time (24hrs format)"
}, "Start Time (24hrs format)", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "col-md-6"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-End Time (24hrs format)"
}, "End Time (24hrs format)", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "col-sm-12"
};
var _hoisted_15 = {
  "class": "form-check form-check-primary"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "customCheckPrimary"
}, "Has Incentive", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
  var _ctx$errors, _ctx$errors2, _ctx$errors3, _ctx$errors4, _ctx$errors5, _ctx$errors6, _ctx$errors7;

  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");

  var _component_validate_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validate-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "card-body",
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
    modelValue: _ctx.historyInfo.tutor,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.historyInfo.tutor = $event;
    }),
    options: _ctx.tutorList,
    "track-by": "id",
    label: "name",
    placeholder: "Search by tutor name",
    multiple: true
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors = _ctx.errors) === null || _ctx$errors === void 0 ? void 0 : _ctx$errors.errors,
    value: "name"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    id: "multicol-date",
    placeholder: "date",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.historyInfo.date = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors2 = _ctx.errors) === null || _ctx$errors2 === void 0 ? void 0 : _ctx$errors2.errors, 'date')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.historyInfo.date]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors3 = _ctx.errors) === null || _ctx$errors3 === void 0 ? void 0 : _ctx$errors3.errors,
    value: "date"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
    modelValue: _ctx.historyInfo.subjects,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.historyInfo.subjects = $event;
    }),
    options: _ctx.subjectList,
    multiple: true,
    "group-values": "subjects",
    "group-label": "category",
    "group-select": true,
    placeholder: "Search by name",
    "track-by": "name",
    label: "name"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "time",
    id: "multicol-Start Time (24hrs format)",
    placeholder: "Start Time (24hrs format)",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.historyInfo.start_time = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors4 = _ctx.errors) === null || _ctx$errors4 === void 0 ? void 0 : _ctx$errors4.errors, 'start_time')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.historyInfo.start_time]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors5 = _ctx.errors) === null || _ctx$errors5 === void 0 ? void 0 : _ctx$errors5.errors,
    value: "start_time"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "time",
    id: "multicol-End Time (24hrs format)",
    placeholder: "End Time (24hrs format)",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.historyInfo.end_time = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors6 = _ctx.errors) === null || _ctx$errors6 === void 0 ? void 0 : _ctx$errors6.errors, 'start_time')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.historyInfo.end_time]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors7 = _ctx.errors) === null || _ctx$errors7 === void 0 ? void 0 : _ctx$errors7.errors,
    value: "end_time"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "customCheckPrimary",
    "true-value": "1",
    "false-value": "0",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.historyInfo.has_incentive = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.historyInfo.has_incentive]]), _hoisted_16])])]), _hoisted_17], 32
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
/* harmony import */ var C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BreadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BreadcrumbComponent_vue_vue_type_template_id_49bd74a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/components/BreadcrumbComponent.vue"]])
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
/* harmony import */ var C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ValidateInputComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ValidateInputComponent_vue_vue_type_template_id_57e2a366__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/components/ValidateInputComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditScheduleHistoryComponent_vue_vue_type_template_id_46f59ccf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf */ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf");
/* harmony import */ var _EditScheduleHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditScheduleHistoryComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EditScheduleHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditScheduleHistoryComponent_vue_vue_type_template_id_46f59ccf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue":
/*!************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScheduleHistoryForm_vue_vue_type_template_id_9955bf68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleHistoryForm.vue?vue&type=template&id=9955bf68 */ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=template&id=9955bf68");
/* harmony import */ var _ScheduleHistoryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleHistoryForm.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_vuexy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScheduleHistoryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScheduleHistoryForm_vue_vue_type_template_id_9955bf68__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue"]])
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

/***/ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditScheduleHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditScheduleHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditScheduleHistoryComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScheduleHistoryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScheduleHistoryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScheduleHistoryForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditScheduleHistoryComponent_vue_vue_type_template_id_46f59ccf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditScheduleHistoryComponent_vue_vue_type_template_id_46f59ccf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/EditScheduleHistoryComponent.vue?vue&type=template&id=46f59ccf");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=template&id=9955bf68":
/*!******************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=template&id=9955bf68 ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScheduleHistoryForm_vue_vue_type_template_id_9955bf68__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScheduleHistoryForm_vue_vue_type_template_id_9955bf68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScheduleHistoryForm.vue?vue&type=template&id=9955bf68 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/class-schedule/schedule-history/ScheduleHistoryForm.vue?vue&type=template&id=9955bf68");


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multiselect": () => (/* binding */ script),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "multiselectMixin": () => (/* binding */ multiselectMixin),
/* harmony export */   "pointerMixin": () => (/* binding */ pointerMixin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1
}

function filterOptions (options, search, label, customLabel) {
  return search ? options
    .filter((option) => includes(customLabel(option, label), search))
    .sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options
}

function stripGroups (options) {
  return options.filter((option) => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map((group) => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel);

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var multiselectMixin = {
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue () {
      return this.modelValue || this.modelValue === 0
        ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]
        : []
    },
    filteredOptions () {
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();

      let options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({isTag: true, label: search});
        } else {
          options.unshift({isTag: true, label: search});
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue () {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.$emit('update:modelValue', this.multiple ? [] : null);
      }
    },
    search () {
      this.$emit('search-change', this.search);
    }
  },
  emits: ['open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option;
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      const label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return
        }

        this.$emit('select', option, this.id);

        if (this.multiple) {
          this.$emit('update:modelValue', this.internalValue.concat([option]));
        } else {
          this.$emit('update:modelValue', option);
        }

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);

        const newValue = this.internalValue.filter(
          (option) => group[this.groupValues].indexOf(option) === -1
        );

        this.$emit('update:modelValue', newValue);
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          (option) => !(this.isOptionDisabled(option) || this.isSelected(option))
        );

        this.$emit('select', optionsToAdd, this.id);
        this.$emit(
          'update:modelValue',
          this.internalValue.concat(optionsToAdd)
        );
      }

      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option);

      this.$emit('remove', option, this.id);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', null);
      }

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else {
        this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        this.$refs.search && this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.preferredOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};

var pointerMixin = {
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust();
    },
    isOpen () {
      this.pointerDirty = false;
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          {'multiselect__option--group': selectedGroup.$isLabel}
        ]
      }

      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      return group && !this.wholeGroupDisabled(group) ? [
        'multiselect__option--group',
        {'multiselect__option--highlight': index === this.pointer && this.showPointer},
        {'multiselect__option--group-selected': this.wholeGroupSelected(group)}
      ] : 'multiselect__option--disabled'
    },
    addPointerElement ({key} = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0;
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward();
      }
    },
    pointerSet (index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};

var script = {
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ''
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default () {
        return []
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ''
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
          (!this.isOpen || !this.searchable) &&
          !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
          (this.multiple && this.modelValue && this.modelValue.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? {width: '100%'}
          : {width: '0', position: 'absolute', padding: '0'}
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? {display: 'inline-block'}
        : {display: 'block'}
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
          this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
          (this.hasSingleSelectedSlot &&
            (this.visibleSingleValue || this.visibleSingleValue === 0)
            ? this.isOpen
            : true)
      )
    }
  }
};

const _hoisted_1 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_2 = { class: "multiselect__tags-wrap" };
const _hoisted_3 = { class: "multiselect__spinner" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "multiselect__option" };
const _hoisted_6 = { class: "multiselect__option" };
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No elements found. Consider changing the search query.");
const _hoisted_8 = { class: "multiselect__option" };
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("List is empty.");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: [{ 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove }, "multiselect"],
    onFocus: _cache[14] || (_cache[14] = $event => (_ctx.activate())),
    onBlur: _cache[15] || (_cache[15] = $event => (_ctx.searchable ? false : _ctx.deactivate())),
    onKeydown: [
      _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerForward()), ["self","prevent"]), ["down"])),
      _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerBackward()), ["self","prevent"]), ["up"]))
    ],
    onKeypress: _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.addPointerElement($event)), ["stop","self"]), ["enter","tab"])),
    onKeyup: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.deactivate()), ["esc"])),
    role: "combobox",
    "aria-owns": 'listbox-'+_ctx.id
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onMousedown: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.toggle()), ["prevent","stop"])),
        class: "multiselect__select"
      }, null, 32 /* HYDRATE_EVENTS */)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "clear", { search: _ctx.search }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.visibleValues, (option, index) => {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "tag", {
              option: option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                class: "multiselect__tag",
                key: index
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                  textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option))
                }, null, 8 /* PROPS */, ["textContent"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
                  tabindex: "1",
                  onKeypress: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeElement(option)), ["prevent"]), ["enter"]),
                  onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeElement(option)), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["onKeypress", "onMousedown"])
              ]))
            ])
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.visibleValues.length > 0]
        ]),
        (_ctx.internalValue && _ctx.internalValue.length > $props.limit)
          ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "limit", { key: 0 }, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", {
                class: "multiselect__strong",
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.limitText(_ctx.internalValue.length - $props.limit))
              }, null, 8 /* PROPS */, ["textContent"])
            ])
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "multiselect__loading" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "loading", {}, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, null, 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.loading]
            ])
          ])
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.searchable)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("input", {
            key: 0,
            ref: "search",
            name: $props.name,
            id: _ctx.id,
            type: "text",
            autocomplete: "off",
            spellcheck: "false",
            placeholder: _ctx.placeholder,
            style: $options.inputStyle,
            value: _ctx.search,
            disabled: $props.disabled,
            tabindex: $props.tabindex,
            onInput: _cache[2] || (_cache[2] = $event => (_ctx.updateSearch($event.target.value))),
            onFocus: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.activate()), ["prevent"])),
            onBlur: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.deactivate()), ["prevent"])),
            onKeyup: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.deactivate()), ["esc"])),
            onKeydown: [
              _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerForward()), ["prevent"]), ["down"])),
              _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerBackward()), ["prevent"]), ["up"])),
              _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeLastElement()), ["stop"]), ["delete"]))
            ],
            onKeypress: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.addPointerElement($event)), ["prevent","stop","self"]), ["enter"])),
            class: "multiselect__input",
            "aria-controls": 'listbox-'+_ctx.id
          }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($options.isSingleLabelVisible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentOptionLabel), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($options.isPlaceholderVisible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "placeholder", {}, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.placeholder), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "multiselect" }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          class: "multiselect__content-wrapper",
          onFocus: _cache[12] || (_cache[12] = (...args) => (_ctx.activate && _ctx.activate(...args))),
          tabindex: "-1",
          onMousedown: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
          style: { maxHeight: _ctx.optimizedHeight + 'px' },
          ref: "list"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", {
            class: "multiselect__content",
            style: $options.contentStyle,
            role: "listbox",
            id: 'listbox-'+_ctx.id
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "beforeList"),
            (_ctx.multiple && _ctx.max === _ctx.internalValue.length)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_4, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_5, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "maxElements", {}, () => [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Maximum of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.max) + " options selected. First remove a selected option to select another.", 1 /* TEXT */)
                    ])
                  ])
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (!_ctx.max || _ctx.internalValue.length < _ctx.max)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredOptions, (option, index) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
                    class: "multiselect__element",
                    key: index,
                    id: _ctx.id + '-' + index,
                    role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
                  }, [
                    (!(option && (option.$isLabel || option.$isDisabled)))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                          key: 0,
                          class: [_ctx.optionHighlight(index, option), "multiselect__option"],
                          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.select(option)), ["stop"]),
                          onMouseenter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerSet(index)), ["self"]),
                          "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                          "data-selected": $options.selectedLabelText,
                          "data-deselect": $options.deselectLabelText
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                    (option && (option.$isLabel || option.$isDisabled))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                          key: 1,
                          "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                          "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                          class: [_ctx.groupHighlight(index, option), "multiselect__option"],
                          onMouseenter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.groupSelect && _ctx.pointerSet(index)), ["self"]),
                          onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.selectGroup(option)), ["prevent"])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["data-select", "data-deselect", "onMouseenter", "onMousedown"]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ], 8 /* PROPS */, ["id", "role"]))
                }), 128 /* KEYED_FRAGMENT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_6, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                  _hoisted_7
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noOptions", {}, () => [
                  _hoisted_9
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showNoOptions && (_ctx.options.length === 0 && !_ctx.search && !$props.loading)]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "afterList")
          ], 12 /* STYLE, PROPS */, ["id"])
        ], 36 /* STYLE, HYDRATE_EVENTS */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.isOpen]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["tabindex", "aria-owns"]))
}

script.render = render;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);



/***/ })

}]);
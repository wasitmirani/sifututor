"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_student_student-list_CreateStudentListComponent_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentListForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentListForm.vue */ "./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue");
/* harmony import */ var _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/BreadcrumbComponent.vue */ "./resources/ts/vue/backend/components/BreadcrumbComponent.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateStudentListComponent",
  components: {
    StudentListForm: _StudentListForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    breadcrumb: _components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
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

// import ValidateInput from "../../../components/ValidateInputComponent.vue";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StudentListForm",
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidateInput: _components_ValidateInputComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      studentInfo: [{
        fullname: "",
        gender: "",
        age: "",
        dob: "",
        nric: ""
      }],
      stdInfo: [{}],
      errors: [],
      subjectList: [],
      subjects: [],
      submitData: {},
      customer: {},
      customer_address: {}
    };
  },
  methods: {
    addStudent: function addStudent() {
      this.studentInfo.push({
        fullname: "",
        gender: "",
        age: "",
        dob: "",
        nric: ""
      });
      this.stdInfo.push({
        fullname: "",
        gender: "",
        age: "",
        dob: "",
        nric: ""
      });
    },
    removeStudent: function removeStudent(key) {
      this.studentInfo = this.studentInfo.filter(function (todo, index) {
        return index !== key;
      });
      this.stdInfo = this.stdInfo.filter(function (todo, index) {
        return index !== key;
      });
    },
    getSubjectList: function getSubjectList() {
      var _this = this;

      axios.get('/subject-list').then(function (res) {
        _this.subjectList = res.data.subjects;
      })["catch"](function (err) {
        _this.errors = err.response.data;

        _this.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    updateStudent: function updateStudent(data) {
      var _this2 = this;

      axios.put('/student/' + this.submitData.id, data).then(function (res) {
        _this2.$router.push('/studrnts/student-list');
      })["catch"](function (err) {
        _this2.errors = err.response.data;

        _this2.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    createStudent: function createStudent(data) {
      var _this3 = this;

      axios.post('/student', data).then(function (res) {
        _this3.$router.push('/students/student-list');
      })["catch"](function (err) {
        _this3.errors = err.response.data;

        _this3.$root.alertNotify(err.response.status, null, "error", err.response.data);
      });
    },
    onSubmit: function onSubmit() {
      var _this4 = this;

      this.loading = true;

      var data = _objectSpread(_objectSpread({}, this.submitData), {}, {
        customer_address: this.customer_address,
        customer: this.customer,
        studnt_info: this.stdInfo,
        subjects: this.subjects
      });

      if (!this.edit_mode) {
        this.createStudent(data);
      } else {
        this.updateStudent(data);
      }

      setTimeout(function () {
        _this4.loading = false;
      }, 1000);
    }
  },
  mounted: function mounted() {
    this.getSubjectList();

    if (this.edit_mode) {
      this.submitData = [];
      this.submitData = this.form;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=template&id=f3db5178":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=template&id=f3db5178 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

  var _component_StudentListForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StudentListForm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: "Add Student",
    previous: [{
      name: 'Students',
      link: '/students/student-list/'
    }]
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StudentListForm)])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=template&id=2c00c769":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=template&id=2c00c769 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "for": "multicol-Register Date"
}, "Register Date", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "col-md-6"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-AdmininCharge"
}, "Admin in Charge", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"45\"> Sorfina</option><option value=\"8\">Fazira</option><option value=\"77\">ADIB AZMI</option><option value=\"34\">Aidid </option><option value=\"57\">Alif Naquiddin</option><option value=\"24\">Amin</option><option value=\"81\">&#39;Arisya Sofea </option><option value=\"83\">Assayidatun Najihah </option><option value=\"74\">AZFAHSHAZ ZULKEPLI</option><option value=\"62\">Customer Service (Test)</option><option value=\"30\">Faris</option><option value=\"47\">Farisd</option><option value=\"13\">Gaya</option><option value=\"3\">Hafiz</option><option value=\"9\">Haizuran</option><option value=\"61\">Hariz Irfan</option><option value=\"10\">Juliza</option><option value=\"21\">Mas</option><option value=\"75\">BADRUL HISYAM</option><option value=\"51\">Najmy</option><option value=\"73\">Afiq Noromi</option><option value=\"32\">Firdaus</option><option value=\"2\">Syamil</option><option value=\"53\">Afif</option><option value=\"67\">Monisha A/p Chandran</option><option value=\"14\">Asyraf</option><option value=\"12\">Ameer</option><option value=\"52\">Amirul</option><option value=\"42\">Azreen</option><option value=\"16\">Harith</option><option value=\"59\">HAZMAN SHAHRILL</option><option value=\"18\">Imran</option><option value=\"41\">Irfan</option><option value=\"36\">KHAIRUL</option><option value=\"70\">Muhammad Syafi Amin Bin Mohd Fadzil</option><option value=\"58\">Syafiq Syazwan</option><option value=\"28\">AREEP</option><option value=\"23\">Husna</option><option value=\"40\">Batrisyia</option><option value=\"26\">Nazira</option><option value=\"38\">EEZA</option><option value=\"72\">Nor Asyiqin Binti Toni</option><option value=\"6\">Nadia</option><option value=\"37\">SHAHIRAH</option><option value=\"50\">Shahirah</option><option value=\"19\">Rina</option><option value=\"35\">Fazira</option><option value=\"54\">Syelis</option><option value=\"65\">ATHIRAH SOLIHEN</option><option value=\"22\">ATIRAH</option><option value=\"79\">Fatihah Roslan</option><option value=\"5\">Azera</option><option value=\"44\">Hafizah</option><option value=\"43\">AMIR</option><option value=\"20\">Shahirah</option><option value=\"25\">Suhaila</option><option value=\"1\">Suziani</option><option value=\"69\">Nur Syafiqah Radhuan</option><option value=\"55\">Nurfatin Munirah Binti Mohd Azman</option><option value=\"76\">Safwah Shaharin</option><option value=\"49\">Nurizan</option><option value=\"64\">Nurul Azuha Binti Nazmi</option><option value=\"60\">Azwani Sulaiman</option><option value=\"82\">Tehah</option><option value=\"68\">Nurul Hasmida Azmi</option><option value=\"31\">Syida</option><option value=\"39\">Aqila</option><option value=\"71\">QAISARAH</option><option value=\"80\">Ros Nabilah</option><option value=\"27\">Shafiqa</option><option value=\"33\">Siti </option><option value=\"15\">Syaza</option><option value=\"4\">Adda</option><option value=\"29\">Sitinor</option><option value=\"78\">SYARIFAH</option><option value=\"11\">Tutor Coordinator</option><option value=\"56\">Wazeerah Azmi </option><option value=\"17\">Izyan</option><option value=\"7\">Zam</option>", 79);

var _hoisted_86 = [_hoisted_7];

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Student Information", -1
/* HOISTED */
);

var _hoisted_88 = {
  "class": "col-md-6"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Fullname"
}, "Fullname", -1
/* HOISTED */
);

var _hoisted_90 = ["onUpdate:modelValue"];
var _hoisted_91 = {
  "class": "col-md-6"
};

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Gender"
}, "Gender", -1
/* HOISTED */
);

var _hoisted_93 = ["onUpdate:modelValue"];

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Male"
}, "Male", -1
/* HOISTED */
);

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Female"
}, "Female", -1
/* HOISTED */
);

var _hoisted_96 = [_hoisted_94, _hoisted_95];
var _hoisted_97 = {
  "class": "col-md-6"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Fullname"
}, "Age", -1
/* HOISTED */
);

var _hoisted_99 = ["onUpdate:modelValue"];
var _hoisted_100 = {
  "class": "col-md-6"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Dob"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_102 = ["onUpdate:modelValue"];
var _hoisted_103 = {
  "class": "col-md-6"
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Nric"
}, "Nric", -1
/* HOISTED */
);

var _hoisted_105 = ["onUpdate:modelValue"];
var _hoisted_106 = {
  key: 0,
  "class": "col-md-6 align-self-end text-end"
};
var _hoisted_107 = ["onClick"];

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-trash me-2"
}, null, -1
/* HOISTED */
);

var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove Student ");

var _hoisted_110 = [_hoisted_108, _hoisted_109];

var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus me-2"
}, null, -1
/* HOISTED */
);

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Student");

var _hoisted_113 = [_hoisted_111, _hoisted_112];

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-4 mx-n4"
}, null, -1
/* HOISTED */
);

var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Customer Information", -1
/* HOISTED */
);

var _hoisted_116 = {
  "class": "row g-3"
};
var _hoisted_117 = {
  "class": "col-md-6"
};

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-FullName"
}, "FullName", -1
/* HOISTED */
);

var _hoisted_119 = {
  "class": "col-md-6"
};

var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Gender"
}, "Gender", -1
/* HOISTED */
);

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Male"
}, "Male", -1
/* HOISTED */
);

var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Female"
}, "Female", -1
/* HOISTED */
);

var _hoisted_123 = [_hoisted_121, _hoisted_122];
var _hoisted_124 = {
  "class": "col-md-6"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-email"
}, "Email", -1
/* HOISTED */
);

var _hoisted_126 = {
  "class": "input-group input-group-merge"
};

var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "multicol-email2"
}, "@example.com", -1
/* HOISTED */
);

var _hoisted_128 = {
  "class": "col-md-6"
};

var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Phone-No"
}, "Phone No", -1
/* HOISTED */
);

var _hoisted_130 = {
  "class": "col-md-6"
};

var _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Fullname"
}, "Age", -1
/* HOISTED */
);

var _hoisted_132 = {
  "class": "col-md-6"
};

var _hoisted_133 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Dob"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_134 = {
  "class": "col-md-6"
};

var _hoisted_135 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-Nric"
}, "Nric", -1
/* HOISTED */
);

var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-4 mx-n4"
}, null, -1
/* HOISTED */
);

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Customer Address", -1
/* HOISTED */
);

var _hoisted_138 = {
  "class": "row g-3"
};
var _hoisted_139 = {
  "class": "col-md-6"
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-StreetAddress1"
}, "Street Address 1", -1
/* HOISTED */
);

var _hoisted_141 = {
  "class": "col-md-6"
};

var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-StreetAddress2"
}, "Street Address 1", -1
/* HOISTED */
);

var _hoisted_143 = {
  "class": "col-md-6"
};

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-State"
}, "State", -1
/* HOISTED */
);

var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Select</option><option>Selangor</option><option>Penang</option><option>Johor</option><option>Kuala Lumpur</option><option>Negeri Sembilan</option><option>Melaka</option><option>Pahang</option><option>Perlis</option><option>Perak</option><option>Kedah</option><option>Terengganu</option><option>Kelantan</option><option>Serawak</option><option>Sabah</option><option>Putrajaya</option>", 16);

var _hoisted_161 = [_hoisted_145];
var _hoisted_162 = {
  "class": "col-md-6"
};

var _hoisted_163 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-City"
}, "City", -1
/* HOISTED */
);

var _hoisted_164 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option>Pulau Indah</option><option>Pulau Ketam</option><option>Puncak Alam</option><option>Rasa</option><option>Rawang</option><option>Sabak Bernam</option><option>Sekinchan</option><option>Semenyih</option><option>Sepang</option><option>Serdang</option><option>Serendah</option><option>Seri Kembangan</option><option>Shah Alam</option><option>Subang Jaya</option><option>Sungai Besar</option><option>Sungai Buloh</option><option>Sungai Pelek</option><option>Tanjong Karang</option><option>Tanjong Sepat</option><option>Telok Panglima Garang</option>", 20);

var _hoisted_184 = [_hoisted_164];
var _hoisted_185 = {
  "class": "col-md-6"
};

var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-PostCode"
}, "PostCode", -1
/* HOISTED */
);

var _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-4 mx-n4"
}, null, -1
/* HOISTED */
);

var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Commitment Fee", -1
/* HOISTED */
);

var _hoisted_189 = {
  "class": "row g-3"
};

var _hoisted_190 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "mt-0"
}, "RM 50 payment receipt is required to be uploaded for a new student registration.", -1
/* HOISTED */
);

var _hoisted_191 = {
  "class": "col-md-6"
};

var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-PaymentAttachment"
}, "Payment Attachment", -1
/* HOISTED */
);

var _hoisted_193 = ["v-model"];
var _hoisted_194 = {
  "class": "col-md-6"
};

var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-PaymentDate"
}, "Fee Payment Date", -1
/* HOISTED */
);

var _hoisted_196 = {
  "class": "col-md-6"
};

var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-ReceivingAccountId"
}, "Receiving Account", -1
/* HOISTED */
);

var _hoisted_198 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "45"
}, "Cash In Hand", -1
/* HOISTED */
);

var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "73"
}, "Payment Gateway - BillPlz Sdn Bhd", -1
/* HOISTED */
);

var _hoisted_200 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "76"
}, "Payment Gateway - Ipay88", -1
/* HOISTED */
);

var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "68"
}, "Public Bank", -1
/* HOISTED */
);

var _hoisted_202 = [_hoisted_198, _hoisted_199, _hoisted_200, _hoisted_201];

var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-4 mx-n4"
}, null, -1
/* HOISTED */
);

var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Subject Subscribes", -1
/* HOISTED */
);

var _hoisted_205 = {
  "class": "row g-3 mb-4"
};
var _hoisted_206 = {
  "class": "col-md-6"
};

var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-HourPerSubject"
}, "Hour Per Subject", -1
/* HOISTED */
);

var _hoisted_208 = {
  "class": "col-md-6"
};

var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "multicol-SubscriptionDurationTerm"
}, "Subscription Duration Term", -1
/* HOISTED */
);

var _hoisted_210 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Short Term", -1
/* HOISTED */
);

var _hoisted_211 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "Long Term", -1
/* HOISTED */
);

var _hoisted_212 = [_hoisted_210, _hoisted_211];
var _hoisted_213 = {
  "class": "col-md-6"
};
var _hoisted_214 = {
  "class": "form-group"
};

var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, " Subjects ", -1
/* HOISTED */
);

var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  slot: "noResult"
}, "Oops! No elements found. Consider changing the search query.", -1
/* HOISTED */
);

var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
  var _ctx$errors, _ctx$errors2, _ctx$errors3, _ctx$errors4, _ctx$errors5, _ctx$errors6, _ctx$errors7, _ctx$errors8, _ctx$errors9, _ctx$errors10, _ctx$errors11, _ctx$errors12, _ctx$errors13, _ctx$errors14, _ctx$errors15, _ctx$errors16, _ctx$errors17, _ctx$errors18, _ctx$errors19, _ctx$errors20, _ctx$errors21, _ctx$errors22, _ctx$errors23, _ctx$errors24, _ctx$errors25, _ctx$errors26, _ctx$errors27, _ctx$errors28, _ctx$errors29, _ctx$errors30, _ctx$errors31, _ctx$errors32, _ctx$errors33, _ctx$errors34, _ctx$errors35, _ctx$errors36, _ctx$errors37, _ctx$errors38;

  var _component_validate_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validate-input");

  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "card-body",
    onSubmit: _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.submitData.register_date = $event;
    }),
    id: "multicol-Register Date",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors = _ctx.errors) === null || _ctx$errors === void 0 ? void 0 : _ctx$errors.errors, 'register_date'))),
    placeholder: "Register Date"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.submitData.register_date]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors2 = _ctx.errors) === null || _ctx$errors2 === void 0 ? void 0 : _ctx$errors2.errors,
    value: "register_date"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-AdmininCharge",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors3 = _ctx.errors) === null || _ctx$errors3 === void 0 ? void 0 : _ctx$errors3.errors, 'admin_charge'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.submitData.admin_charge = $event;
    })
  }, _hoisted_86, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.submitData.admin_charge]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors4 = _ctx.errors) === null || _ctx$errors4 === void 0 ? void 0 : _ctx$errors4.errors,
    value: "admin_charge"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_87, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.studentInfo, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row g-3 mb-3",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.stdInfo[index].fullname = $event;
      },
      id: "multicol-Fullname",
      "class": "form-control",
      placeholder: "Fullname"
    }, null, 8
    /* PROPS */
    , _hoisted_90), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.stdInfo[index].fullname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [_hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      id: "multicol-Gender",
      "class": "select2 form-select",
      "data-allow-clear": "true",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.stdInfo[index].gender = $event;
      }
    }, _hoisted_96, 8
    /* PROPS */
    , _hoisted_93), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.stdInfo[index].gender]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "number",
      id: "multicol-Age",
      "class": "form-control",
      placeholder: "Age",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.stdInfo[index].age = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_99), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.stdInfo[index].age]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      id: "multicol-Dob",
      "class": "form-control",
      placeholder: "Dob",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.stdInfo[index].dob = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_102), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.stdInfo[index].dob]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      id: "multicol-Nric",
      "class": "form-control",
      placeholder: "Nric",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.stdInfo[index].nric = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_105), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.stdInfo[index].nric]])]), index !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-danger",
      onClick: function onClick($event) {
        return $options.removeStudent(index);
      }
    }, _hoisted_110, 8
    /* PROPS */
    , _hoisted_107)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.addStudent && $options.addStudent.apply($options, arguments);
    })
  }, _hoisted_113), _hoisted_114, _hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-FullName",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors5 = _ctx.errors) === null || _ctx$errors5 === void 0 ? void 0 : _ctx$errors5.errors, 'fullname'))),
    placeholder: "FullName",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.customer.fullname = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer.fullname]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors6 = _ctx.errors) === null || _ctx$errors6 === void 0 ? void 0 : _ctx$errors6.errors,
    value: "fullname"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [_hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-Gender",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors7 = _ctx.errors) === null || _ctx$errors7 === void 0 ? void 0 : _ctx$errors7.errors, 'gender'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.customer.gender = $event;
    })
  }, _hoisted_123, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.customer.gender]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors8 = _ctx.errors) === null || _ctx$errors8 === void 0 ? void 0 : _ctx$errors8.errors,
    value: "gender"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "multicol-email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors9 = _ctx.errors) === null || _ctx$errors9 === void 0 ? void 0 : _ctx$errors9.errors, 'email'))),
    placeholder: "john.doe",
    "aria-label": "john.doe",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.customer.email = $event;
    }),
    "aria-describedby": "multicol-email2"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer.email]]), _hoisted_127]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors10 = _ctx.errors) === null || _ctx$errors10 === void 0 ? void 0 : _ctx$errors10.errors,
    value: "email"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [_hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "multicol-Phone-No",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.customer.phone = $event;
    }),
    placeholder: "Phone No",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors11 = _ctx.errors) === null || _ctx$errors11 === void 0 ? void 0 : _ctx$errors11.errors, 'phone')))
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer.phone]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors12 = _ctx.errors) === null || _ctx$errors12 === void 0 ? void 0 : _ctx$errors12.errors,
    value: "phone"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [_hoisted_131, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    id: "multicol-Age",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors13 = _ctx.errors) === null || _ctx$errors13 === void 0 ? void 0 : _ctx$errors13.errors, 'age'))),
    placeholder: "Age",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.customer.age = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer.age]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors14 = _ctx.errors) === null || _ctx$errors14 === void 0 ? void 0 : _ctx$errors14.errors,
    value: "age"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [_hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    id: "multicol-Dob",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors15 = _ctx.errors) === null || _ctx$errors15 === void 0 ? void 0 : _ctx$errors15.errors, 'dob'))),
    placeholder: "Dob",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.customer.dob = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer.dob]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors16 = _ctx.errors) === null || _ctx$errors16 === void 0 ? void 0 : _ctx$errors16.errors,
    value: "dob"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [_hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-Nric",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors17 = _ctx.errors) === null || _ctx$errors17 === void 0 ? void 0 : _ctx$errors17.errors, 'nric'))),
    placeholder: "Nric",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.customer.nric = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer.nric]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors18 = _ctx.errors) === null || _ctx$errors18 === void 0 ? void 0 : _ctx$errors18.errors,
    value: "nric"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_136, _hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [_hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-StreetAddress1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors19 = _ctx.errors) === null || _ctx$errors19 === void 0 ? void 0 : _ctx$errors19.errors, 'street_address_1'))),
    placeholder: "Street Address 1",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return _ctx.customer_address.street_address_1 = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer_address.street_address_1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors20 = _ctx.errors) === null || _ctx$errors20 === void 0 ? void 0 : _ctx$errors20.errors,
    value: "street_address_1"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [_hoisted_142, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-StreetAddress2",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors21 = _ctx.errors) === null || _ctx$errors21 === void 0 ? void 0 : _ctx$errors21.errors, 'street_address_2'))),
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return _ctx.customer_address.street_address_2 = $event;
    }),
    placeholder: "Street Address 2"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer_address.street_address_2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors22 = _ctx.errors) === null || _ctx$errors22 === void 0 ? void 0 : _ctx$errors22.errors,
    value: "street_address_2"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-State",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors23 = _ctx.errors) === null || _ctx$errors23 === void 0 ? void 0 : _ctx$errors23.errors, 'admin_charge'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return _ctx.customer_address.state = $event;
    })
  }, _hoisted_161, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.customer_address.state]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors24 = _ctx.errors) === null || _ctx$errors24 === void 0 ? void 0 : _ctx$errors24.errors,
    value: "state"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [_hoisted_163, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-State",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors25 = _ctx.errors) === null || _ctx$errors25 === void 0 ? void 0 : _ctx$errors25.errors, 'admin_charge'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return _ctx.customer_address.city = $event;
    })
  }, _hoisted_184, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.customer_address.city]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors26 = _ctx.errors) === null || _ctx$errors26 === void 0 ? void 0 : _ctx$errors26.errors,
    value: "city"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-PostCode",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors27 = _ctx.errors) === null || _ctx$errors27 === void 0 ? void 0 : _ctx$errors27.errors, 'post_code'))),
    placeholder: "PostCode",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return _ctx.customer_address.post_code = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.customer_address.post_code]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors28 = _ctx.errors) === null || _ctx$errors28 === void 0 ? void 0 : _ctx$errors28.errors,
    value: "post_code"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_187, _hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_189, [_hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [_hoisted_192, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    id: "multicol-PaymentAttachment",
    "v-model": _ctx.submitData.payment_attachment,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors29 = _ctx.errors) === null || _ctx$errors29 === void 0 ? void 0 : _ctx$errors29.errors, 'payment_attachment'))),
    placeholder: "Payment Attachment"
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_193), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors30 = _ctx.errors) === null || _ctx$errors30 === void 0 ? void 0 : _ctx$errors30.errors,
    value: "payment_attachment"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [_hoisted_195, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    id: "multicol-PaymentDate",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors31 = _ctx.errors) === null || _ctx$errors31 === void 0 ? void 0 : _ctx$errors31.errors, 'fee_payment_date'))),
    placeholder: "Fee Payment Date",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return _ctx.submitData.fee_payment_date = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.submitData.fee_payment_date]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors32 = _ctx.errors) === null || _ctx$errors32 === void 0 ? void 0 : _ctx$errors32.errors,
    value: "fee_payment_date"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_196, [_hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-ReceivingAccountId",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors33 = _ctx.errors) === null || _ctx$errors33 === void 0 ? void 0 : _ctx$errors33.errors, 'receiving_account'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return _ctx.submitData.receiving_account = $event;
    })
  }, _hoisted_202, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.submitData.receiving_account]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors34 = _ctx.errors) === null || _ctx$errors34 === void 0 ? void 0 : _ctx$errors34.errors,
    value: "receiving_account"
  }, null, 8
  /* PROPS */
  , ["errors"])])]), _hoisted_203, _hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [_hoisted_207, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "multicol-HourPerSubject",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("form-control ".concat(this.$root.appendValidateClass((_ctx$errors35 = _ctx.errors) === null || _ctx$errors35 === void 0 ? void 0 : _ctx$errors35.errors, 'hour_per_subject'))),
    placeholder: "Hour Per Subject",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return _ctx.submitData.hour_per_subject = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.submitData.hour_per_subject]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors36 = _ctx.errors) === null || _ctx$errors36 === void 0 ? void 0 : _ctx$errors36.errors,
    value: "hour_per_subject"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [_hoisted_209, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "multicol-SubscriptionDurationTerm",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("select2 form-select ".concat(this.$root.appendValidateClass((_ctx$errors37 = _ctx.errors) === null || _ctx$errors37 === void 0 ? void 0 : _ctx$errors37.errors, 'subscription_duration'))),
    "data-allow-clear": "true",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return _ctx.submitData.subscription_duration = $event;
    })
  }, _hoisted_212, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.submitData.subscription_duration]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validate_input, {
    errors: (_ctx$errors38 = _ctx.errors) === null || _ctx$errors38 === void 0 ? void 0 : _ctx$errors38.errors,
    value: "subscription_duration"
  }, null, 8
  /* PROPS */
  , ["errors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [_hoisted_215, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
    modelValue: _ctx.subjects,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return _ctx.subjects = $event;
    }),
    options: _ctx.subjectList,
    multiple: true,
    "group-values": "subjects",
    "group-label": "category",
    "group-select": true,
    placeholder: "Search by subject name",
    "track-by": "name",
    label: "name"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_216];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "options"])])])]), _hoisted_217], 32
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

/***/ "./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateStudentListComponent_vue_vue_type_template_id_f3db5178__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateStudentListComponent.vue?vue&type=template&id=f3db5178 */ "./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=template&id=f3db5178");
/* harmony import */ var _CreateStudentListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateStudentListComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateStudentListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateStudentListComponent_vue_vue_type_template_id_f3db5178__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentListForm_vue_vue_type_template_id_2c00c769__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentListForm.vue?vue&type=template&id=2c00c769 */ "./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=template&id=2c00c769");
/* harmony import */ var _StudentListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentListForm.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_sifututor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StudentListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StudentListForm_vue_vue_type_template_id_2c00c769__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue"]])
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

/***/ "./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStudentListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStudentListComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateStudentListComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StudentListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StudentListForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StudentListForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=template&id=f3db5178":
/*!**************************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=template&id=f3db5178 ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStudentListComponent_vue_vue_type_template_id_f3db5178__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateStudentListComponent_vue_vue_type_template_id_f3db5178__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateStudentListComponent.vue?vue&type=template&id=f3db5178 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/CreateStudentListComponent.vue?vue&type=template&id=f3db5178");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=template&id=2c00c769":
/*!***************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=template&id=2c00c769 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StudentListForm_vue_vue_type_template_id_2c00c769__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StudentListForm_vue_vue_type_template_id_2c00c769__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StudentListForm.vue?vue&type=template&id=2c00c769 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/student/student-list/StudentListForm.vue?vue&type=template&id=2c00c769");


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
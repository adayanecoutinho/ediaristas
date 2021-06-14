self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/ui/components/data-display/UserInformation/UserInformation.style.tsx":
/*!**********************************************************************************!*\
  !*** ./src/ui/components/data-display/UserInformation/UserInformation.style.tsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInformationContainer": function() { return /* binding */ UserInformationContainer; },
/* harmony export */   "UserName": function() { return /* binding */ UserName; },
/* harmony export */   "UserDescription": function() { return /* binding */ UserDescription; },
/* harmony export */   "AvatarStyled": function() { return /* binding */ AvatarStyled; },
/* harmony export */   "RatingStyled": function() { return /* binding */ RatingStyled; }
/* harmony export */ });
/* harmony import */ var C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject5() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  font-weight: bolder;\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var UserInformationContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)("div")(_templateObject());
var UserName = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)("div")(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.body2.fontSize;
});
var UserDescription = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)("div")(_templateObject3());
var AvatarStyled = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar)(_templateObject4());
var RatingStyled = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Rating)(_templateObject5());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L1VzZXJJbmZvcm1hdGlvbi9Vc2VySW5mb3JtYXRpb24uc3R5bGUudHN4Il0sIm5hbWVzIjpbIlVzZXJJbmZvcm1hdGlvbkNvbnRhaW5lciIsInN0eWxlZCIsIlVzZXJOYW1lIiwidGhlbWUiLCJwYWxldHRlIiwidGV4dCIsInByaW1hcnkiLCJ0eXBvZ3JhcGh5IiwiYm9keTIiLCJmb250U2l6ZSIsIlVzZXJEZXNjcmlwdGlvbiIsIkF2YXRhclN0eWxlZCIsIkF2YXRhciIsIlJhdGluZ1N0eWxlZCIsIlJhdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSx3QkFBd0IsR0FBR0MsNEVBQU0sQ0FBQyxLQUFELENBQVQsbUJBQTlCO0FBRUEsSUFBTUMsUUFBUSxHQUFHRCw0RUFBTSxDQUFDLEtBQUQsQ0FBVCxxQkFFVjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxJQUFkLENBQW1CQyxPQUFsQztBQUFBLENBRlUsRUFHTjtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksVUFBTixDQUFpQkMsS0FBakIsQ0FBdUJDLFFBQXRDO0FBQUEsQ0FITSxDQUFkO0FBTUEsSUFBTUMsZUFBZSxHQUFHVCw0RUFBTSxDQUFDLEtBQUQsQ0FBVCxvQkFBckI7QUFFQSxJQUFNVSxZQUFZLEdBQUdWLDRFQUFNLENBQUNXLHFEQUFELENBQVQsb0JBQWxCO0FBRUEsSUFBTUMsWUFBWSxHQUFHWiw0RUFBTSxDQUFDYSxxREFBRCxDQUFULG9CQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MWQ3NjllOWRkZDE1OWI2MTAwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZXJpbWVudGFsU3R5bGVkIGFzIHN0eWxlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBSYXRpbmcgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mb3JtYXRpb25Db250YWluZXIgPSBzdHlsZWQoXCJkaXZcIilgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTmFtZSA9IHN0eWxlZChcImRpdlwiKWBcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5fTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHlwb2dyYXBoeS5ib2R5Mi5mb250U2l6ZX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckRlc2NyaXB0aW9uID0gc3R5bGVkKFwiZGl2XCIpYGA7XHJcblxyXG5leHBvcnQgY29uc3QgQXZhdGFyU3R5bGVkID0gc3R5bGVkKEF2YXRhcilgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSYXRpbmdTdHlsZWQgPSBzdHlsZWQoUmF0aW5nKWBgO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
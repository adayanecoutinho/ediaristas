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
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  grid-area: rating;\n  font-size: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  grid-area: avatar;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  grid-area: description;\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  grid-area: name;\n  font-weight: bolder;\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_adayane_Documents_Projetos_Dev_multistack_ediaristas_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: grid;\n  grid-template-columns: 60px 1fr;\n  grid-template-rows: repeat(3, auto);\n  grid-template-areas:\n    \"avatar name\"\n    \"avatar rating\"\n    \"avatar description\";\n  background-color: ", ";\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var UserInformationContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)("div")(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.grey[50];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(3);
});
var UserName = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)("div")(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.fontSize;
});
var UserDescription = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)("div")(_templateObject3(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.secondary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.body2.fontSize;
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L1VzZXJJbmZvcm1hdGlvbi9Vc2VySW5mb3JtYXRpb24uc3R5bGUudHN4Il0sIm5hbWVzIjpbIlVzZXJJbmZvcm1hdGlvbkNvbnRhaW5lciIsInN0eWxlZCIsInRoZW1lIiwicGFsZXR0ZSIsImdyZXkiLCJzcGFjaW5nIiwiVXNlck5hbWUiLCJ0ZXh0IiwicHJpbWFyeSIsInR5cG9ncmFwaHkiLCJib2R5MiIsImZvbnRTaXplIiwiVXNlckRlc2NyaXB0aW9uIiwic2Vjb25kYXJ5IiwiQXZhdGFyU3R5bGVkIiwiQXZhdGFyIiwiUmF0aW5nU3R5bGVkIiwiUmF0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLHdCQUF3QixHQUFHQyw0RUFBTSxDQUFDLEtBQUQsQ0FBVCxvQkFRZjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxJQUFkLENBQW1CLEVBQW5CLENBQWY7QUFBQSxDQVJlLEVBU3hCO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUFmO0FBQUEsQ0FUd0IsQ0FBOUI7QUFZQSxJQUFNQyxRQUFRLEdBQUdMLDRFQUFNLENBQUMsS0FBRCxDQUFULHFCQUdWO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNJLElBQWQsQ0FBbUJDLE9BQWxDO0FBQUEsQ0FIVSxFQUlOO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTyxVQUFOLENBQWlCQyxLQUFqQixDQUF1QkMsUUFBdEM7QUFBQSxDQUpNLENBQWQ7QUFPQSxJQUFNQyxlQUFlLEdBQUdYLDRFQUFNLENBQUMsS0FBRCxDQUFULHFCQUVqQjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsT0FBTixDQUFjSSxJQUFkLENBQW1CTSxTQUFsQztBQUFBLENBRmlCLEVBR2I7QUFBQSxNQUFHWCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNPLFVBQU4sQ0FBaUJDLEtBQWpCLENBQXVCQyxRQUF0QztBQUFBLENBSGEsQ0FBckI7QUFNQSxJQUFNRyxZQUFZLEdBQUdiLDRFQUFNLENBQUNjLHFEQUFELENBQVQsb0JBQWxCO0FBSUEsSUFBTUMsWUFBWSxHQUFHZiw0RUFBTSxDQUFDZ0IscURBQUQsQ0FBVCxvQkFBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTRlZjVjMGIyYjcwNTUwZTExMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgUmF0aW5nIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkKFwiZGl2XCIpYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJhdmF0YXIgbmFtZVwiXHJcbiAgICBcImF2YXRhciByYXRpbmdcIlxyXG4gICAgXCJhdmF0YXIgZGVzY3JpcHRpb25cIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhbGV0dGUuZ3JleVs1MF19O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZygzKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlck5hbWUgPSBzdHlsZWQoXCJkaXZcIilgXHJcbiAgZ3JpZC1hcmVhOiBuYW1lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLmZvbnRTaXplfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyRGVzY3JpcHRpb24gPSBzdHlsZWQoXCJkaXZcIilgXHJcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5fTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHlwb2dyYXBoeS5ib2R5Mi5mb250U2l6ZX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXZhdGFyU3R5bGVkID0gc3R5bGVkKEF2YXRhcilgXHJcbiAgZ3JpZC1hcmVhOiBhdmF0YXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUmF0aW5nU3R5bGVkID0gc3R5bGVkKFJhdGluZylgXHJcbiAgZ3JpZC1hcmVhOiByYXRpbmc7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
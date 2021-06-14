(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/globals.css */ "./src/ui/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_themes_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/themes/theme */ "./src/ui/themes/theme.ts");
/* harmony import */ var ui_components_surfaces_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/components/surfaces/Header/Header */ "./src/ui/components/surfaces/Header/Header.tsx");


var _jsxFileName = "C:\\Users\\adayane\\Documents\\Projetos Dev\\multistack\\ediaristas\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("head", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "e-diaristas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "/fonts/tw-icons/css/treinaweb-icons.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
      theme: ui_themes_theme__WEBPACK_IMPORTED_MODULE_3__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_surfaces_Header_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/ui/components/surfaces/Header/Header.style.tsx":
/*!************************************************************!*\
  !*** ./src/ui/components/surfaces/Header/Header.style.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAppBar": function() { return /* binding */ HeaderAppBar; },
/* harmony export */   "HeaderLogo": function() { return /* binding */ HeaderLogo; }
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);


const HeaderAppBar = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AppBar)`
  background-color: ${({
  theme
}) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({
  theme
}) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({
  theme
}) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;
const HeaderLogo = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)("img")`
  height: 25px;

  ${({
  theme
}) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;

/***/ }),

/***/ "./src/ui/components/surfaces/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./src/ui/components/surfaces/Header/Header.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.style */ "./src/ui/components/surfaces/Header/Header.style.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\adayane\\Documents\\Projetos Dev\\multistack\\ediaristas\\src\\ui\\components\\surfaces\\Header\\Header.tsx";




const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_style__WEBPACK_IMPORTED_MODULE_2__.HeaderAppBar, {
    position: "sticky",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_style__WEBPACK_IMPORTED_MODULE_2__.HeaderLogo, {
        src: "/img/logos/logo.svg",
        alt: "e-diaristas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/ui/themes/theme.ts":
/*!********************************!*\
  !*** ./src/ui/themes/theme.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      light: "#9661ff",
      main: "#6B2AEE",
      dark: "#581ECD"
    },
    secondary: {
      light: "#2bfff2",
      main: "#02E7D9",
      dark: "#1dd6cb"
    },
    text: {
      primary: "#707070",
      secondary: "#9B9B9B"
    },
    error: {
      main: "#FC3C00"
    },
    warning: {
      main: "#FCA600"
    },
    success: {
      main: "#00D34D"
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B"
    }
  },
  typography: {
    fontFamily: "Poppins"
  },
  shape: {
    borderRadius: "3px"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      },
      variants: [{
        props: {
          variant: "contained",
          color: "secondary"
        },
        style: {
          color: "white"
        }
      }]
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)"
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/ui/styles/globals.css":
/*!***********************************!*\
  !*** ./src/ui/styles/globals.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGlhcmlzdGFzLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2VkaWFyaXN0YXMvLi9zcmMvdWkvY29tcG9uZW50cy9zdXJmYWNlcy9IZWFkZXIvSGVhZGVyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9lZGlhcmlzdGFzLy4vc3JjL3VpL2NvbXBvbmVudHMvc3VyZmFjZXMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vZWRpYXJpc3Rhcy8uL3NyYy91aS90aGVtZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZWRpYXJpc3Rhcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vZWRpYXJpc3Rhcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovL2VkaWFyaXN0YXMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2VkaWFyaXN0YXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwiSGVhZGVyQXBwQmFyIiwic3R5bGVkIiwiQXBwQmFyIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImJyZWFrcG9pbnRzIiwidXAiLCJkb3duIiwiSGVhZGVyTG9nbyIsIkhlYWRlciIsIkNvbnRhaW5lciIsImNyZWF0ZVRoZW1lIiwicHJpbWFyeSIsImxpZ2h0IiwibWFpbiIsImRhcmsiLCJzZWNvbmRhcnkiLCJ0ZXh0IiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImdyZXkiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsInRleHRUcmFuc2Zvcm0iLCJ2YXJpYW50cyIsInByb3BzIiwidmFyaWFudCIsImNvbG9y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YmFscy5jc3NcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwidWkvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgaGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ1aS9jb21wb25lbnRzL3N1cmZhY2VzL0hlYWRlci9IZWFkZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+ZS1kaWFyaXN0YXM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvZm9udHMvdHctaWNvbnMvY3NzL3RyZWluYXdlYi1pY29ucy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEFwcEJhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckFwcEJhciA9IHN0eWxlZChBcHBCYXIpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfTtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIil9IHtcclxuICAgIC5NdWlUb29sYmFyLXJvb3Qge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIil9IHtcclxuICAgIC5NdWlUb29sYmFyLXJvb3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTG9nbyA9IHN0eWxlZChcImltZ1wiKWBcclxuICBoZWlnaHQ6IDI1cHg7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKX0ge1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJBcHBCYXIsIEhlYWRlckxvZ28gfSBmcm9tIFwiLi9IZWFkZXIuc3R5bGVcIjtcclxuaW1wb3J0IHsgVG9vbGJhciwgQ29udGFpbmVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyQXBwQmFyIHBvc2l0aW9uPXtcInN0aWNreVwifT5cclxuICAgICAgPFRvb2xiYXIgY29tcG9uZW50PXtDb250YWluZXJ9PlxyXG4gICAgICAgIDxIZWFkZXJMb2dvIHNyYz17XCIvaW1nL2xvZ29zL2xvZ28uc3ZnXCJ9IGFsdD17XCJlLWRpYXJpc3Rhc1wifSAvPlxyXG4gICAgICA8L1Rvb2xiYXI+XHJcbiAgICA8L0hlYWRlckFwcEJhcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBsaWdodDogXCIjOTY2MWZmXCIsXHJcbiAgICAgIG1haW46IFwiIzZCMkFFRVwiLFxyXG4gICAgICBkYXJrOiBcIiM1ODFFQ0RcIixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbGlnaHQ6IFwiIzJiZmZmMlwiLFxyXG4gICAgICBtYWluOiBcIiMwMkU3RDlcIixcclxuICAgICAgZGFyazogXCIjMWRkNmNiXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBwcmltYXJ5OiBcIiM3MDcwNzBcIixcclxuICAgICAgc2Vjb25kYXJ5OiBcIiM5QjlCOUJcIixcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiBcIiNGQzNDMDBcIixcclxuICAgIH0sXHJcbiAgICB3YXJuaW5nOiB7XHJcbiAgICAgIG1haW46IFwiI0ZDQTYwMFwiLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgbWFpbjogXCIjMDBEMzREXCIsXHJcbiAgICB9LFxyXG4gICAgZ3JleToge1xyXG4gICAgICA1MDogXCIjRkFGQUZBXCIsXHJcbiAgICAgIDEwMDogXCIjRjBGMEYwXCIsXHJcbiAgICAgIDIwMDogXCIjRDdEOUREXCIsXHJcbiAgICAgIDMwMDogXCIjQzRDNEM0XCIsXHJcbiAgICAgIDQwMDogXCIjOUI5QjlCXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogXCJQb3BwaW5zXCIsXHJcbiAgfSxcclxuICBzaGFwZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdmFyaWFudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wczogeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9LFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBNdWlQYXBlcjoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogXCIwcHggMHB4IDM5cHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
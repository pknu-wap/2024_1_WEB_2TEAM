"use strict";
(globalThis["webpackChunkzeroback"] = globalThis["webpackChunkzeroback"] || []).push([["stories-Header-stories"],{

/***/ "./src/stories/Header.stories.js":
/*!***************************************!*\
  !*** ./src/stories/Header.stories.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedIn: () => (/* binding */ LoggedIn),
/* harmony export */   LoggedOut: () => (/* binding */ LoggedOut),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/stories/Header.jsx");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Example/Header',
  component: _Header__WEBPACK_IMPORTED_MODULE_0__.Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),
    onLogout: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),
    onCreateAccount: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()
  }
});
const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
};
const LoggedOut = {};
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...LoggedIn.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
      ...LoggedIn.parameters?.docs?.source
    }
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...LoggedOut.parameters?.docs,
    source: {
      originalSource: "{}",
      ...LoggedOut.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["LoggedIn","LoggedOut"];

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=stories-Header-stories.iframe.bundle.js.map
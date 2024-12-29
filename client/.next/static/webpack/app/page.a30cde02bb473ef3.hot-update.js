"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Loading...\");\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(\"http://localhost:8080\", \"/api/users\"));\n            const data = await response.json();\n            console.log(data);\n            setPeople(data);\n            setMessage(\"Data fetched from Backend successfully\");\n        } catch (error) {\n            console.error(error);\n            setMessage(\"Error fetching data\");\n        }\n    };\n    const fetchUser = async (userId)=>{\n        try {\n            const response = await fetch(\"\".concat(\"http://localhost:8080\", \"/api/users/\").concat(userId));\n            const data = await response.json();\n            console.log(data);\n            setUser(data);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            fetchData();\n            // fetch(\"http://localhost:8080/api/users\").then(\n            //   response => response.json()\n            // ).then(\n            //   data => {\n            //     console.log(data);\n            //     setPeople(data);\n            //   })s\n            fetchUser(2);\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-saitLightBlue min-h-screen flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white border-4 rounded-lg border-saitBlue shadow-lg w-11/12 md:w-1/2 lg:w-1/3 px-6 py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/sait-logo.png\",\n                        alt: \"Campus Connect\",\n                        className: \"rounded-lg mb-6 mx-auto w-40 md:w-60\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/admin/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center text-lg bg-saitLightBlue rounded-xl border-black font-semibold mb-8 text-saitWhite hover:underline\",\n                            children: \"Go to Admin Login Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/student/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center text-lg bg-saitLightBlue rounded-xl border-black font-semibold text-saitWhite hover:underline\",\n                            children: \"Go to Student Login Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white border-4 rounded-lg border-saitBlue shadow-lg w-11/12 md:w-1/2 lg:w-1/3 px-6 py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Hello there\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: message ? message : null\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: people.map((person, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: person.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: person.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: person.age\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4\",\n                        children: \"Selected User:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: JSON.stringify(user)\n                    }, void 0, false, {\n                        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/SAIT-Capstone Proj/campus-connect (Next-Express)/client/src/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"5VWlfz6k6QRVHKTmgCdFCWqCx/Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU2QjtBQUVzQjtBQUVwQyxTQUFTSTs7SUFFdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxDLE1BQU1TLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUM7WUFDcEUsTUFBTUcsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1pULFVBQVVTO1lBQ1ZYLFdBQVc7UUFDYixFQUFFLE9BQU9lLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtZQUNkZixXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1nQixZQUFZLE9BQU9DO1FBQ3ZCLElBQUk7WUFDRixNQUFNWCxXQUFXLE1BQU1DLE1BQU0sR0FBb0RVLE9BQWpEVCx1QkFBbUMsRUFBQyxlQUFvQixPQUFQUztZQUNqRixNQUFNTixPQUFPLE1BQU1MLFNBQVNNLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWlAsUUFBUU87UUFDVixFQUFFLE9BQU9PLEtBQUs7WUFDWkwsUUFBUUUsS0FBSyxDQUFDRztRQUNoQjtJQUNGO0lBR0FyQixnREFBU0E7MEJBQUM7WUFDUlE7WUFDQSxpREFBaUQ7WUFDakQsZ0NBQWdDO1lBQ2hDLFVBQVU7WUFDVixjQUFjO1lBQ2QseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2QixRQUFRO1lBQ1JXLFVBQVU7UUFDWjt5QkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKSCxXQUFVOzs7Ozs7a0NBRVosOERBQUMxQixpREFBSUE7d0JBQUM4QixNQUFLO2tDQUNULDRFQUFDQzs0QkFBR0wsV0FBVTtzQ0FBaUg7Ozs7Ozs7Ozs7O2tDQUlqSSw4REFBQzFCLGlEQUFJQTt3QkFBQzhCLE1BQUs7a0NBQ1QsNEVBQUNDOzRCQUFHTCxXQUFVO3NDQUE0Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzlILDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFHM0IsVUFBVUEsVUFBVTs7Ozs7O2tDQUN4Qiw4REFBQzRCO2tDQUNFMUIsT0FBTzJCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzs0QkFDbkIscUJBQ0UsOERBQUNYOztrREFDQyw4REFBQ1k7a0RBQUlGLE9BQU9HLEVBQUU7Ozs7OztrREFDZCw4REFBQ0Q7a0RBQUlGLE9BQU9JLElBQUk7Ozs7OztrREFDaEIsOERBQUNGO2tEQUFJRixPQUFPSyxHQUFHOzs7Ozs7OytCQUhQSjs7Ozs7d0JBTWQ7Ozs7OztrQ0FFRiw4REFBQ0o7d0JBQUVOLFdBQVU7a0NBQU87Ozs7OztrQ0FDcEIsOERBQUNNO2tDQUFHUyxLQUFLQyxTQUFTLENBQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNCO0dBakZ3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL1NBSVQtQ2Fwc3RvbmUgUHJvai9jYW1wdXMtY29ubmVjdCAoTmV4dC1FeHByZXNzKS9jbGllbnQvc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiTG9hZGluZy4uLlwiKVxuICBjb25zdCBbcGVvcGxlLCBzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvdXNlcnNgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHNldFBlb3BsZShkYXRhKTtcbiAgICAgIHNldE1lc3NhZ2UoXCJEYXRhIGZldGNoZWQgZnJvbSBCYWNrZW5kIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBzZXRNZXNzYWdlKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YVwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAodXNlcklkOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL3VzZXJzLyR7dXNlcklkfWApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3VzZXJzXCIpLnRoZW4oXG4gICAgLy8gICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcbiAgICAvLyApLnRoZW4oXG4gICAgLy8gICBkYXRhID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gICAgIHNldFBlb3BsZShkYXRhKTtcbiAgICAvLyAgIH0pc1xuICAgIGZldGNoVXNlcigyKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zYWl0TGlnaHRCbHVlIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItNCByb3VuZGVkLWxnIGJvcmRlci1zYWl0Qmx1ZSBzaGFkb3ctbGcgdy0xMS8xMiBtZDp3LTEvMiBsZzp3LTEvMyBweC02IHB5LThcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9zYWl0LWxvZ28ucG5nXCJcbiAgICAgICAgICBhbHQ9XCJDYW1wdXMgQ29ubmVjdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBtYi02IG14LWF1dG8gdy00MCBtZDp3LTYwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9sb2dpblwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIGJnLXNhaXRMaWdodEJsdWUgcm91bmRlZC14bCBib3JkZXItYmxhY2sgZm9udC1zZW1pYm9sZCBtYi04IHRleHQtc2FpdFdoaXRlIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgR28gdG8gQWRtaW4gTG9naW4gUGFnZVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zdHVkZW50L2xvZ2luXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgYmctc2FpdExpZ2h0Qmx1ZSByb3VuZGVkLXhsIGJvcmRlci1ibGFjayBmb250LXNlbWlib2xkIHRleHQtc2FpdFdoaXRlIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgR28gdG8gU3R1ZGVudCBMb2dpbiBQYWdlXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci00IHJvdW5kZWQtbGcgYm9yZGVyLXNhaXRCbHVlIHNoYWRvdy1sZyB3LTExLzEyIG1kOnctMS8yIGxnOnctMS8zIHB4LTYgcHktOFwiPlxuICAgICAgICA8aDE+SGVsbG8gdGhlcmU8L2gxPlxuICAgICAgICA8cD57bWVzc2FnZSA/IG1lc3NhZ2UgOiBudWxsfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwZW9wbGUubWFwKChwZXJzb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxsaT57cGVyc29uLmlkfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntwZXJzb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57cGVyc29uLmFnZX08L2xpPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPlNlbGVjdGVkIFVzZXI6PC9wPlxuICAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkodXNlcil9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZldGNoVXNlciIsInVzZXJJZCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImhyZWYiLCJoMSIsInAiLCJ1bCIsIm1hcCIsInBlcnNvbiIsImluZGV4IiwibGkiLCJpZCIsIm5hbWUiLCJhZ2UiLCJKU09OIiwic3RyaW5naWZ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
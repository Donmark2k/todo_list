/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_clear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clear.js */ \"./src/modules/clear.js\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n\n\n\n\n\n\n\n// Call the add task function\n(0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n// Call the Delete function\n(0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// Call the edit function\n(0,_modules_edit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// This function update the checkbox status\n(0,_modules_status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n// This function clear completed task\n(0,_modules_clear_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// Calling the display function\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _manageBooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageBooks.js */ \"./src/modules/manageBooks.js\");\n\n\nconst addTask = () => {\n  const inputForm = document.getElementById('input-form');\n  const description = document.getElementById('input-task');\n  const message = document.getElementById('message');\n\n  inputForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    if (description === '') {\n      document.getElementById('message').innerHTML = '*Please add a task to the list.';\n      message.style.color = 'red';\n    } else {\n      const array = JSON.parse(localStorage.getItem('array')) || [];\n      const newBook = new _manageBooks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description.value);\n      array.push(newBook);\n      array.forEach((work, i) => {\n        work.index = i + 1;\n      });\n      localStorage.setItem('array', JSON.stringify(array));\n      document.getElementById('message').innerHTML = '*New task added successfully.';\n      message.style.color = 'green';\n    }\n    window.location.reload();\n    description.value = '';\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo_list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nconst clearCompletedTasks = () => {\n  const clearButton = document.getElementById('clear');\n  clearButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    let array = JSON.parse(localStorage.getItem('array') || '[]');\n    array = array.filter((task) => task.completed === false);\n    array.forEach((task, i) => { task.index = i + 1; });\n    localStorage.setItem('array', JSON.stringify(array));\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);\n\n//# sourceURL=webpack://todo_list/./src/modules/clear.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nfunction removeTask() {\n  document.addEventListener('click', (e) => {\n    if (e.target.classList.contains('row-btn')) {\n      const id = Number(e.target.id.slice(10));\n      let array = JSON.parse(localStorage.getItem('array')) || [];\n      array = array.filter((task) => task.index !== id);\n      array.forEach((task, i) => { task.index = i + 1; });\n      localStorage.setItem('array', JSON.stringify(array));\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n  });\n}\n\n\n//# sourceURL=webpack://todo_list/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst printTasks = () => {\n  const array = JSON.parse(localStorage.getItem('array')) || [];\n  let innerhtml = '';\n  let checker = '';\n\n  array.forEach((task) => {\n    if (task.completed === false) {\n      checker = '';\n    } else {\n      checker = 'checked';\n    }\n\n    innerhtml += `\n      <div class=\"each-row\">\n      <div class=\"row-info\">\n      <input ${checker} type=\"checkbox\" class=\"check\" id=\"input${task.index}\">\n       <input id=\"${task.index}\" class=\"task-list list\" value=\"${task.description}\"></div>\n       <button  type=\"button\" id=\"remove-btn${task.index}\" class=\"row-btn material-symbols-outlined\">\n       do_not_disturb_on\n      </button>\n     </div>\n     `;\n  });\n\n  const doList = document.querySelector('#do-list');\n\n  doList.innerHTML = innerhtml;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printTasks);\n\n//# sourceURL=webpack://todo_list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nfunction editTask() {\n  const displayContainer = document.getElementById('do-list');\n  const array = JSON.parse(localStorage.getItem('array')) || [];\n  displayContainer.addEventListener('click', (e) => {\n    if (e.target.classList.contains('task-list')) {\n      const item = e.target;\n      item.addEventListener('focusout', () => {\n        array.forEach((task) => {\n          if (task.index === parseInt(item.id, 10)) {\n            task.description = item.value;\n            localStorage.setItem('array', JSON.stringify(array));\n            (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n          }\n        });\n      });\n      item.addEventListener('keyup', (e) => {\n        if (e.key === 'Enter') {\n          array.forEach((task) => {\n            if (task.index === parseInt(item.id, 10)) {\n              task.description = item.value;\n              localStorage.setItem('array', JSON.stringify(array));\n              (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            }\n          });\n        }\n      });\n    }\n  });\n}\n\n\n//# sourceURL=webpack://todo_list/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/manageBooks.js":
/*!************************************!*\
  !*** ./src/modules/manageBooks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nconst array = [];\nclass Tasks {\n  constructor(description) {\n    this.description = description;\n    this.index = array.length + 1;\n    this.completed = false;\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/modules/manageBooks.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\nfunction updateTaskStatus() {\n  document.addEventListener('DOMContentLoaded', () => {\n    const inputChecks = document.querySelectorAll('.check');\n    inputChecks.forEach((check) => {\n      check.addEventListener('change', (e) => {\n        let array = [];\n        array = JSON.parse(localStorage.getItem('array') || '[]');\n        array.forEach((task) => {\n          if ((e.target.id === `input${task.index}`) && (task.completed === false)) {\n            task.completed = true;\n            e.target.checked = true;\n            localStorage.setItem('array', JSON.stringify(array));\n          } else if ((e.target.id === `input${task.index}`) && (task.completed === true)) {\n            task.completed = false;\n            e.target.checked = false;\n            localStorage.setItem('array', JSON.stringify(array));\n          }\n        });\n      });\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todo_list/./src/modules/status.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["frontpage"],{

/***/ "./src/frontpage.js":
/*!**************************!*\
  !*** ./src/frontpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ frontPage)
/* harmony export */ });
/* harmony import */ var _loija_nguyen_NYBnDWeOX2c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loija-nguyen-NYBnDWeOX2c-unsplash.jpg */ "./src/loija-nguyen-NYBnDWeOX2c-unsplash.jpg");


function frontPage() {
  const frontpage = document.createElement('div');
  const title = document.createElement("h1");
  const steakPic = new Image();
  const imageDiv = document.createElement("div");
  const byline = document.createElement("a");
  const sellingpoint = document.createElement("p");

  title.textContent = "High Steaks"

  imageDiv.classList.add("imageDiv")
  steakPic.src = _loija_nguyen_NYBnDWeOX2c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
  steakPic.alt = "Photo of a steak"
  
  byline.href = "https://unsplash.com/@loija?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  byline.textContent = "Photo by Loija Nguyen"

  imageDiv.appendChild(steakPic)
  imageDiv.appendChild(byline)

  sellingpoint.textContent = "This restaurant is the very most amazing restaurant in the entire world. You always know it is going to be high stakes and deliscious steak."

  frontpage.appendChild(title);
  frontpage.appendChild(imageDiv)
  frontpage.appendChild(sellingpoint)

  return frontpage;
}

/***/ }),

/***/ "./src/loija-nguyen-NYBnDWeOX2c-unsplash.jpg":
/*!***************************************************!*\
  !*** ./src/loija-nguyen-NYBnDWeOX2c-unsplash.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0801d50e667b087e1690.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/frontpage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRwYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUM1RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUVBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnJvbnRwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGVhayBmcm9tICcuL2xvaWphLW5ndXllbi1OWUJuRFdlT1gyYy11bnNwbGFzaC5qcGcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbnRQYWdlKCkge1xyXG4gIGNvbnN0IGZyb250cGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHN0ZWFrUGljID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGJ5bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGNvbnN0IHNlbGxpbmdwb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSGlnaCBTdGVha3NcIlxyXG5cclxuICBpbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VEaXZcIilcclxuICBzdGVha1BpYy5zcmMgPSBTdGVhaztcclxuICBzdGVha1BpYy5hbHQgPSBcIlBob3RvIG9mIGEgc3RlYWtcIlxyXG4gIFxyXG4gIGJ5bGluZS5ocmVmID0gXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbG9pamE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcclxuICBieWxpbmUudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IExvaWphIE5ndXllblwiXHJcblxyXG4gIGltYWdlRGl2LmFwcGVuZENoaWxkKHN0ZWFrUGljKVxyXG4gIGltYWdlRGl2LmFwcGVuZENoaWxkKGJ5bGluZSlcclxuXHJcbiAgc2VsbGluZ3BvaW50LnRleHRDb250ZW50ID0gXCJUaGlzIHJlc3RhdXJhbnQgaXMgdGhlIHZlcnkgbW9zdCBhbWF6aW5nIHJlc3RhdXJhbnQgaW4gdGhlIGVudGlyZSB3b3JsZC4gWW91IGFsd2F5cyBrbm93IGl0IGlzIGdvaW5nIHRvIGJlIGhpZ2ggc3Rha2VzIGFuZCBkZWxpc2Npb3VzIHN0ZWFrLlwiXHJcblxyXG4gIGZyb250cGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgZnJvbnRwYWdlLmFwcGVuZENoaWxkKGltYWdlRGl2KVxyXG4gIGZyb250cGFnZS5hcHBlbmRDaGlsZChzZWxsaW5ncG9pbnQpXHJcblxyXG4gIHJldHVybiBmcm9udHBhZ2U7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
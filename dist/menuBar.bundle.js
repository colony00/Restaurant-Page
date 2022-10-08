"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menuBar"],{

/***/ "./src/menuBar.js":
/*!************************!*\
  !*** ./src/menuBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuBar)
/* harmony export */ });
function menuBar() {
  const bar = document.createElement("div");
  bar.classList.add("menuBar");
  
  const menu = barButton("Menu");

  const home = barButton("Home");

  const contact = barButton("Contact");

  bar.appendChild(home);
  bar.appendChild(menu);
  bar.appendChild(contact);
  return bar;
}

function barButton(page) {
  const btn = document.createElement("div");
  btn.textContent = page;
  btn.classList.add("menuItem")
  
  return btn;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuBar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudUJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51QmFyKCkge1xyXG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYmFyLmNsYXNzTGlzdC5hZGQoXCJtZW51QmFyXCIpO1xyXG4gIFxyXG4gIGNvbnN0IG1lbnUgPSBiYXJCdXR0b24oXCJNZW51XCIpO1xyXG5cclxuICBjb25zdCBob21lID0gYmFyQnV0dG9uKFwiSG9tZVwiKTtcclxuXHJcbiAgY29uc3QgY29udGFjdCA9IGJhckJ1dHRvbihcIkNvbnRhY3RcIik7XHJcblxyXG4gIGJhci5hcHBlbmRDaGlsZChob21lKTtcclxuICBiYXIuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgYmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIHJldHVybiBiYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhckJ1dHRvbihwYWdlKSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidG4udGV4dENvbnRlbnQgPSBwYWdlO1xyXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIilcclxuICBcclxuICByZXR1cm4gYnRuO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  console.log('This is a fully operational battle station');\n  let width = 1280,\n      height = 720;\n  let svg = d3.select(\"body\").append(\"svg\").attr(\"class\", \"map\").attr(\"width\", width).attr(\"height\", height);\n  document.querySelector('.map').addEventListener(\"click\", e => {\n    e.preventDefault();\n    console.log(e.target.dataset.state);\n  });\n  d3.json('./src/counties.json', res => {\n    console.log(res);\n    let proj = d3.geo.albersUsa().translate([width / 2, height / 2]).scale(1500);\n    let path = d3.geo.path().projection(proj); // svg.append(\"path\")\n    //   .datum(res)\n    //   .attr(\"d\", path);\n\n    svg.selectAll(\".subunit\").data(res.features).enter().append(\"path\").attr(\"class\", d => \"subunit \" + d.properties.REGION).attr(\"d\", path).attr(\"data-state\", d => d.properties.REGION);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJxdWVyeVNlbGVjdG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGF0YXNldCIsInN0YXRlIiwianNvbiIsInJlcyIsInByb2oiLCJnZW8iLCJhbGJlcnNVc2EiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInBhdGgiLCJwcm9qZWN0aW9uIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwicHJvcGVydGllcyIsIlJFR0lPTiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZDNfZGVtby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSBmdWxseSBvcGVyYXRpb25hbCBiYXR0bGUgc3RhdGlvbicpO1xuXG4gIGxldCB3aWR0aCA9IDEyODAsIGhlaWdodCA9IDcyMDtcblxuICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibWFwXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQuc3RhdGUpO1xuICB9KVxuXG4gIGQzLmpzb24oJy4vc3JjL2NvdW50aWVzLmpzb24nLCByZXMgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgbGV0IHByb2ogPSBkMy5nZW8uYWxiZXJzVXNhKCkudHJhbnNsYXRlKFt3aWR0aC8yLCBoZWlnaHQvMl0pLnNjYWxlKDE1MDApOyAgXG4gICAgbGV0IHBhdGggPSBkMy5nZW8ucGF0aCgpLnByb2plY3Rpb24ocHJvaik7XG4gICAgLy8gc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAvLyAgIC5kYXR1bShyZXMpXG4gICAgLy8gICAuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgc3ZnLnNlbGVjdEFsbChcIi5zdWJ1bml0XCIpXG4gICAgICAuZGF0YShyZXMuZmVhdHVyZXMpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZCA9PiBcInN1YnVuaXQgXCIgKyBkLnByb3BlcnRpZXMuUkVHSU9OKVxuICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcbiAgICAgICAgLmF0dHIoXCJkYXRhLXN0YXRlXCIsIGQgPT4gZC5wcm9wZXJ0aWVzLlJFR0lPTilcbiAgfSlcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07RUFDbERDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRDQUFaO0VBRUEsSUFBSUMsS0FBSyxHQUFHLElBQVo7RUFBQSxJQUFrQkMsTUFBTSxHQUFHLEdBQTNCO0VBRUEsSUFBSUMsR0FBRyxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCQyxNQUFsQixDQUF5QixLQUF6QixFQUNQQyxJQURPLENBQ0YsT0FERSxFQUNPLEtBRFAsRUFFUEEsSUFGTyxDQUVGLE9BRkUsRUFFT04sS0FGUCxFQUdQTSxJQUhPLENBR0YsUUFIRSxFQUdRTCxNQUhSLENBQVY7RUFLQUwsUUFBUSxDQUFDVyxhQUFULENBQXVCLE1BQXZCLEVBQStCVixnQkFBL0IsQ0FBZ0QsT0FBaEQsRUFBeURXLENBQUMsSUFBSTtJQUM1REEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsS0FBN0I7RUFDRCxDQUhEO0VBS0FULEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLHFCQUFSLEVBQStCQyxHQUFHLElBQUk7SUFDcENoQixPQUFPLENBQUNDLEdBQVIsQ0FBWWUsR0FBWjtJQUNBLElBQUlDLElBQUksR0FBR1osRUFBRSxDQUFDYSxHQUFILENBQU9DLFNBQVAsR0FBbUJDLFNBQW5CLENBQTZCLENBQUNsQixLQUFLLEdBQUMsQ0FBUCxFQUFVQyxNQUFNLEdBQUMsQ0FBakIsQ0FBN0IsRUFBa0RrQixLQUFsRCxDQUF3RCxJQUF4RCxDQUFYO0lBQ0EsSUFBSUMsSUFBSSxHQUFHakIsRUFBRSxDQUFDYSxHQUFILENBQU9JLElBQVAsR0FBY0MsVUFBZCxDQUF5Qk4sSUFBekIsQ0FBWCxDQUhvQyxDQUlwQztJQUNBO0lBQ0E7O0lBQ0FiLEdBQUcsQ0FBQ29CLFNBQUosQ0FBYyxVQUFkLEVBQ0dDLElBREgsQ0FDUVQsR0FBRyxDQUFDVSxRQURaLEVBRUdDLEtBRkgsR0FFV3BCLE1BRlgsQ0FFa0IsTUFGbEIsRUFHS0MsSUFITCxDQUdVLE9BSFYsRUFHbUJvQixDQUFDLElBQUksYUFBYUEsQ0FBQyxDQUFDQyxVQUFGLENBQWFDLE1BSGxELEVBSUt0QixJQUpMLENBSVUsR0FKVixFQUllYyxJQUpmLEVBS0tkLElBTEwsQ0FLVSxZQUxWLEVBS3dCb0IsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFVBQUYsQ0FBYUMsTUFMMUM7RUFNRCxDQWJEO0FBY0QsQ0E3QkQifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19kZW1vLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
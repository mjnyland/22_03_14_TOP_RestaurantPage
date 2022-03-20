/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "createEvents": () => (/* binding */ createEvents)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const Event = (name, time) => {
    const newEvent = {name, time};
    return newEvent
}

function createEvents(arr){
    const eventsCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'events-cont')

        for (let i = 0; i < 5; i++){
            const eventCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', `event-${i}-cont`);
            const eventName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H2', `event-${i}-name`)
            const eventDate = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H4', `event-${i}-date`)

            console.log(arr[i])
            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

            console.log(eventName)

            eventCont.append(eventName, eventDate)

            eventsCont.append(eventCont)
        }

    const becomeMemberButton = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('BUTTON', 'become-member-button');
    becomeMemberButton.textContent = 'Become A Member';

    eventsCont.append(becomeMemberButton)

    return eventsCont
}



/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Showtime": () => (/* binding */ Showtime),
/* harmony export */   "clearHTML": () => (/* binding */ clearHTML),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(tag, className){
    const el = document.createElement(tag);
    el.classList.add(className);
    return el;
}

function clearHTML(el) {
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

const Showtime = (title, theater, runtime, format) => {
    return{title, theater, runtime, format}
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _showtimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showtimes */ "./src/showtimes.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");




const showtimes = [];

const showtime1 = (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.Showtime)('THE WORST PERSON IN THE WORLD', 'THEATER 1', '160 MINS', 'DOLBY');
const showtime2 = (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.Showtime)('STRAWBERRY MANSION', 'THEATER 2', '160 MINS', '35MM');
const showtime3 = (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.Showtime)('2022 OSCAR NOMINATED SHORTS', 'THEATER 1', '160 MINS', 'DOLBY');
const showtime4 = (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.Showtime)('THE WORST PERSON IN THE WORLD', 'THEATER 2', '160 MINS', '35MM');
const showtime5 = (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.Showtime)('STRAWBERRY MANSION', 'THEATER 1', '160 MINS', 'DOLBY');

showtimes.push(showtime1, showtime2, showtime3, showtime4, showtime5)

const events = [];

const event1 = (0,_events__WEBPACK_IMPORTED_MODULE_2__.Event)('HIGHS AND LOWS', 'Thu Mar 10 10:00 PM');
const event2 = (0,_events__WEBPACK_IMPORTED_MODULE_2__.Event)('CHER!', 'Fri Mar 11 8:00 PM');
const event3 = (0,_events__WEBPACK_IMPORTED_MODULE_2__.Event)('THE CHICAGO FILM SOCIETY PRESENTS', 'Mon Mar 10 12:00 PM');
const event4 = (0,_events__WEBPACK_IMPORTED_MODULE_2__.Event)('DAVID LYNCH: A COMPLETE RETROSPECTIVE', 'Thu Apr 7 10:00 PM');
const event5 = (0,_events__WEBPACK_IMPORTED_MODULE_2__.Event)('90TH ANNIVERSARY', 'Sat Apr 23 10:00 PM');

events.push(event1, event2, event3, event4, event5)

function createNowPlaying(){
    const nowPlayingCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'now-playing-heading');

    const h1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H1', 'now-playing');
    h1.textContent = 'NOW PLAYING';

    const hr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'hr');

    nowPlayingCont.append(h1, hr)

    return nowPlayingCont
}

function createNav(){
    const nav = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('NAV', 'nav');

    const menuLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'menu-link');
    menuLink.textContent = 'Menu';

    const logo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'music-box-logo');
    logo.src = '/src/images/MusicBox_Logo_White.png'
    const memberLogin = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('BUTTON', 'member-login-button');
    memberLogin.textContent = 'Member Login';

    nav.append(menuLink, logo, memberLogin)
    return nav
}

function createFeaturedMovies(){
    const featuredMovCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'featured-movie-cont');
    const featuredThumb = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'featured-movie-thumbnail');
    featuredThumb.src = '/src/images/Ratatouille_MovieStill.png';
    const featuredTitle = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'featured-title');
    featuredTitle.textContent = 'Ratatoille';
    const featuredDirector = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'featured-director');
    featuredDirector.textContent = 'Brad Bird';

    featuredMovCont.append(featuredThumb, featuredTitle, featuredDirector)
    return featuredMovCont
}

function createInfo(){
    const infoSection = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('SECTION', 'info');
    const h2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H2', 'info-heading');
    const infoText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'info-text');

    h2.textContent = 'CHICAGO’S VENUE FOR INDEPENDENT, FOREIGN, CULT AND CLASSIC FILMS.';
    infoText.textContent = 'Turn onto Southport Avenue and it’s hard to resist the neon beacon that lures cinephiles from across Chicagoland with eight flickering letters—Music Box. It’s a promise of more than just entertainment, but a total experience.'

    infoSection.append(h2, infoText);

    return infoSection
}

function createFooter(){
    const footer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('FOOTER', 'footer');

    const logo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'logo');
    const homeLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('A', 'home-link');
    homeLink.textContent = 'HOME';
    const filmsLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('A', 'films-link');
    filmsLink.textContent = 'FILMS';
    const eventsLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('A', 'events-link');
    eventsLink.textContent = 'EVENTS';
    const salesLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('A', 'sales-link');
    salesLink.textContent = 'GROUP SALES';
    const membershipLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('A', 'membership-link');
    membershipLink.textContent = 'MEMBERSHIP';

    footer.append(logo, homeLink, filmsLink, eventsLink, salesLink, membershipLink)
    return footer
}

function loadHome(){
    const home = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'home');
    const main = document.getElementById('main');

    const eventsSection = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('SECTION', 'events')
    eventsSection.append((0,_events__WEBPACK_IMPORTED_MODULE_2__.createEvents)(events))
    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(main);
    main.append(createNav(), createNowPlaying(), createFeaturedMovies(), (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.createShowtimesCont)(showtimes));


    home.append(main, eventsSection, createInfo(), createFooter());
    
    return home
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/showtimes.js":
/*!**************************!*\
  !*** ./src/showtimes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Showtime": () => (/* binding */ Showtime),
/* harmony export */   "createShowtimesCont": () => (/* binding */ createShowtimesCont)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");



const Showtime = (title, theater, runtime, format) => {
    return {title, theater, runtime, format}
}

function createShowtimesCont(arr) {
    const showtimesCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'showtimes-cont')

    for (let i = 0; i<5; i++){
        const showtimeCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', `showtime-cont-${i}`);

        const title = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', `showtime-title-${i}`);
        title.textContent = arr[i].title;
        const infoCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', `showtime-${i}-info-cont`);
        const theater = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `showtime-${i}-theater`);
        theater.textContent = arr[i].theater;
        const runtime = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `showtime-${i}-runtime`);
        runtime.textContent = arr[i].runtime;
        const format = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `showtime-${i}-format`);
        format.textContent = arr[i].format;
        infoCont.append(theater, runtime, format);
        showtimeCont.append(title, infoCont);
        showtimesCont.append(showtimeCont)
    }

    return showtimesCont;
}



/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/*
import loadHome from home
import loadMenu from menu
import loadMember from member
*/



function initializeSite() {
    const content = document.getElementById('content')

    content.append((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])())
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSite);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDOztBQUUzQztBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHlEQUFhOztBQUVwQyx3QkFBd0IsT0FBTztBQUMvQiw4QkFBOEIseURBQWEsaUJBQWlCLEVBQUU7QUFDOUQsOEJBQThCLHlEQUFhLGdCQUFnQixFQUFFO0FBQzdELDhCQUE4Qix5REFBYSxnQkFBZ0IsRUFBRTs7QUFFN0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLHlEQUFhO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHFEO0FBQ0s7QUFDZDs7QUFFNUM7O0FBRUEsa0JBQWtCLG9EQUFRO0FBQzFCLGtCQUFrQixvREFBUTtBQUMxQixrQkFBa0Isb0RBQVE7QUFDMUIsa0JBQWtCLG9EQUFRO0FBQzFCLGtCQUFrQixvREFBUTs7QUFFMUI7O0FBRUE7O0FBRUEsZUFBZSw4Q0FBSztBQUNwQixlQUFlLDhDQUFLO0FBQ3BCLGVBQWUsOENBQUs7QUFDcEIsZUFBZSw4Q0FBSztBQUNwQixlQUFlLDhDQUFLOztBQUVwQjs7QUFFQTtBQUNBLDJCQUEyQix5REFBYTs7QUFFeEMsZUFBZSx5REFBYTtBQUM1Qjs7QUFFQSxlQUFlLHlEQUFhOztBQUU1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHlEQUFhOztBQUU3QixxQkFBcUIseURBQWE7QUFDbEM7O0FBRUEsaUJBQWlCLHlEQUFhO0FBQzlCO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix5REFBYTtBQUN6QywwQkFBMEIseURBQWE7QUFDdkM7QUFDQSwwQkFBMEIseURBQWE7QUFDdkM7QUFDQSw2QkFBNkIseURBQWE7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLGVBQWUseURBQWE7QUFDNUIscUJBQXFCLHlEQUFhOztBQUVsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseURBQWE7O0FBRWhDLGlCQUFpQix5REFBYTtBQUM5QixxQkFBcUIseURBQWE7QUFDbEM7QUFDQSxzQkFBc0IseURBQWE7QUFDbkM7QUFDQSx1QkFBdUIseURBQWE7QUFDcEM7QUFDQSxzQkFBc0IseURBQWE7QUFDbkM7QUFDQSwyQkFBMkIseURBQWE7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlEQUFhO0FBQzlCOztBQUVBLDBCQUEwQix5REFBYTtBQUN2Qyx5QkFBeUIscURBQVk7QUFDckMsSUFBSSxzREFBUztBQUNiLHlFQUF5RSwrREFBbUI7OztBQUc1RjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSGtCOzs7QUFHekM7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSwwQkFBMEIseURBQWE7O0FBRXZDLG9CQUFvQixLQUFLO0FBQ3pCLDZCQUE2Qix5REFBYSx5QkFBeUIsRUFBRTs7QUFFckUsc0JBQXNCLHlEQUFhLHlCQUF5QixFQUFFO0FBQzlEO0FBQ0EseUJBQXlCLHlEQUFhLG9CQUFvQixFQUFFO0FBQzVELHdCQUF3Qix5REFBYSxtQkFBbUIsRUFBRTtBQUMxRDtBQUNBLHdCQUF3Qix5REFBYSxtQkFBbUIsRUFBRTtBQUMxRDtBQUNBLHVCQUF1Qix5REFBYSxtQkFBbUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCOztBQUU3QjtBQUNBOztBQUVBLG1CQUFtQixpREFBUTtBQUMzQjtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7VUNmZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlDOztBQUV6Qyx1REFBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zaG93dGltZXMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9ucydcblxuY29uc3QgRXZlbnQgPSAobmFtZSwgdGltZSkgPT4ge1xuICAgIGNvbnN0IG5ld0V2ZW50ID0ge25hbWUsIHRpbWV9O1xuICAgIHJldHVybiBuZXdFdmVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudHMoYXJyKXtcbiAgICBjb25zdCBldmVudHNDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2V2ZW50cy1jb250JylcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBldmVudENvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCBgZXZlbnQtJHtpfS1jb250YCk7XG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBjcmVhdGVFbGVtZW50KCdIMicsIGBldmVudC0ke2l9LW5hbWVgKVxuICAgICAgICAgICAgY29uc3QgZXZlbnREYXRlID0gY3JlYXRlRWxlbWVudCgnSDQnLCBgZXZlbnQtJHtpfS1kYXRlYClcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyW2ldKVxuICAgICAgICAgICAgZXZlbnROYW1lLnRleHRDb250ZW50ID0gYXJyW2ldLm5hbWU7XG4gICAgICAgICAgICBldmVudERhdGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGltZTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKVxuXG4gICAgICAgICAgICBldmVudENvbnQuYXBwZW5kKGV2ZW50TmFtZSwgZXZlbnREYXRlKVxuXG4gICAgICAgICAgICBldmVudHNDb250LmFwcGVuZChldmVudENvbnQpXG4gICAgICAgIH1cblxuICAgIGNvbnN0IGJlY29tZU1lbWJlckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsICdiZWNvbWUtbWVtYmVyLWJ1dHRvbicpO1xuICAgIGJlY29tZU1lbWJlckJ1dHRvbi50ZXh0Q29udGVudCA9ICdCZWNvbWUgQSBNZW1iZXInO1xuXG4gICAgZXZlbnRzQ29udC5hcHBlbmQoYmVjb21lTWVtYmVyQnV0dG9uKVxuXG4gICAgcmV0dXJuIGV2ZW50c0NvbnRcbn1cblxuZXhwb3J0IHsgRXZlbnQsIGNyZWF0ZUV2ZW50cyB9IiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSl7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gY2xlYXJIVE1MKGVsKSB7XG4gICAgd2hpbGUoZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbC5yZW1vdmVDaGlsZChlbC5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuY29uc3QgU2hvd3RpbWUgPSAodGl0bGUsIHRoZWF0ZXIsIHJ1bnRpbWUsIGZvcm1hdCkgPT4ge1xuICAgIHJldHVybnt0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0fVxufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTCwgU2hvd3RpbWUgfTsiLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVTaG93dGltZXNDb250LCBTaG93dGltZX0gZnJvbSAnLi9zaG93dGltZXMnO1xuaW1wb3J0IHtFdmVudCwgY3JlYXRlRXZlbnRzfSBmcm9tICcuL2V2ZW50cydcblxuY29uc3Qgc2hvd3RpbWVzID0gW107XG5cbmNvbnN0IHNob3d0aW1lMSA9IFNob3d0aW1lKCdUSEUgV09SU1QgUEVSU09OIElOIFRIRSBXT1JMRCcsICdUSEVBVEVSIDEnLCAnMTYwIE1JTlMnLCAnRE9MQlknKTtcbmNvbnN0IHNob3d0aW1lMiA9IFNob3d0aW1lKCdTVFJBV0JFUlJZIE1BTlNJT04nLCAnVEhFQVRFUiAyJywgJzE2MCBNSU5TJywgJzM1TU0nKTtcbmNvbnN0IHNob3d0aW1lMyA9IFNob3d0aW1lKCcyMDIyIE9TQ0FSIE5PTUlOQVRFRCBTSE9SVFMnLCAnVEhFQVRFUiAxJywgJzE2MCBNSU5TJywgJ0RPTEJZJyk7XG5jb25zdCBzaG93dGltZTQgPSBTaG93dGltZSgnVEhFIFdPUlNUIFBFUlNPTiBJTiBUSEUgV09STEQnLCAnVEhFQVRFUiAyJywgJzE2MCBNSU5TJywgJzM1TU0nKTtcbmNvbnN0IHNob3d0aW1lNSA9IFNob3d0aW1lKCdTVFJBV0JFUlJZIE1BTlNJT04nLCAnVEhFQVRFUiAxJywgJzE2MCBNSU5TJywgJ0RPTEJZJyk7XG5cbnNob3d0aW1lcy5wdXNoKHNob3d0aW1lMSwgc2hvd3RpbWUyLCBzaG93dGltZTMsIHNob3d0aW1lNCwgc2hvd3RpbWU1KVxuXG5jb25zdCBldmVudHMgPSBbXTtcblxuY29uc3QgZXZlbnQxID0gRXZlbnQoJ0hJR0hTIEFORCBMT1dTJywgJ1RodSBNYXIgMTAgMTA6MDAgUE0nKTtcbmNvbnN0IGV2ZW50MiA9IEV2ZW50KCdDSEVSIScsICdGcmkgTWFyIDExIDg6MDAgUE0nKTtcbmNvbnN0IGV2ZW50MyA9IEV2ZW50KCdUSEUgQ0hJQ0FHTyBGSUxNIFNPQ0lFVFkgUFJFU0VOVFMnLCAnTW9uIE1hciAxMCAxMjowMCBQTScpO1xuY29uc3QgZXZlbnQ0ID0gRXZlbnQoJ0RBVklEIExZTkNIOiBBIENPTVBMRVRFIFJFVFJPU1BFQ1RJVkUnLCAnVGh1IEFwciA3IDEwOjAwIFBNJyk7XG5jb25zdCBldmVudDUgPSBFdmVudCgnOTBUSCBBTk5JVkVSU0FSWScsICdTYXQgQXByIDIzIDEwOjAwIFBNJyk7XG5cbmV2ZW50cy5wdXNoKGV2ZW50MSwgZXZlbnQyLCBldmVudDMsIGV2ZW50NCwgZXZlbnQ1KVxuXG5mdW5jdGlvbiBjcmVhdGVOb3dQbGF5aW5nKCl7XG4gICAgY29uc3Qgbm93UGxheWluZ0NvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnbm93LXBsYXlpbmctaGVhZGluZycpO1xuXG4gICAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KCdIMScsICdub3ctcGxheWluZycpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ05PVyBQTEFZSU5HJztcblxuICAgIGNvbnN0IGhyID0gY3JlYXRlRWxlbWVudCgnSFInLCAnaHInKTtcblxuICAgIG5vd1BsYXlpbmdDb250LmFwcGVuZChoMSwgaHIpXG5cbiAgICByZXR1cm4gbm93UGxheWluZ0NvbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudCgnTkFWJywgJ25hdicpO1xuXG4gICAgY29uc3QgbWVudUxpbmsgPSBjcmVhdGVFbGVtZW50KCdQJywgJ21lbnUtbGluaycpO1xuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdtdXNpYy1ib3gtbG9nbycpO1xuICAgIGxvZ28uc3JjID0gJy9zcmMvaW1hZ2VzL011c2ljQm94X0xvZ29fV2hpdGUucG5nJ1xuICAgIGNvbnN0IG1lbWJlckxvZ2luID0gY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgJ21lbWJlci1sb2dpbi1idXR0b24nKTtcbiAgICBtZW1iZXJMb2dpbi50ZXh0Q29udGVudCA9ICdNZW1iZXIgTG9naW4nO1xuXG4gICAgbmF2LmFwcGVuZChtZW51TGluaywgbG9nbywgbWVtYmVyTG9naW4pXG4gICAgcmV0dXJuIG5hdlxufVxuXG5mdW5jdGlvbiBjcmVhdGVGZWF0dXJlZE1vdmllcygpe1xuICAgIGNvbnN0IGZlYXR1cmVkTW92Q29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdmZWF0dXJlZC1tb3ZpZS1jb250Jyk7XG4gICAgY29uc3QgZmVhdHVyZWRUaHVtYiA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdmZWF0dXJlZC1tb3ZpZS10aHVtYm5haWwnKTtcbiAgICBmZWF0dXJlZFRodW1iLnNyYyA9ICcvc3JjL2ltYWdlcy9SYXRhdG91aWxsZV9Nb3ZpZVN0aWxsLnBuZyc7XG4gICAgY29uc3QgZmVhdHVyZWRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ2ZlYXR1cmVkLXRpdGxlJyk7XG4gICAgZmVhdHVyZWRUaXRsZS50ZXh0Q29udGVudCA9ICdSYXRhdG9pbGxlJztcbiAgICBjb25zdCBmZWF0dXJlZERpcmVjdG9yID0gY3JlYXRlRWxlbWVudCgncCcsICdmZWF0dXJlZC1kaXJlY3RvcicpO1xuICAgIGZlYXR1cmVkRGlyZWN0b3IudGV4dENvbnRlbnQgPSAnQnJhZCBCaXJkJztcblxuICAgIGZlYXR1cmVkTW92Q29udC5hcHBlbmQoZmVhdHVyZWRUaHVtYiwgZmVhdHVyZWRUaXRsZSwgZmVhdHVyZWREaXJlY3RvcilcbiAgICByZXR1cm4gZmVhdHVyZWRNb3ZDb250XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKXtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ1NFQ1RJT04nLCAnaW5mbycpO1xuICAgIGNvbnN0IGgyID0gY3JlYXRlRWxlbWVudCgnSDInLCAnaW5mby1oZWFkaW5nJyk7XG4gICAgY29uc3QgaW5mb1RleHQgPSBjcmVhdGVFbGVtZW50KCdQJywgJ2luZm8tdGV4dCcpO1xuXG4gICAgaDIudGV4dENvbnRlbnQgPSAnQ0hJQ0FHT+KAmVMgVkVOVUUgRk9SIElOREVQRU5ERU5ULCBGT1JFSUdOLCBDVUxUIEFORCBDTEFTU0lDIEZJTE1TLic7XG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSAnVHVybiBvbnRvIFNvdXRocG9ydCBBdmVudWUgYW5kIGl04oCZcyBoYXJkIHRvIHJlc2lzdCB0aGUgbmVvbiBiZWFjb24gdGhhdCBsdXJlcyBjaW5lcGhpbGVzIGZyb20gYWNyb3NzIENoaWNhZ29sYW5kIHdpdGggZWlnaHQgZmxpY2tlcmluZyBsZXR0ZXJz4oCUTXVzaWMgQm94LiBJdOKAmXMgYSBwcm9taXNlIG9mIG1vcmUgdGhhbiBqdXN0IGVudGVydGFpbm1lbnQsIGJ1dCBhIHRvdGFsIGV4cGVyaWVuY2UuJ1xuXG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kKGgyLCBpbmZvVGV4dCk7XG5cbiAgICByZXR1cm4gaW5mb1NlY3Rpb25cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnRk9PVEVSJywgJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdsb2dvJyk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBjcmVhdGVFbGVtZW50KCdBJywgJ2hvbWUtbGluaycpO1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICAgIGNvbnN0IGZpbG1zTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnZmlsbXMtbGluaycpO1xuICAgIGZpbG1zTGluay50ZXh0Q29udGVudCA9ICdGSUxNUyc7XG4gICAgY29uc3QgZXZlbnRzTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnZXZlbnRzLWxpbmsnKTtcbiAgICBldmVudHNMaW5rLnRleHRDb250ZW50ID0gJ0VWRU5UUyc7XG4gICAgY29uc3Qgc2FsZXNMaW5rID0gY3JlYXRlRWxlbWVudCgnQScsICdzYWxlcy1saW5rJyk7XG4gICAgc2FsZXNMaW5rLnRleHRDb250ZW50ID0gJ0dST1VQIFNBTEVTJztcbiAgICBjb25zdCBtZW1iZXJzaGlwTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnbWVtYmVyc2hpcC1saW5rJyk7XG4gICAgbWVtYmVyc2hpcExpbmsudGV4dENvbnRlbnQgPSAnTUVNQkVSU0hJUCc7XG5cbiAgICBmb290ZXIuYXBwZW5kKGxvZ28sIGhvbWVMaW5rLCBmaWxtc0xpbmssIGV2ZW50c0xpbmssIHNhbGVzTGluaywgbWVtYmVyc2hpcExpbmspXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnaG9tZScpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgY29uc3QgZXZlbnRzU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ1NFQ1RJT04nLCAnZXZlbnRzJylcbiAgICBldmVudHNTZWN0aW9uLmFwcGVuZChjcmVhdGVFdmVudHMoZXZlbnRzKSlcbiAgICBjbGVhckhUTUwobWFpbik7XG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlTmF2KCksIGNyZWF0ZU5vd1BsYXlpbmcoKSwgY3JlYXRlRmVhdHVyZWRNb3ZpZXMoKSwgY3JlYXRlU2hvd3RpbWVzQ29udChzaG93dGltZXMpKTtcblxuXG4gICAgaG9tZS5hcHBlbmQobWFpbiwgZXZlbnRzU2VjdGlvbiwgY3JlYXRlSW5mbygpLCBjcmVhdGVGb290ZXIoKSk7XG4gICAgXG4gICAgcmV0dXJuIGhvbWVcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVxuIiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tICcuL2Z1bmN0aW9ucydcblxuXG5jb25zdCBTaG93dGltZSA9ICh0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93dGltZXNDb250KGFycikge1xuICAgIGNvbnN0IHNob3d0aW1lc0NvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnc2hvd3RpbWVzLWNvbnQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8NTsgaSsrKXtcbiAgICAgICAgY29uc3Qgc2hvd3RpbWVDb250ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYHNob3d0aW1lLWNvbnQtJHtpfWApO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCBgc2hvd3RpbWUtdGl0bGUtJHtpfWApO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgY29uc3QgaW5mb0NvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgc2hvd3RpbWUtJHtpfS1pbmZvLWNvbnRgKTtcbiAgICAgICAgY29uc3QgdGhlYXRlciA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYHNob3d0aW1lLSR7aX0tdGhlYXRlcmApO1xuICAgICAgICB0aGVhdGVyLnRleHRDb250ZW50ID0gYXJyW2ldLnRoZWF0ZXI7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWUgPSBjcmVhdGVFbGVtZW50KCdoNScsIGBzaG93dGltZS0ke2l9LXJ1bnRpbWVgKTtcbiAgICAgICAgcnVudGltZS50ZXh0Q29udGVudCA9IGFycltpXS5ydW50aW1lO1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBjcmVhdGVFbGVtZW50KCdoNScsIGBzaG93dGltZS0ke2l9LWZvcm1hdGApO1xuICAgICAgICBmb3JtYXQudGV4dENvbnRlbnQgPSBhcnJbaV0uZm9ybWF0O1xuICAgICAgICBpbmZvQ29udC5hcHBlbmQodGhlYXRlciwgcnVudGltZSwgZm9ybWF0KTtcbiAgICAgICAgc2hvd3RpbWVDb250LmFwcGVuZCh0aXRsZSwgaW5mb0NvbnQpO1xuICAgICAgICBzaG93dGltZXNDb250LmFwcGVuZChzaG93dGltZUNvbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3d0aW1lc0NvbnQ7XG59XG5cbmV4cG9ydCB7U2hvd3RpbWUsIGNyZWF0ZVNob3d0aW1lc0NvbnR9IiwiLypcbmltcG9ydCBsb2FkSG9tZSBmcm9tIGhvbWVcbmltcG9ydCBsb2FkTWVudSBmcm9tIG1lbnVcbmltcG9ydCBsb2FkTWVtYmVyIGZyb20gbWVtYmVyXG4qL1xuXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJ1xuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG4gICAgY29udGVudC5hcHBlbmQobG9hZEhvbWUoKSlcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNpdGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3dlYnNpdGUuanMnXG5cbmluaXRpYWxpemVTaXRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
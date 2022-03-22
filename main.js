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

            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

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

function loadHome(){
    const home = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'home');
    const main = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('MAIN', 'main')
    const content = document.getElementById('content')

    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)

    const eventsSection = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('SECTION', 'events')
    eventsSection.append((0,_events__WEBPACK_IMPORTED_MODULE_2__.createEvents)(events))
    main.append(createNowPlaying(), createFeaturedMovies(), (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.createShowtimesCont)(showtimes));

    home.append(main, eventsSection, createInfo());
    content.append(home)
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/member.js":
/*!***********************!*\
  !*** ./src/member.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



function createHeading(){
    const membershipHeadingCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'now-playing-heading');

    const h1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H1', 'membership');
    h1.textContent = 'MEMBERSHIP';

    const hr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'hr');

    membershipHeadingCont.append(h1, hr)

    return membershipHeadingCont
}

function createMebershipCopy(){

    const copyCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'membership-copy-cont');

    const membershipSubhead = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'membership-subhead')
    membershipSubhead.textContent = 'INTERESTED IN A MEMBERSHIP?'

    const p1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-1')
    p1.textContent = `
    For the past two decades the Music Box has been the premiere venue for independent, foreign, cult and classic films.  Built in 1929 the Music Box Theatre has the largest theatre space operated fulltime in Chicago.

    Members of the Music Box Theatre will receive advanced notice of special screenings, discounted prices on tickets and concessions as well as invites to member only events.

    Joining the Music Box is a great way to support the historic theatre and receive benefits.

    YOUR MEMBERSHIP SUPPORTS
    The independently owned and operated community movie theatre and lounge. All of the quality programming Music Box offers; including holiday classics, midnight movies, MBT talks, Cinema Science, film festivals, feature presentations and visits from directors, producers, and actors. Preserving the beauty and elegance of the historic theatre.
    `

    const p2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-2')
    p2.textContent = `
    MEMBERSHIP BENEFITS
    1 complimentary ticket for 1 regular priced screening (theatrical screenings only)
    Discounted ticket prices for all virtual and regular theatrical screenings plus select Special Events (prices vary)
    Invitations to Free Monthly Member Screenings
    Advanced notice and purchase for select special screenings. 
    Restaurant discounts at our partner restaurants†
    Discount on Music Box Film DVD’s when purchased at the theatre
    Free refills on any size popcorn and soda
    Discounted glasses of Music Box brand wine and beers
    Discounted Music Box brand wine by the bottle

    $60 INDIVIDUAL MEMBERSHIP
    Membership lasts one year from date of purchase. Benefits are only valid for the individual member.

    $100 DUAL MEMBERSHIP
    Dual Memberships receive the same benefits as individuals – for two. Members can share the account with one person or bring a different guest to the theatre each time! Membership lasts one year from date of purchase.
    `

    copyCont.append(membershipSubhead, p1, p2)

    return copyCont
}

function loadMembership(){
    const content = document.getElementById('content')
    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)

    const membership = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'membership');
    const main = document.createElement('MAIN', 'main')
    main.append(createMebershipCopy());
    membership.append(main);

    content.append(membership)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMembership);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



//export function loadMenu() which clears home and appends menu

const Beer = (name, descrip, price) => {
    return {name, descrip, price}
}

const beers = [];

const beer1 = Beer('PIPEWORKS NINJA VS UNICORN', 'HALF ACRE BODEM', '$9.00');
const beer2 = Beer(`BELL'S OBERON`, 'AMERICAN WHEAT ALE', '$7.25');
const beer3 = Beer(`BELL'S TWO HEARTED ALE`, 'AMERICAN IPA', '$7.25');
const beer4 = Beer('GOOSE ISLAND 312', 'WHEAT ALE', '$7.25');
const beer5 = Beer('HALF ACRE BODEM', 'INDIA PALE ALE', '$7.25');

beers.push(beer1, beer2, beer3, beer4, beer5)

function createBeersCont(arr){
    const beersCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'beers-cont')

    const h1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H1', 'beer-menu');
    h1.textContent = 'BEER MENU';

    const img = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'menu-image')
    img.src = '/src/images/mbt-beergarden2-0925.jpeg'

    for (let i = 0; i < 5; i++){
        const beerCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', `beer-${i}-cont`);
        const beerName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', `beer-${i}-name`);
        beerName.textContent = arr[i].name;
        const beerDescrip = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `beer-${i}-descrip`);
        beerDescrip.textContent = arr[i].descrip;
        const beerPrice = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `beer-${i}-price`);
        beerPrice.textContent = arr[i].price;

        beerCont.append(beerName, beerDescrip, beerPrice);

        beersCont.append(beerCont);
    }

    beersCont.append(h1, img)

    return beersCont
}

function loadMenu(){
    const menu = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'menu');
    const content = document.getElementById('content');
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)

    menu.append(createBeersCont(beers));
    content.append(menu)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member */ "./src/member.js");





function createNav(){
    const nav = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('NAV', 'nav');

    const menuLink = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'menu-link');
    menuLink.textContent = 'Menu';

    const logo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'music-box-logo');
    logo.src = '/src/images/MusicBox_Logo_White.png'
    const memberLogin = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('BUTTON', 'member-login-button');
    memberLogin.textContent = 'Member Login';

    menuLink.addEventListener("click", (e) => {
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    })

    logo.addEventListener("click", (e) => {
        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    })

    memberLogin.addEventListener("click", (e) => {
        ;(0,_member__WEBPACK_IMPORTED_MODULE_3__["default"])()
    })

    nav.append(menuLink, logo, memberLogin)

    return nav
}

function initializeSite() {
    const content = document.getElementById('content');
    const body = document.querySelector('BODY');
    const script = document.querySelector('script')

    body.insertBefore(createNav(), content)
    content.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])())
    body.insertBefore(createFooter(), script)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix5REFBYTtBQUNuQztBQUNBLDJCQUEyQix5REFBYTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7VUMvRGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekMsdURBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVtYmVyLmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zaG93dGltZXMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9ucydcblxuY29uc3QgRXZlbnQgPSAobmFtZSwgdGltZSkgPT4ge1xuICAgIGNvbnN0IG5ld0V2ZW50ID0ge25hbWUsIHRpbWV9O1xuICAgIHJldHVybiBuZXdFdmVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudHMoYXJyKXtcbiAgICBjb25zdCBldmVudHNDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2V2ZW50cy1jb250JylcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBldmVudENvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCBgZXZlbnQtJHtpfS1jb250YCk7XG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBjcmVhdGVFbGVtZW50KCdIMicsIGBldmVudC0ke2l9LW5hbWVgKVxuICAgICAgICAgICAgY29uc3QgZXZlbnREYXRlID0gY3JlYXRlRWxlbWVudCgnSDQnLCBgZXZlbnQtJHtpfS1kYXRlYClcblxuICAgICAgICAgICAgZXZlbnROYW1lLnRleHRDb250ZW50ID0gYXJyW2ldLm5hbWU7XG4gICAgICAgICAgICBldmVudERhdGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGltZTtcblxuICAgICAgICAgICAgZXZlbnRDb250LmFwcGVuZChldmVudE5hbWUsIGV2ZW50RGF0ZSlcblxuICAgICAgICAgICAgZXZlbnRzQ29udC5hcHBlbmQoZXZlbnRDb250KVxuICAgICAgICB9XG5cbiAgICBjb25zdCBiZWNvbWVNZW1iZXJCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdCVVRUT04nLCAnYmVjb21lLW1lbWJlci1idXR0b24nKTtcbiAgICBiZWNvbWVNZW1iZXJCdXR0b24udGV4dENvbnRlbnQgPSAnQmVjb21lIEEgTWVtYmVyJztcblxuICAgIGV2ZW50c0NvbnQuYXBwZW5kKGJlY29tZU1lbWJlckJ1dHRvbilcblxuICAgIHJldHVybiBldmVudHNDb250XG59XG5cbmV4cG9ydCB7IEV2ZW50LCBjcmVhdGVFdmVudHMgfSIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUpe1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGNsZWFySFRNTChlbCkge1xuICAgIHdoaWxlKGVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbmNvbnN0IFNob3d0aW1lID0gKHRpdGxlLCB0aGVhdGVyLCBydW50aW1lLCBmb3JtYXQpID0+IHtcbiAgICByZXR1cm57dGl0bGUsIHRoZWF0ZXIsIHJ1bnRpbWUsIGZvcm1hdH1cbn1cblxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckhUTUwsIFNob3d0aW1lIH07IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBjbGVhckhUTUx9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7Y3JlYXRlU2hvd3RpbWVzQ29udCwgU2hvd3RpbWV9IGZyb20gJy4vc2hvd3RpbWVzJztcbmltcG9ydCB7RXZlbnQsIGNyZWF0ZUV2ZW50c30gZnJvbSAnLi9ldmVudHMnXG5cbmNvbnN0IHNob3d0aW1lcyA9IFtdO1xuXG5jb25zdCBzaG93dGltZTEgPSBTaG93dGltZSgnVEhFIFdPUlNUIFBFUlNPTiBJTiBUSEUgV09STEQnLCAnVEhFQVRFUiAxJywgJzE2MCBNSU5TJywgJ0RPTEJZJyk7XG5jb25zdCBzaG93dGltZTIgPSBTaG93dGltZSgnU1RSQVdCRVJSWSBNQU5TSU9OJywgJ1RIRUFURVIgMicsICcxNjAgTUlOUycsICczNU1NJyk7XG5jb25zdCBzaG93dGltZTMgPSBTaG93dGltZSgnMjAyMiBPU0NBUiBOT01JTkFURUQgU0hPUlRTJywgJ1RIRUFURVIgMScsICcxNjAgTUlOUycsICdET0xCWScpO1xuY29uc3Qgc2hvd3RpbWU0ID0gU2hvd3RpbWUoJ1RIRSBXT1JTVCBQRVJTT04gSU4gVEhFIFdPUkxEJywgJ1RIRUFURVIgMicsICcxNjAgTUlOUycsICczNU1NJyk7XG5jb25zdCBzaG93dGltZTUgPSBTaG93dGltZSgnU1RSQVdCRVJSWSBNQU5TSU9OJywgJ1RIRUFURVIgMScsICcxNjAgTUlOUycsICdET0xCWScpO1xuXG5zaG93dGltZXMucHVzaChzaG93dGltZTEsIHNob3d0aW1lMiwgc2hvd3RpbWUzLCBzaG93dGltZTQsIHNob3d0aW1lNSlcblxuY29uc3QgZXZlbnRzID0gW107XG5cbmNvbnN0IGV2ZW50MSA9IEV2ZW50KCdISUdIUyBBTkQgTE9XUycsICdUaHUgTWFyIDEwIDEwOjAwIFBNJyk7XG5jb25zdCBldmVudDIgPSBFdmVudCgnQ0hFUiEnLCAnRnJpIE1hciAxMSA4OjAwIFBNJyk7XG5jb25zdCBldmVudDMgPSBFdmVudCgnVEhFIENISUNBR08gRklMTSBTT0NJRVRZIFBSRVNFTlRTJywgJ01vbiBNYXIgMTAgMTI6MDAgUE0nKTtcbmNvbnN0IGV2ZW50NCA9IEV2ZW50KCdEQVZJRCBMWU5DSDogQSBDT01QTEVURSBSRVRST1NQRUNUSVZFJywgJ1RodSBBcHIgNyAxMDowMCBQTScpO1xuY29uc3QgZXZlbnQ1ID0gRXZlbnQoJzkwVEggQU5OSVZFUlNBUlknLCAnU2F0IEFwciAyMyAxMDowMCBQTScpO1xuXG5ldmVudHMucHVzaChldmVudDEsIGV2ZW50MiwgZXZlbnQzLCBldmVudDQsIGV2ZW50NSlcblxuZnVuY3Rpb24gY3JlYXRlTm93UGxheWluZygpe1xuICAgIGNvbnN0IG5vd1BsYXlpbmdDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ25vdy1wbGF5aW5nLWhlYWRpbmcnKTtcblxuICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnSDEnLCAnbm93LXBsYXlpbmcnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdOT1cgUExBWUlORyc7XG5cbiAgICBjb25zdCBociA9IGNyZWF0ZUVsZW1lbnQoJ0hSJywgJ2hyJyk7XG5cbiAgICBub3dQbGF5aW5nQ29udC5hcHBlbmQoaDEsIGhyKVxuXG4gICAgcmV0dXJuIG5vd1BsYXlpbmdDb250XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZlYXR1cmVkTW92aWVzKCl7XG4gICAgY29uc3QgZmVhdHVyZWRNb3ZDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2ZlYXR1cmVkLW1vdmllLWNvbnQnKTtcbiAgICBjb25zdCBmZWF0dXJlZFRodW1iID0gY3JlYXRlRWxlbWVudCgnSU1HJywgJ2ZlYXR1cmVkLW1vdmllLXRodW1ibmFpbCcpO1xuICAgIGZlYXR1cmVkVGh1bWIuc3JjID0gJy9zcmMvaW1hZ2VzL1JhdGF0b3VpbGxlX01vdmllU3RpbGwucG5nJztcbiAgICBjb25zdCBmZWF0dXJlZFRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnZmVhdHVyZWQtdGl0bGUnKTtcbiAgICBmZWF0dXJlZFRpdGxlLnRleHRDb250ZW50ID0gJ1JhdGF0b2lsbGUnO1xuICAgIGNvbnN0IGZlYXR1cmVkRGlyZWN0b3IgPSBjcmVhdGVFbGVtZW50KCdwJywgJ2ZlYXR1cmVkLWRpcmVjdG9yJyk7XG4gICAgZmVhdHVyZWREaXJlY3Rvci50ZXh0Q29udGVudCA9ICdCcmFkIEJpcmQnO1xuXG4gICAgZmVhdHVyZWRNb3ZDb250LmFwcGVuZChmZWF0dXJlZFRodW1iLCBmZWF0dXJlZFRpdGxlLCBmZWF0dXJlZERpcmVjdG9yKVxuICAgIHJldHVybiBmZWF0dXJlZE1vdkNvbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbygpe1xuICAgIGNvbnN0IGluZm9TZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnU0VDVElPTicsICdpbmZvJyk7XG4gICAgY29uc3QgaDIgPSBjcmVhdGVFbGVtZW50KCdIMicsICdpbmZvLWhlYWRpbmcnKTtcbiAgICBjb25zdCBpbmZvVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnaW5mby10ZXh0Jyk7XG5cbiAgICBoMi50ZXh0Q29udGVudCA9ICdDSElDQUdP4oCZUyBWRU5VRSBGT1IgSU5ERVBFTkRFTlQsIEZPUkVJR04sIENVTFQgQU5EIENMQVNTSUMgRklMTVMuJztcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9ICdUdXJuIG9udG8gU291dGhwb3J0IEF2ZW51ZSBhbmQgaXTigJlzIGhhcmQgdG8gcmVzaXN0IHRoZSBuZW9uIGJlYWNvbiB0aGF0IGx1cmVzIGNpbmVwaGlsZXMgZnJvbSBhY3Jvc3MgQ2hpY2Fnb2xhbmQgd2l0aCBlaWdodCBmbGlja2VyaW5nIGxldHRlcnPigJRNdXNpYyBCb3guIEl04oCZcyBhIHByb21pc2Ugb2YgbW9yZSB0aGFuIGp1c3QgZW50ZXJ0YWlubWVudCwgYnV0IGEgdG90YWwgZXhwZXJpZW5jZS4nXG5cbiAgICBpbmZvU2VjdGlvbi5hcHBlbmQoaDIsIGluZm9UZXh0KTtcblxuICAgIHJldHVybiBpbmZvU2VjdGlvblxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnaG9tZScpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KCdNQUlOJywgJ21haW4nKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjbGVhckhUTUwoY29udGVudClcblxuICAgIGNvbnN0IGV2ZW50c1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdTRUNUSU9OJywgJ2V2ZW50cycpXG4gICAgZXZlbnRzU2VjdGlvbi5hcHBlbmQoY3JlYXRlRXZlbnRzKGV2ZW50cykpXG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlTm93UGxheWluZygpLCBjcmVhdGVGZWF0dXJlZE1vdmllcygpLCBjcmVhdGVTaG93dGltZXNDb250KHNob3d0aW1lcykpO1xuXG4gICAgaG9tZS5hcHBlbmQobWFpbiwgZXZlbnRzU2VjdGlvbiwgY3JlYXRlSW5mbygpKTtcbiAgICBjb250ZW50LmFwcGVuZChob21lKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lXG4iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOYXYsIGNyZWF0ZUZvb3Rlcn0gZnJvbSAnLi9ob21lJ1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCl7XG4gICAgY29uc3QgbWVtYmVyc2hpcEhlYWRpbmdDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ25vdy1wbGF5aW5nLWhlYWRpbmcnKTtcblxuICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnSDEnLCAnbWVtYmVyc2hpcCcpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ01FTUJFUlNISVAnO1xuXG4gICAgY29uc3QgaHIgPSBjcmVhdGVFbGVtZW50KCdIUicsICdocicpO1xuXG4gICAgbWVtYmVyc2hpcEhlYWRpbmdDb250LmFwcGVuZChoMSwgaHIpXG5cbiAgICByZXR1cm4gbWVtYmVyc2hpcEhlYWRpbmdDb250XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lYmVyc2hpcENvcHkoKXtcblxuICAgIGNvbnN0IGNvcHlDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ21lbWJlcnNoaXAtY29weS1jb250Jyk7XG5cbiAgICBjb25zdCBtZW1iZXJzaGlwU3ViaGVhZCA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ21lbWJlcnNoaXAtc3ViaGVhZCcpXG4gICAgbWVtYmVyc2hpcFN1YmhlYWQudGV4dENvbnRlbnQgPSAnSU5URVJFU1RFRCBJTiBBIE1FTUJFUlNISVA/J1xuXG4gICAgY29uc3QgcDEgPSBjcmVhdGVFbGVtZW50KCdQJywgJ21lbWJlcnNoaXAtY29weS0xJylcbiAgICBwMS50ZXh0Q29udGVudCA9IGBcbiAgICBGb3IgdGhlIHBhc3QgdHdvIGRlY2FkZXMgdGhlIE11c2ljIEJveCBoYXMgYmVlbiB0aGUgcHJlbWllcmUgdmVudWUgZm9yIGluZGVwZW5kZW50LCBmb3JlaWduLCBjdWx0IGFuZCBjbGFzc2ljIGZpbG1zLiAgQnVpbHQgaW4gMTkyOSB0aGUgTXVzaWMgQm94IFRoZWF0cmUgaGFzIHRoZSBsYXJnZXN0IHRoZWF0cmUgc3BhY2Ugb3BlcmF0ZWQgZnVsbHRpbWUgaW4gQ2hpY2Fnby5cblxuICAgIE1lbWJlcnMgb2YgdGhlIE11c2ljIEJveCBUaGVhdHJlIHdpbGwgcmVjZWl2ZSBhZHZhbmNlZCBub3RpY2Ugb2Ygc3BlY2lhbCBzY3JlZW5pbmdzLCBkaXNjb3VudGVkIHByaWNlcyBvbiB0aWNrZXRzIGFuZCBjb25jZXNzaW9ucyBhcyB3ZWxsIGFzIGludml0ZXMgdG8gbWVtYmVyIG9ubHkgZXZlbnRzLlxuXG4gICAgSm9pbmluZyB0aGUgTXVzaWMgQm94IGlzIGEgZ3JlYXQgd2F5IHRvIHN1cHBvcnQgdGhlIGhpc3RvcmljIHRoZWF0cmUgYW5kIHJlY2VpdmUgYmVuZWZpdHMuXG5cbiAgICBZT1VSIE1FTUJFUlNISVAgU1VQUE9SVFNcbiAgICBUaGUgaW5kZXBlbmRlbnRseSBvd25lZCBhbmQgb3BlcmF0ZWQgY29tbXVuaXR5IG1vdmllIHRoZWF0cmUgYW5kIGxvdW5nZS4gQWxsIG9mIHRoZSBxdWFsaXR5IHByb2dyYW1taW5nIE11c2ljIEJveCBvZmZlcnM7IGluY2x1ZGluZyBob2xpZGF5IGNsYXNzaWNzLCBtaWRuaWdodCBtb3ZpZXMsIE1CVCB0YWxrcywgQ2luZW1hIFNjaWVuY2UsIGZpbG0gZmVzdGl2YWxzLCBmZWF0dXJlIHByZXNlbnRhdGlvbnMgYW5kIHZpc2l0cyBmcm9tIGRpcmVjdG9ycywgcHJvZHVjZXJzLCBhbmQgYWN0b3JzLiBQcmVzZXJ2aW5nIHRoZSBiZWF1dHkgYW5kIGVsZWdhbmNlIG9mIHRoZSBoaXN0b3JpYyB0aGVhdHJlLlxuICAgIGBcblxuICAgIGNvbnN0IHAyID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktMicpXG4gICAgcDIudGV4dENvbnRlbnQgPSBgXG4gICAgTUVNQkVSU0hJUCBCRU5FRklUU1xuICAgIDEgY29tcGxpbWVudGFyeSB0aWNrZXQgZm9yIDEgcmVndWxhciBwcmljZWQgc2NyZWVuaW5nICh0aGVhdHJpY2FsIHNjcmVlbmluZ3Mgb25seSlcbiAgICBEaXNjb3VudGVkIHRpY2tldCBwcmljZXMgZm9yIGFsbCB2aXJ0dWFsIGFuZCByZWd1bGFyIHRoZWF0cmljYWwgc2NyZWVuaW5ncyBwbHVzIHNlbGVjdCBTcGVjaWFsIEV2ZW50cyAocHJpY2VzIHZhcnkpXG4gICAgSW52aXRhdGlvbnMgdG8gRnJlZSBNb250aGx5IE1lbWJlciBTY3JlZW5pbmdzXG4gICAgQWR2YW5jZWQgbm90aWNlIGFuZCBwdXJjaGFzZSBmb3Igc2VsZWN0IHNwZWNpYWwgc2NyZWVuaW5ncy4gXG4gICAgUmVzdGF1cmFudCBkaXNjb3VudHMgYXQgb3VyIHBhcnRuZXIgcmVzdGF1cmFudHPigKBcbiAgICBEaXNjb3VudCBvbiBNdXNpYyBCb3ggRmlsbSBEVkTigJlzIHdoZW4gcHVyY2hhc2VkIGF0IHRoZSB0aGVhdHJlXG4gICAgRnJlZSByZWZpbGxzIG9uIGFueSBzaXplIHBvcGNvcm4gYW5kIHNvZGFcbiAgICBEaXNjb3VudGVkIGdsYXNzZXMgb2YgTXVzaWMgQm94IGJyYW5kIHdpbmUgYW5kIGJlZXJzXG4gICAgRGlzY291bnRlZCBNdXNpYyBCb3ggYnJhbmQgd2luZSBieSB0aGUgYm90dGxlXG5cbiAgICAkNjAgSU5ESVZJRFVBTCBNRU1CRVJTSElQXG4gICAgTWVtYmVyc2hpcCBsYXN0cyBvbmUgeWVhciBmcm9tIGRhdGUgb2YgcHVyY2hhc2UuIEJlbmVmaXRzIGFyZSBvbmx5IHZhbGlkIGZvciB0aGUgaW5kaXZpZHVhbCBtZW1iZXIuXG5cbiAgICAkMTAwIERVQUwgTUVNQkVSU0hJUFxuICAgIER1YWwgTWVtYmVyc2hpcHMgcmVjZWl2ZSB0aGUgc2FtZSBiZW5lZml0cyBhcyBpbmRpdmlkdWFscyDigJMgZm9yIHR3by4gTWVtYmVycyBjYW4gc2hhcmUgdGhlIGFjY291bnQgd2l0aCBvbmUgcGVyc29uIG9yIGJyaW5nIGEgZGlmZmVyZW50IGd1ZXN0IHRvIHRoZSB0aGVhdHJlIGVhY2ggdGltZSEgTWVtYmVyc2hpcCBsYXN0cyBvbmUgeWVhciBmcm9tIGRhdGUgb2YgcHVyY2hhc2UuXG4gICAgYFxuXG4gICAgY29weUNvbnQuYXBwZW5kKG1lbWJlcnNoaXBTdWJoZWFkLCBwMSwgcDIpXG5cbiAgICByZXR1cm4gY29weUNvbnRcbn1cblxuZnVuY3Rpb24gbG9hZE1lbWJlcnNoaXAoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNsZWFySFRNTChjb250ZW50KVxuXG4gICAgY29uc3QgbWVtYmVyc2hpcCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdtZW1iZXJzaGlwJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ01BSU4nLCAnbWFpbicpXG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlTWViZXJzaGlwQ29weSgpKTtcbiAgICBtZW1iZXJzaGlwLmFwcGVuZChtYWluKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbWJlcnNoaXApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW1iZXJzaGlwIiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBjbGVhckhUTUx9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7Y3JlYXRlTmF2LCBjcmVhdGVGb290ZXJ9IGZyb20gJy4vaG9tZSdcblxuLy9leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB3aGljaCBjbGVhcnMgaG9tZSBhbmQgYXBwZW5kcyBtZW51XG5cbmNvbnN0IEJlZXIgPSAobmFtZSwgZGVzY3JpcCwgcHJpY2UpID0+IHtcbiAgICByZXR1cm4ge25hbWUsIGRlc2NyaXAsIHByaWNlfVxufVxuXG5jb25zdCBiZWVycyA9IFtdO1xuXG5jb25zdCBiZWVyMSA9IEJlZXIoJ1BJUEVXT1JLUyBOSU5KQSBWUyBVTklDT1JOJywgJ0hBTEYgQUNSRSBCT0RFTScsICckOS4wMCcpO1xuY29uc3QgYmVlcjIgPSBCZWVyKGBCRUxMJ1MgT0JFUk9OYCwgJ0FNRVJJQ0FOIFdIRUFUIEFMRScsICckNy4yNScpO1xuY29uc3QgYmVlcjMgPSBCZWVyKGBCRUxMJ1MgVFdPIEhFQVJURUQgQUxFYCwgJ0FNRVJJQ0FOIElQQScsICckNy4yNScpO1xuY29uc3QgYmVlcjQgPSBCZWVyKCdHT09TRSBJU0xBTkQgMzEyJywgJ1dIRUFUIEFMRScsICckNy4yNScpO1xuY29uc3QgYmVlcjUgPSBCZWVyKCdIQUxGIEFDUkUgQk9ERU0nLCAnSU5ESUEgUEFMRSBBTEUnLCAnJDcuMjUnKTtcblxuYmVlcnMucHVzaChiZWVyMSwgYmVlcjIsIGJlZXIzLCBiZWVyNCwgYmVlcjUpXG5cbmZ1bmN0aW9uIGNyZWF0ZUJlZXJzQ29udChhcnIpe1xuICAgIGNvbnN0IGJlZXJzQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdiZWVycy1jb250JylcblxuICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnSDEnLCAnYmVlci1tZW51Jyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnQkVFUiBNRU5VJztcblxuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdtZW51LWltYWdlJylcbiAgICBpbWcuc3JjID0gJy9zcmMvaW1hZ2VzL21idC1iZWVyZ2FyZGVuMi0wOTI1LmpwZWcnXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgIGNvbnN0IGJlZXJDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgYGJlZXItJHtpfS1jb250YCk7XG4gICAgICAgIGNvbnN0IGJlZXJOYW1lID0gY3JlYXRlRWxlbWVudCgnaDInLCBgYmVlci0ke2l9LW5hbWVgKTtcbiAgICAgICAgYmVlck5hbWUudGV4dENvbnRlbnQgPSBhcnJbaV0ubmFtZTtcbiAgICAgICAgY29uc3QgYmVlckRlc2NyaXAgPSBjcmVhdGVFbGVtZW50KCdoNScsIGBiZWVyLSR7aX0tZGVzY3JpcGApO1xuICAgICAgICBiZWVyRGVzY3JpcC50ZXh0Q29udGVudCA9IGFycltpXS5kZXNjcmlwO1xuICAgICAgICBjb25zdCBiZWVyUHJpY2UgPSBjcmVhdGVFbGVtZW50KCdoNScsIGBiZWVyLSR7aX0tcHJpY2VgKTtcbiAgICAgICAgYmVlclByaWNlLnRleHRDb250ZW50ID0gYXJyW2ldLnByaWNlO1xuXG4gICAgICAgIGJlZXJDb250LmFwcGVuZChiZWVyTmFtZSwgYmVlckRlc2NyaXAsIGJlZXJQcmljZSk7XG5cbiAgICAgICAgYmVlcnNDb250LmFwcGVuZChiZWVyQ29udCk7XG4gICAgfVxuXG4gICAgYmVlcnNDb250LmFwcGVuZChoMSwgaW1nKVxuXG4gICAgcmV0dXJuIGJlZXJzQ29udFxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnbWVudScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNsZWFySFRNTChjb250ZW50KVxuXG4gICAgbWVudS5hcHBlbmQoY3JlYXRlQmVlcnNDb250KGJlZXJzKSk7XG4gICAgY29udGVudC5hcHBlbmQobWVudSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gJy4vZnVuY3Rpb25zJ1xuXG5cbmNvbnN0IFNob3d0aW1lID0gKHRpdGxlLCB0aGVhdGVyLCBydW50aW1lLCBmb3JtYXQpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCB0aGVhdGVyLCBydW50aW1lLCBmb3JtYXR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3d0aW1lc0NvbnQoYXJyKSB7XG4gICAgY29uc3Qgc2hvd3RpbWVzQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdzaG93dGltZXMtY29udCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaTw1OyBpKyspe1xuICAgICAgICBjb25zdCBzaG93dGltZUNvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgc2hvd3RpbWUtY29udC0ke2l9YCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIGBzaG93dGltZS10aXRsZS0ke2l9YCk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYXJyW2ldLnRpdGxlO1xuICAgICAgICBjb25zdCBpbmZvQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGBzaG93dGltZS0ke2l9LWluZm8tY29udGApO1xuICAgICAgICBjb25zdCB0aGVhdGVyID0gY3JlYXRlRWxlbWVudCgnaDUnLCBgc2hvd3RpbWUtJHtpfS10aGVhdGVyYCk7XG4gICAgICAgIHRoZWF0ZXIudGV4dENvbnRlbnQgPSBhcnJbaV0udGhlYXRlcjtcbiAgICAgICAgY29uc3QgcnVudGltZSA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYHNob3d0aW1lLSR7aX0tcnVudGltZWApO1xuICAgICAgICBydW50aW1lLnRleHRDb250ZW50ID0gYXJyW2ldLnJ1bnRpbWU7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYHNob3d0aW1lLSR7aX0tZm9ybWF0YCk7XG4gICAgICAgIGZvcm1hdC50ZXh0Q29udGVudCA9IGFycltpXS5mb3JtYXQ7XG4gICAgICAgIGluZm9Db250LmFwcGVuZCh0aGVhdGVyLCBydW50aW1lLCBmb3JtYXQpO1xuICAgICAgICBzaG93dGltZUNvbnQuYXBwZW5kKHRpdGxlLCBpbmZvQ29udCk7XG4gICAgICAgIHNob3d0aW1lc0NvbnQuYXBwZW5kKHNob3d0aW1lQ29udClcbiAgICB9XG5cbiAgICByZXR1cm4gc2hvd3RpbWVzQ29udDtcbn1cblxuZXhwb3J0IHtTaG93dGltZSwgY3JlYXRlU2hvd3RpbWVzQ29udH0iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnXG5pbXBvcnQgbG9hZE1lbWJlcnNoaXAgZnJvbSAnLi9tZW1iZXInXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoJ05BVicsICduYXYnKTtcblxuICAgIGNvbnN0IG1lbnVMaW5rID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW51LWxpbmsnKTtcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KCdJTUcnLCAnbXVzaWMtYm94LWxvZ28nKTtcbiAgICBsb2dvLnNyYyA9ICcvc3JjL2ltYWdlcy9NdXNpY0JveF9Mb2dvX1doaXRlLnBuZydcbiAgICBjb25zdCBtZW1iZXJMb2dpbiA9IGNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsICdtZW1iZXItbG9naW4tYnV0dG9uJyk7XG4gICAgbWVtYmVyTG9naW4udGV4dENvbnRlbnQgPSAnTWVtYmVyIExvZ2luJztcblxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsb2FkTWVudSgpXG4gICAgfSlcblxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxvYWRIb21lKClcbiAgICB9KVxuXG4gICAgbWVtYmVyTG9naW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxvYWRNZW1iZXJzaGlwKClcbiAgICB9KVxuXG4gICAgbmF2LmFwcGVuZChtZW51TGluaywgbG9nbywgbWVtYmVyTG9naW4pXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdCT0RZJyk7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0JylcblxuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGNyZWF0ZU5hdigpLCBjb250ZW50KVxuICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRIb21lKCkpXG4gICAgYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlRm9vdGVyKCksIHNjcmlwdClcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnRk9PVEVSJywgJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdsb2dvJyk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBjcmVhdGVFbGVtZW50KCdBJywgJ2hvbWUtbGluaycpO1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICAgIGNvbnN0IGZpbG1zTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnZmlsbXMtbGluaycpO1xuICAgIGZpbG1zTGluay50ZXh0Q29udGVudCA9ICdGSUxNUyc7XG4gICAgY29uc3QgZXZlbnRzTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnZXZlbnRzLWxpbmsnKTtcbiAgICBldmVudHNMaW5rLnRleHRDb250ZW50ID0gJ0VWRU5UUyc7XG4gICAgY29uc3Qgc2FsZXNMaW5rID0gY3JlYXRlRWxlbWVudCgnQScsICdzYWxlcy1saW5rJyk7XG4gICAgc2FsZXNMaW5rLnRleHRDb250ZW50ID0gJ0dST1VQIFNBTEVTJztcbiAgICBjb25zdCBtZW1iZXJzaGlwTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnbWVtYmVyc2hpcC1saW5rJyk7XG4gICAgbWVtYmVyc2hpcExpbmsudGV4dENvbnRlbnQgPSAnTUVNQkVSU0hJUCc7XG5cbiAgICBmb290ZXIuYXBwZW5kKGxvZ28sIGhvbWVMaW5rLCBmaWxtc0xpbmssIGV2ZW50c0xpbmssIHNhbGVzTGluaywgbWVtYmVyc2hpcExpbmspXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaXRlIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVNpdGUgZnJvbSAnLi93ZWJzaXRlLmpzJ1xuXG5pbml0aWFsaXplU2l0ZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
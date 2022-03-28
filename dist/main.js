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
/* harmony export */   "createEvents": () => (/* binding */ createEvents),
/* harmony export */   "createEventsHead": () => (/* binding */ createEventsHead)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


const Event = (name, time) => {
    const newEvent = {name, time};
    return newEvent
}

function createEventsHead(){
    const h1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H1', 'events-heading');
    h1.textContent = 'EVENTS';

    return h1
}

function createEvents(arr){
    const eventsCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'events-cont')
    const eventsThickRule = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'events-cont-thick-rule');
    eventsCont.append(eventsThickRule)

        for (let i = 0; i < 5; i++){
            const eventCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', `event-${i}-cont`);
            const eventName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H2', `event-${i}-name`)
            const eventDate = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H4', `event-${i}-date`)
            const hr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'event-hr')

            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

            eventCont.append(eventName, eventDate, hr)

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
    
    const featuredMovHeading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'featured-movie-heading')
    featuredMovHeading.textContent = 'Featured';


    const featuredThumb = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'featured-movie-thumbnail');
    featuredThumb.src = '/src/images/Ratatouille_MovieStill.png';
    const featuredTitle = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'featured-title');
    featuredTitle.textContent = 'Ratatoille';
    const featuredDirector = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'featured-director');
    featuredDirector.textContent = 'Brad Bird';

    featuredMovCont.append(featuredMovHeading, featuredThumb, featuredTitle, featuredDirector)
    return featuredMovCont
}

function createInfo(){
    const infoSection = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('SECTION', 'info');
    const h2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H2', 'info-heading');
    const infoText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'info-text');
    const infoTextCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'info-text-cont');
    infoTextCont.append(h2, infoText)
    const infoSecImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('IMG', 'info-section-image');

    infoSecImage.src = '/src/images/Moviegoers_Image.png';
    h2.textContent = 'CHICAGO’S VENUE FOR INDEPENDENT, FOREIGN, CULT AND CLASSIC FILMS.';
    infoText.textContent = 'Turn onto Southport Avenue and it’s hard to resist the neon beacon that lures cinephiles from across Chicagoland with eight flickering letters—Music Box. It’s a promise of more than just entertainment, but a total experience.'

    infoSection.append(infoTextCont, infoSecImage);

    return infoSection
}

function loadHome(){
    const home = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'home');
    const main = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('MAIN', 'main');
    const homeCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'home-cont')
    const content = document.getElementById('content')

    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)

    const eventsSection = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('SECTION', 'events')
    eventsSection.append((0,_events__WEBPACK_IMPORTED_MODULE_2__.createEventsHead)(), (0,_events__WEBPACK_IMPORTED_MODULE_2__.createEvents)(events))
    homeCont.append(createNowPlaying(), createFeaturedMovies(), (0,_showtimes__WEBPACK_IMPORTED_MODULE_1__.createShowtimesCont)(showtimes));

    main.append(homeCont)
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


function createHeading(){
    const membershipHeadingCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'membership-heading-cont');

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

    const p1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-1');
    const p2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-2');
    const p3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-3');
    const p4Heading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'membership-heading');
    const p4 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-4');
    const benefitsHeading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'membership-heading');
    const benefitsUL = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('UL', 'benefits-list')
    const benefits1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-1');
    const benefits2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-2');
    const benefits3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-3');
    const benefits4 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-4');
    const benefits5 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-5');
    const benefits6 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-6');
    const benefits7 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-7');
    const benefits8 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-8');
    const benefits9 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('LI', 'membership-benefits-9');
    benefitsUL.append(benefits1, benefits2, benefits3, benefits4, benefits5, benefits6, benefits7, benefits8, benefits9)
    const p5Heading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'membership-heading');
    const p5 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-5');
    const p6Heading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'membership-heading');
    const p6 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('P', 'membership-copy-6');


    p1.textContent = `
    For the past two decades the Music Box has been the premiere venue for independent, foreign, cult and classic films.  Built in 1929 the Music Box Theatre has the largest theatre space operated fulltime in Chicago.
    `
    p2.textContent = `Members of the Music Box Theatre will receive advanced notice of special screenings, discounted prices on tickets and concessions as well as invites to member only events.`
    p3.textContent = `Joining the Music Box is a great way to support the historic theatre and receive benefits.`
    p4Heading.textContent = 'YOUR MEMBERSHIP SUPPORTS';
    p4.textContent = `The independently owned and operated community movie theatre and lounge. All of the quality programming Music Box offers; including holiday classics, midnight movies, MBT talks, Cinema Science, film festivals, feature presentations and visits from directors, producers, and actors. Preserving the beauty and elegance of the historic theatre.`
    benefitsHeading.textContent = `MEMBERSHIP BENEFITS`;
    benefits1.textContent = `1 complimentary ticket for 1 regular priced screening (theatrical screenings only)`
    benefits2.textContent = `Discounted ticket prices for all virtual and regular theatrical screenings plus select Special Events (prices vary)`
    benefits3.textContent = `Invitations to Free Monthly Member Screenings`
    benefits4.textContent = `Advanced notice and purchase for select special screenings.`
    benefits5.textContent = `Restaurant discounts at our partner restaurants†`
    benefits6.textContent = `Discount on Music Box Film DVD’s when purchased at the theatre`
    benefits7.textContent = `Free refills on any size popcorn and soda`
    benefits8.textContent = `Discounted glasses of Music Box brand wine and beers`    
    benefits9.textContent = `Discounted Music Box brand wine by the bottle`
    p5Heading.textContent = '$60 INDIVIDUAL MEMBERSHIP';
    p5.textContent = 'Membership lasts one year from date of purchase. Benefits are only valid for the individual member.'
    p6Heading.textContent = '$100 DUAL MEMBERSHIP';
    p6.textContent = 'Dual Memberships receive the same benefits as individuals – for two. Members can share the account with one person or bring a different guest to the theatre each time! Membership lasts one year from date of purchase.'



    const col1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'copy-column-1')
    const col2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'copy-column-2')

    col1.append(membershipSubhead, p1, p2, p3, p4Heading, p4)
    col2.append(benefitsHeading, benefitsUL, p5Heading, p5, p6Heading, p6)

    copyCont.append(col1, col2)

    return copyCont
}

function loadMembership(){
    const content = document.getElementById('content')
    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)

    const membership = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'membership');
    const main = document.createElement('MAIN', 'main')
    main.append(createHeading(), createMebershipCopy());
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
    const beersThickRule = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'beers-cont-thick-rule');
    beersCont.append(beersThickRule)

    for (let i = 0; i < 5; i++){
        const beerCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', `beer-${i}-cont`);
        const beerName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', `beer-${i}-name`);
        beerName.textContent = arr[i].name;
        const beerDescrip = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `beer-${i}-descrip`);
        beerDescrip.textContent = arr[i].descrip;
        const beerPrice = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `beer-${i}-price`);
        beerPrice.textContent = arr[i].price;
        const beerHR = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'beer-hr')

        beerCont.append(beerName, beerDescrip, beerPrice, beerHR);

        beersCont.append(beerCont);
    }

    return beersCont
}

function createMenuHead(){
    const h1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H1', 'menu-heading');
    h1.textContent = 'BEER MENU';

    return h1
}

function loadMenu(){
    const menu = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'menu');
    const content = document.getElementById('content');
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)


    menu.append(createMenuHead(), createBeersCont(beers));
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
    const showtimeHeading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'showtime-heading')
    showtimeHeading.textContent = 'Showtimes'
    showtimesCont.append(showtimeHeading)

    for (let i = 0; i<5; i++){
        const showtimeCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', `showtime-cont`);

        const title = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', `showtime-title`);
        title.textContent = arr[i].title;
        const infoCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', `showtime-info-cont`);
        const theater = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `showtime-theater`);
        theater.textContent = arr[i].theater;
        const runtime = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `showtime-runtime`);
        runtime.textContent = arr[i].runtime;
        const format = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `showtime-format`);
        format.textContent = arr[i].format;
        infoCont.append(theater, runtime, format);
        const hr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'showtimes-rule')
        showtimeCont.append(title, infoCont, hr);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFekMsdURBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVtYmVyLmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zaG93dGltZXMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2Z1bmN0aW9ucydcblxuY29uc3QgRXZlbnQgPSAobmFtZSwgdGltZSkgPT4ge1xuICAgIGNvbnN0IG5ld0V2ZW50ID0ge25hbWUsIHRpbWV9O1xuICAgIHJldHVybiBuZXdFdmVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudHNIZWFkKCl7XG4gICAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KCdIMScsICdldmVudHMtaGVhZGluZycpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0VWRU5UUyc7XG5cbiAgICByZXR1cm4gaDFcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKGFycil7XG4gICAgY29uc3QgZXZlbnRzQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdldmVudHMtY29udCcpXG4gICAgY29uc3QgZXZlbnRzVGhpY2tSdWxlID0gY3JlYXRlRWxlbWVudCgnSFInLCAnZXZlbnRzLWNvbnQtdGhpY2stcnVsZScpO1xuICAgIGV2ZW50c0NvbnQuYXBwZW5kKGV2ZW50c1RoaWNrUnVsZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBldmVudENvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCBgZXZlbnQtJHtpfS1jb250YCk7XG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBjcmVhdGVFbGVtZW50KCdIMicsIGBldmVudC0ke2l9LW5hbWVgKVxuICAgICAgICAgICAgY29uc3QgZXZlbnREYXRlID0gY3JlYXRlRWxlbWVudCgnSDQnLCBgZXZlbnQtJHtpfS1kYXRlYClcbiAgICAgICAgICAgIGNvbnN0IGhyID0gY3JlYXRlRWxlbWVudCgnSFInLCAnZXZlbnQtaHInKVxuXG4gICAgICAgICAgICBldmVudE5hbWUudGV4dENvbnRlbnQgPSBhcnJbaV0ubmFtZTtcbiAgICAgICAgICAgIGV2ZW50RGF0ZS50ZXh0Q29udGVudCA9IGFycltpXS50aW1lO1xuXG4gICAgICAgICAgICBldmVudENvbnQuYXBwZW5kKGV2ZW50TmFtZSwgZXZlbnREYXRlLCBocilcblxuICAgICAgICAgICAgZXZlbnRzQ29udC5hcHBlbmQoZXZlbnRDb250KVxuICAgICAgICB9XG4gICAgY29uc3QgYmVjb21lTWVtYmVyQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgJ2JlY29tZS1tZW1iZXItYnV0dG9uJyk7XG4gICAgYmVjb21lTWVtYmVyQnV0dG9uLnRleHRDb250ZW50ID0gJ0JlY29tZSBBIE1lbWJlcic7XG5cbiAgICBldmVudHNDb250LmFwcGVuZChiZWNvbWVNZW1iZXJCdXR0b24pXG5cbiAgICByZXR1cm4gZXZlbnRzQ29udFxufVxuXG5leHBvcnQgeyBFdmVudCwgY3JlYXRlRXZlbnRzSGVhZCwgY3JlYXRlRXZlbnRzIH0iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKXtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBjbGVhckhUTUwoZWwpIHtcbiAgICB3aGlsZShlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5jb25zdCBTaG93dGltZSA9ICh0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0KSA9PiB7XG4gICAgcmV0dXJue3RpdGxlLCB0aGVhdGVyLCBydW50aW1lLCBmb3JtYXR9XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJIVE1MLCBTaG93dGltZSB9OyIsImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgY2xlYXJIVE1MfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZVNob3d0aW1lc0NvbnQsIFNob3d0aW1lfSBmcm9tICcuL3Nob3d0aW1lcyc7XG5pbXBvcnQge0V2ZW50LCBjcmVhdGVFdmVudHNIZWFkLCBjcmVhdGVFdmVudHN9IGZyb20gJy4vZXZlbnRzJ1xuXG5jb25zdCBzaG93dGltZXMgPSBbXTtcblxuY29uc3Qgc2hvd3RpbWUxID0gU2hvd3RpbWUoJ1RIRSBXT1JTVCBQRVJTT04gSU4gVEhFIFdPUkxEJywgJ1RIRUFURVIgMScsICcxNjAgTUlOUycsICdET0xCWScpO1xuY29uc3Qgc2hvd3RpbWUyID0gU2hvd3RpbWUoJ1NUUkFXQkVSUlkgTUFOU0lPTicsICdUSEVBVEVSIDInLCAnMTYwIE1JTlMnLCAnMzVNTScpO1xuY29uc3Qgc2hvd3RpbWUzID0gU2hvd3RpbWUoJzIwMjIgT1NDQVIgTk9NSU5BVEVEIFNIT1JUUycsICdUSEVBVEVSIDEnLCAnMTYwIE1JTlMnLCAnRE9MQlknKTtcbmNvbnN0IHNob3d0aW1lNCA9IFNob3d0aW1lKCdUSEUgV09SU1QgUEVSU09OIElOIFRIRSBXT1JMRCcsICdUSEVBVEVSIDInLCAnMTYwIE1JTlMnLCAnMzVNTScpO1xuY29uc3Qgc2hvd3RpbWU1ID0gU2hvd3RpbWUoJ1NUUkFXQkVSUlkgTUFOU0lPTicsICdUSEVBVEVSIDEnLCAnMTYwIE1JTlMnLCAnRE9MQlknKTtcblxuc2hvd3RpbWVzLnB1c2goc2hvd3RpbWUxLCBzaG93dGltZTIsIHNob3d0aW1lMywgc2hvd3RpbWU0LCBzaG93dGltZTUpXG5cbmNvbnN0IGV2ZW50cyA9IFtdO1xuXG5jb25zdCBldmVudDEgPSBFdmVudCgnSElHSFMgQU5EIExPV1MnLCAnVGh1IE1hciAxMCAxMDowMCBQTScpO1xuY29uc3QgZXZlbnQyID0gRXZlbnQoJ0NIRVIhJywgJ0ZyaSBNYXIgMTEgODowMCBQTScpO1xuY29uc3QgZXZlbnQzID0gRXZlbnQoJ1RIRSBDSElDQUdPIEZJTE0gU09DSUVUWSBQUkVTRU5UUycsICdNb24gTWFyIDEwIDEyOjAwIFBNJyk7XG5jb25zdCBldmVudDQgPSBFdmVudCgnREFWSUQgTFlOQ0g6IEEgQ09NUExFVEUgUkVUUk9TUEVDVElWRScsICdUaHUgQXByIDcgMTA6MDAgUE0nKTtcbmNvbnN0IGV2ZW50NSA9IEV2ZW50KCc5MFRIIEFOTklWRVJTQVJZJywgJ1NhdCBBcHIgMjMgMTA6MDAgUE0nKTtcblxuZXZlbnRzLnB1c2goZXZlbnQxLCBldmVudDIsIGV2ZW50MywgZXZlbnQ0LCBldmVudDUpXG5cbmZ1bmN0aW9uIGNyZWF0ZU5vd1BsYXlpbmcoKXtcbiAgICBjb25zdCBub3dQbGF5aW5nQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdub3ctcGxheWluZy1oZWFkaW5nJyk7XG5cbiAgICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoJ0gxJywgJ25vdy1wbGF5aW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTk9XIFBMQVlJTkcnO1xuXG4gICAgY29uc3QgaHIgPSBjcmVhdGVFbGVtZW50KCdIUicsICdocicpO1xuXG4gICAgbm93UGxheWluZ0NvbnQuYXBwZW5kKGgxLCBocilcblxuICAgIHJldHVybiBub3dQbGF5aW5nQ29udFxufVxuXG5mdW5jdGlvbiBjcmVhdGVGZWF0dXJlZE1vdmllcygpe1xuICAgIGNvbnN0IGZlYXR1cmVkTW92Q29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdmZWF0dXJlZC1tb3ZpZS1jb250Jyk7XG4gICAgXG4gICAgY29uc3QgZmVhdHVyZWRNb3ZIZWFkaW5nID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnZmVhdHVyZWQtbW92aWUtaGVhZGluZycpXG4gICAgZmVhdHVyZWRNb3ZIZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVkJztcblxuXG4gICAgY29uc3QgZmVhdHVyZWRUaHVtYiA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdmZWF0dXJlZC1tb3ZpZS10aHVtYm5haWwnKTtcbiAgICBmZWF0dXJlZFRodW1iLnNyYyA9ICcvc3JjL2ltYWdlcy9SYXRhdG91aWxsZV9Nb3ZpZVN0aWxsLnBuZyc7XG4gICAgY29uc3QgZmVhdHVyZWRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ2ZlYXR1cmVkLXRpdGxlJyk7XG4gICAgZmVhdHVyZWRUaXRsZS50ZXh0Q29udGVudCA9ICdSYXRhdG9pbGxlJztcbiAgICBjb25zdCBmZWF0dXJlZERpcmVjdG9yID0gY3JlYXRlRWxlbWVudCgncCcsICdmZWF0dXJlZC1kaXJlY3RvcicpO1xuICAgIGZlYXR1cmVkRGlyZWN0b3IudGV4dENvbnRlbnQgPSAnQnJhZCBCaXJkJztcblxuICAgIGZlYXR1cmVkTW92Q29udC5hcHBlbmQoZmVhdHVyZWRNb3ZIZWFkaW5nLCBmZWF0dXJlZFRodW1iLCBmZWF0dXJlZFRpdGxlLCBmZWF0dXJlZERpcmVjdG9yKVxuICAgIHJldHVybiBmZWF0dXJlZE1vdkNvbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbygpe1xuICAgIGNvbnN0IGluZm9TZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnU0VDVElPTicsICdpbmZvJyk7XG4gICAgY29uc3QgaDIgPSBjcmVhdGVFbGVtZW50KCdIMicsICdpbmZvLWhlYWRpbmcnKTtcbiAgICBjb25zdCBpbmZvVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnaW5mby10ZXh0Jyk7XG4gICAgY29uc3QgaW5mb1RleHRDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2luZm8tdGV4dC1jb250Jyk7XG4gICAgaW5mb1RleHRDb250LmFwcGVuZChoMiwgaW5mb1RleHQpXG4gICAgY29uc3QgaW5mb1NlY0ltYWdlID0gY3JlYXRlRWxlbWVudCgnSU1HJywgJ2luZm8tc2VjdGlvbi1pbWFnZScpO1xuXG4gICAgaW5mb1NlY0ltYWdlLnNyYyA9ICcvc3JjL2ltYWdlcy9Nb3ZpZWdvZXJzX0ltYWdlLnBuZyc7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnQ0hJQ0FHT+KAmVMgVkVOVUUgRk9SIElOREVQRU5ERU5ULCBGT1JFSUdOLCBDVUxUIEFORCBDTEFTU0lDIEZJTE1TLic7XG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSAnVHVybiBvbnRvIFNvdXRocG9ydCBBdmVudWUgYW5kIGl04oCZcyBoYXJkIHRvIHJlc2lzdCB0aGUgbmVvbiBiZWFjb24gdGhhdCBsdXJlcyBjaW5lcGhpbGVzIGZyb20gYWNyb3NzIENoaWNhZ29sYW5kIHdpdGggZWlnaHQgZmxpY2tlcmluZyBsZXR0ZXJz4oCUTXVzaWMgQm94LiBJdOKAmXMgYSBwcm9taXNlIG9mIG1vcmUgdGhhbiBqdXN0IGVudGVydGFpbm1lbnQsIGJ1dCBhIHRvdGFsIGV4cGVyaWVuY2UuJ1xuXG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kKGluZm9UZXh0Q29udCwgaW5mb1NlY0ltYWdlKTtcblxuICAgIHJldHVybiBpbmZvU2VjdGlvblxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnaG9tZScpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KCdNQUlOJywgJ21haW4nKTtcbiAgICBjb25zdCBob21lQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lLWNvbnQnKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjbGVhckhUTUwoY29udGVudClcblxuICAgIGNvbnN0IGV2ZW50c1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdTRUNUSU9OJywgJ2V2ZW50cycpXG4gICAgZXZlbnRzU2VjdGlvbi5hcHBlbmQoY3JlYXRlRXZlbnRzSGVhZCgpLCBjcmVhdGVFdmVudHMoZXZlbnRzKSlcbiAgICBob21lQ29udC5hcHBlbmQoY3JlYXRlTm93UGxheWluZygpLCBjcmVhdGVGZWF0dXJlZE1vdmllcygpLCBjcmVhdGVTaG93dGltZXNDb250KHNob3d0aW1lcykpO1xuXG4gICAgbWFpbi5hcHBlbmQoaG9tZUNvbnQpXG4gICAgaG9tZS5hcHBlbmQobWFpbiwgZXZlbnRzU2VjdGlvbiwgY3JlYXRlSW5mbygpKTtcbiAgICBjb250ZW50LmFwcGVuZChob21lKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lXG4iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCl7XG4gICAgY29uc3QgbWVtYmVyc2hpcEhlYWRpbmdDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ21lbWJlcnNoaXAtaGVhZGluZy1jb250Jyk7XG5cbiAgICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoJ0gxJywgJ21lbWJlcnNoaXAnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdNRU1CRVJTSElQJztcblxuICAgIGNvbnN0IGhyID0gY3JlYXRlRWxlbWVudCgnSFInLCAnaHInKTtcblxuICAgIG1lbWJlcnNoaXBIZWFkaW5nQ29udC5hcHBlbmQoaDEsIGhyKVxuXG4gICAgcmV0dXJuIG1lbWJlcnNoaXBIZWFkaW5nQ29udFxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZWJlcnNoaXBDb3B5KCl7XG5cbiAgICBjb25zdCBjb3B5Q29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdtZW1iZXJzaGlwLWNvcHktY29udCcpO1xuXG4gICAgY29uc3QgbWVtYmVyc2hpcFN1YmhlYWQgPSBjcmVhdGVFbGVtZW50KCdoMicsICdtZW1iZXJzaGlwLXN1YmhlYWQnKVxuICAgIG1lbWJlcnNoaXBTdWJoZWFkLnRleHRDb250ZW50ID0gJ0lOVEVSRVNURUQgSU4gQSBNRU1CRVJTSElQPydcblxuICAgIGNvbnN0IHAxID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktMScpO1xuICAgIGNvbnN0IHAyID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktMicpO1xuICAgIGNvbnN0IHAzID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktMycpO1xuICAgIGNvbnN0IHA0SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgJ21lbWJlcnNoaXAtaGVhZGluZycpO1xuICAgIGNvbnN0IHA0ID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktNCcpO1xuICAgIGNvbnN0IGJlbmVmaXRzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgJ21lbWJlcnNoaXAtaGVhZGluZycpO1xuICAgIGNvbnN0IGJlbmVmaXRzVUwgPSBjcmVhdGVFbGVtZW50KCdVTCcsICdiZW5lZml0cy1saXN0JylcbiAgICBjb25zdCBiZW5lZml0czEgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTEnKTtcbiAgICBjb25zdCBiZW5lZml0czIgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTInKTtcbiAgICBjb25zdCBiZW5lZml0czMgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTMnKTtcbiAgICBjb25zdCBiZW5lZml0czQgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTQnKTtcbiAgICBjb25zdCBiZW5lZml0czUgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTUnKTtcbiAgICBjb25zdCBiZW5lZml0czYgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTYnKTtcbiAgICBjb25zdCBiZW5lZml0czcgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTcnKTtcbiAgICBjb25zdCBiZW5lZml0czggPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTgnKTtcbiAgICBjb25zdCBiZW5lZml0czkgPSBjcmVhdGVFbGVtZW50KCdMSScsICdtZW1iZXJzaGlwLWJlbmVmaXRzLTknKTtcbiAgICBiZW5lZml0c1VMLmFwcGVuZChiZW5lZml0czEsIGJlbmVmaXRzMiwgYmVuZWZpdHMzLCBiZW5lZml0czQsIGJlbmVmaXRzNSwgYmVuZWZpdHM2LCBiZW5lZml0czcsIGJlbmVmaXRzOCwgYmVuZWZpdHM5KVxuICAgIGNvbnN0IHA1SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgJ21lbWJlcnNoaXAtaGVhZGluZycpO1xuICAgIGNvbnN0IHA1ID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktNScpO1xuICAgIGNvbnN0IHA2SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgJ21lbWJlcnNoaXAtaGVhZGluZycpO1xuICAgIGNvbnN0IHA2ID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW1iZXJzaGlwLWNvcHktNicpO1xuXG5cbiAgICBwMS50ZXh0Q29udGVudCA9IGBcbiAgICBGb3IgdGhlIHBhc3QgdHdvIGRlY2FkZXMgdGhlIE11c2ljIEJveCBoYXMgYmVlbiB0aGUgcHJlbWllcmUgdmVudWUgZm9yIGluZGVwZW5kZW50LCBmb3JlaWduLCBjdWx0IGFuZCBjbGFzc2ljIGZpbG1zLiAgQnVpbHQgaW4gMTkyOSB0aGUgTXVzaWMgQm94IFRoZWF0cmUgaGFzIHRoZSBsYXJnZXN0IHRoZWF0cmUgc3BhY2Ugb3BlcmF0ZWQgZnVsbHRpbWUgaW4gQ2hpY2Fnby5cbiAgICBgXG4gICAgcDIudGV4dENvbnRlbnQgPSBgTWVtYmVycyBvZiB0aGUgTXVzaWMgQm94IFRoZWF0cmUgd2lsbCByZWNlaXZlIGFkdmFuY2VkIG5vdGljZSBvZiBzcGVjaWFsIHNjcmVlbmluZ3MsIGRpc2NvdW50ZWQgcHJpY2VzIG9uIHRpY2tldHMgYW5kIGNvbmNlc3Npb25zIGFzIHdlbGwgYXMgaW52aXRlcyB0byBtZW1iZXIgb25seSBldmVudHMuYFxuICAgIHAzLnRleHRDb250ZW50ID0gYEpvaW5pbmcgdGhlIE11c2ljIEJveCBpcyBhIGdyZWF0IHdheSB0byBzdXBwb3J0IHRoZSBoaXN0b3JpYyB0aGVhdHJlIGFuZCByZWNlaXZlIGJlbmVmaXRzLmBcbiAgICBwNEhlYWRpbmcudGV4dENvbnRlbnQgPSAnWU9VUiBNRU1CRVJTSElQIFNVUFBPUlRTJztcbiAgICBwNC50ZXh0Q29udGVudCA9IGBUaGUgaW5kZXBlbmRlbnRseSBvd25lZCBhbmQgb3BlcmF0ZWQgY29tbXVuaXR5IG1vdmllIHRoZWF0cmUgYW5kIGxvdW5nZS4gQWxsIG9mIHRoZSBxdWFsaXR5IHByb2dyYW1taW5nIE11c2ljIEJveCBvZmZlcnM7IGluY2x1ZGluZyBob2xpZGF5IGNsYXNzaWNzLCBtaWRuaWdodCBtb3ZpZXMsIE1CVCB0YWxrcywgQ2luZW1hIFNjaWVuY2UsIGZpbG0gZmVzdGl2YWxzLCBmZWF0dXJlIHByZXNlbnRhdGlvbnMgYW5kIHZpc2l0cyBmcm9tIGRpcmVjdG9ycywgcHJvZHVjZXJzLCBhbmQgYWN0b3JzLiBQcmVzZXJ2aW5nIHRoZSBiZWF1dHkgYW5kIGVsZWdhbmNlIG9mIHRoZSBoaXN0b3JpYyB0aGVhdHJlLmBcbiAgICBiZW5lZml0c0hlYWRpbmcudGV4dENvbnRlbnQgPSBgTUVNQkVSU0hJUCBCRU5FRklUU2A7XG4gICAgYmVuZWZpdHMxLnRleHRDb250ZW50ID0gYDEgY29tcGxpbWVudGFyeSB0aWNrZXQgZm9yIDEgcmVndWxhciBwcmljZWQgc2NyZWVuaW5nICh0aGVhdHJpY2FsIHNjcmVlbmluZ3Mgb25seSlgXG4gICAgYmVuZWZpdHMyLnRleHRDb250ZW50ID0gYERpc2NvdW50ZWQgdGlja2V0IHByaWNlcyBmb3IgYWxsIHZpcnR1YWwgYW5kIHJlZ3VsYXIgdGhlYXRyaWNhbCBzY3JlZW5pbmdzIHBsdXMgc2VsZWN0IFNwZWNpYWwgRXZlbnRzIChwcmljZXMgdmFyeSlgXG4gICAgYmVuZWZpdHMzLnRleHRDb250ZW50ID0gYEludml0YXRpb25zIHRvIEZyZWUgTW9udGhseSBNZW1iZXIgU2NyZWVuaW5nc2BcbiAgICBiZW5lZml0czQudGV4dENvbnRlbnQgPSBgQWR2YW5jZWQgbm90aWNlIGFuZCBwdXJjaGFzZSBmb3Igc2VsZWN0IHNwZWNpYWwgc2NyZWVuaW5ncy5gXG4gICAgYmVuZWZpdHM1LnRleHRDb250ZW50ID0gYFJlc3RhdXJhbnQgZGlzY291bnRzIGF0IG91ciBwYXJ0bmVyIHJlc3RhdXJhbnRz4oCgYFxuICAgIGJlbmVmaXRzNi50ZXh0Q29udGVudCA9IGBEaXNjb3VudCBvbiBNdXNpYyBCb3ggRmlsbSBEVkTigJlzIHdoZW4gcHVyY2hhc2VkIGF0IHRoZSB0aGVhdHJlYFxuICAgIGJlbmVmaXRzNy50ZXh0Q29udGVudCA9IGBGcmVlIHJlZmlsbHMgb24gYW55IHNpemUgcG9wY29ybiBhbmQgc29kYWBcbiAgICBiZW5lZml0czgudGV4dENvbnRlbnQgPSBgRGlzY291bnRlZCBnbGFzc2VzIG9mIE11c2ljIEJveCBicmFuZCB3aW5lIGFuZCBiZWVyc2AgICAgXG4gICAgYmVuZWZpdHM5LnRleHRDb250ZW50ID0gYERpc2NvdW50ZWQgTXVzaWMgQm94IGJyYW5kIHdpbmUgYnkgdGhlIGJvdHRsZWBcbiAgICBwNUhlYWRpbmcudGV4dENvbnRlbnQgPSAnJDYwIElORElWSURVQUwgTUVNQkVSU0hJUCc7XG4gICAgcDUudGV4dENvbnRlbnQgPSAnTWVtYmVyc2hpcCBsYXN0cyBvbmUgeWVhciBmcm9tIGRhdGUgb2YgcHVyY2hhc2UuIEJlbmVmaXRzIGFyZSBvbmx5IHZhbGlkIGZvciB0aGUgaW5kaXZpZHVhbCBtZW1iZXIuJ1xuICAgIHA2SGVhZGluZy50ZXh0Q29udGVudCA9ICckMTAwIERVQUwgTUVNQkVSU0hJUCc7XG4gICAgcDYudGV4dENvbnRlbnQgPSAnRHVhbCBNZW1iZXJzaGlwcyByZWNlaXZlIHRoZSBzYW1lIGJlbmVmaXRzIGFzIGluZGl2aWR1YWxzIOKAkyBmb3IgdHdvLiBNZW1iZXJzIGNhbiBzaGFyZSB0aGUgYWNjb3VudCB3aXRoIG9uZSBwZXJzb24gb3IgYnJpbmcgYSBkaWZmZXJlbnQgZ3Vlc3QgdG8gdGhlIHRoZWF0cmUgZWFjaCB0aW1lISBNZW1iZXJzaGlwIGxhc3RzIG9uZSB5ZWFyIGZyb20gZGF0ZSBvZiBwdXJjaGFzZS4nXG5cblxuXG4gICAgY29uc3QgY29sMSA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb3B5LWNvbHVtbi0xJylcbiAgICBjb25zdCBjb2wyID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2NvcHktY29sdW1uLTInKVxuXG4gICAgY29sMS5hcHBlbmQobWVtYmVyc2hpcFN1YmhlYWQsIHAxLCBwMiwgcDMsIHA0SGVhZGluZywgcDQpXG4gICAgY29sMi5hcHBlbmQoYmVuZWZpdHNIZWFkaW5nLCBiZW5lZml0c1VMLCBwNUhlYWRpbmcsIHA1LCBwNkhlYWRpbmcsIHA2KVxuXG4gICAgY29weUNvbnQuYXBwZW5kKGNvbDEsIGNvbDIpXG5cbiAgICByZXR1cm4gY29weUNvbnRcbn1cblxuZnVuY3Rpb24gbG9hZE1lbWJlcnNoaXAoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNsZWFySFRNTChjb250ZW50KVxuXG4gICAgY29uc3QgbWVtYmVyc2hpcCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdtZW1iZXJzaGlwJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ01BSU4nLCAnbWFpbicpXG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlSGVhZGluZygpLCBjcmVhdGVNZWJlcnNoaXBDb3B5KCkpO1xuICAgIG1lbWJlcnNoaXAuYXBwZW5kKG1haW4pO1xuXG4gICAgY29udGVudC5hcHBlbmQobWVtYmVyc2hpcClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbWJlcnNoaXAiLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOYXYsIGNyZWF0ZUZvb3Rlcn0gZnJvbSAnLi9ob21lJ1xuXG4vL2V4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHdoaWNoIGNsZWFycyBob21lIGFuZCBhcHBlbmRzIG1lbnVcblxuY29uc3QgQmVlciA9IChuYW1lLCBkZXNjcmlwLCBwcmljZSkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgZGVzY3JpcCwgcHJpY2V9XG59XG5cbmNvbnN0IGJlZXJzID0gW107XG5cbmNvbnN0IGJlZXIxID0gQmVlcignUElQRVdPUktTIE5JTkpBIFZTIFVOSUNPUk4nLCAnSEFMRiBBQ1JFIEJPREVNJywgJyQ5LjAwJyk7XG5jb25zdCBiZWVyMiA9IEJlZXIoYEJFTEwnUyBPQkVST05gLCAnQU1FUklDQU4gV0hFQVQgQUxFJywgJyQ3LjI1Jyk7XG5jb25zdCBiZWVyMyA9IEJlZXIoYEJFTEwnUyBUV08gSEVBUlRFRCBBTEVgLCAnQU1FUklDQU4gSVBBJywgJyQ3LjI1Jyk7XG5jb25zdCBiZWVyNCA9IEJlZXIoJ0dPT1NFIElTTEFORCAzMTInLCAnV0hFQVQgQUxFJywgJyQ3LjI1Jyk7XG5jb25zdCBiZWVyNSA9IEJlZXIoJ0hBTEYgQUNSRSBCT0RFTScsICdJTkRJQSBQQUxFIEFMRScsICckNy4yNScpO1xuXG5iZWVycy5wdXNoKGJlZXIxLCBiZWVyMiwgYmVlcjMsIGJlZXI0LCBiZWVyNSlcblxuZnVuY3Rpb24gY3JlYXRlQmVlcnNDb250KGFycil7XG4gICAgY29uc3QgYmVlcnNDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2JlZXJzLWNvbnQnKVxuICAgIGNvbnN0IGJlZXJzVGhpY2tSdWxlID0gY3JlYXRlRWxlbWVudCgnSFInLCAnYmVlcnMtY29udC10aGljay1ydWxlJyk7XG4gICAgYmVlcnNDb250LmFwcGVuZChiZWVyc1RoaWNrUnVsZSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgY29uc3QgYmVlckNvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCBgYmVlci0ke2l9LWNvbnRgKTtcbiAgICAgICAgY29uc3QgYmVlck5hbWUgPSBjcmVhdGVFbGVtZW50KCdoMicsIGBiZWVyLSR7aX0tbmFtZWApO1xuICAgICAgICBiZWVyTmFtZS50ZXh0Q29udGVudCA9IGFycltpXS5uYW1lO1xuICAgICAgICBjb25zdCBiZWVyRGVzY3JpcCA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYGJlZXItJHtpfS1kZXNjcmlwYCk7XG4gICAgICAgIGJlZXJEZXNjcmlwLnRleHRDb250ZW50ID0gYXJyW2ldLmRlc2NyaXA7XG4gICAgICAgIGNvbnN0IGJlZXJQcmljZSA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYGJlZXItJHtpfS1wcmljZWApO1xuICAgICAgICBiZWVyUHJpY2UudGV4dENvbnRlbnQgPSBhcnJbaV0ucHJpY2U7XG4gICAgICAgIGNvbnN0IGJlZXJIUiA9IGNyZWF0ZUVsZW1lbnQoJ0hSJywgJ2JlZXItaHInKVxuXG4gICAgICAgIGJlZXJDb250LmFwcGVuZChiZWVyTmFtZSwgYmVlckRlc2NyaXAsIGJlZXJQcmljZSwgYmVlckhSKTtcblxuICAgICAgICBiZWVyc0NvbnQuYXBwZW5kKGJlZXJDb250KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmVlcnNDb250XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVIZWFkKCl7XG4gICAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KCdIMScsICdtZW51LWhlYWRpbmcnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdCRUVSIE1FTlUnO1xuXG4gICAgcmV0dXJuIGgxXG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdtZW51Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY2xlYXJIVE1MKGNvbnRlbnQpXG5cblxuICAgIG1lbnUuYXBwZW5kKGNyZWF0ZU1lbnVIZWFkKCksIGNyZWF0ZUJlZXJzQ29udChiZWVycykpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tICcuL2Z1bmN0aW9ucydcblxuXG5jb25zdCBTaG93dGltZSA9ICh0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93dGltZXNDb250KGFycikge1xuICAgIGNvbnN0IHNob3d0aW1lc0NvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnc2hvd3RpbWVzLWNvbnQnKVxuICAgIGNvbnN0IHNob3d0aW1lSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3Nob3d0aW1lLWhlYWRpbmcnKVxuICAgIHNob3d0aW1lSGVhZGluZy50ZXh0Q29udGVudCA9ICdTaG93dGltZXMnXG4gICAgc2hvd3RpbWVzQ29udC5hcHBlbmQoc2hvd3RpbWVIZWFkaW5nKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8NTsgaSsrKXtcbiAgICAgICAgY29uc3Qgc2hvd3RpbWVDb250ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgYHNob3d0aW1lLWNvbnRgKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgYHNob3d0aW1lLXRpdGxlYCk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYXJyW2ldLnRpdGxlO1xuICAgICAgICBjb25zdCBpbmZvQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGBzaG93dGltZS1pbmZvLWNvbnRgKTtcbiAgICAgICAgY29uc3QgdGhlYXRlciA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYHNob3d0aW1lLXRoZWF0ZXJgKTtcbiAgICAgICAgdGhlYXRlci50ZXh0Q29udGVudCA9IGFycltpXS50aGVhdGVyO1xuICAgICAgICBjb25zdCBydW50aW1lID0gY3JlYXRlRWxlbWVudCgnaDUnLCBgc2hvd3RpbWUtcnVudGltZWApO1xuICAgICAgICBydW50aW1lLnRleHRDb250ZW50ID0gYXJyW2ldLnJ1bnRpbWU7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYHNob3d0aW1lLWZvcm1hdGApO1xuICAgICAgICBmb3JtYXQudGV4dENvbnRlbnQgPSBhcnJbaV0uZm9ybWF0O1xuICAgICAgICBpbmZvQ29udC5hcHBlbmQodGhlYXRlciwgcnVudGltZSwgZm9ybWF0KTtcbiAgICAgICAgY29uc3QgaHIgPSBjcmVhdGVFbGVtZW50KCdIUicsICdzaG93dGltZXMtcnVsZScpXG4gICAgICAgIHNob3d0aW1lQ29udC5hcHBlbmQodGl0bGUsIGluZm9Db250LCBocik7XG4gICAgICAgIHNob3d0aW1lc0NvbnQuYXBwZW5kKHNob3d0aW1lQ29udClcbiAgICB9XG5cbiAgICByZXR1cm4gc2hvd3RpbWVzQ29udDtcbn1cblxuZXhwb3J0IHtTaG93dGltZSwgY3JlYXRlU2hvd3RpbWVzQ29udH0iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnXG5pbXBvcnQgbG9hZE1lbWJlcnNoaXAgZnJvbSAnLi9tZW1iZXInXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoJ05BVicsICduYXYnKTtcblxuICAgIGNvbnN0IG1lbnVMaW5rID0gY3JlYXRlRWxlbWVudCgnUCcsICdtZW51LWxpbmsnKTtcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KCdJTUcnLCAnbXVzaWMtYm94LWxvZ28nKTtcbiAgICBsb2dvLnNyYyA9ICcvc3JjL2ltYWdlcy9NdXNpY0JveF9Mb2dvX1doaXRlLnBuZydcbiAgICBjb25zdCBtZW1iZXJMb2dpbiA9IGNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicsICdtZW1iZXItbG9naW4tYnV0dG9uJyk7XG4gICAgbWVtYmVyTG9naW4udGV4dENvbnRlbnQgPSAnTWVtYmVyIExvZ2luJztcblxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsb2FkTWVudSgpXG4gICAgfSlcblxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxvYWRIb21lKClcbiAgICB9KVxuXG4gICAgbWVtYmVyTG9naW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxvYWRNZW1iZXJzaGlwKClcbiAgICB9KVxuXG4gICAgbmF2LmFwcGVuZChtZW51TGluaywgbG9nbywgbWVtYmVyTG9naW4pXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdCT0RZJyk7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0JylcblxuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGNyZWF0ZU5hdigpLCBjb250ZW50KVxuICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRIb21lKCkpXG4gICAgYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlRm9vdGVyKCksIHNjcmlwdClcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnRk9PVEVSJywgJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdsb2dvJyk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBjcmVhdGVFbGVtZW50KCdBJywgJ2hvbWUtbGluaycpO1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICAgIGNvbnN0IGZpbG1zTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnZmlsbXMtbGluaycpO1xuICAgIGZpbG1zTGluay50ZXh0Q29udGVudCA9ICdGSUxNUyc7XG4gICAgY29uc3QgZXZlbnRzTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnZXZlbnRzLWxpbmsnKTtcbiAgICBldmVudHNMaW5rLnRleHRDb250ZW50ID0gJ0VWRU5UUyc7XG4gICAgY29uc3Qgc2FsZXNMaW5rID0gY3JlYXRlRWxlbWVudCgnQScsICdzYWxlcy1saW5rJyk7XG4gICAgc2FsZXNMaW5rLnRleHRDb250ZW50ID0gJ0dST1VQIFNBTEVTJztcbiAgICBjb25zdCBtZW1iZXJzaGlwTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnbWVtYmVyc2hpcC1saW5rJyk7XG4gICAgbWVtYmVyc2hpcExpbmsudGV4dENvbnRlbnQgPSAnTUVNQkVSU0hJUCc7XG5cbiAgICBmb290ZXIuYXBwZW5kKGxvZ28sIGhvbWVMaW5rLCBmaWxtc0xpbmssIGV2ZW50c0xpbmssIHNhbGVzTGluaywgbWVtYmVyc2hpcExpbmspXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaXRlIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVNpdGUgZnJvbSAnLi93ZWJzaXRlLmpzJ1xuXG5pbml0aWFsaXplU2l0ZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
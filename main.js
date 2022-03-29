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
            const eventCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', `event-cont`);
            const eventName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H2', `event-name`)
            const eventDate = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('H4', `event-date`)
            const eventNameAndDate = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'event-name-and-date-cont')
            const eventArrow = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createSVG)("38", "24", "0 0 38 24", "none", "M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807614 25.9792 0.807614 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM-1.31134e-07 13.5L36 13.5L36 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z", "black")
            const hr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'event-hr')

            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

            eventNameAndDate.append(eventName, eventDate)
            eventCont.append(eventNameAndDate, eventArrow, hr)

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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createSVG": () => (/* binding */ createSVG)
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

function createSVG(width, height, viewbox, fill, d, pathFill){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height); 
    svg.setAttribute('viewbox', viewbox);
    svg.setAttribute('fill', fill)

    path1.setAttribute('d', d);
    path1.setAttribute('fill', pathFill);

    svg.appendChild(path1)

    return svg
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
    featuredThumb.src = 'images/Ratatouille_MovieStill.png';
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

    infoSecImage.src = 'images/Moviegoers_Image.png';
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

function createMembershipSubhead(){
    const membershipSubhead = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'membership-subhead');
    membershipSubhead.textContent = 'INTERESTED IN A MEMBERSHIP?';

    return membershipSubhead
}

function createMebershipCopy(){

    const copyCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'membership-copy-cont');

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

    col1.append(p1, p2, p3, p4Heading, p4)
    col2.append(benefitsHeading, benefitsUL, p5Heading, p5, p6Heading, p6)

    copyCont.append(col1, col2)

    return copyCont
}

function loadMembership(){
    const content = document.getElementById('content')
    ;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.clearHTML)(content)

    const membership = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'membership');
    const main = document.createElement('MAIN', 'main')
    main.append(createHeading(), createMembershipSubhead(), createMebershipCopy());
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
        const beerCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', `beer-cont`);
        const beerName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', `beer-name`);
        beerName.textContent = arr[i].name;
        const beerDescrip = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `beer-descrip`);
        beerDescrip.textContent = arr[i].descrip;
        const beerPrice = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', `beer-price`);

        const beerNameDescripCont = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('DIV', 'beer-name-and-descrip-cont')
        beerNameDescripCont.append(beerName, beerDescrip)



        beerPrice.textContent = arr[i].price;
        const beerHR = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElement)('HR', 'beer-hr')

        beerCont.append(beerNameDescripCont, beerPrice, beerHR);

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
    logo.src = 'images/MusicBox_Logo_White.png'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekMsdURBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8yMl8wM18xNF90b3BfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVtYmVyLmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zaG93dGltZXMuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzIyXzAzXzE0X3RvcF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMjJfMDNfMTRfdG9wX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVNWRyB9IGZyb20gJy4vZnVuY3Rpb25zJ1xuXG5jb25zdCBFdmVudCA9IChuYW1lLCB0aW1lKSA9PiB7XG4gICAgY29uc3QgbmV3RXZlbnQgPSB7bmFtZSwgdGltZX07XG4gICAgcmV0dXJuIG5ld0V2ZW50XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50c0hlYWQoKXtcbiAgICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoJ0gxJywgJ2V2ZW50cy1oZWFkaW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnRVZFTlRTJztcblxuICAgIHJldHVybiBoMVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudHMoYXJyKXtcbiAgICBjb25zdCBldmVudHNDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2V2ZW50cy1jb250JylcbiAgICBjb25zdCBldmVudHNUaGlja1J1bGUgPSBjcmVhdGVFbGVtZW50KCdIUicsICdldmVudHMtY29udC10aGljay1ydWxlJyk7XG4gICAgZXZlbnRzQ29udC5hcHBlbmQoZXZlbnRzVGhpY2tSdWxlKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50Q29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsIGBldmVudC1jb250YCk7XG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBjcmVhdGVFbGVtZW50KCdIMicsIGBldmVudC1uYW1lYClcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ0g0JywgYGV2ZW50LWRhdGVgKVxuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lQW5kRGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdldmVudC1uYW1lLWFuZC1kYXRlLWNvbnQnKVxuICAgICAgICAgICAgY29uc3QgZXZlbnRBcnJvdyA9IGNyZWF0ZVNWRyhcIjM4XCIsIFwiMjRcIiwgXCIwIDAgMzggMjRcIiwgXCJub25lXCIsIFwiTTM3LjA2MDcgMTMuMDYwN0MzNy42NDY0IDEyLjQ3NDkgMzcuNjQ2NCAxMS41MjUxIDM3LjA2MDcgMTAuOTM5M0wyNy41MTQ3IDEuMzkzNEMyNi45Mjg5IDAuODA3NjE0IDI1Ljk3OTIgMC44MDc2MTQgMjUuMzkzNCAxLjM5MzRDMjQuODA3NiAxLjk3OTE5IDI0LjgwNzYgMi45Mjg5MyAyNS4zOTM0IDMuNTE0NzJMMzMuODc4NyAxMkwyNS4zOTM0IDIwLjQ4NTNDMjQuODA3NiAyMS4wNzExIDI0LjgwNzYgMjIuMDIwOCAyNS4zOTM0IDIyLjYwNjZDMjUuOTc5MiAyMy4xOTI0IDI2LjkyODkgMjMuMTkyNCAyNy41MTQ3IDIyLjYwNjZMMzcuMDYwNyAxMy4wNjA3Wk0tMS4zMTEzNGUtMDcgMTMuNUwzNiAxMy41TDM2IDEwLjVMMS4zMTEzNGUtMDcgMTAuNUwtMS4zMTEzNGUtMDcgMTMuNVpcIiwgXCJibGFja1wiKVxuICAgICAgICAgICAgY29uc3QgaHIgPSBjcmVhdGVFbGVtZW50KCdIUicsICdldmVudC1ocicpXG5cbiAgICAgICAgICAgIGV2ZW50TmFtZS50ZXh0Q29udGVudCA9IGFycltpXS5uYW1lO1xuICAgICAgICAgICAgZXZlbnREYXRlLnRleHRDb250ZW50ID0gYXJyW2ldLnRpbWU7XG5cbiAgICAgICAgICAgIGV2ZW50TmFtZUFuZERhdGUuYXBwZW5kKGV2ZW50TmFtZSwgZXZlbnREYXRlKVxuICAgICAgICAgICAgZXZlbnRDb250LmFwcGVuZChldmVudE5hbWVBbmREYXRlLCBldmVudEFycm93LCBocilcblxuICAgICAgICAgICAgZXZlbnRzQ29udC5hcHBlbmQoZXZlbnRDb250KVxuICAgICAgICB9XG4gICAgY29uc3QgYmVjb21lTWVtYmVyQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgJ2JlY29tZS1tZW1iZXItYnV0dG9uJyk7XG4gICAgYmVjb21lTWVtYmVyQnV0dG9uLnRleHRDb250ZW50ID0gJ0JlY29tZSBBIE1lbWJlcic7XG5cbiAgICBldmVudHNDb250LmFwcGVuZChiZWNvbWVNZW1iZXJCdXR0b24pXG5cbiAgICByZXR1cm4gZXZlbnRzQ29udFxufVxuXG5leHBvcnQgeyBFdmVudCwgY3JlYXRlRXZlbnRzSGVhZCwgY3JlYXRlRXZlbnRzIH0iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKXtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBjbGVhckhUTUwoZWwpIHtcbiAgICB3aGlsZShlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5jb25zdCBTaG93dGltZSA9ICh0aXRsZSwgdGhlYXRlciwgcnVudGltZSwgZm9ybWF0KSA9PiB7XG4gICAgcmV0dXJue3RpdGxlLCB0aGVhdGVyLCBydW50aW1lLCBmb3JtYXR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNWRyh3aWR0aCwgaGVpZ2h0LCB2aWV3Ym94LCBmaWxsLCBkLCBwYXRoRmlsbCl7XG4gICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgIHZhciBwYXRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTsgXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld2JveCcsIHZpZXdib3gpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBmaWxsKVxuXG4gICAgcGF0aDEuc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gICAgcGF0aDEuc2V0QXR0cmlidXRlKCdmaWxsJywgcGF0aEZpbGwpO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgxKVxuXG4gICAgcmV0dXJuIHN2Z1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTCwgU2hvd3RpbWUsIGNyZWF0ZVNWRyB9OyIsImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgY2xlYXJIVE1MfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZVNob3d0aW1lc0NvbnQsIFNob3d0aW1lfSBmcm9tICcuL3Nob3d0aW1lcyc7XG5pbXBvcnQge0V2ZW50LCBjcmVhdGVFdmVudHNIZWFkLCBjcmVhdGVFdmVudHN9IGZyb20gJy4vZXZlbnRzJ1xuXG5jb25zdCBzaG93dGltZXMgPSBbXTtcblxuY29uc3Qgc2hvd3RpbWUxID0gU2hvd3RpbWUoJ1RIRSBXT1JTVCBQRVJTT04gSU4gVEhFIFdPUkxEJywgJ1RIRUFURVIgMScsICcxNjAgTUlOUycsICdET0xCWScpO1xuY29uc3Qgc2hvd3RpbWUyID0gU2hvd3RpbWUoJ1NUUkFXQkVSUlkgTUFOU0lPTicsICdUSEVBVEVSIDInLCAnMTYwIE1JTlMnLCAnMzVNTScpO1xuY29uc3Qgc2hvd3RpbWUzID0gU2hvd3RpbWUoJzIwMjIgT1NDQVIgTk9NSU5BVEVEIFNIT1JUUycsICdUSEVBVEVSIDEnLCAnMTYwIE1JTlMnLCAnRE9MQlknKTtcbmNvbnN0IHNob3d0aW1lNCA9IFNob3d0aW1lKCdUSEUgV09SU1QgUEVSU09OIElOIFRIRSBXT1JMRCcsICdUSEVBVEVSIDInLCAnMTYwIE1JTlMnLCAnMzVNTScpO1xuY29uc3Qgc2hvd3RpbWU1ID0gU2hvd3RpbWUoJ1NUUkFXQkVSUlkgTUFOU0lPTicsICdUSEVBVEVSIDEnLCAnMTYwIE1JTlMnLCAnRE9MQlknKTtcblxuc2hvd3RpbWVzLnB1c2goc2hvd3RpbWUxLCBzaG93dGltZTIsIHNob3d0aW1lMywgc2hvd3RpbWU0LCBzaG93dGltZTUpXG5cbmNvbnN0IGV2ZW50cyA9IFtdO1xuXG5jb25zdCBldmVudDEgPSBFdmVudCgnSElHSFMgQU5EIExPV1MnLCAnVGh1IE1hciAxMCAxMDowMCBQTScpO1xuY29uc3QgZXZlbnQyID0gRXZlbnQoJ0NIRVIhJywgJ0ZyaSBNYXIgMTEgODowMCBQTScpO1xuY29uc3QgZXZlbnQzID0gRXZlbnQoJ1RIRSBDSElDQUdPIEZJTE0gU09DSUVUWSBQUkVTRU5UUycsICdNb24gTWFyIDEwIDEyOjAwIFBNJyk7XG5jb25zdCBldmVudDQgPSBFdmVudCgnREFWSUQgTFlOQ0g6IEEgQ09NUExFVEUgUkVUUk9TUEVDVElWRScsICdUaHUgQXByIDcgMTA6MDAgUE0nKTtcbmNvbnN0IGV2ZW50NSA9IEV2ZW50KCc5MFRIIEFOTklWRVJTQVJZJywgJ1NhdCBBcHIgMjMgMTA6MDAgUE0nKTtcblxuZXZlbnRzLnB1c2goZXZlbnQxLCBldmVudDIsIGV2ZW50MywgZXZlbnQ0LCBldmVudDUpXG5cbmZ1bmN0aW9uIGNyZWF0ZU5vd1BsYXlpbmcoKXtcbiAgICBjb25zdCBub3dQbGF5aW5nQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdub3ctcGxheWluZy1oZWFkaW5nJyk7XG5cbiAgICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoJ0gxJywgJ25vdy1wbGF5aW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTk9XIFBMQVlJTkcnO1xuXG4gICAgY29uc3QgaHIgPSBjcmVhdGVFbGVtZW50KCdIUicsICdocicpO1xuXG4gICAgbm93UGxheWluZ0NvbnQuYXBwZW5kKGgxLCBocilcblxuICAgIHJldHVybiBub3dQbGF5aW5nQ29udFxufVxuXG5mdW5jdGlvbiBjcmVhdGVGZWF0dXJlZE1vdmllcygpe1xuICAgIGNvbnN0IGZlYXR1cmVkTW92Q29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdmZWF0dXJlZC1tb3ZpZS1jb250Jyk7XG4gICAgXG4gICAgY29uc3QgZmVhdHVyZWRNb3ZIZWFkaW5nID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnZmVhdHVyZWQtbW92aWUtaGVhZGluZycpXG4gICAgZmVhdHVyZWRNb3ZIZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVkJztcblxuXG4gICAgY29uc3QgZmVhdHVyZWRUaHVtYiA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdmZWF0dXJlZC1tb3ZpZS10aHVtYm5haWwnKTtcbiAgICBmZWF0dXJlZFRodW1iLnNyYyA9ICdpbWFnZXMvUmF0YXRvdWlsbGVfTW92aWVTdGlsbC5wbmcnO1xuICAgIGNvbnN0IGZlYXR1cmVkVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycsICdmZWF0dXJlZC10aXRsZScpO1xuICAgIGZlYXR1cmVkVGl0bGUudGV4dENvbnRlbnQgPSAnUmF0YXRvaWxsZSc7XG4gICAgY29uc3QgZmVhdHVyZWREaXJlY3RvciA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnZmVhdHVyZWQtZGlyZWN0b3InKTtcbiAgICBmZWF0dXJlZERpcmVjdG9yLnRleHRDb250ZW50ID0gJ0JyYWQgQmlyZCc7XG5cbiAgICBmZWF0dXJlZE1vdkNvbnQuYXBwZW5kKGZlYXR1cmVkTW92SGVhZGluZywgZmVhdHVyZWRUaHVtYiwgZmVhdHVyZWRUaXRsZSwgZmVhdHVyZWREaXJlY3RvcilcbiAgICByZXR1cm4gZmVhdHVyZWRNb3ZDb250XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKXtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ1NFQ1RJT04nLCAnaW5mbycpO1xuICAgIGNvbnN0IGgyID0gY3JlYXRlRWxlbWVudCgnSDInLCAnaW5mby1oZWFkaW5nJyk7XG4gICAgY29uc3QgaW5mb1RleHQgPSBjcmVhdGVFbGVtZW50KCdQJywgJ2luZm8tdGV4dCcpO1xuICAgIGNvbnN0IGluZm9UZXh0Q29udCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdpbmZvLXRleHQtY29udCcpO1xuICAgIGluZm9UZXh0Q29udC5hcHBlbmQoaDIsIGluZm9UZXh0KVxuICAgIGNvbnN0IGluZm9TZWNJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ0lNRycsICdpbmZvLXNlY3Rpb24taW1hZ2UnKTtcblxuICAgIGluZm9TZWNJbWFnZS5zcmMgPSAnaW1hZ2VzL01vdmllZ29lcnNfSW1hZ2UucG5nJztcbiAgICBoMi50ZXh0Q29udGVudCA9ICdDSElDQUdP4oCZUyBWRU5VRSBGT1IgSU5ERVBFTkRFTlQsIEZPUkVJR04sIENVTFQgQU5EIENMQVNTSUMgRklMTVMuJztcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9ICdUdXJuIG9udG8gU291dGhwb3J0IEF2ZW51ZSBhbmQgaXTigJlzIGhhcmQgdG8gcmVzaXN0IHRoZSBuZW9uIGJlYWNvbiB0aGF0IGx1cmVzIGNpbmVwaGlsZXMgZnJvbSBhY3Jvc3MgQ2hpY2Fnb2xhbmQgd2l0aCBlaWdodCBmbGlja2VyaW5nIGxldHRlcnPigJRNdXNpYyBCb3guIEl04oCZcyBhIHByb21pc2Ugb2YgbW9yZSB0aGFuIGp1c3QgZW50ZXJ0YWlubWVudCwgYnV0IGEgdG90YWwgZXhwZXJpZW5jZS4nXG5cbiAgICBpbmZvU2VjdGlvbi5hcHBlbmQoaW5mb1RleHRDb250LCBpbmZvU2VjSW1hZ2UpO1xuXG4gICAgcmV0dXJuIGluZm9TZWN0aW9uXG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdob21lJyk7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ01BSU4nLCAnbWFpbicpO1xuICAgIGNvbnN0IGhvbWVDb250ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hvbWUtY29udCcpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgIGNsZWFySFRNTChjb250ZW50KVxuXG4gICAgY29uc3QgZXZlbnRzU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ1NFQ1RJT04nLCAnZXZlbnRzJylcbiAgICBldmVudHNTZWN0aW9uLmFwcGVuZChjcmVhdGVFdmVudHNIZWFkKCksIGNyZWF0ZUV2ZW50cyhldmVudHMpKVxuICAgIGhvbWVDb250LmFwcGVuZChjcmVhdGVOb3dQbGF5aW5nKCksIGNyZWF0ZUZlYXR1cmVkTW92aWVzKCksIGNyZWF0ZVNob3d0aW1lc0NvbnQoc2hvd3RpbWVzKSk7XG5cbiAgICBtYWluLmFwcGVuZChob21lQ29udClcbiAgICBob21lLmFwcGVuZChtYWluLCBldmVudHNTZWN0aW9uLCBjcmVhdGVJbmZvKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhvbWUpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVcbiIsImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgY2xlYXJIVE1MfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcoKXtcbiAgICBjb25zdCBtZW1iZXJzaGlwSGVhZGluZ0NvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnbWVtYmVyc2hpcC1oZWFkaW5nLWNvbnQnKTtcblxuICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnSDEnLCAnbWVtYmVyc2hpcCcpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ01FTUJFUlNISVAnO1xuXG4gICAgY29uc3QgaHIgPSBjcmVhdGVFbGVtZW50KCdIUicsICdocicpO1xuXG4gICAgbWVtYmVyc2hpcEhlYWRpbmdDb250LmFwcGVuZChoMSwgaHIpXG5cbiAgICByZXR1cm4gbWVtYmVyc2hpcEhlYWRpbmdDb250XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbWJlcnNoaXBTdWJoZWFkKCl7XG4gICAgY29uc3QgbWVtYmVyc2hpcFN1YmhlYWQgPSBjcmVhdGVFbGVtZW50KCdoMicsICdtZW1iZXJzaGlwLXN1YmhlYWQnKTtcbiAgICBtZW1iZXJzaGlwU3ViaGVhZC50ZXh0Q29udGVudCA9ICdJTlRFUkVTVEVEIElOIEEgTUVNQkVSU0hJUD8nO1xuXG4gICAgcmV0dXJuIG1lbWJlcnNoaXBTdWJoZWFkXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lYmVyc2hpcENvcHkoKXtcblxuICAgIGNvbnN0IGNvcHlDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ21lbWJlcnNoaXAtY29weS1jb250Jyk7XG5cbiAgICBjb25zdCBwMSA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVtYmVyc2hpcC1jb3B5LTEnKTtcbiAgICBjb25zdCBwMiA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVtYmVyc2hpcC1jb3B5LTInKTtcbiAgICBjb25zdCBwMyA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVtYmVyc2hpcC1jb3B5LTMnKTtcbiAgICBjb25zdCBwNEhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoNScsICdtZW1iZXJzaGlwLWhlYWRpbmcnKTtcbiAgICBjb25zdCBwNCA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVtYmVyc2hpcC1jb3B5LTQnKTtcbiAgICBjb25zdCBiZW5lZml0c0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoNScsICdtZW1iZXJzaGlwLWhlYWRpbmcnKTtcbiAgICBjb25zdCBiZW5lZml0c1VMID0gY3JlYXRlRWxlbWVudCgnVUwnLCAnYmVuZWZpdHMtbGlzdCcpXG4gICAgY29uc3QgYmVuZWZpdHMxID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy0xJyk7XG4gICAgY29uc3QgYmVuZWZpdHMyID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy0yJyk7XG4gICAgY29uc3QgYmVuZWZpdHMzID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy0zJyk7XG4gICAgY29uc3QgYmVuZWZpdHM0ID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy00Jyk7XG4gICAgY29uc3QgYmVuZWZpdHM1ID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy01Jyk7XG4gICAgY29uc3QgYmVuZWZpdHM2ID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy02Jyk7XG4gICAgY29uc3QgYmVuZWZpdHM3ID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy03Jyk7XG4gICAgY29uc3QgYmVuZWZpdHM4ID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy04Jyk7XG4gICAgY29uc3QgYmVuZWZpdHM5ID0gY3JlYXRlRWxlbWVudCgnTEknLCAnbWVtYmVyc2hpcC1iZW5lZml0cy05Jyk7XG4gICAgYmVuZWZpdHNVTC5hcHBlbmQoYmVuZWZpdHMxLCBiZW5lZml0czIsIGJlbmVmaXRzMywgYmVuZWZpdHM0LCBiZW5lZml0czUsIGJlbmVmaXRzNiwgYmVuZWZpdHM3LCBiZW5lZml0czgsIGJlbmVmaXRzOSlcbiAgICBjb25zdCBwNUhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoNScsICdtZW1iZXJzaGlwLWhlYWRpbmcnKTtcbiAgICBjb25zdCBwNSA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVtYmVyc2hpcC1jb3B5LTUnKTtcbiAgICBjb25zdCBwNkhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoNScsICdtZW1iZXJzaGlwLWhlYWRpbmcnKTtcbiAgICBjb25zdCBwNiA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVtYmVyc2hpcC1jb3B5LTYnKTtcblxuXG4gICAgcDEudGV4dENvbnRlbnQgPSBgXG4gICAgRm9yIHRoZSBwYXN0IHR3byBkZWNhZGVzIHRoZSBNdXNpYyBCb3ggaGFzIGJlZW4gdGhlIHByZW1pZXJlIHZlbnVlIGZvciBpbmRlcGVuZGVudCwgZm9yZWlnbiwgY3VsdCBhbmQgY2xhc3NpYyBmaWxtcy4gIEJ1aWx0IGluIDE5MjkgdGhlIE11c2ljIEJveCBUaGVhdHJlIGhhcyB0aGUgbGFyZ2VzdCB0aGVhdHJlIHNwYWNlIG9wZXJhdGVkIGZ1bGx0aW1lIGluIENoaWNhZ28uXG4gICAgYFxuICAgIHAyLnRleHRDb250ZW50ID0gYE1lbWJlcnMgb2YgdGhlIE11c2ljIEJveCBUaGVhdHJlIHdpbGwgcmVjZWl2ZSBhZHZhbmNlZCBub3RpY2Ugb2Ygc3BlY2lhbCBzY3JlZW5pbmdzLCBkaXNjb3VudGVkIHByaWNlcyBvbiB0aWNrZXRzIGFuZCBjb25jZXNzaW9ucyBhcyB3ZWxsIGFzIGludml0ZXMgdG8gbWVtYmVyIG9ubHkgZXZlbnRzLmBcbiAgICBwMy50ZXh0Q29udGVudCA9IGBKb2luaW5nIHRoZSBNdXNpYyBCb3ggaXMgYSBncmVhdCB3YXkgdG8gc3VwcG9ydCB0aGUgaGlzdG9yaWMgdGhlYXRyZSBhbmQgcmVjZWl2ZSBiZW5lZml0cy5gXG4gICAgcDRIZWFkaW5nLnRleHRDb250ZW50ID0gJ1lPVVIgTUVNQkVSU0hJUCBTVVBQT1JUUyc7XG4gICAgcDQudGV4dENvbnRlbnQgPSBgVGhlIGluZGVwZW5kZW50bHkgb3duZWQgYW5kIG9wZXJhdGVkIGNvbW11bml0eSBtb3ZpZSB0aGVhdHJlIGFuZCBsb3VuZ2UuIEFsbCBvZiB0aGUgcXVhbGl0eSBwcm9ncmFtbWluZyBNdXNpYyBCb3ggb2ZmZXJzOyBpbmNsdWRpbmcgaG9saWRheSBjbGFzc2ljcywgbWlkbmlnaHQgbW92aWVzLCBNQlQgdGFsa3MsIENpbmVtYSBTY2llbmNlLCBmaWxtIGZlc3RpdmFscywgZmVhdHVyZSBwcmVzZW50YXRpb25zIGFuZCB2aXNpdHMgZnJvbSBkaXJlY3RvcnMsIHByb2R1Y2VycywgYW5kIGFjdG9ycy4gUHJlc2VydmluZyB0aGUgYmVhdXR5IGFuZCBlbGVnYW5jZSBvZiB0aGUgaGlzdG9yaWMgdGhlYXRyZS5gXG4gICAgYmVuZWZpdHNIZWFkaW5nLnRleHRDb250ZW50ID0gYE1FTUJFUlNISVAgQkVORUZJVFNgO1xuICAgIGJlbmVmaXRzMS50ZXh0Q29udGVudCA9IGAxIGNvbXBsaW1lbnRhcnkgdGlja2V0IGZvciAxIHJlZ3VsYXIgcHJpY2VkIHNjcmVlbmluZyAodGhlYXRyaWNhbCBzY3JlZW5pbmdzIG9ubHkpYFxuICAgIGJlbmVmaXRzMi50ZXh0Q29udGVudCA9IGBEaXNjb3VudGVkIHRpY2tldCBwcmljZXMgZm9yIGFsbCB2aXJ0dWFsIGFuZCByZWd1bGFyIHRoZWF0cmljYWwgc2NyZWVuaW5ncyBwbHVzIHNlbGVjdCBTcGVjaWFsIEV2ZW50cyAocHJpY2VzIHZhcnkpYFxuICAgIGJlbmVmaXRzMy50ZXh0Q29udGVudCA9IGBJbnZpdGF0aW9ucyB0byBGcmVlIE1vbnRobHkgTWVtYmVyIFNjcmVlbmluZ3NgXG4gICAgYmVuZWZpdHM0LnRleHRDb250ZW50ID0gYEFkdmFuY2VkIG5vdGljZSBhbmQgcHVyY2hhc2UgZm9yIHNlbGVjdCBzcGVjaWFsIHNjcmVlbmluZ3MuYFxuICAgIGJlbmVmaXRzNS50ZXh0Q29udGVudCA9IGBSZXN0YXVyYW50IGRpc2NvdW50cyBhdCBvdXIgcGFydG5lciByZXN0YXVyYW50c+KAoGBcbiAgICBiZW5lZml0czYudGV4dENvbnRlbnQgPSBgRGlzY291bnQgb24gTXVzaWMgQm94IEZpbG0gRFZE4oCZcyB3aGVuIHB1cmNoYXNlZCBhdCB0aGUgdGhlYXRyZWBcbiAgICBiZW5lZml0czcudGV4dENvbnRlbnQgPSBgRnJlZSByZWZpbGxzIG9uIGFueSBzaXplIHBvcGNvcm4gYW5kIHNvZGFgXG4gICAgYmVuZWZpdHM4LnRleHRDb250ZW50ID0gYERpc2NvdW50ZWQgZ2xhc3NlcyBvZiBNdXNpYyBCb3ggYnJhbmQgd2luZSBhbmQgYmVlcnNgICAgIFxuICAgIGJlbmVmaXRzOS50ZXh0Q29udGVudCA9IGBEaXNjb3VudGVkIE11c2ljIEJveCBicmFuZCB3aW5lIGJ5IHRoZSBib3R0bGVgXG4gICAgcDVIZWFkaW5nLnRleHRDb250ZW50ID0gJyQ2MCBJTkRJVklEVUFMIE1FTUJFUlNISVAnO1xuICAgIHA1LnRleHRDb250ZW50ID0gJ01lbWJlcnNoaXAgbGFzdHMgb25lIHllYXIgZnJvbSBkYXRlIG9mIHB1cmNoYXNlLiBCZW5lZml0cyBhcmUgb25seSB2YWxpZCBmb3IgdGhlIGluZGl2aWR1YWwgbWVtYmVyLidcbiAgICBwNkhlYWRpbmcudGV4dENvbnRlbnQgPSAnJDEwMCBEVUFMIE1FTUJFUlNISVAnO1xuICAgIHA2LnRleHRDb250ZW50ID0gJ0R1YWwgTWVtYmVyc2hpcHMgcmVjZWl2ZSB0aGUgc2FtZSBiZW5lZml0cyBhcyBpbmRpdmlkdWFscyDigJMgZm9yIHR3by4gTWVtYmVycyBjYW4gc2hhcmUgdGhlIGFjY291bnQgd2l0aCBvbmUgcGVyc29uIG9yIGJyaW5nIGEgZGlmZmVyZW50IGd1ZXN0IHRvIHRoZSB0aGVhdHJlIGVhY2ggdGltZSEgTWVtYmVyc2hpcCBsYXN0cyBvbmUgeWVhciBmcm9tIGRhdGUgb2YgcHVyY2hhc2UuJ1xuXG5cblxuICAgIGNvbnN0IGNvbDEgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnY29weS1jb2x1bW4tMScpXG4gICAgY29uc3QgY29sMiA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdjb3B5LWNvbHVtbi0yJylcblxuICAgIGNvbDEuYXBwZW5kKHAxLCBwMiwgcDMsIHA0SGVhZGluZywgcDQpXG4gICAgY29sMi5hcHBlbmQoYmVuZWZpdHNIZWFkaW5nLCBiZW5lZml0c1VMLCBwNUhlYWRpbmcsIHA1LCBwNkhlYWRpbmcsIHA2KVxuXG4gICAgY29weUNvbnQuYXBwZW5kKGNvbDEsIGNvbDIpXG5cbiAgICByZXR1cm4gY29weUNvbnRcbn1cblxuZnVuY3Rpb24gbG9hZE1lbWJlcnNoaXAoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNsZWFySFRNTChjb250ZW50KVxuXG4gICAgY29uc3QgbWVtYmVyc2hpcCA9IGNyZWF0ZUVsZW1lbnQoJ0RJVicsICdtZW1iZXJzaGlwJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ01BSU4nLCAnbWFpbicpXG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlSGVhZGluZygpLCBjcmVhdGVNZW1iZXJzaGlwU3ViaGVhZCgpLCBjcmVhdGVNZWJlcnNoaXBDb3B5KCkpO1xuICAgIG1lbWJlcnNoaXAuYXBwZW5kKG1haW4pO1xuXG4gICAgY29udGVudC5hcHBlbmQobWVtYmVyc2hpcClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbWJlcnNoaXAiLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGNsZWFySFRNTH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOYXYsIGNyZWF0ZUZvb3Rlcn0gZnJvbSAnLi9ob21lJ1xuXG4vL2V4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHdoaWNoIGNsZWFycyBob21lIGFuZCBhcHBlbmRzIG1lbnVcblxuY29uc3QgQmVlciA9IChuYW1lLCBkZXNjcmlwLCBwcmljZSkgPT4ge1xuICAgIHJldHVybiB7bmFtZSwgZGVzY3JpcCwgcHJpY2V9XG59XG5cbmNvbnN0IGJlZXJzID0gW107XG5cbmNvbnN0IGJlZXIxID0gQmVlcignUElQRVdPUktTIE5JTkpBIFZTIFVOSUNPUk4nLCAnSEFMRiBBQ1JFIEJPREVNJywgJyQ5LjAwJyk7XG5jb25zdCBiZWVyMiA9IEJlZXIoYEJFTEwnUyBPQkVST05gLCAnQU1FUklDQU4gV0hFQVQgQUxFJywgJyQ3LjI1Jyk7XG5jb25zdCBiZWVyMyA9IEJlZXIoYEJFTEwnUyBUV08gSEVBUlRFRCBBTEVgLCAnQU1FUklDQU4gSVBBJywgJyQ3LjI1Jyk7XG5jb25zdCBiZWVyNCA9IEJlZXIoJ0dPT1NFIElTTEFORCAzMTInLCAnV0hFQVQgQUxFJywgJyQ3LjI1Jyk7XG5jb25zdCBiZWVyNSA9IEJlZXIoJ0hBTEYgQUNSRSBCT0RFTScsICdJTkRJQSBQQUxFIEFMRScsICckNy4yNScpO1xuXG5iZWVycy5wdXNoKGJlZXIxLCBiZWVyMiwgYmVlcjMsIGJlZXI0LCBiZWVyNSlcblxuZnVuY3Rpb24gY3JlYXRlQmVlcnNDb250KGFycil7XG4gICAgY29uc3QgYmVlcnNDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2JlZXJzLWNvbnQnKVxuICAgIGNvbnN0IGJlZXJzVGhpY2tSdWxlID0gY3JlYXRlRWxlbWVudCgnSFInLCAnYmVlcnMtY29udC10aGljay1ydWxlJyk7XG4gICAgYmVlcnNDb250LmFwcGVuZChiZWVyc1RoaWNrUnVsZSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgY29uc3QgYmVlckNvbnQgPSBjcmVhdGVFbGVtZW50KCdESVYnLCBgYmVlci1jb250YCk7XG4gICAgICAgIGNvbnN0IGJlZXJOYW1lID0gY3JlYXRlRWxlbWVudCgnaDInLCBgYmVlci1uYW1lYCk7XG4gICAgICAgIGJlZXJOYW1lLnRleHRDb250ZW50ID0gYXJyW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IGJlZXJEZXNjcmlwID0gY3JlYXRlRWxlbWVudCgnaDUnLCBgYmVlci1kZXNjcmlwYCk7XG4gICAgICAgIGJlZXJEZXNjcmlwLnRleHRDb250ZW50ID0gYXJyW2ldLmRlc2NyaXA7XG4gICAgICAgIGNvbnN0IGJlZXJQcmljZSA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYGJlZXItcHJpY2VgKTtcblxuICAgICAgICBjb25zdCBiZWVyTmFtZURlc2NyaXBDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ2JlZXItbmFtZS1hbmQtZGVzY3JpcC1jb250JylcbiAgICAgICAgYmVlck5hbWVEZXNjcmlwQ29udC5hcHBlbmQoYmVlck5hbWUsIGJlZXJEZXNjcmlwKVxuXG5cblxuICAgICAgICBiZWVyUHJpY2UudGV4dENvbnRlbnQgPSBhcnJbaV0ucHJpY2U7XG4gICAgICAgIGNvbnN0IGJlZXJIUiA9IGNyZWF0ZUVsZW1lbnQoJ0hSJywgJ2JlZXItaHInKVxuXG4gICAgICAgIGJlZXJDb250LmFwcGVuZChiZWVyTmFtZURlc2NyaXBDb250LCBiZWVyUHJpY2UsIGJlZXJIUik7XG5cbiAgICAgICAgYmVlcnNDb250LmFwcGVuZChiZWVyQ29udCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlZXJzQ29udFxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SGVhZCgpe1xuICAgIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnSDEnLCAnbWVudS1oZWFkaW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnQkVFUiBNRU5VJztcblxuICAgIHJldHVybiBoMVxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVFbGVtZW50KCdESVYnLCAnbWVudScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNsZWFySFRNTChjb250ZW50KVxuXG5cbiAgICBtZW51LmFwcGVuZChjcmVhdGVNZW51SGVhZCgpLCBjcmVhdGVCZWVyc0NvbnQoYmVlcnMpKTtcbiAgICBjb250ZW50LmFwcGVuZChtZW51KVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudSIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAnLi9mdW5jdGlvbnMnXG5cblxuY29uc3QgU2hvd3RpbWUgPSAodGl0bGUsIHRoZWF0ZXIsIHJ1bnRpbWUsIGZvcm1hdCkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIHRoZWF0ZXIsIHJ1bnRpbWUsIGZvcm1hdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hvd3RpbWVzQ29udChhcnIpIHtcbiAgICBjb25zdCBzaG93dGltZXNDb250ID0gY3JlYXRlRWxlbWVudCgnRElWJywgJ3Nob3d0aW1lcy1jb250JylcbiAgICBjb25zdCBzaG93dGltZUhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoMycsICdzaG93dGltZS1oZWFkaW5nJylcbiAgICBzaG93dGltZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnU2hvd3RpbWVzJ1xuICAgIHNob3d0aW1lc0NvbnQuYXBwZW5kKHNob3d0aW1lSGVhZGluZylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpPDU7IGkrKyl7XG4gICAgICAgIGNvbnN0IHNob3d0aW1lQ29udCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGBzaG93dGltZS1jb250YCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIGBzaG93dGltZS10aXRsZWApO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgY29uc3QgaW5mb0NvbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgc2hvd3RpbWUtaW5mby1jb250YCk7XG4gICAgICAgIGNvbnN0IHRoZWF0ZXIgPSBjcmVhdGVFbGVtZW50KCdoNScsIGBzaG93dGltZS10aGVhdGVyYCk7XG4gICAgICAgIHRoZWF0ZXIudGV4dENvbnRlbnQgPSBhcnJbaV0udGhlYXRlcjtcbiAgICAgICAgY29uc3QgcnVudGltZSA9IGNyZWF0ZUVsZW1lbnQoJ2g1JywgYHNob3d0aW1lLXJ1bnRpbWVgKTtcbiAgICAgICAgcnVudGltZS50ZXh0Q29udGVudCA9IGFycltpXS5ydW50aW1lO1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBjcmVhdGVFbGVtZW50KCdoNScsIGBzaG93dGltZS1mb3JtYXRgKTtcbiAgICAgICAgZm9ybWF0LnRleHRDb250ZW50ID0gYXJyW2ldLmZvcm1hdDtcbiAgICAgICAgaW5mb0NvbnQuYXBwZW5kKHRoZWF0ZXIsIHJ1bnRpbWUsIGZvcm1hdCk7XG4gICAgICAgIGNvbnN0IGhyID0gY3JlYXRlRWxlbWVudCgnSFInLCAnc2hvd3RpbWVzLXJ1bGUnKVxuICAgICAgICBzaG93dGltZUNvbnQuYXBwZW5kKHRpdGxlLCBpbmZvQ29udCwgaHIpO1xuICAgICAgICBzaG93dGltZXNDb250LmFwcGVuZChzaG93dGltZUNvbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3d0aW1lc0NvbnQ7XG59XG5cbmV4cG9ydCB7U2hvd3RpbWUsIGNyZWF0ZVNob3d0aW1lc0NvbnR9IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBjbGVhckhUTUx9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51J1xuaW1wb3J0IGxvYWRNZW1iZXJzaGlwIGZyb20gJy4vbWVtYmVyJ1xuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KCdOQVYnLCAnbmF2Jyk7XG5cbiAgICBjb25zdCBtZW51TGluayA9IGNyZWF0ZUVsZW1lbnQoJ1AnLCAnbWVudS1saW5rJyk7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBsb2dvID0gY3JlYXRlRWxlbWVudCgnSU1HJywgJ211c2ljLWJveC1sb2dvJyk7XG4gICAgbG9nby5zcmMgPSAnaW1hZ2VzL011c2ljQm94X0xvZ29fV2hpdGUucG5nJ1xuICAgIGNvbnN0IG1lbWJlckxvZ2luID0gY3JlYXRlRWxlbWVudCgnQlVUVE9OJywgJ21lbWJlci1sb2dpbi1idXR0b24nKTtcbiAgICBtZW1iZXJMb2dpbi50ZXh0Q29udGVudCA9ICdNZW1iZXIgTG9naW4nO1xuXG4gICAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxvYWRNZW51KClcbiAgICB9KVxuXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbG9hZEhvbWUoKVxuICAgIH0pXG5cbiAgICBtZW1iZXJMb2dpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbG9hZE1lbWJlcnNoaXAoKVxuICAgIH0pXG5cbiAgICBuYXYuYXBwZW5kKG1lbnVMaW5rLCBsb2dvLCBtZW1iZXJMb2dpbilcblxuICAgIHJldHVybiBuYXZcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ0JPRFknKTtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHQnKVxuXG4gICAgYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlTmF2KCksIGNvbnRlbnQpXG4gICAgY29udGVudC5hcHBlbmQobG9hZEhvbWUoKSlcbiAgICBib2R5Lmluc2VydEJlZm9yZShjcmVhdGVGb290ZXIoKSwgc2NyaXB0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KCdGT09URVInLCAnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBsb2dvID0gY3JlYXRlRWxlbWVudCgnSU1HJywgJ2xvZ28nKTtcbiAgICBjb25zdCBob21lTGluayA9IGNyZWF0ZUVsZW1lbnQoJ0EnLCAnaG9tZS1saW5rJyk7XG4gICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgY29uc3QgZmlsbXNMaW5rID0gY3JlYXRlRWxlbWVudCgnQScsICdmaWxtcy1saW5rJyk7XG4gICAgZmlsbXNMaW5rLnRleHRDb250ZW50ID0gJ0ZJTE1TJztcbiAgICBjb25zdCBldmVudHNMaW5rID0gY3JlYXRlRWxlbWVudCgnQScsICdldmVudHMtbGluaycpO1xuICAgIGV2ZW50c0xpbmsudGV4dENvbnRlbnQgPSAnRVZFTlRTJztcbiAgICBjb25zdCBzYWxlc0xpbmsgPSBjcmVhdGVFbGVtZW50KCdBJywgJ3NhbGVzLWxpbmsnKTtcbiAgICBzYWxlc0xpbmsudGV4dENvbnRlbnQgPSAnR1JPVVAgU0FMRVMnO1xuICAgIGNvbnN0IG1lbWJlcnNoaXBMaW5rID0gY3JlYXRlRWxlbWVudCgnQScsICdtZW1iZXJzaGlwLWxpbmsnKTtcbiAgICBtZW1iZXJzaGlwTGluay50ZXh0Q29udGVudCA9ICdNRU1CRVJTSElQJztcblxuICAgIGZvb3Rlci5hcHBlbmQobG9nbywgaG9tZUxpbmssIGZpbG1zTGluaywgZXZlbnRzTGluaywgc2FsZXNMaW5rLCBtZW1iZXJzaGlwTGluaylcbiAgICByZXR1cm4gZm9vdGVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNpdGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplU2l0ZSBmcm9tICcuL3dlYnNpdGUuanMnXG5cbmluaXRpYWxpemVTaXRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
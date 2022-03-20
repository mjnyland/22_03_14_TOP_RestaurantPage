import {createElement, clearHTML} from './functions';
import {createShowtimesCont, Showtime} from './showtimes';
import {Event, createEvents} from './events'

const showtimes = [];

const showtime1 = Showtime('THE WORST PERSON IN THE WORLD', 'THEATER 1', '160 MINS', 'DOLBY');
const showtime2 = Showtime('STRAWBERRY MANSION', 'THEATER 2', '160 MINS', '35MM');
const showtime3 = Showtime('2022 OSCAR NOMINATED SHORTS', 'THEATER 1', '160 MINS', 'DOLBY');
const showtime4 = Showtime('THE WORST PERSON IN THE WORLD', 'THEATER 2', '160 MINS', '35MM');
const showtime5 = Showtime('STRAWBERRY MANSION', 'THEATER 1', '160 MINS', 'DOLBY');

showtimes.push(showtime1, showtime2, showtime3, showtime4, showtime5)

const events = [];

const event1 = Event('HIGHS AND LOWS', 'Thu Mar 10 10:00 PM');
const event2 = Event('CHER!', 'Fri Mar 11 8:00 PM');
const event3 = Event('THE CHICAGO FILM SOCIETY PRESENTS', 'Mon Mar 10 12:00 PM');
const event4 = Event('DAVID LYNCH: A COMPLETE RETROSPECTIVE', 'Thu Apr 7 10:00 PM');
const event5 = Event('90TH ANNIVERSARY', 'Sat Apr 23 10:00 PM');

events.push(event1, event2, event3, event4, event5)

function createNowPlaying(){
    const nowPlayingCont = createElement('DIV', 'now-playing-heading');

    const h1 = createElement('H1', 'now-playing');
    h1.textContent = 'NOW PLAYING';

    const hr = createElement('HR', 'hr');

    nowPlayingCont.append(h1, hr)

    return nowPlayingCont
}

function createNav(){
    const nav = createElement('NAV', 'nav');

    const menuLink = createElement('P', 'menu-link');
    menuLink.textContent = 'Menu';

    const logo = createElement('IMG', 'music-box-logo');
    logo.src = '/src/images/MusicBox_Logo_White.png'
    const memberLogin = createElement('BUTTON', 'member-login-button');
    memberLogin.textContent = 'Member Login';

    nav.append(menuLink, logo, memberLogin)
    return nav
}

function createFeaturedMovies(){
    const featuredMovCont = createElement('DIV', 'featured-movie-cont');
    const featuredThumb = createElement('IMG', 'featured-movie-thumbnail');
    featuredThumb.src = '/src/images/Ratatouille_MovieStill.png';
    const featuredTitle = createElement('h3', 'featured-title');
    featuredTitle.textContent = 'Ratatoille';
    const featuredDirector = createElement('p', 'featured-director');
    featuredDirector.textContent = 'Brad Bird';

    featuredMovCont.append(featuredThumb, featuredTitle, featuredDirector)
    return featuredMovCont
}

function createInfo(){
    const infoSection = createElement('SECTION', 'info');
    const h2 = createElement('H2', 'info-heading');
    const infoText = createElement('P', 'info-text');

    h2.textContent = 'CHICAGO’S VENUE FOR INDEPENDENT, FOREIGN, CULT AND CLASSIC FILMS.';
    infoText.textContent = 'Turn onto Southport Avenue and it’s hard to resist the neon beacon that lures cinephiles from across Chicagoland with eight flickering letters—Music Box. It’s a promise of more than just entertainment, but a total experience.'

    infoSection.append(h2, infoText);

    return infoSection
}

function createFooter(){
    const footer = createElement('FOOTER', 'footer');

    const logo = createElement('IMG', 'logo');
    const homeLink = createElement('A', 'home-link');
    homeLink.textContent = 'HOME';
    const filmsLink = createElement('A', 'films-link');
    filmsLink.textContent = 'FILMS';
    const eventsLink = createElement('A', 'events-link');
    eventsLink.textContent = 'EVENTS';
    const salesLink = createElement('A', 'sales-link');
    salesLink.textContent = 'GROUP SALES';
    const membershipLink = createElement('A', 'membership-link');
    membershipLink.textContent = 'MEMBERSHIP';

    footer.append(logo, homeLink, filmsLink, eventsLink, salesLink, membershipLink)
    return footer
}

function loadHome(){
    const home = createElement('DIV', 'home');
    const main = document.getElementById('main');

    const eventsSection = createElement('SECTION', 'events')
    eventsSection.append(createEvents(events))
    clearHTML(main);
    main.append(createNav(), createNowPlaying(), createFeaturedMovies(), createShowtimesCont(showtimes));


    home.append(main, eventsSection, createInfo(), createFooter());
    
    return home
}


export default loadHome

import {createElement, clearHTML} from './functions';
import {createShowtimesCont, Showtime} from './showtimes';
import {Event, createEventsHead, createEvents} from './events'

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

function createFeaturedMovies(){
    const featuredMovCont = createElement('DIV', 'featured-movie-cont');
    
    const featuredMovHeading = createElement('h3', 'featured-movie-heading')
    featuredMovHeading.textContent = 'Featured';


    const featuredThumb = createElement('IMG', 'featured-movie-thumbnail');
    featuredThumb.src = 'images/Ratatouille_MovieStill.png';
    const featuredTitle = createElement('h3', 'featured-title');
    featuredTitle.textContent = 'Ratatoille';
    const featuredDirector = createElement('p', 'featured-director');
    featuredDirector.textContent = 'Brad Bird';

    featuredMovCont.append(featuredMovHeading, featuredThumb, featuredTitle, featuredDirector)
    return featuredMovCont
}

function createInfo(){
    const infoSection = createElement('SECTION', 'info');
    const h2 = createElement('H2', 'info-heading');
    const infoText = createElement('P', 'info-text');
    const infoTextCont = createElement('DIV', 'info-text-cont');
    infoTextCont.append(h2, infoText)
    const infoSecImage = createElement('IMG', 'info-section-image');

    infoSecImage.src = 'images/Moviegoers_Image.png';
    h2.textContent = 'CHICAGO???S VENUE FOR INDEPENDENT, FOREIGN, CULT AND CLASSIC FILMS.';
    infoText.textContent = 'Turn onto Southport Avenue and it???s hard to resist the neon beacon that lures cinephiles from across Chicagoland with eight flickering letters???Music Box. It???s a promise of more than just entertainment, but a total experience.'

    infoSection.append(infoTextCont, infoSecImage);

    return infoSection
}

function loadHome(){
    const home = createElement('DIV', 'home');
    const main = createElement('MAIN', 'main');
    const homeCont = createElement('div', 'home-cont')
    const content = document.getElementById('content')

    clearHTML(content)

    const eventsSection = createElement('SECTION', 'events')
    eventsSection.append(createEventsHead(), createEvents(events))
    homeCont.append(createNowPlaying(), createFeaturedMovies(), createShowtimesCont(showtimes));

    main.append(homeCont)
    home.append(main, eventsSection, createInfo());
    content.append(home)
}


export default loadHome

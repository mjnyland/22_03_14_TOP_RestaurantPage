import {createElement, clearHTML} from './functions';
import loadHome from './home'
import loadMenu from './menu'
import loadMembership from './member'

function createNav(){
    const nav = createElement('NAV', 'nav');

    const menuLink = createElement('P', 'menu-link');
    menuLink.textContent = 'Menu';

    const logo = createElement('IMG', 'music-box-logo');
    logo.src = 'images/MusicBox_Logo_White.png'
    const memberLogin = createElement('BUTTON', 'member-login-button');
    memberLogin.textContent = 'Member Login';

    menuLink.addEventListener("click", (e) => {
        loadMenu()
    })

    logo.addEventListener("click", (e) => {
        loadHome()
    })

    memberLogin.addEventListener("click", (e) => {
        loadMembership()
    })

    nav.append(menuLink, logo, memberLogin)

    return nav
}

function initializeSite() {
    const content = document.getElementById('content');
    const body = document.querySelector('BODY');
    const script = document.querySelector('script')

    body.insertBefore(createNav(), content)
    content.append(loadHome())
    body.insertBefore(createFooter(), script)
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


export default initializeSite
import {createElement, clearHTML} from './functions';
import {createNav, createFooter} from './home'

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
    const beersCont = createElement('DIV', 'beers-cont')
    const beersThickRule = createElement('HR', 'beers-cont-thick-rule');
    beersCont.append(beersThickRule)

    for (let i = 0; i < 5; i++){
        const beerCont = createElement('DIV', `beer-cont`);
        const beerName = createElement('h2', `beer-name`);
        beerName.textContent = arr[i].name;
        const beerDescrip = createElement('h5', `beer-descrip`);
        beerDescrip.textContent = arr[i].descrip;
        const beerPrice = createElement('h5', `beer-price`);

        const beerNameDescripCont = createElement('DIV', 'beer-name-and-descrip-cont')
        beerNameDescripCont.append(beerName, beerDescrip)



        beerPrice.textContent = arr[i].price;
        const beerHR = createElement('HR', 'beer-hr')

        beerCont.append(beerNameDescripCont, beerPrice, beerHR);

        beersCont.append(beerCont);
    }

    return beersCont
}

function createMenuHead(){
    const h1 = createElement('H1', 'menu-heading');
    h1.textContent = 'BEER MENU';

    return h1
}

function loadMenu(){
    const menu = createElement('DIV', 'menu');
    const content = document.getElementById('content');
    clearHTML(content)


    menu.append(createMenuHead(), createBeersCont(beers));
    content.append(menu)
}

export default loadMenu
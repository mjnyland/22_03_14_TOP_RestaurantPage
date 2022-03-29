import { createElement, createSVG } from './functions'

const Event = (name, time) => {
    const newEvent = {name, time};
    return newEvent
}

function createEventsHead(){
    const h1 = createElement('H1', 'events-heading');
    h1.textContent = 'EVENTS';

    return h1
}

function createEvents(arr){
    const eventsCont = createElement('DIV', 'events-cont')
    const eventsThickRule = createElement('HR', 'events-cont-thick-rule');
    eventsCont.append(eventsThickRule)

        for (let i = 0; i < 5; i++){
            const eventCont = createElement('DIV', `event-cont`);
            const eventName = createElement('H2', `event-name`)
            const eventDate = createElement('H4', `event-date`)
            const eventNameAndDate = createElement('DIV', 'event-name-and-date-cont')
            const eventArrow = createSVG("38", "24", "0 0 38 24", "none", "M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807614 25.9792 0.807614 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM-1.31134e-07 13.5L36 13.5L36 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z", "black")
            const hr = createElement('HR', 'event-hr')

            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

            eventNameAndDate.append(eventName, eventDate)
            eventCont.append(eventNameAndDate, eventArrow, hr)

            eventsCont.append(eventCont)
        }
    const becomeMemberButton = createElement('BUTTON', 'become-member-button');
    becomeMemberButton.textContent = 'Become A Member';

    eventsCont.append(becomeMemberButton)

    return eventsCont
}

export { Event, createEventsHead, createEvents }
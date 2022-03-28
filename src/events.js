import { createElement } from './functions'

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
            const eventCont = createElement('DIV', `event-${i}-cont`);
            const eventName = createElement('H2', `event-${i}-name`)
            const eventDate = createElement('H4', `event-${i}-date`)
            const hr = createElement('HR', 'event-hr')

            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

            eventCont.append(eventName, eventDate, hr)

            eventsCont.append(eventCont)
        }
    const becomeMemberButton = createElement('BUTTON', 'become-member-button');
    becomeMemberButton.textContent = 'Become A Member';

    eventsCont.append(becomeMemberButton)

    return eventsCont
}

export { Event, createEventsHead, createEvents }
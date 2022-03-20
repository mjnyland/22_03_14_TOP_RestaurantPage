import { createElement } from './functions'

const Event = (name, time) => {
    const newEvent = {name, time};
    return newEvent
}

function createEvents(arr){
    const eventsCont = createElement('DIV', 'events-cont')

        for (let i = 0; i < 5; i++){
            const eventCont = createElement('DIV', `event-${i}-cont`);
            const eventName = createElement('H2', `event-${i}-name`)
            const eventDate = createElement('H4', `event-${i}-date`)

            console.log(arr[i])
            eventName.textContent = arr[i].name;
            eventDate.textContent = arr[i].time;

            console.log(eventName)

            eventCont.append(eventName, eventDate)

            eventsCont.append(eventCont)
        }

    const becomeMemberButton = createElement('BUTTON', 'become-member-button');
    becomeMemberButton.textContent = 'Become A Member';

    eventsCont.append(becomeMemberButton)

    return eventsCont
}

export { Event, createEvents }
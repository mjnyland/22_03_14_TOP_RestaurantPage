import {createElement} from './functions'


const Showtime = (title, theater, runtime, format) => {
    return {title, theater, runtime, format}
}

function createShowtimesCont(arr) {
    const showtimesCont = createElement('DIV', 'showtimes-cont')
    const showtimeHeading = createElement('h3', 'showtime-heading')
    showtimeHeading.textContent = 'Showtimes'
    showtimesCont.append(showtimeHeading)

    for (let i = 0; i<5; i++){
        const showtimeCont = createElement('div', `showtime-cont`);

        const title = createElement('h2', `showtime-title`);
        title.textContent = arr[i].title;
        const infoCont = createElement('div', `showtime-info-cont`);
        const theater = createElement('h5', `showtime-theater`);
        theater.textContent = arr[i].theater;
        const runtime = createElement('h5', `showtime-runtime`);
        runtime.textContent = arr[i].runtime;
        const format = createElement('h5', `showtime-format`);
        format.textContent = arr[i].format;
        infoCont.append(theater, runtime, format);
        const hr = createElement('HR', 'showtimes-rule')
        showtimeCont.append(title, infoCont, hr);
        showtimesCont.append(showtimeCont)
    }

    return showtimesCont;
}

export {Showtime, createShowtimesCont}
import {createElement} from './functions'


const Showtime = (title, theater, runtime, format) => {
    return {title, theater, runtime, format}
}

function createShowtimesCont(arr) {
    const showtimesCont = createElement('DIV', 'showtimes-cont')

    for (let i = 0; i<5; i++){
        const showtimeCont = createElement('div', `showtime-cont-${i}`);

        const title = createElement('h2', `showtime-title-${i}`);
        title.textContent = arr[i].title;
        const infoCont = createElement('div', `showtime-${i}-info-cont`);
        const theater = createElement('h5', `showtime-${i}-theater`);
        theater.textContent = arr[i].theater;
        const runtime = createElement('h5', `showtime-${i}-runtime`);
        runtime.textContent = arr[i].runtime;
        const format = createElement('h5', `showtime-${i}-format`);
        format.textContent = arr[i].format;
        infoCont.append(theater, runtime, format);
        showtimeCont.append(title, infoCont);
        showtimesCont.append(showtimeCont)
    }

    return showtimesCont;
}

export {Showtime, createShowtimesCont}
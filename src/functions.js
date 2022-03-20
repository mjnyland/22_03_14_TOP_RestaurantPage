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


export { createElement, clearHTML, Showtime };
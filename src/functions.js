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

function createSVG(width, height, viewbox, fill, d, pathFill){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height); 
    svg.setAttribute('viewbox', viewbox);
    svg.setAttribute('fill', fill)

    path1.setAttribute('d', d);
    path1.setAttribute('fill', pathFill);

    svg.appendChild(path1)

    return svg
}


export { createElement, clearHTML, Showtime, createSVG };
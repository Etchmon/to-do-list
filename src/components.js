export const nav = () => {
    const element = document.createElement('nav');
    const title = document.createElement('h1');

    element.setAttribute('class', 'nav');
    title.setAttribute('class', 'logo');

    title.innerHTML = "To Do App";

    element.appendChild(title);

    return element;
}

export const form = () => {
    const element = document.createElement('form');

    Object.assign(element, {
        className: 'form',
        id: 'form',
        action: '#',
        method: 'POST'
    })

    return element;
}
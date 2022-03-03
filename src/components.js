import { toDoManager } from "./toDoManager";

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
    const element = document.createElement('div');
    const form = document.createElement('form');
    const legend = document.createElement('legend');
    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const dueDate = document.createElement('input');
    const priority = document.createElement('select');
    const button = document.createElement('button');

    Object.assign(element, {
        className: 'form-container',
        id: 'form-container',
    });
    Object.assign(form, {
        className: 'form',
        id: 'form',
        action: '/dist/index.html',
        method: 'POST',
    });
    Object.assign(title, {
        type: 'text',
        id: 'task-title',
        maxlength: '30',
        name: 'title'
    });
    Object.assign(description, {
        id: 'task-description',
        rows: '4',
        name: 'description'
    });
    Object.assign(dueDate, {
        type: 'date',
        id: 'task-due-date',
        name: 'dueDate'
    });
    Object.assign(priority, {
        id: 'task-prioity',
        name: 'prioity'
    });
    Object.assign(button, {
        type: 'submit',
        id: 'button'
    })

    legend.innerHTML = 'New Task';
    button.innerHTML = 'Add Task';

    form.appendChild(legend);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(button);

    element.appendChild(form);

    return element;
}
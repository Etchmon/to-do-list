import { sideBar, main, form, card } from './components';
import { toDoManager } from './toDoManager';
import _ from 'lodash';


// Export a auto running displayer controlle module
// ----Functions to add-------
// createDOM to create the html elements, set their id's and classes || fill with dummy data if no data available

export const displayController = (() => {

    const createDom = () => {

        const element = document.createElement('div');
        element.innerHTML = _.join();

        element.setAttribute('id', 'content');
        element.appendChild(sideBar());
        element.appendChild(main());
        element.appendChild(form());

        document.body.appendChild(element);
    }

    const showForm = () => {
        const form = document.querySelector('.form-container');

        form.className = 'form-container';
    };

    const closeForm = () => {
        const form = document.querySelector('.form-container');

        form.className = 'form-container hide-form';
    }

    const _clearView = () => {
        const view = document.querySelector('.main-view');
        const button = view.firstChild;
        view.innerHTML = '';
        view.appendChild(button);
    }

    const renderAll = () => {
        _clearView();
        const todos = toDoManager.getToDos();
        const view = document.querySelector('.main-view');

        todos.forEach(toDo => {
            // create a card
            // set the innerHTML of card elements
            // append it to main-view
            const element = card();
            element.querySelector('h1').innerHTML = toDo.title;
            element.querySelector('p').innerHTML = toDo.description;
            element.querySelector('span').innerHTML = toDo.dueDate;
            view.appendChild(element);

        })
    }

    return { createDom, showForm, closeForm, renderAll }
})();
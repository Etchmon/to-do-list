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

    const renderAll = () => {
        const todos = toDoManager.getToDos();
        const view = document.querySelector('.main-view');

        todos.forEach(toDo => {
            // create a card
            // set the innerHTML of card elements
            // append it to main-view
            view.appendChild(card());
            console.log(card().querySelector('h1'));
            card().querySelector('h1').innerHTML = toDo.title;
            console.log(toDo.title);
        })
    }

    return { createDom, showForm, closeForm, renderAll }
})();
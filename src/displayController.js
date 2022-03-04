import { sideBar, form } from './components';
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
        element.appendChild(form());




        document.body.appendChild(element);
    }

    const querySelector = (selector) => {
        const element = document.querySelector(selector);

        return element;
    }

    return { createDom, querySelector }
})();
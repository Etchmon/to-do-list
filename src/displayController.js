import { nav, form } from './components';

// Export a auto running displayer controlle module
// ----Functions to add-------
// createDOM to create the html elements, set their id's and classes || fill with dummy data if no data available

export const displayController = (() => {

    const createDom = () => {

        const element = document.createElement('div');

        element.setAttribute('id', 'content');
        element.appendChild(nav());
        element.appendChild(form());

        document.body.appendChild(element);
    }

    return { createDom }
})();
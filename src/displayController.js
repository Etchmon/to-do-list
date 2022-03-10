import { sideBar, main, form, card, projectForm } from './components';
import { toDoManager } from './toDoManager';
import _ from 'lodash';


// Export a auto running displayer controlle module
// ----To Do-------
// create renderProjects function that renders all the project titles to main view
// create renderProjectToDos function to render a specific projects todos to main view
// create updateLinks function, run it when new project is added to update sidebar links to include project titles

export const displayController = (() => {

    const createDom = () => {

        const element = document.createElement('div');
        element.innerHTML = _.join();

        element.setAttribute('id', 'content');
        element.appendChild(sideBar());
        element.appendChild(main());
        element.appendChild(form());
        element.appendChild(projectForm());

        document.body.appendChild(element);
    }

    const showForm = () => {
        const form = document.querySelector('.form-container');

        form.className = 'form-container';
    };

    const showProjectForm = () => {
        const form = document.querySelector('.project-form-container');

        console.log(form);

        form.className = 'project-form-container';
    }

    const closeForm = () => {
        const form = document.querySelector('.form-container');
        const projectForm = document.querySelector('.project-form-container');

        form.className = 'form-container hide-form';
        projectForm.classList = 'project-form-container hide-form';
    }

    const _clearView = () => {
        const view = document.querySelector('.main-view');
        const button = view.firstChild;
        view.innerHTML = '';
        view.appendChild(button);
    }

    const renderAll = () => {

        _clearView();
        setHeader('All Tasks');
        toDoManager.changeProject('Default');
        const todos = toDoManager.getToDos();
        const projects = toDoManager.getProjectsArray();
        const view = document.querySelector('.main-view');

        projects.forEach(Project => {
            console.log(projects.indexOf(Project));
            let pIndex = projects.indexOf(Project);
            Project.array.forEach(toDo => {
                console.log(Project.array.indexOf(toDo));
                let key = Project.array.indexOf(toDo);
                const element = card();
                element.querySelector('h1').innerHTML = toDo.title;
                element.querySelector('p').innerHTML = toDo.description;
                element.querySelector('span').innerHTML = toDo.dueDate;
                element.setAttribute('key', key);
                element.setAttribute('pIndex', pIndex);

                element.onclick = toDoManager.removeToDo;

                view.appendChild(element);
                key++;
            });
        });

        // todos.forEach(toDo => {
        //     const element = card();
        //     element.querySelector('h1').innerHTML = toDo.title;
        //     element.querySelector('p').innerHTML = toDo.description;
        //     element.querySelector('span').innerHTML = toDo.dueDate;
        //     element.setAttribute('key', key);

        //     element.onclick = toDoManager.removeToDo;

        //     view.appendChild(element);
        //     key++;
        // });
    }

    const setHeader = (title) => {
        const element = document.querySelector('.main-header');

        element.innerHTML = title;
    }

    const renderProjectToDos = () => {

        _clearView();
        let data = toDoManager.getProject();
        setHeader(data.title);
        const view = document.querySelector('.main-view');
        let i = 0;

        data.array.forEach(toDo => {
            const element = card();
            element.querySelector('h1').innerHTML = toDo.title;
            element.querySelector('p').innerHTML = toDo.description;
            element.querySelector('span').innerHTML = toDo.dueDate;
            element.setAttribute('key', i);

            element.onclick = toDoManager.removeToDo;

            view.appendChild(element);
        });
    }

    return { createDom, showForm, closeForm, renderAll, showProjectForm, setHeader, renderProjectToDos }
})();
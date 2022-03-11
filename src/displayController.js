import { sideBar, main, form, card, projectForm, projectLink } from './components';
import { toDoManager } from './toDoManager';
import _ from 'lodash';

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
    };

    const updateLinks = () => {
        const projects = toDoManager.getProjectsArray();
        const div = document.querySelector('.project-links');
        div.innerHTML = '';

        for (let i = 1; i < projects.length; i++) {
            const element = projectLink();

            element.innerHTML = projects[i].title;

            element.onclick = () => {
                toDoManager.changeProject(projects[i]);
                renderProjectToDos();
            };
            div.appendChild(element);
        };
    };

    const showForm = () => {
        const form = document.querySelector('.form-container');

        form.className = 'form-container';
    };

    const showProjectForm = () => {
        const form = document.querySelector('.project-form-container');

        console.log(form);

        form.className = 'project-form-container';
    };

    const closeForm = () => {
        const form = document.querySelector('.form-container');
        const projectForm = document.querySelector('.project-form-container');

        form.className = 'form-container hide-form';
        projectForm.classList = 'project-form-container hide-form';
    };

    const _clearView = () => {
        const view = document.querySelector('.main-view');
        const button = view.firstChild;
        view.innerHTML = '';
        view.appendChild(button);
    };

    const renderAll = () => {

        _clearView();
        setHeader('All Tasks');
        toDoManager.changeProject('Default');

        const todos = toDoManager.getToDos();
        const projects = toDoManager.getProjectsArray();
        const view = document.querySelector('.main-view');

        projects.forEach(Project => {
            let pIndex = projects.indexOf(Project);

            Project.array.forEach(toDo => {
                let key = Project.array.indexOf(toDo);
                const element = card();
                element.querySelector('h1').innerHTML = toDo.title;
                element.querySelector('p').innerHTML = toDo.description;
                element.querySelector('span').innerHTML = toDo.dueDate;
                element.querySelector('.priority-level').innerHTML = toDo.priority;
                element.setAttribute('key', key);
                element.setAttribute('pIndex', pIndex);

                view.appendChild(element);
                key++;
            });
        });
    };

    const renderAllProjects = () => {
        _clearView();
        setHeader('All Projects');

        const projects = toDoManager.getProjectsArray();
        const view = document.querySelector('.main-view');

        projects.forEach(Project => {
            // create projectCard element
            // Attach the project title to the card
            // Attach the number of todos in project array to the card
            // Attach the location of the Project in the projects array for onclick event
        })
    }

    const setHeader = (title) => {
        const element = document.querySelector('.main-header');

        element.innerHTML = title;
    };

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

            view.appendChild(element);
        });
    };

    return { createDom, showForm, closeForm, renderAll, showProjectForm, setHeader, renderProjectToDos, updateLinks }
})();
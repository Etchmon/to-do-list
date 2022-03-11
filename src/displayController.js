import { sideBar, main, form, card, projectForm, projectLink, projectCard } from './components';
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
        projectForm.className = 'project-form-container hide-form';

        form.firstChild.title.className = 'task-title';
        projectForm.firstChild.title.className = 'project-title';
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
                element.setAttribute('key', key);
                element.setAttribute('pIndex', pIndex);

                if (toDo.priority === 'Priority Level...') {
                    element.querySelector('.priority-level').innerHTML = '';
                } else {
                    element.querySelector('.priority-level').innerHTML = toDo.priority;
                };

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

        toDoManager.changeProject(projects);

        projects.slice(1).forEach(Project => {
            let key = projects.indexOf(Project);
            const element = projectCard();
            element.querySelector('h1').innerHTML = Project.title;
            element.querySelector('span').innerHTML = Project.array.length;
            element.setAttribute('key', key);

            view.appendChild(element);
        });
    };

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

            if (toDo.priority === 'Priority Level...') {
                element.querySelector('.priority-level').innerHTML = '';
            } else {
                element.querySelector('.priority-level').innerHTML = toDo.priority;
            };

            view.appendChild(element);
        });
    };

    const validateForm = (form) => {
        if (form.title.value === '') {
            form.title.classList.add('error');
            return false;
        } else {
            form.title.className = 'project-title';
            return true;
        };
    };

    return { createDom, showForm, closeForm, renderAll, showProjectForm, setHeader, renderProjectToDos, updateLinks, renderAllProjects, validateForm }
})();
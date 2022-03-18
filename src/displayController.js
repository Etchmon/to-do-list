import { sideBar, main, form, card, projectForm, projectLink, projectCard } from './components';
import { toDoManager } from './toDoManager';
import _ from 'lodash';
import { compareAsc, format } from 'date-fns';
import { de } from 'date-fns/locale';


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

            element.innerHTML = ('- ' + projects[i].title);

            element.onclick = () => {
                toDoManager.changeProject(projects[i]);
                renderProjectToDos();
            };
            div.appendChild(element);
        };
    };

    const checkLocalStorage = () => {
        if (localStorage.getItem('projects') === null) {
            toDoManager.setLocalStorage();
            console.log(localStorage);
        } else {
            toDoManager.getLocalStorage();
            renderAll();
            updateLinks();
        }
    }

    const showForm = () => {

        const element = document.querySelector('.main-header');

        if (element.innerHTML === 'All Projects') {
            showProjectForm();
            return;
        }

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

        form.firstChild.reset();
        form.firstChild.title.className = 'task-title';
        form.firstChild.querySelector('legend').innerHTML = 'New Task...';
        form.firstChild.querySelector('#submit-btn').onclick = toDoManager.addToDo;

        projectForm.firstChild.reset();
        projectForm.firstChild.title.className = 'project-title';
        projectForm.firstChild.querySelector('legend').innerHTML = 'New Project...';
        projectForm.firstChild.querySelector('#submit-btn').onclick = toDoManager.createProject;
    };

    const editForm = (data) => {

        if (data.description === undefined) {
            showProjectForm();
            const legend = document.querySelector('.project-form-container').querySelector('legend');
            const btn = document.querySelector('.project-form-container').querySelector('#submit-btn');
            const title = document.querySelector('.project-title');

            legend.innerHTML = 'Edit Project';
            btn.innerHTML = 'Confirm';

            title.value = data.title;

            btn.onclick = (e) => toDoManager.submitEdit(e, data, title);
            return;
        }

        showForm();
        const legend = document.querySelector('legend');
        const btn = document.querySelector('#submit-btn');
        const title = document.querySelector('#task-title');
        const description = document.querySelector('#task-description');
        const date = document.querySelector('#task-due-date');
        const priority = document.querySelector('#task-priority');

        legend.innerHTML = 'Edit Task';
        btn.innerHTML = 'Confirm';

        title.value = data.title;
        description.value = data.description;
        date.value = data.dueDate;
        priority.value = data.priority;

        btn.onclick = (e) => toDoManager.submitEdit(e, data, title, description, date, priority);
    }

    const _clearView = () => {
        const view = document.querySelector('.view-grid');
        view.innerHTML = '';
    };

    const renderAll = () => {

        _clearView();
        setHeader('All Tasks');
        toDoManager.changeProject('Default');

        const projects = toDoManager.getProjectsArray();
        const view = document.querySelector('.view-grid');

        projects.forEach(Project => {
            let pIndex = projects.indexOf(Project);

            Project.array.forEach(toDo => {
                let key = Project.array.indexOf(toDo);
                const element = card();

                element.querySelector('h1').innerHTML = toDo.title;
                element.querySelector('p').innerHTML = toDo.description;
                switch (toDo.dueDate) {
                    case '':
                        element.querySelector('span').innerHTML = toDo.dueDate;
                        break;
                    default:
                        element.querySelector('span').innerHTML = format(new Date(toDo.dueDate), 'MMM, do');
                        break;;
                }
                element.setAttribute('key', key);
                element.setAttribute('pIndex', pIndex);
                switch (toDo.priority) {
                    case 'Priority Level...':
                        element.querySelector('.priority-level').innerHTML = '';
                        break;
                    case 'low':
                        element.querySelector('.priority-level').innerHTML = toDo.priority;
                        element.querySelector('.priority-level').classList.add('low-priority');
                        break;
                    case 'medium':
                        element.querySelector('.priority-level').innerHTML = toDo.priority;
                        element.querySelector('.priority-level').classList.add('medium-priority');
                        break;
                    case 'high':
                        element.querySelector('.priority-level').innerHTML = toDo.priority;
                        element.querySelector('.priority-level').classList.add('high-priority');
                        break;
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
        const view = document.querySelector('.view-grid');

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
        const view = document.querySelector('.view-grid');
        let i = 0;

        data.array.forEach(toDo => {
            const element = card();
            element.querySelector('h1').innerHTML = toDo.title;
            element.querySelector('p').innerHTML = toDo.description;
            element.querySelector('span').innerHTML = format(new Date(toDo.dueDate), 'MMM, do');
            element.setAttribute('key', i);

            switch (toDo.priority) {
                case 'Priority Level...':
                    element.querySelector('.priority-level').innerHTML = '';
                    break;
                case 'low':
                    element.querySelector('.priority-level').innerHTML = toDo.priority;
                    element.querySelector('.priority-level').classList.add('low-priority');
                    break;
                case 'medium':
                    element.querySelector('.priority-level').innerHTML = toDo.priority;
                    element.querySelector('.priority-level').classList.add('medium-priority');
                    break;
                case 'high':
                    element.querySelector('.priority-level').innerHTML = toDo.priority;
                    element.querySelector('.priority-level').classList.add('high-priority');
                    break;
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


    return { createDom, showForm, closeForm, renderAll, showProjectForm, setHeader, renderProjectToDos, updateLinks, renderAllProjects, validateForm, editForm, checkLocalStorage }
})();
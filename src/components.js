import HomeIcon from './home.png';
import Logo from './checkbox.png';
import ProjectIcon from './lightbulb-group.png';
import { toDoManager } from './toDoManager';
import { displayController } from './displayController';

// -----To Dos--------
// create add project button, add it to sidebar
// add div to hold project titles, indent it from projects link
// create form for project creation


export const sideBar = () => {
    const element = document.createElement('section');
    const logoBox = document.createElement('div');
    const header = document.createElement('h1');
    const linkBox = document.createElement('div');
    const home = document.createElement('a');
    const projects = document.createElement('a');
    const addProject = document.createElement('button');
    const btnHeader = document.createElement('a');
    const logo = new Image();
    const homeIcon = new Image();
    const projectIcon = new Image();

    element.setAttribute('class', 'side-bar');
    logoBox.setAttribute('class', 'logo-box');
    header.setAttribute('class', 'side-bar-header');
    linkBox.setAttribute('class', 'link-box');
    addProject.setAttribute('class', 'add-project-btn');

    Object.assign(home, {
        className: 'link',
        href: '#'
    });
    Object.assign(projects, {
        className: 'link',
        href: '#'
    });
    Object.assign(logo, {
        className: 'logo',
        alt: 'logo'
    });
    Object.assign(homeIcon, {
        className: 'icon',
        alt: 'home'
    });
    Object.assign(projectIcon, {
        className: 'icon',
        alt: 'projects'
    });
    Object.assign(btnHeader, {
        className: 'link',
        href: '#'
    })

    logo.src = Logo;
    homeIcon.src = HomeIcon;
    projectIcon.src = ProjectIcon;


    header.innerHTML = 'To Do App';
    home.innerHTML = 'Home';
    projects.innerHTML = 'Projects';
    addProject.innerHTML = '+';
    btnHeader.innerHTML = 'New Project';

    addProject.onclick = displayController.showProjectForm;
    home.onclick = displayController.renderAll;
    homeIcon.onclick = displayController.renderAll;

    logoBox.appendChild(logo);
    logoBox.appendChild(header);

    linkBox.appendChild(homeIcon);
    linkBox.appendChild(home);
    linkBox.appendChild(projectIcon);
    linkBox.appendChild(projects);
    linkBox.appendChild(addProject);
    linkBox.appendChild(btnHeader);

    element.appendChild(logoBox);
    element.appendChild(linkBox);

    return element;

}

export const main = () => {
    const element = document.createElement('section');
    const header = document.createElement('div');
    const view = document.createElement('div');
    const button = document.createElement('button');

    element.setAttribute('class', 'main');
    header.setAttribute('class', 'main-header');
    view.setAttribute('class', 'main-view');
    button.setAttribute('class', 'add-btn');

    header.innerHTML = 'All Tasks';
    button.innerHTML = '+';

    button.onclick = displayController.showForm;

    view.appendChild(button);

    element.appendChild(header);
    element.appendChild(view);

    return element;
}

export const projectForm = () => {
    const element = document.createElement('div');
    const form = document.createElement('form');
    const legend = document.createElement('legend');
    const title = document.createElement('input');
    const submitButton = document.createElement('button');
    const closeButton = document.createElement('button');

    element.setAttribute('class', 'project-form-container hide-form');

    Object.assign(form, {
        className: 'form',
        action: '/dist/index.html',
        method: 'POST'
    });
    Object.assign(title, {
        className: 'project-title',
        name: 'projectTitle',
        maxlength: '30',
        placeholder: 'Title:'
    });
    Object.assign(submitButton, {
        type: 'submit',
        id: 'submit-btn'
    });
    Object.assign(closeButton, {
        type: 'button',
        id: 'close-btn'
    });

    legend.innerHTML = 'New Project...';
    submitButton.innerHTML = 'Create Project';
    closeButton.innerHTML = 'Close';

    form.appendChild(legend);
    form.appendChild(title);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    closeButton.onclick = displayController.closeForm;
    submitButton.onclick = toDoManager.createProject;

    element.appendChild(form);

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
    const submitButton = document.createElement('button');
    const closeButton = document.createElement('button');

    Object.assign(element, {
        className: 'form-container hide-form',
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
        name: 'title',
        placeholder: 'Title:'
    });
    Object.assign(description, {
        id: 'task-description',
        rows: '4',
        name: 'description',
        placeholder: 'Description:'
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
    Object.assign(submitButton, {
        type: 'submit',
        id: 'submit-btn'
    });
    Object.assign(closeButton, {
        type: 'button',
        id: 'close-btn'
    });

    legend.innerHTML = 'New Task...';
    submitButton.innerHTML = 'Add Task';
    closeButton.innerHTML = 'Close';

    closeButton.onclick = displayController.closeForm;
    submitButton.onclick = toDoManager.addToDo;

    form.appendChild(legend);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    element.appendChild(form);

    return element;
}

export const card = () => {
    const element = document.createElement('div');
    const cardTitle = document.createElement('h1');
    const cardDescription = document.createElement('p');
    const cardDate = document.createElement('span');
    const removeBtn = document.createElement('button');

    element.setAttribute('class', 'card');
    cardTitle.setAttribute('class', 'card-title');
    cardDescription.setAttribute('class', 'card-description');
    cardDate.setAttribute('class', 'card-date');
    removeBtn.setAttribute('class', 'remove-btn');

    removeBtn.innerHTML = 'x';

    element.appendChild(removeBtn);
    element.appendChild(cardTitle);
    element.appendChild(cardDescription);
    element.appendChild(cardDate);

    return element;
}

export const projectLink = () => {
    const element = document.createElement('a');
    const linkBox = document.querySelector('.link-box');

    element.setAttribute('class', 'project-link');

    return element;
}
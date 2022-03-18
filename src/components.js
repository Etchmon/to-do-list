import HomeIcon from './home.png';
import Logo from './checkbox.png';
import ProjectIcon from './lightbulb-group.png';
import EditIcon from './circle-edit-outline.png';
import { toDoManager } from './toDoManager';
import { displayController } from './displayController';


export const sideBar = () => {
    const element = document.createElement('section');
    const logoBox = document.createElement('div');
    const header = document.createElement('h1');
    const linkBox = document.createElement('div');
    const home = document.createElement('a');
    const projects = document.createElement('a');
    const addProject = document.createElement('button');
    const btnHeader = document.createElement('a');
    const projectLinks = document.createElement('div');
    const logo = new Image();
    const homeIcon = new Image();
    const projectIcon = new Image();

    element.setAttribute('class', 'side-bar');
    logoBox.setAttribute('class', 'logo-box');
    header.setAttribute('class', 'side-bar-header');
    linkBox.setAttribute('class', 'link-box');
    addProject.setAttribute('class', 'add-project-btn');
    projectLinks.setAttribute('class', 'project-links');

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
    });

    logo.src = Logo;
    homeIcon.src = HomeIcon;
    projectIcon.src = ProjectIcon;


    header.innerHTML = 'To Do App';
    home.innerHTML = 'Home';
    projects.innerHTML = 'Projects';
    addProject.innerHTML = '+';
    btnHeader.innerHTML = 'Add Project';

    addProject.onclick = displayController.showProjectForm;
    home.onclick = displayController.renderAll;
    homeIcon.onclick = displayController.renderAll;
    projects.onclick = displayController.renderAllProjects;

    logoBox.appendChild(logo);
    logoBox.appendChild(header);

    linkBox.appendChild(homeIcon);
    linkBox.appendChild(home);
    linkBox.appendChild(projectIcon);
    linkBox.appendChild(projects);
    linkBox.appendChild(addProject);
    linkBox.appendChild(btnHeader);
    linkBox.appendChild(projectLinks);

    element.appendChild(logoBox);
    element.appendChild(linkBox);

    return element;

};

export const main = () => {
    const element = document.createElement('section');
    const header = document.createElement('div');
    const view = document.createElement('div');
    const viewHeader = document.createElement('div');
    const grid = document.createElement('div');
    const button = document.createElement('button');

    element.setAttribute('class', 'main');
    header.setAttribute('class', 'main-header');
    view.setAttribute('class', 'main-view');
    button.setAttribute('class', 'add-btn');
    viewHeader.setAttribute('class', 'view-header');
    grid.setAttribute('class', 'view-grid');

    header.innerHTML = 'All Tasks';
    button.innerHTML = '+';

    button.onclick = displayController.showForm;

    viewHeader.appendChild(button);

    view.appendChild(viewHeader);
    view.appendChild(grid);

    element.appendChild(header);
    element.appendChild(view);

    return element;
};

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
        name: 'title',
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
    form.appendChild(closeButton);
    form.appendChild(submitButton);

    closeButton.onclick = displayController.closeForm;
    submitButton.onclick = toDoManager.createProject;

    element.appendChild(form);

    return element;
};

export const form = () => {
    const element = document.createElement('div');
    const form = document.createElement('form');
    const legend = document.createElement('legend');
    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const dueDate = document.createElement('input');
    const priority = document.createElement('select');
    const options = ['low', 'medium', 'high'];
    const optionPlaceholder = document.createElement('option');
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
        type: 'datetime-local',
        id: 'task-due-date',
        name: 'dueDate'
    });
    Object.assign(priority, {
        id: 'task-priority',
        name: 'priority'
    });
    Object.assign(submitButton, {
        type: 'submit',
        id: 'submit-btn'
    });
    Object.assign(closeButton, {
        type: 'button',
        id: 'close-btn'
    });

    title.setAttribute('required', '');
    priority.setAttribute('required', '');

    optionPlaceholder.setAttribute('disabled', '');
    optionPlaceholder.setAttribute('selected', '');
    optionPlaceholder.setAttribute('hidden', '');
    optionPlaceholder.innerHTML = 'Priority Level...';

    priority.appendChild(optionPlaceholder);

    options.forEach(option => {
        const element = document.createElement('option');

        element.setAttribute('class', option);
        element.setAttribute('value', option);
        element.innerHTML = option;

        priority.appendChild(element);
    })

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
    form.appendChild(closeButton);
    form.appendChild(submitButton);

    element.appendChild(form);

    return element;
};

export const card = () => {
    const element = document.createElement('div');
    const cardTitle = document.createElement('h1');
    const cardDetails = document.createElement('button');
    const cardDate = document.createElement('span');
    const prioity = document.createElement('span');
    const removeBtn = document.createElement('button');
    const editBtn = new Image();

    element.setAttribute('class', 'card');
    cardTitle.setAttribute('class', 'card-title');
    cardDetails.setAttribute('class', 'card-details');
    cardDate.setAttribute('class', 'card-date');
    prioity.setAttribute('class', 'priority-level');
    removeBtn.setAttribute('class', 'remove-btn');

    removeBtn.innerHTML = 'x';
    removeBtn.onclick = toDoManager.removeToDo;

    cardDetails.innerHTML = 'Details';
    cardDetails.onclick = displayController.viewCard;

    editBtn.src = EditIcon;
    editBtn.onclick = toDoManager.editTodo;

    element.appendChild(removeBtn);
    element.appendChild(cardTitle);
    element.appendChild(prioity);
    element.appendChild(cardDate);
    element.appendChild(cardDetails);
    element.appendChild(editBtn);


    return element;
};

export const cardView = () => {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const date = document.createElement('span');
    const prio = document.createElement('span');
    const closeBtn = document.createElement('button');

    element.setAttribute('class', 'card-view');
    date.setAttribute('class', 'card-view-date');
    prio.setAttribute('class', 'card-view-prio');

    closeBtn.innerHTML = 'x'
    closeBtn.onclick = displayController.closeView;

    element.appendChild(title);
    element.appendChild(description);
    element.appendChild(date);
    element.appendChild(prio);
    element.appendChild(closeBtn);

    return element;
}

export const projectCard = () => {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const number = document.createElement('span');
    const removeBtn = document.createElement('button');
    const editBtn = new Image();

    element.setAttribute('class', 'project-card');
    removeBtn.setAttribute('class', 'remove-btn');

    removeBtn.innerHTML = 'x';
    removeBtn.onclick = toDoManager.removeProject;

    editBtn.src = EditIcon;
    editBtn.onclick = toDoManager.editTodo;

    element.appendChild(removeBtn);
    element.appendChild(title);
    element.appendChild(number);
    element.appendChild(editBtn);

    return element;
};

export const projectLink = () => {
    const element = document.createElement('a');

    Object.assign(element, {
        className: 'project-link',
        href: '#'
    });

    return element;
};
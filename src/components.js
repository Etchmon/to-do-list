import HomeIcon from './home.png';
import Logo from './checkbox.png';
import ProjectIcon from './lightbulb-group.png';

export const sideBar = () => {
    const element = document.createElement('section');
    const logoBox = document.createElement('div');
    const header = document.createElement('h1');
    const linkBox = document.createElement('div');
    const home = document.createElement('a');
    const projects = document.createElement('a');
    const logo = new Image();
    const homeIcon = new Image();
    const projectIcon = new Image();

    element.setAttribute('class', 'side-bar');
    logoBox.setAttribute('class', 'logo-box');
    header.setAttribute('class', 'side-bar-header');
    linkBox.setAttribute('class', 'link-box');

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
    })

    logo.src = Logo;
    homeIcon.src = HomeIcon;
    projectIcon.src = ProjectIcon;


    header.innerHTML = 'To Do App';
    home.innerHTML = 'Home';
    projects.innerHTML = 'Projects';

    logoBox.appendChild(logo);
    logoBox.appendChild(header);

    linkBox.appendChild(homeIcon);
    linkBox.appendChild(home);
    linkBox.appendChild(projectIcon);
    linkBox.appendChild(projects);

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

    view.appendChild(button);

    element.appendChild(header);
    element.appendChild(view);

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
        name: 'title'
    });
    Object.assign(description, {
        id: 'task-description',
        rows: '4',
        name: 'description'
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
    })
    Object.assign(closeButton, {
        type: 'button',
        id: 'close-btn'
    })

    legend.innerHTML = 'New Task';
    submitButton.innerHTML = 'Add Task';
    closeButton.innerHTML = 'Close';

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

    element.setAttribute('class', 'card');
    cardTitle.setAttribute('class', 'card-title');
    cardDescription.setAttribute('class', 'card-description');
    cardDate.setAttribute('class', 'card-date');

    element.appendChild(cardTitle);
    element.appendChild(cardDescription);
    element.appendChild(cardDate);

    return element;
}
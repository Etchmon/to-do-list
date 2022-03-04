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
        className: 'home-link',
        href: '#'
    });
    Object.assign(projects, {
        className: 'projects-link',
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

export const form = () => {
    const element = document.createElement('div');
    const form = document.createElement('form');
    const legend = document.createElement('legend');
    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const dueDate = document.createElement('input');
    const priority = document.createElement('select');
    const button = document.createElement('button');

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
    Object.assign(button, {
        type: 'submit',
        id: 'button'
    })

    legend.innerHTML = 'New Task';
    button.innerHTML = 'Add Task';

    form.appendChild(legend);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(button);

    element.appendChild(form);

    return element;
}
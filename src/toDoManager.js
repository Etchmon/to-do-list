// Export auto running toDoManager module
// -----Functions to add-------
// create/removeProject, create/removeToDo, getProject, changeProject, editToDo, deleteToDo

export const toDoManager = (() => {

    let currentProject = 'Default';
    let projects = [];
    let todos = [];

    const changeProject = (newProject) => {
        currentProject = newProject;
    }

    const getProject = () => {
        return currentProject;
    }

    class ToDo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }

        info() {
            console.log(this.title, this.description, this.dueDate, this.priority);
        }
    }

    const addToDo = (e) => {
        e.preventDefault();

        const toDo = new ToDo;

        console.log(todo);
    }

})();
// Export auto running toDoManager module
// -----Functions to add-------
// create/removeProject, create/removeToDo, getProject, changeProject, editToDo, deleteToDo

export const toDoManager = (() => {

    let currentProject = 'Default';

    const changeProject = (newProject) => {
        currentProject = newProject;
    }

    const getProject = () => {
        return currentProject;
    }

})();
const tasksContainerElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement = document.querySelector("#task-title");
const addButtonElement = document.querySelector("#task-add");
const tasks = [
    {
        name: "Study linux terminal",
        done: false,
    },
    {
        name: "Study React",
        done: false,
    },
    {
        name: "Study TypeScript",
        done: false,
    },
    {
        name: "Train at gym",
        done: false,
    },
    {
        name: "Make a food",
        done: false,
    },
];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskTitleInputElement.value);
    render();
});
render();

const tasksContainerElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement = document.querySelector("#task-title");
const addButtonElement = document.querySelector("#task-add");
const tasks = [
    {
        title: "Study linux terminal",
        done: false,
    },
    {
        title: "Study React",
        done: false,
    },
    {
        title: "Study TypeScript",
        done: false,
    },
    {
        title: "Train at gym",
        done: false,
    },
    {
        title: "Make a food",
        done: false,
    },
];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement('label');
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskTitleInputElement.value, done: false });
    render();
});
render();

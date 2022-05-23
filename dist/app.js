const tasksContainerElement = document.querySelector(".todo__container--tasks");
const taskTitleInputElement = document.querySelector("#task-title");
const addButtonElement = document.querySelector("#task-add");
const categoriesContainerElement = document.querySelector(".todo__container--categories");
let selectedCategory;
const categories = ["linux", "react", "study", "gym", "general"];
const tasks = [
    {
        title: "Study linux terminal",
        done: false,
        category: "linux",
    },
    {
        title: "Study React",
        done: false,
        category: "react",
    },
    {
        title: "Study TypeScript",
        done: false,
        category: "study",
    },
    {
        title: "Train at gym",
        done: false,
        category: 'gym',
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
        if (task.category) {
            taskElement.classList.add(task.category);
        }
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
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = "category";
        radioInputElement.id = `Category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `Category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    taskTitleInputElement.value = "";
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskTitleInputElement.value, done: false, category: selectedCategory, });
    render();
});
renderCategories();
render();

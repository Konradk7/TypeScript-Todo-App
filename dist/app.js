import { render } from "./helpers/render-tasks-helpers.js";
import { renderCategories } from "./helpers/render-categories-helpers.js";
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
const addTask = (task) => {
    taskTitleInputElement.value = "";
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskTitleInputElement.value, done: false, category: selectedCategory, });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);

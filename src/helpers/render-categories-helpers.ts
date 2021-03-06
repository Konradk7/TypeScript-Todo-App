import {Category} from "../types/types";

const handleCategoryChange = (category: Category) => {
    if (category === "general") {
        console.log("Zmiana na general");
    }
}

export const renderCategories =
    (categories: Category[],
     categoriesContainerElement: HTMLElement,
     inputChangeCallback: (category: Category) => void
    ) => {
        categories.forEach((category) => {
            const categoryElement: HTMLElement = document.createElement("li");

            const radioInputElement: HTMLInputElement = document.createElement("input");
            radioInputElement.type = "radio";
            radioInputElement.name = "category";
            radioInputElement.value = "category";
            radioInputElement.id = `Category-${category}`;
            radioInputElement.addEventListener("change", () => {
                inputChangeCallback(category);
            });

            const labelElement: HTMLLabelElement = document.createElement("label");
            labelElement.setAttribute("for", `Category-${category}`);
            labelElement.innerText = category;

            categoryElement.appendChild(radioInputElement);
            categoryElement.appendChild(labelElement);

            categoriesContainerElement.appendChild(categoryElement)

        })
    }

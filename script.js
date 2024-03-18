const form = document.querySelector("#todo-form");
const inputText = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;
    toDoList.appendChild(newListItem);

    const button = document.createElement("button");
    button.addEventListener("click", () => { 
        newListItem.remove();
    })
    newListItem.append(button);
    button.innerText = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
});

const dateButton = document.querySelector("#show-date");
const dateDisplay = document.querySelector("#date-display")

dateButton.addEventListener("click", (evt) => {
    const date = new Date();
    dateDisplay.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});



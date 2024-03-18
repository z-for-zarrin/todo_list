const form = document.querySelector("#todo-form");
const inputText = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");
const completedList = document.querySelector("#completed-list");


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;
    toDoList.appendChild(newListItem);

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => { 
        newListItem.remove();
    })
    newListItem.append(deleteButton);
    deleteButton.innerText = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";

    const tickButton = document.createElement("button");
    tickButton.addEventListener("click", () => { 
        newListItem.remove();
        completedList.appendChild(newListItem);
    })
    newListItem.append(tickButton);
    tickButton.innerText = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";

});

const dateButton = document.querySelector("#show-date");
const dateDisplay = document.querySelector("#date-display")

dateButton.addEventListener("click", (evt) => {
    const date = new Date();
    dateDisplay.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});



const form = document.querySelector("#todo-form");
const inputText = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(evt);
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



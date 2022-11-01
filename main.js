const todoinput = document.querySelector(".doinginput");
const todoaddingbutton = document.querySelector(".adddoing");
const filterSelection = document.querySelector(".filter-todo");
const todolist = document.querySelector(".listul")
todolist.addEventListener("click",completedTrash)
todoaddingbutton.addEventListener("click",createlifunc)
filterSelection.addEventListener("click", filterOption )
document.addEventListener("DOMContentLoaded", preTodos)

function createlifunc(event){
    event.preventDefault()
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("tododivclass");
    saveLocalTodo(todoinput.value)
    let todoli = document.createElement("li")
    todoli.innerText = todoinput.value;
    todoli.classList.add("todo-item");
    todoDiv.appendChild(todoli)
    // console.log(todoDiv);
    const checkButton = document.createElement("button")
    checkButton.innerHTML = `<img id="cmp" class="buttons" src ="img-png/checked.png" alt="Loading...">`;
    todoDiv.appendChild(checkButton)
    const trashButton = document.createElement("button")
    trashButton.innerHTML = `<img id="trash"class="buttons" src ="img-png/trash-bin.png" alt="Loading...">`;
    todoDiv.appendChild(trashButton)
    todolist.appendChild(todoDiv)
    todoinput .value ="";
}

function saveLocalTodo(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))

}
function completedTrash (event){
    let item = event.target;
    if(item.id === "trash"){
        const todo = item.parentElement.parentElement;
        todo.remove()
        localTrash(todo)
        // console.log(todo);
    }if(item.id === "cmp"){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed")
        // console.log(todo);
    }
}
function localTrash(todo){

    let todos;
    if (localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    const parsed =todo.children[0].innerText;
    todos.splice(todos.indexOf(parsed) , 1);
    localStorage.setItem("todos",JSON.stringify(todos))
}
function filterOption(event){
    console.log(event.target.value);
    const todos = todolist.childNodes;
    console.log(todos);
    todos.forEach(function (todo) {
        console.log(todo);
        switch (event.target.value) {
            case "All":
                todo.style.display = "flex";
                break;
            case "Completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "Uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
                console.log(todo);
        }
    })

}
function preTodos(){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo){

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("tododivclass");
    let todoli = document.createElement("li")
    todoli.innerText = todo;
    todoli.classList.add("todo-item");
    todoDiv.appendChild(todoli)
    // console.log(todoDiv);
    const checkButton = document.createElement("button")
    checkButton.innerHTML = `<img id="cmp" class="buttons" src ="img-png/checked.png" alt="Loading...">`;
    todoDiv.appendChild(checkButton)
    const trashButton = document.createElement("button")
    trashButton.innerHTML = `<img id="trash"class="buttons" src ="img-png/trash-bin.png" alt="Loading...">`;
    todoDiv.appendChild(trashButton)
    todolist.appendChild(todoDiv)
})
}
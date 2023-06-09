const todoList = [{
    name: 'make dinner', 
    dueDate: '2020-12-13'
}, {
    name: 'wash dishes', 
    dueDate: '2023-12-13'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = ``;

    todoList.forEach((todoObject, i) => {
        const {name, dueDate} = todoObject;

        const html = `
        
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name, 
        dueDate
    });

    inputElement.value = '';
    renderTodoList();
}
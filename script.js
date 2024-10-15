document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(text) {
        if (text.trim() === '') return;

        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = text;

        const actions = document.createElement('div');
        actions.className = 'todo-actions';

        const completeButton = document.createElement('button');
        completeButton.innerHTML = '&#10003;';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#10005;';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        li.appendChild(span);
        li.appendChild(actions);
        todoList.appendChild(li);
    }
});

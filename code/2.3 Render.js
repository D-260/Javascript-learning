<div id="todo-list"></div>
function render() {
        // reset our list
        document.getElementById('todo-list').innerHTML = ''; 

        todos.forEach(function (todo) {
          const element = document.createElement('div'); // creates div
          element.innerText = todo.title + ' ' + todo.dueDate; // renders(output) on screen todo item with due date
          const todoList = document.getElementById('todo-list');  // this part of code renders output in div and not body for the ease of deletion
          todoList.appendChild(element);
        });

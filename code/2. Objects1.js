 <body>
    <input id="todo-title" type="text" />
    <input id="date-picker" type="date" /> // Here you can notice that date is the input type attribute over here. 
                                            //This lets us decide date and thus due date for this project
    <button onclick="addTodo()">Add Todo</button>

    <div id="todo-list"></div>

    <script>
      const todos = [{
        title: 'Get groceries',
        dueDate: '2021-10-04'
      }, {
        title: 'Wash car',
        dueDate: '2021-02-03'
      }, {
        title: 'Make dinner',
        dueDate: '2021-03-04'
      }];
// const and let are two types of variable declaration with const not being able to be reassigned and let can be.
//"[{" marks the start of objects. Objects are property: value pairs used as a  a way to group values with similar characteristics together to make your code more readable 
      render(); // this will be defined later
      </script>
</body>

const todos = [{
        title: 'Get groceries',
        dueDate: '2021-10-04', // object values are separated by comma.
        id: 'id1' // id is provided so as to identify div to be deleted.
        // Add the two other default todos as well
      },
render(); // To put/render the default todos on screen
               
 function addTodo() {
        const textbox = document.getElementById('todo-title'); 
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;//already done

        const id = new Date().getTime(); // gives msecs passed after 1 jan 1970 till now. used to create ids.

        todos.push({
          title: title,
          dueDate: dueDate,
          id: id // new property value pair
        });
   render();
 }

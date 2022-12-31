function addTodo() { //This function is used to input elements dynamically wherein first id is taken and then value inside textbox is assigned.
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;
        todos.push({   // As todos is an object, we will pass object in argument.
          title: title,
          dueDate: dueDate
        });

        render();
      }

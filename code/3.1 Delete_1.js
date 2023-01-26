todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });

        render();
      }// Same as before

      function func() {
        return 'one hundred';
      }// every function/object returns a value. This is a fundamental law of programming. Statements after return don't count.

      function deleteTodo(event) {
        const deleteButton = event.target; // event.target triggers many properties of a event which is class to the object target. One of those properties is "id"
        const idToDelete = deleteButton.id; // very important. This is how we grab the id of a button to be used for deleteing, identifying, manipluating etc.

        todos.filter(function (todo) {
          return true;
        });
      }

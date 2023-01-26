 function deleteTodo(event) {
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        todos = todos.filter(function (todo) {
          // If the id of this todo matches idToDelete, return false
          // For everything else, return true
          if (todo.id === idToDelete) {
            return false; // filter is used to traverse(visiting each element once) array. As the name suggests, it filters undesirable stuff from the array.
          } else {   
            return true;  // If it is true, then element is passed to array, else it is deleted. Hence, if the todo (to be deleted) has the same id as the one retrived
                           // by event.target as in the one clicked and stored in idtodelete, it's deleted as we have written it to be false.
          }
        });

        render();
      }

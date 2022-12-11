//This will consist of a new and interesting concept
<input type="text" id="todo-title" />
<button onclick="displayTitle()">Display Title</button>
<script>
  function displayTitle() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;

    let div = document.createElement('div');
  // this is an important part of DOM wherein we dynamically create HTML elements so as to interact with them
    div.innerText = title;
  // title = textbox.value so the input we are giving will be printed
    document.body.appendChild(div);
  //div the variable will be appended(added) as a child to the parent 'div' which we created in line 9.
  }
</script>

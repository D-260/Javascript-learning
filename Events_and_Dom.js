// Q Set up a <button id="todo-button">To Do</button> so that when you click the button, the text inside changes to "Done"
<button id="todo-button" onclick="changeToDone()">To do</button> 
// button is created and assigned an identity which goes by the name of todo-button, attribute on click is used to perform some event whenever button is clicked 
<script>
  function changeToDone() {
    let button = document.getElementById('todo-button');
  // button's id is accessed by document.getElementById();
  
    button.innerText = 'Done';
  // Text inside button will be changed to done. dot operator(.) is used to access a particular variable or element. 
}
</script>
// counter program

<div id="counter">0</div>
// div is a section on a page. U can use console of your browser under the elements tab to check the area taken by the div to visualize. 
<button onclick="countUp()">Up</button>
<button onclick="countDown()">Down</button>
// on click events
<script>
  let count = 0;
// counter variable declared outside to prevent copying and running of code multiple times 
  function countUp() {
    count = count + 1;
    updateCount();
  }

  function countDown() {
    count = count - 1;
    updateCount();
  }

  // Not necessary, but BONUS POINTS if you separated this
  // repeated code into a function!
  function updateCount() {
    let counter = document.getElementById('counter');
    counter.innerText = count;
  }
</script>


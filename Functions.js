// create a function to say hello world in js by passing parameters
function hello(people) //declare function by 'function' , name it hello and pass parameter
{
  console.log('hello ' + people); //printing on console of a browser, ';' is mandatory to avoid errors
                                  //indent to make code more readable      
}
people('world'); //passing values(arguments)

//make letters upper case(diy)

//convert inch to cm using functions
function inchToCm(length)
{
  console.log(length * 2.54);
}
inchToCm(15);

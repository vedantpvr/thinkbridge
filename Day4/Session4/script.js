function greetUser(name) {
  let greeting = "Hello, " + name + "!"; 
  console.log(greeting);
  return greeting;
}

document.getElementById("myBtn").addEventListener("click", function() {
  let userName = "Vedant";  
  let message = greetUser(userName);
  document.getElementById("output").innerText = message;
});

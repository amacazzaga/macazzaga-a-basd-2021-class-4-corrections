/*USER FIELD*/
var userInput = document.getElementById("user"); // aca tomo input del html
var userError = document.getElementById("user_error"); // aca tomo el id de la etiqueta <p>
userInput.addEventListener("blur", () => {
  // espero dos eventos, el primero es blur (perder foco),
  // el segundo lo que  ejecute la funcion
  var userValue = userInput.value; /// aca guardo el valor q escribe el usuario
  var userValueHasSpace = userValue.includes(" "); // devuelve true (si esta el string) or false
  // la l es cada elemento del split (string)
  var userValueLength = userValue.split("").filter((l) => l.toLowerCase().match(/[a-z]/i)).length > 6;
    
     //split pasa a un
  //array!,

  if (!(userValueHasSpace && userValueLength)) /* si es false*/ {
    userError.classList.remove("hidden"); // remueve la clase hidden, es decir, muestra el mensaje oculto
  }
});
userInput.addEventListener("focus", () => { 
  userError.classList.add("hidden"); // aca agrego la clase para ocultar el mensaje
});
/*EMAIL FIELD*/
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email_error");
emailInput.addEventListener("blur", () => {
    var emailValue = emailInput.value
    var emailValid = emailValue.includes("@")
    var emailValidEndsWith = emailValue.endsWith(".com")

  if (!(emailValid && emailValidEndsWith)) {
    emailError.classList.remove("hidden");
  }
});
emailInput.addEventListener ("focus", ()=> {
emailError.classList.add("hidden")  
})    
/* AGE FIELD*/
var ageInput = document.getElementById("age")
var ageError = document.getElementById ("age_error")
ageInput.addEventListener ("blur",()=>{
var ageValue = ageInput.value  
var checkAge = Number(ageValue)
var checkIfDecimal = Number.isInteger(checkAge)
console.log(checkIfDecimal)
if (!(checkAge>=18 && checkIfDecimal)){
  ageError.classList.remove ("hidden")
}
})
ageInput.addEventListener ("focus", ()=>{
  ageError.classList.add("hidden")
})
   
  
 


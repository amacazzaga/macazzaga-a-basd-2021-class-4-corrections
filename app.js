/*USER FIELD*/
const userInput = document.getElementById("user"); // aca tomo label del html
const userError = document.getElementById("user_error"); // aca tomo el id de la etiqueta <p>
userInput.addEventListener("blur", () => {
  // espero dos eventos, el primero es blur (perder foco),
  // el segundo lo que  ejecute la funcion
  const userValue = userInput.value; /// aca guardo el valor q escribe el usuario
  const userValueHasSpace = userValue.includes(" "); // devuelve true (si esta el string) or false
  // la l es cada elemento del split (string)
  const userValueLength = userValue.split("").filter((l) => l.toLowerCase().match(/[a-z]/i)).length > 6;
    
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
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email_error");
emailInput.addEventListener("blur", () => {
    const emailValue = emailInput.value
    const emailValid = emailValue.includes("@")
    const emailValidEndsWith = emailValue.endsWith(".com")

  if (!(emailValid && emailValidEndsWith)) {
    emailError.classList.remove("hidden");
  }
});
emailInput.addEventListener ("focus", ()=> {
emailError.classList.add("hidden")  
})    
/* PASSWORD FIELD*/

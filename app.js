/*USER FIELD*/
var userInput = document.getElementById("user"); // aca tomo input del html
var userError = document.getElementById("user_error"); // aca tomo el id de la etiqueta <p>
userInput.addEventListener("blur", () => {
  // espero dos eventos, el primero es blur (perder foco),
  // el segundo lo que  ejecute la funcion
  var userValue = userInput.value; /// aca guardo el valor q escribe el usuario
  var userValueHasSpace = userValue.includes(" "); // devuelve true (si esta el string) or false
  // la l es cada elemento del split (string)
  var userValueLength =
    userValue.split("").filter((l) => l.toLowerCase().match(/[a-z]/i)).length >
    6;

  //split pasa a un
  //array!,

  if (!(userValueHasSpace && userValueLength)) {
    /* si es false*/ userError.classList.remove("hidden"); // remueve la clase hidden, es decir, muestra el mensaje oculto
  }
});
userInput.addEventListener("focus", () => {
  userError.classList.add("hidden"); // aca agrego la clase para ocultar el mensaje
});
/*EMAIL FIELD*/
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email_error");
emailInput.addEventListener("blur", () => {
  var emailValue = emailInput.value;
  var emailValid = emailValue.includes("@");
  var emailValidEndsWith = emailValue.endsWith(".com");

  if (!(emailValid && emailValidEndsWith)) {
    emailError.classList.remove("hidden");
  }
});
emailInput.addEventListener("focus", () => {
  emailError.classList.add("hidden");
});
/* AGE FIELD*/
var ageInput = document.getElementById("age");
var ageError = document.getElementById("age_error");
ageInput.addEventListener("blur", () => {
  var ageValue = ageInput.value;
  var checkAge = Number(ageValue);
  var checkIfDecimal = Number.isInteger(checkAge);
  console.log(checkIfDecimal);
  if (!(checkAge >= 18 && checkIfDecimal)) {
    ageError.classList.remove("hidden");
  }
});
ageInput.addEventListener("focus", () => {
  ageError.classList.add("hidden");
});
/* CITY FIELD*/
var cityInput = document.getElementById("city");
var cityError = document.getElementById("city_error");
cityInput.addEventListener("blur", () => {
  var cityValue = cityInput.value;
  if (!(cityValue.length >= 3)) {
    cityError.classList.remove("hidden");
  }
});
cityInput.addEventListener("focus", () => {
  cityError.classList.add("hidden");
});
/*POST FIELD*/
var postInput = document.getElementById("post");
var postError = document.getElementById("post_error");
postInput.addEventListener("blur", () => {
  var postValue = postInput.value;
  if (!(postValue.length >= 3)) {
    postError.classList.remove("hidden");
  }
});
postInput.addEventListener("focus", () => {
  postError.classList.add("hidden");
});
/* DNI FIELD */
var dniInput = document.getElementById("dni");
var dniError = document.getElementById("dni_error");
dniInput.addEventListener("blur", () => {
  var dniValue = dniInput.value;
  var dniLength = dniValue.length;
  var checkDni = Number(dniValue);
  console.log(checkDni);
  if (!(dniLength > 7 && dniLength <= 8)) {
    dniError.classList.remove("hidden");
  }
});
dniInput.addEventListener("focus", () => {
  dniError.classList.add("hidden");
});
////////started to working with simple redex here, just not to loose the chance to learn///
/* PASSWORD FIELD*/
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("password_error");
passwordInput.addEventListener("blur", () => {
  var passwordValue = passwordInput.value;
  var passwordTest = /^[a-z0-9]{8,50}$/i.test(passwordValue);
  if (!passwordTest) {
    passwordError.classList.remove("hidden");
  }
});
passwordInput.addEventListener("focus", () => {
  passwordError.classList.add("hidden");
});
/* TELEPHONE FIELD*/
var telephoneInput = document.getElementById("telephone");
var telephoneError = document.getElementById("telephone_error");
telephoneInput.addEventListener("blur", () => {
  var telephoneValue = telephoneInput.value;
  var telephoneTest = /^[0-9]{7,50}$/i.test(telephoneValue);
  if (!telephoneTest) {
    telephoneError.classList.remove("hidden");
  }
});
telephoneInput.addEventListener("focus", () => {
  telephoneError.classList.add("hidden");
});

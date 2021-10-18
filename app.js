/*USER FIELD*/
var userInput = document.getElementById("user");
var userError = document.getElementById("user_error");
var userValue = userInput.value;
var userValueHasSpace = userValue.includes(" ");
var userValueLength =
  userValue.split("").filter((l) => l.toLowerCase().match(/[a-z]/i)).length > 6;
if (!(userValueHasSpace && userValueLength)) {
  userError.classList.remove("hidden");
}
userInput.addEventListener("focus", () => {
  userError.classList.add("hidden");
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
/*ZIP FIELD*/
var zipInput = document.getElementById("zip");
var zipError = document.getElementById("zip_error");
zipInput.addEventListener("blur", () => {
  var zipValue = zipInput.value;
  if (!(zipValue.length >= 3)) {
    zipError.classList.remove("hidden");
  }
});
zipInput.addEventListener("focus", () => {
  zipError.classList.add("hidden");
});
/* DNI FIELD */
var dniInput = document.getElementById("dni");
var dniError = document.getElementById("dni_error");
dniInput.addEventListener("blur", () => {
  var dniValue = dniInput.value;
  var dniLength = dniValue.length;
  var checkDni = Number(dniValue);
  if (!(dniLength > 7 && dniLength <= 8)) {
    dniError.classList.remove("hidden");
  }
});
dniInput.addEventListener("focus", () => {
  dniError.classList.add("hidden");
});
/* PASSWORD FIELD*/
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("password_error");
passwordInput.addEventListener("blur", () => {
  var passwordValue = passwordInput.value;
  var passwordTest = /^[a-z0-9]{8,15}$/i.test(passwordValue);
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
  var telephoneTest = /^[0-9]{7,12}$/i.test(telephoneValue);
  if (!telephoneTest) {
    telephoneError.classList.remove("hidden");
  }
});
telephoneInput.addEventListener("focus", () => {
  telephoneError.classList.add("hidden");
});
/*ADDRESS*/
var addressInput = document.getElementById("address");
var addressError = document.getElementById("address_error");
addressInput.addEventListener("blur", () => {
  var addressValue = addressInput.value;
  var addressTest = /^[a-z0-9 ]{5,20}$/i.test(addressValue);
  if (!addressTest) {
    addressError.classList.remove("hidden");
  }
});
addressInput.addEventListener("focus", () => {
  addressError.classList.add("hidden");
});
/*BUTTON*/
document.getElementById("button_send").addEventListener("click", () => {
  if (addressError.classList.contains("hidden")&& addressInput.value) {
    window.alert("Address : your subcsription was succesful  :"+" "+addressInput.value)
  }else window.alert("Address: your subscription fail at :"+ " " +addressError.innerHTML)
  if (telephoneError.classList.contains("hidden")&& telephoneInput.value) {
    window.alert("telephone : your subcsription was succesful  :"+" "+telephoneInput.value)
  }else window.alert("telephone: your subscription fail at :"+ " " +telephoneError.innerHTML)
  if (userError.classList.contains("hidden")&& userInput.value) {
    window.alert("user : your subcsription was succesful  :"+" "+userInput.value)
  }else window.alert("user: your subscription fail at :"+ " " +userError.innerHTML)
  if (emailError.classList.contains("hidden")&& emailInput.value) {
    window.alert("email : your subcsription was succesful  :"+" "+emailInput.value)
  }else window.alert("email: your subscription fail at :"+ " " +emailError.innerHTML)
  if (passwordError.classList.contains("hidden")&& passwordInput.value) {
    window.alert("password : your subcsription was succesful  :"+" "+passwordInput.value)
  }else window.alert("password: your subscription fail at :"+ " " +passwordError.innerHTML)
  if (dniError.classList.contains("hidden")&& dniInput.value) {
    window.alert("dni : your subcsription was succesful  :"+" "+dniInput.value)
  }else window.alert("dni: your subscription fail at :"+ " " +dniError.innerHTML)
  if (cityError.classList.contains("hidden")&& cityInput.value) {
    window.alert("city : your subcsription was succesful  :"+" "+cityInput.value)
  }else window.alert("city: your subscription fail at :"+ " " +cityError.innerHTML)
  if (zipError.classList.contains("hidden")&& zipInput.value) {
    window.alert("zip : your subcsription was succesful  :"+" "+zipInput.value)
  }else window.alert("zip: your subscription fail at :"+ " " +zipError.innerHTML)
  if (ageError.classList.contains("hidden")&& ageInput.value) {
    window.alert("age : your subcsription was succesful  :"+" "+ageInput.value)
  }else window.alert("age: your subscription fail at :"+ " " +ageError.innerHTML)

});

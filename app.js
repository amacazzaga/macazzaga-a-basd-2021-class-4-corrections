/*USER FIELD*/
var nameInput = document.getElementById("name");
var nameError = document.getElementById("name_error");
nameInput.addEventListener("blur", () => {
  var nameValue = nameInput.value;
  var nameTest = /^[a-z ]{8,25}$/i.test(nameValue);
  if (!nameTest) {
    nameError.classList.remove("hidden");
  }
});
nameInput.addEventListener("focus", () => {
  nameError.classList.add("hidden");
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
// GET MODAL////////
var modal = document.getElementById("myModal");
// CLICK TO CLOSE THE MODAL/////
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

/*BUTTON*/
document.getElementById("button_send").addEventListener("click", () => {
  var myArrInputList = [
    addressInput,
    telephoneInput,
    passwordInput,
    dniInput,
    zipInput,
    cityInput,
    ageInput,
    emailInput,
    nameInput,
  ];
  var arrError = myArrInputList.filter((i) => {
    var errorRelated = document.getElementById(i.id + "_error");
    if ((!errorRelated.classList.contains("hidden") && i.value) || !i.value) {
      return true;
    } else return false;
  });
  if (arrError.length > 0) {
    window.alert("there is an error, please, check your information field");
  } else {
    var baseUrl = "https://curso-dev-2021.herokuapp.com/newsletter?";
    var queryParams = myArrInputList
      .map((i) => {
        return i.id + "=" + i.value;
      })
      .join("&");
    ////FETCH///////
    var myNameFields = [
      "Address",
      "Telephone",
      "Password",
      "Dni",
      "Zip",
      "City",
      "Age",
      "Email",
      "Name",
    ];
    var values = [
      addressInput.value,
      telephoneInput.value,
      passwordInput.value,
      dniInput.value,
      zipInput.value,
      cityInput.value,
      ageInput.value,
      emailInput.value,
      nameInput.value,
    ];
    fetch(baseUrl + queryParams)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else throw Error(res.status);
      })
      .then((dat) => {
        modal.style.display = "block"; /*MODAL SHOWS*/
        var msg = "<ul>";
        for (var i = 0; i < myNameFields.length; i++) {
          msg += `<li>${myNameFields[i]}:${values[i]}</li>`;
        }
        msg += "</ul>";
        modal.innerHTML = msg;
      })
      .catch((err) => console.log(err));
  }
});


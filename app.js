
const userInput = document.getElementById("user")
const userError = document.getElementById("user_error")
userInput.addEventListener("blur", ()=>{ // perder foco
    const userValue = userInput.value /// aca guardo el valor q escribe el usuario
    const userValueHasSpace = userValue.includes(" ")
    const userValueLength = userValue.split("")
    .filter(l=>l.toLowerCase().match(/[a-z]/i))// la L es cada elemento del split (string)
    .length > 6
    if (!(userValueHasSpace && userValueLength)){ 
     userError.classList.remove("hidden")
    }
})
userInput.addEventListener ("focus", ()=>{ // ganar foco
    userError.classList.add("hidden") // aca agrego la clase  
})

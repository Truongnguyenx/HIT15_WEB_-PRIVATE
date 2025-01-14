const input = document.querySelector(".input_field")
const checkButton = document.querySelector(".check_btn")
const result = document.querySelector(".result")
const outputString = document.querySelector(".output_string")

checkButton.addEventListener("click", function(e){
    inputString = input.value

    if(inputString.trim() === ""){
        result.innerHTML = "Input is not valid."
        return result
    }

    let formatedInput = inputString.toLowerCase()
    let reverseInput = formatedInput.split("").reverse().join("")
    if(formatedInput === reverseInput){
        result.innerHTML = "This is a palindrome."
    } else{
        result.innerHTML = "This is not a palindrome."
    }

    outputString.innerHTML = ""
    for( let i = 0; i < inputString.length; i++){
        let charDiv = document.createElement("span")
        if(formatedInput[i] === reverseInput[i]){
            charDiv.style.backgroundColor = "green"
            charDiv.textContent = formatedInput[i]
        } else{
            charDiv.style.backgroundColor = "red"
            charDiv.textContent = formatedInput[i]
        }
        outputString.appendChild(charDiv)
    }
})
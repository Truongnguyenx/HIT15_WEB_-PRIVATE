const input = document.querySelector("#input")
const addButton = document.querySelector("button")
const wrongChar = document.querySelector(".char-wrong")
const correctChar = document.querySelector(".char-correct")
const resultNotification = document.querySelector(".result-notification")
const keyChecking = document.querySelector(".key-checking")

let countWrongChar 
let countCorrectChar 
let currentIndex 
let inputString = ""

function checkKey(e){ 
    const charList = document.querySelectorAll(".key-checking div")
    let charCell = charList[currentIndex]
    e.preventDefault()
    if(e.key === inputString[currentIndex]){
        charCell.style.backgroundColor = "lightblue"
        countCorrectChar++
    } else{
        charCell.style.backgroundColor = "red"
        countWrongChar++
    }
    currentIndex++
    
    if(currentIndex === inputString.length){
        wrongChar.innerHTML = countWrongChar
        correctChar.innerHTML = countCorrectChar
        resultNotification.style.fontSize = "30px"
        if(countWrongChar === 0){
            resultNotification.textContent = "bạn viết đúng rồi!"
        } else{
            resultNotification.textContent = "bạn đã sai chính tả!"
        }
        document.body.removeEventListener("keydown", checkKey)
    }
}

addButton.addEventListener("click", function(){
    wrongChar.innerHTML = 0
    correctChar.innerHTML = 0
    keyChecking.innerHTML = ""
    resultNotification.innerHTML = ""
    inputString = `${input.value}`
    for( let char of inputString){
        let charCell = document.createElement("div")
        charCell.style.backgroundColor = "orange"
        charCell.textContent = char
        keyChecking.appendChild(charCell)
    }

    countWrongChar = 0
    countCorrectChar = 0
    currentIndex = 0

    document.body.addEventListener("keydown", checkKey)
})




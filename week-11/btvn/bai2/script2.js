const input = document.querySelector("#input")
const button = document.querySelector("button")
const evenCounted = document.querySelector(".evenCount")
const oddCounted = document.querySelector(".oddCount")
const primeCounted = document.querySelector(".primeCount")
const numTable = document.querySelector(".numTable")

button.addEventListener("click", function(){
    const numbers = parseInt(input.value)

    console.log(numbers)
    function isEven(number){
        return number % 2 == 0
    }

    function isOdd(number){
        return number %2 != 0
    }

    function isPrime(number){
        if(number < 2) return false
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0) return false
        }
        return true
    }

    let evenCount = 0
    let oddCount = 0
    let primeCount = 0
    numTable.innerHTML = "";
    
    for(let i = 0; i < numbers; i++){
        let number = document.createElement("div")

        if(isEven(i)){
            number.style.backgroundColor = "#FDDB3A"
            evenCount++
            if(isPrime(i)){
                number.style.backgroundColor = "#FD5E53"
                primeCount++
            }
        } else{
            number.style.backgroundColor = "#79d7be"
            oddCount++
            if(isPrime(i)){
                number.style.backgroundColor = "#FD5E53"
                primeCount++
            }
        }

        number.innerHTML = i
        numTable.appendChild(number)
    }
    primeCounted.innerHTML = primeCount
    evenCounted.innerHTML = evenCount
    oddCounted.innerHTML = oddCount
})

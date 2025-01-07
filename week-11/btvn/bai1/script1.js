const output = document.querySelector(".output")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const button = document.querySelector("button")

button.addEventListener("click", function (){
    let bmi = weight.value / (height.value ** 2)
    fixedBmi = bmi.toFixed(2)
    if (bmi < 18.5 && bmi > 0) {
        output.textContent = `BMI của bạn: ${fixedBmi} - Bạn quá gầy.`
    } else if (bmi >= 18.5 && bmi < 24.9) {
        output.textContent = `BMI của bạn: ${fixedBmi} - Bạn đang rất khỏe mạnh.`
    } else if (bmi >= 25 && bmi < 29.9) {
        output.textContent = `BMI của bạn: ${fixedBmi} - Bạn đang bị thừa cân.`
    } else if (bmi >= 30 && bmi < 34.9) {
        output.textContent = `BMI của bạn: ${fixedBmi} - Bạn đang bị béo phì cấp độ 1.`
    } else if (bmi >= 35 && bmi < 39.9) {
        output.textContent = `BMI của bạn: ${fixedBmi} - Bạn đang bị béo phì cấp độ 2.`
    } else if (bmi >= 40) {
        output.textContent = `BMI của bạn: ${fixedBmi} - Bạn đang bị béo phì cấp độ 3.`
    } else{
        output.textContent = `Thông tin nhập không chính xác.`
    }
})

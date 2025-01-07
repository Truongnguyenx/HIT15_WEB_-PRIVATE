const width = document.querySelector("#width")
const height = document.querySelector("#height")
const padding = document.querySelector("#padding")
const margin = document.querySelector("#margin")
const bgColor = document.querySelector("#bg-color")
const link = document.querySelector("#link")
const textColor = document.querySelector("#text-color")
const content = document.querySelector("#content")
const draw = document.querySelector(".draw")
const reset = document.querySelector(".reset")
const shape = document.querySelector(".shape")
const inputs = document.querySelectorAll("input")

draw.addEventListener("click", function(){
    shape.style.width = width.value
    shape.style.height = height.value
    shape.style.padding = padding.value
    shape.style.margin = margin.value
    shape.style.backgroundColor = bgColor.value
    shape.style.backgroundImage = `url(${link.value})`
    shape.style.color = textColor.value
    shape.textContent = content.value
})

reset.addEventListener("click", function(){
    shape.removeAttribute("style")
    for(let input of inputs){ 
        input.value = ""
    }
})
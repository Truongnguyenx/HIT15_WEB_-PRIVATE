const input = document.querySelector("input")
const addButton = document.querySelector(".add_button")
const taskList = document.querySelector(".task_list")


addButton.addEventListener("click", function(){
    let task = input.value.trim()
    if(task !== ""){
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${task}</span><button class="delete_button">Delete</button>`
        taskList.appendChild(listItem)
        input.value = ""
        del(listItem.querySelector(".delete_button"))
        console.log(listItem.querySelector(".delete_button"))
    }
})

function del(deleteButton){
    deleteButton.addEventListener("click", function(){
        taskList.removeChild(deleteButton.parentElement);
    })
}


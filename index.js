console.log("hey")
let btn = document.getElementById("name")
btn.addEventListener('click', ()=> {

    counter++
    mini.innerHTML = `${counter}`

}
) 
let mini = document.getElementById("mini")
let counter = 0
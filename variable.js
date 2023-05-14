var a = 45 // contains 45
console.log(a)

// no. are not alowed while taking variable

//var 9hey = 67
//console.log(hey6)

let clickmebtn = document.querySelector('button');
clickmebtn.addEventListener('click', inputmsg);

function inputmsg(){
    let name = prompt('enter the Name of student');
    clickmebtn.textContent = 'roll no.1' + name;
}

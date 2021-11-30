console.log('test');

let inputs = document.querySelectorAll('input');
let inputsArray = Array.from(inputs);
let tablette = document.querySelector('#text');
console.log(tablette);

function check(e){
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);
    let inputId = e.target.id;
    let inputValue = e.target.value;
    tablette.textContent = inputValue;
}



inputsArray.forEach(input => {
    input.addEventListener('change', check);
});

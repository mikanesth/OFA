console.log('test');

let inputs = document.querySelectorAll('input');
let inputsArray = Array.from(inputs);
console.log(inputsArray);

function target(e){
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);
}



inputsArray.forEach(input => {
    input.addEventListener('change', target);
});

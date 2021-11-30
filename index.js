let inputs = document.querySelectorAll('input');
let inputsArray = Array.from(inputs);
let formOFA = document.querySelector('[name="POFA"]');
let tablette = document.querySelector('#text');
let poidsIdeal;
let Bmi;
let dosesPOFA = document.querySelector('#dosesPOFA');

function checkNumbers(e){
    tablette.textContent = "";
    e.target.style.background = "white";
    let inputId = e.target.id;
    let inputValue = e.target.value;
    if(inputId.includes('taille')){
        //console.log(inputValue)
        if(inputValue < 100 || inputValue > 220){
            e.target.style.background = 'rgba(255,92,92,0.3)';
            tablette.textContent = 'la taille est hors range';
            return;
        }
        tablette.textContent = "la taille est OK";
        e.target.style.background = 'rgba(50,205,50,0.3)';
        return;  
    }    
    //console.log(inputValue)
    if(inputValue < 30 || inputValue > 200){
        tablette.textContent = 'le poids est hors range';
        return;
    }
    tablette.textContent = "le poids est OK";
    return;    
}

function idealWeight(t,s){
    if(s){
        return t-100-(t-150)/2.5
    }
    return t-100-(t-150)/4
}

function ketaCalc(iw){
    let dose = 0.75*iw;
    if(dose > 50){
        return 50
    }
    return Math.round(dose);
}

function lidoCalc(p){
    let dose = 1.5*p;
    if(dose > 100){
        return 100
    }
    return Math.floor(dose)
}
function magCalc(p){
    let dose = p*30;
    if(dose>3000){
        return 3
    }
    return dose/1000;
}
function dexaCalc(p){
    let dose = p*0.1;
    if(dose > 8){
        return 8
    }
    return Math.round(dose);
}



function finalCalcul(e){
    e.preventDefault();
    let taille = (e.target[0].value);
    let tailleMetre = taille /100;
    let poids = e.target[1].value;
    let femme = e.target[2].checked;
    Bmi = poids/(tailleMetre*tailleMetre);
    poidsIdeal = idealWeight(taille, femme);
    let ketamine = ketaCalc(poidsIdeal);
    let lidocaine = lidoCalc(poids);
    let magnesium = magCalc(poids);
    let dexa = dexaCalc(poids);
    let ivSpeed = poids*1.5/10;
    dosesPOFA.innerHTML = `
    <p>dose de Ketamine: ${ketamine} mg</p>
    <p> dose de lidocaine: ${lidocaine} mg</p>
    <p> dose Magnesium (MgSO4): ${magnesium} g</p>
    <p>dose de dexamethasone: ${dexa} mg</p>
    `;
    console.log(ketamine, lidocaine, magnesium, dexa, ivSpeed);      
}



formOFA.addEventListener('submit', finalCalcul);

inputsArray.forEach(input => {
    if(input.type == 'number'){
        input.addEventListener('keyup', checkNumbers)
    };
});

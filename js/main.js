const age = document.querySelector('.age');

const kilomiters = document.querySelector('.km');

const names = document.querySelector('.names');

const base = 0.21

const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    console.log(age.value);
    console.log(kilomiters.value);
    kilomiters.value
    document.getElementById("tkname").innerHTML += names.value;
    document.getElementById("tkage").innerHTML += age.value;
    let prezzo = (kilomiters.value * base);
    if (age.value < 18){
        prezzo = prezzo - (prezzo * 0.2)
    } else if (age.value > 65){
        prezzo = prezzo - (prezzo * 0.4)
    }
    document.getElementById("tiket").innerHTML += (`${prezzo.toFixed(2)}`);
    console.log(`Il prezzo è: ${prezzo.toFixed(2)}€`);
})














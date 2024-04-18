const age = document.querySelector('.age').value;

const kilomiters = document.querySelector('.km').value;

const base = 0.21

let prezzo = (kilomiters * base)

if (age < 18){
    prezzo = prezzo - (prezzo * 0.2)
} else if (age > 65){
    prezzo = prezzo - (prezzo * 0.4)
}

const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    console.log(age);
    console.log(kilomiters);
    console.log(`Il prezzo è: ${prezzo.toFixed(2)}€`)
    document.getElementById("tiket").innerHTML = (`Il prezzo è: ${prezzo.toFixed(2)}€`)
})












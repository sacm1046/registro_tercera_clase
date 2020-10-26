//Variable 
let nombre = 'juan'
//Constante
const apellido = 'perez'

//Tipo de variables

//string "palabra", 'palabra', `palabra`
let palabra = 'chao'
//number 1 , 2 , 5, -100 >> integer o float
let numero = 25.5
//boolean true - false, 0 - 1
let booleano = true
//Array ['hola', 5, true, ['chao', 5]]
let lista = ['hola', 5, true, ['chao', 5]]
//Objects { nombre: 'pablo', edad: 50 }
let perro = {
    edad: 10,
    color: 'negro',
    raza: 'labrador',
    estaVivo: true
}
let persona = {
    edad: 20,
    isWoman: false
}

//condición de entrada a una disco
//mujer y esta entre 19 y 21, entra gratis

/* if (persona.edad >= 19 && persona.edad <= 21) {
    //persona.isWoman === false ? console.log('Entrada gratis') : console.log('Son 100.000' opción if ternario
    if (persona.isWoman === false) {
        console.log('Entrada gratis')
    } else {
        console.log('Son 100.000')
    }
} else {
    console.log('Son 100.000')
}
 */

/* if (persona.edad >= 19 && persona.edad <= 21) {
    console.log('Entrada gratis')
} else if (persona.edad >= 22 && persona.edad <= 25) {
    console.log('Son 80.000')
} else {
    console.log('Son 100.000')
} */

/* switch (persona.edad) {
    case 18:
        console.log('en la quema')
    break;
    case 19:
    case 20:
    case 21:
        console.log('gratis')
    break;
    default:
        console.log('no permitido')
} */

let invitados = [
    { nombre: 'invitado 1', edad: 20, enLista: true },
    { nombre: 'invitado 2', edad: 23, enLista: true },
    { nombre: 'invitado 3', edad: 20, enLista: false },
    { nombre: 'invitado 4', edad: 25, enLista: true },
    { nombre: 'invitado 5', edad: 22, enLista: true },
    { nombre: 'invitado 6', edad: 20, enLista: true },
]

let suma = 0;
let sumaMap = 0;

for (let x = 0; x < invitados.length; x++) {
    suma = suma + invitados[x].edad
}

let enLista = invitados.filter(invitado => invitado.enLista)
enLista.map(invitado => sumaMap = sumaMap + invitado.edad)

console.log(enLista)
console.log(sumaMap)
/* console.log(suma/ invitados.length)
console.log('total de invitados: ', invitados.length) */

let mybutton = document.getElementById('addButton')
let mycounter = document.getElementById('counter')
let myCustomForm = document.getElementById('form')
let myInputCustom = document.getElementById('inputText')
let myValue = document.getElementById('value')
let value = 0;
let word = "";


const controlClass = (class1, class2) => {
    if (value > 5) {
        mycounter.classList.remove(class1)
        mycounter.classList.add(class2)
    } else {
        mycounter.classList.remove(class2)
        mycounter.classList.add(class1)
    }
}


const controlValue = () => {
    value++
    mycounter.innerHTML = value
}


mybutton.addEventListener('click', () => {
    controlValue()
    controlClass('colorTextGreen', 'colorTextYellow')
})






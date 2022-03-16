const botonEnviar = document.querySelectorAll('button');
const nombre = document.querySelector('.nombre');
const correo = document.querySelector('.correo');
const queja = document.querySelector('.queja');

let enviados = [];
let contador = 0;

botonEnviar.forEach(clic => clic.addEventListener('click',(e) =>{

    if (nombre.value != '' && correo.value != '' && queja.value != '') {
        let datos = {
            nombre: nombre.value,
            correo: correo.value,
            queja: queja.value,
        }
    
        enviados[contador] = datos; 
        comprobar(enviados,contador);
        nombre.value = null;
        correo.value = null;
        queja.value = null;
        contador = contador + 1;
    }
    else alert("Rellene todos los campos")
}));

const comprobar = (array, i) => {

    if (i > 2) {
        enviados.pop();
        alert("Solo podemos recibir 3 quejas, intentelo mas tarde");
    }
    else console.log("Queja enviada correctamente");
    
}



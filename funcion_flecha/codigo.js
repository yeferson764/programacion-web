const botonEnviar = document.querySelectorAll('button');
const nombre = document.querySelector('.nombre');
const correo = document.querySelector('.correo');
const queja = document.querySelector('.queja');

let enviados = [];
let contador = 0;

botonEnviar.forEach(clic => clic.addEventListener('click',(e) =>{

    if (nombre.value != '' && correo.value != '' && queja.value != '') {
        guardar(nombre, correo, queja, contador);
        nombre.value = null;
        correo.value = null;
        queja.value = null;
        contador = contador + 1;
    }
    else alert("Rellene todos los campos")

}));

const guardar = (nombres, correos, quejas, i) => {

    let datos = {
        nombre: nombres.value,
        correo: correos.value,
        queja: quejas.value,
    }

    enviados[i] = datos; 
    console.log("Enviados: " + enviados[i]);

    if (i > 2) {
        enviados.pop();
        alert("Solo podemos recibir 3 quejas, intentelo mas tarde");
    }
    
}



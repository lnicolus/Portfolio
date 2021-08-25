function capitalizeFirstLetter(str) {
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
  }

function tarea() {
    var numeroIngresado = Number(prompt("Ingrese su edad"));    
    if (isNaN(numeroIngresado)) {
        alert("Ingreso no válido");
        prompt("Ingrese su edad");
    } else if (numeroIngresado < 18) {         
        alert("Usted es menor de edad y no puede corregir mi proyecto");
    } else if (numeroIngresado >= 18) {
        alert("Su edad es " + numeroIngresado + ", bienvenido! puede corregir mi proyecto");
    }     
}

function tarea2() {
    let condiciones =  confirm("es mayor de 18 años?");
    if(!condiciones){
        alert('no puede apostar con nosotros')
    } else {
        let username = prompt('ingrese nombre de usuario').toLowerCase(); 
        let password = prompt('ingrese contraseña')
        let password2 = prompt('vuelva a ingresar contraseña')
        let danger = false;

            if(password === password2){
                alert('inicio sesión con su usuario ' + username + '\n la apuesta mínima es $1000') 
                let monto = Number(prompt("ingrese monto a apostar"));
                    if (isNaN(monto) || monto < 1000) {
                        alert("ingreso no válido");
                    } else {
                            let apuesta = prompt('elija un palo al que apostar: espada, basto, copa u oro').toLowerCase();
                            switch(apuesta){
                                case 'espada':
                                    alert('apostó ' + monto + ' a espada');
                                    break;
                                case 'basto':
                                    alert('apostó ' + monto + ' a basto');
                                    break;
                                case 'copa':
                                    alert('apostó ' + monto + ' a copa');
                                    break;
                                case 'oro':
                                    alert('apostó ' + monto + ' a oro');
                                    break;
                                default:
                                    alert('debe ingresar un palo válido')
                                } 
                            }
                }else if(password != password2) {
                    danger = true;
                    alert( username + ' tus contraseñas no coinciden');
                    if(danger) {
                    alert('intento ilegal de acceso');
                    }
                 }        
    } 
}

function tarea3() {

    const capitalize = (str) => {
        if(typeof str === 'string') {
            return str.replace(/^\w/, c => c.toUpperCase());
        } else {
            return '';
        }
    };

    let contador = 0;    

    do {

    alert('Ingrese una palabra de saludo, un nombre y una pregunta \npara tres personas distintas ');

    let saludo = prompt('ingrese una palabra de saludo');

    let nombre = prompt('ingrese el nombre de a quién desea preguntar');    

    let pregunta = prompt('ingrese su pregunta');

    console.log(saludo + ', ' + capitalize(nombre) + ', ' + pregunta + '?');

    alert(saludo + ', ' + capitalize(nombre) + ', ' + pregunta + '?');

    contador++

    } while (contador < 3);
}


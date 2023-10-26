var saldo = 5000
var seguir

alert("Bienvenido a su cajero virtual. Pulse aceptar para continuar")

do {
    var operacion = Number(prompt("¿Qué operación desea realizar? \n 1. Depósito \n 2. Extracción \n 3. Consultar saldo \n 4. Finalizar"))

    switch (operacion) {
        case 1: /*Depósito*/
            deposito = Number(prompt("Ingrese el monto que desea depositar"))
            saldo = saldo + deposito
            alert("Depósito realizado con éxito. Su saldo actual es de: $" + saldo)   
            seguir = confirm("¿Desea seguir operando?")
            break;

        case 2: /*Extracción*/
            extraccion = Number(prompt("Ingrese el monto que desea extraer"))
            if(saldo > extraccion){
                saldo = saldo - extraccion
                alert("Extracción realizada con éxito. Su saldo actual es de: $" + saldo)
            } else {
                alert("Saldo insuficiente")
            }
            seguir = confirm("¿Desea seguir operando?")
            break;       
            

        case 3: /*Consultar saldo*/
            alert("Su saldo actual es de: $" + saldo)
            seguir = confirm("¿Desea seguir operando?")
            break;

        case 4: /*Finalizar*/
            break;
    
        default:
            alert("Usted ha ingresado una opción NO válida. Inténtelo nuevamente.")
            break;
    }
    
} while (seguir);

alert("Muchas gracias por utilizar su cajero virtual. Que tenga un buen día!")

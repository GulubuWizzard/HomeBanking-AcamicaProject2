//Declaración de variables
var nombreUsuario = "Raul Loureiro";
var saldoCuenta = 10800;
var limiteExtraccion = 3000;
var saldoAgua = 350;
var saldoTelefono = 425;
var saldoLuz=210;
var saldoInternet=570;
var cuentasAmigas = [7654321, 1234567];
var userPassword = 123456;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que cree
function sumaDinero(dinero) {
    saldoCuenta += dinero;
}

function restaDinero(dinero){
    saldoCuenta -= dinero;
}

function agregarCuentaAmiga(){
    var nuevaCuentaAmiga = prompt("Por favor, ingrese el numero de cuenta a la cual desea agregar como Cuenta Amiga");
    if (nuevaCuentaAmiga===null || nuevaCuentaAmiga===""){
        return;
    }
    var cuentaAmiga = parseInt(nuevaCuentaAmiga);
    if (isNaN(cuentaAmiga)){
        alert("Por favor ingresar solo numeros");
    }
    else {
        cuentasAmigas.push(cuentaAmiga);
        alert("Se ha dado de alta una nueva Cuenta Amiga\nYa puede realizar transferencias a la cuenta: "+cuentaAmiga);
    }
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    nuevoLimiteExtraccion = prompt("Indique su nuevo limite de extraccion");
    if (nuevoLimiteExtraccion===null || nuevoLimiteExtraccion===""){
        return;
    }
    limiteExtraccion =parseInt(nuevoLimiteExtraccion);

    if (isNaN(limiteExtraccion)){
        alert("Por favor ingresar solo numeros");
    }
    else {
        actualizarLimiteEnPantalla();
        alert ("Tu nuevo limite de extraccion es " + limiteExtraccion+"$");
    }
}

function extraerDinero() {
    var nuevaExtraccion = prompt("Indique el monto a extraer");
    if (nuevaExtraccion===null || nuevaExtraccion===""){
        return;
    }
    var extraccion = parseInt(nuevaExtraccion);
    var saldoAnterior = saldoCuenta;
    if (isNaN(extraccion)){
        alert("Por favor ingresar solo numeros");
    }
    else{
        if (extraccion>saldoCuenta) {
            alert("Saldo insuficiente. Tu saldo actual es " + saldoCuenta +"$");
        }
        else if (extraccion > limiteExtraccion){
            alert("El monto solicitado supera tu limite de extraccion");
        }
        else if (extraccion%100!==0) {
            alert("Este cajero solo entrega billetes de 100$. Por favor ingresa un monto multiplo de 100");
        }
        else {
        restaDinero (extraccion);
        actualizarSaldoEnPantalla();
        alert ("Has Extraido: " + extraccion+"$" + "\nSaldo anterior: " + saldoAnterior+"$" + "\nSaldo actual: " + saldoCuenta+"$");}
        }
}

function depositarDinero() {
    var nuevoDeposito = prompt("Indica el monto a depositar");
    if (nuevoDeposito===null || nuevoDeposito===""){
        return;
    }
    var deposito = parseInt(nuevoDeposito);
    var saldoAnterior = saldoCuenta;
    if (isNaN(deposito)){
        alert("Por favor ingresar solo numeros");
    }
    else{
        sumaDinero (deposito);
        actualizarSaldoEnPantalla();
        alert ("Has Depositado: " + deposito+"$" + "\nSaldo anterior: " + saldoAnterior+"$" +"\nSaldo actual: " + saldoCuenta+"$");
    }
}

function pagarServicio() {
   var servicioAPagar = prompt("Ingresa el numero correspondiente al servicio que deseas pagar:\n1-Agua ("+saldoAgua+"$)"+"\n2-Telefono ("+saldoTelefono+"$)"+"\n3-Luz ("+saldoLuz+"$)"+"\n4-Internet ("+saldoInternet+"$)");
   var saldoAnterior = saldoCuenta;
   if (servicioAPagar===null || servicioAPagar===""){
    return;
}
var saldoAPagar;
var servicio;
    switch(servicioAPagar){
            case"1":
                saldoAPagar = saldoAgua;
                servicio="Agua";
            break;
            case"2":
                saldoAPagar = saldoTelefono;
                servicio="Telefono";
            break;
            case"3":
                saldoAPagar = saldoLuz;
                servicio="Luz";
            break;
            case"4":
                saldoAPagar = saldoInternet;
                servicio="Internet";
            break;
            default:
                saldoAPagar = 0;
                alert("Por favor, ingrese una opcion valida");
        }
        if (saldoAPagar>saldoCuenta) {
                alert("Saldo insuficiente para abonar el servicio. Tu saldo actual es " + saldoCuenta +"$");
        }
        else if (saldoAPagar===0){
            return;
        }
        else{
                restaDinero(saldoAPagar);
                actualizarSaldoEnPantalla();
                alert ("Has pagado el servicio " +servicio+ "\nSaldo anterior: " + saldoAnterior+"$" +"\nDinero descontado: " + saldoAPagar+"$"+"\nSaldo actual: " + saldoCuenta+"$");
            }
    }
 


function transferirDinero() {
    var nuevoMontoTransferir = prompt("Ingrese el monto que desea transferir:");
    if (nuevoMontoTransferir===null || nuevoMontoTransferir===""){
        return;
    }
    var montoTransferir=parseInt(nuevoMontoTransferir);
    var saldoAnterior= saldoCuenta;
    if (isNaN(montoTransferir)){
        alert("Por favor ingresar solo numeros");
    }
    else if (montoTransferir>saldoCuenta) {
            alert("Saldo insuficiente para realizar la transferencia. Su saldo actual es " + saldoCuenta +"$");
        }
    else {
            var cuentaDestino=parseInt(prompt("Por favor, indique el numero de cuenta al cual desea realizar la transferencia"));
            if (cuentasAmigas.includes(cuentaDestino)){
                restaDinero(montoTransferir);
                actualizarSaldoEnPantalla();
                alert("Se ha transferido: "+montoTransferir+"$"+"\nCuenta Destino: "+cuentaDestino);

            }
            else{
                alert("No es posible realizar la transferencia. Solamente esta permitido realizar transferencias entre cuentas amigas")
            }
        }
    }

function iniciarSesion() {
    var intentoPassword = parseInt(prompt("Por favor, ingrese la codigo de su cuenta:"));
    if (intentoPassword!==userPassword){
            saldoCuenta=0;
            alert("Codigo incorrecto: Por cuestiones de seguridad, tu dinero ha sido retenido.")
            actualizarSaldoEnPantalla();
        ;
    }
        else{
            alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones")
            
        }
    }


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
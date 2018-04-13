//Declaración de variables
var nombreUsuario = "Raul Loureiro";
var saldoCuenta = 10800;
var limiteExtraccion = 3000;
var saldoAgua = 350;
var saldoTelefono = 425;
var saldoLuz=210;
var saldoInternet=570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
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

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = parseInt (prompt("Indique su nuevo limite de extraccion"));
    actualizarLimiteEnPantalla();
    alert ("Tu nuevo limite de extraccion es " + limiteExtraccion+"$");
}

function extraerDinero() {
    var extraccion = parseInt (prompt("Indique el monto a extraer"));
    var saldoAnterior = saldoCuenta;
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

function depositarDinero() {
    var deposito = parseInt (prompt("Indica el monto a depositar"));
    var saldoAnterior = saldoCuenta
    sumaDinero (deposito);
    actualizarSaldoEnPantalla();
    alert ("Has Depositado: " + deposito+"$" + "\nSaldo anterior: " + saldoAnterior+"$" +"\nSaldo actual: " + saldoCuenta+"$");
}

function pagarServicio() {
    prompt ()
}

function transferirDinero() {

}

function iniciarSesion() {

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


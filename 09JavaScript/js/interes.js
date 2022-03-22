
function validarn(p1){
    var teclado = (document.all)? p1.keyCode : p1.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);

}

function interes(){

    var valor = document.formulario.cantidad.value;

    var capitaln =parseInt(valor);

    var meses = document.formulario.meses.value;
    
    var mesesn = parseInt(meses);
    
    while (mesesn > 47){
        alert("El maximo de meses que puede invertir es de 48")
        return false;  

    }

    var sueldo = Math.pow(1.02, mesesn)*capitaln
    
    document.formulario.sueldoI.value = "$" + sueldo;
}

function borrard(){
    document.formulario.cantidad.value = "";
    document.formulario.meses.value = "";
    document.formulario.sueldoI.value = ""

}
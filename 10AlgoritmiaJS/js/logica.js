//problema 1

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;

    var p1_palabras = p1_input.split(' ').reverse();

    var p1_espacio=' ';

    p1_palabras.forEach(function(palabra, i){

        if( i != 0 || i != p1_palabras.length ){
            p1_espacio += ' ';
            p1_espacio += palabra;
        }
        
    })

    document.querySelector('#p1-output').textContent=p1_espacio;

}
  

//problema 2

//validar numeros
function validarn(p2){
    var teclado = (document.all)? p2.keyCode : p2.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);

}

function problema2(){

    var X1 = document.querySelector('#p2-x1').value;
    var X2 = document.querySelector('#p2-x2').value;
    var X3 = document.querySelector('#p2-x3').value;
    var X4 = document.querySelector('#p2-x4').value;
    var X5 = document.querySelector('#p2-x5').value;

    var Y1 = document.querySelector('#p2-y1').value;
    var Y2 = document.querySelector('#p2-y2').value;
    var Y3 = document.querySelector('#p2-y3').value;
    var Y4 = document.querySelector('#p2-y4').value;
    var Y5 = document.querySelector('#p2-y5').value;

    //vectores
    var vectoresX = [X1, X2, X3, X4, X5];
    var vectoresY = [Y1, Y2, Y3, X4, X5];

    var producto = 0;
    for(i = 0; i < vectoresY.length; i++){
        producto = producto + (vectoresX[i]*vectoresY[i]);
    }

    document.querySelector('#p2-output').textContent = "El producto escalar mínimo es de: " + producto;
    
}
  

//problema 3

function problema3(){
    
    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 
                    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //Obtenr la cadena del input y separar or comas
    var p3_input = document.querySelector('#p3-input').value;       

    var p3_palabras = p3_input.split(',');

    //Eliminar el espacio que hay entre cada palabra
    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //Calcular los caracteres unicos de cada palabra
    var p3_res = '';

    //Iterar en cada palabra
    p3_palabras.forEach(function (palabra, i){

        //separar las palabras actuales del array
        //que contiene cada letra de dicha palabra
        var letra_unicas = [];
        var palabra_array = palabra.split('');

        //Iteracion
        alfabeto.forEach(function (letra, J){
            
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //Comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    
                    //Si la letra no la hemos contado la agregamos
                    //a un array para contar las letras unicas
                    if(letra_unicas.indexOf(letra) <0){
                        letra_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letra_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;

}

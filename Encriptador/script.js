const inputTexto = document.querySelector(".area_1")
const mensaje = document.querySelector(".area_2")
let matrizDelCodigo =
    [["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]];

/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"
*/
function btnEncriptador(){
    const textoEncriptado = encriptar(inputTexto.value)
    //value toma las palabras ingresadas por el usuario
    mensaje.value= textoEncriptado;
    mensaje.style.backgroundImage ="none";
    inputTexto.value ="";
}

function btnDesencriptador(){
    const textoEncriptado = Desencriptador(inputTexto.value)
    //value toma las palabras ingresadas por el usuario
    mensaje.value= textoEncriptado;
    mensaje.style.backgroundImage ="none";
    inputTexto.value ="";
}
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}  

function encriptar(stringEncriptado){ 
stringEncriptado = stringEncriptado.toLowerCase();//Esto transforma en minúscula

for (let i = 0; i < matrizDelCodigo.length; i++){
    if (stringEncriptado.includes(matrizDelCodigo[i][0])){
        stringEncriptado= stringEncriptado.replaceAll
        (matrizDelCodigo[i][0],matrizDelCodigo [i][1])
        //Aquí va reemplazando si logra encontrar algún caracter 
        //que cohincida con la matriz replaceAll hace que toda
        //la oración sea reemplazada
    }
}
return stringEncriptado;
}
function Desencriptador(stringEncriptado){
    for (let i = 0; i < matrizDelCodigo.length; i++){
        if (stringEncriptado.includes(matrizDelCodigo[i][1])){
            stringEncriptado= stringEncriptado.replaceAll
            (matrizDelCodigo[i][1],matrizDelCodigo [i][0])
            //Aquí va reemplazando si logra encontrar algún caracter 
            //que cohincida con la matriz replaceAll hace que toda
            //la oración sea reemplazada
        }
}
return stringEncriptado;
}



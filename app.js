let inputText
let encryptedText
let decryptedText
let resultado
let textLength
let arrayLetters = []
let muestra
let i=0
let copy
let matchResult = []
let voidArray = []



function encrypt(){

    inputText = document.getElementById("enteringText").value;
    console.log(inputText);

    inputText = String(inputText);

    textLength = inputText.length;
    console.log(textLength);

    arrayLetters = inputText.split('');
    console.log(arrayLetters);

    for (i=0;i < textLength;i++) {

        console.log(i);
        muestra = arrayLetters[i];
        console.log(muestra);

        if (arrayLetters[i] == 'a') {
            arrayLetters[i] = 'ai';
        } else {
            if (arrayLetters[i] == 'e') {
                arrayLetters[i] = 'enter';
            } else {
                if (arrayLetters[i] == 'i') {
                    arrayLetters[i] = 'imes';
                } else {
                    if (arrayLetters[i] == 'o') {
                        arrayLetters[i] = 'ober';
                    } else {
                        if (arrayLetters[i] == 'u') {
                            arrayLetters[i] = 'ufat';
                        }
                    }
                }
            }
        }

    }
    console.log(arrayLetters);

    encryptedText = arrayLetters.join('');
    console.log(encryptedText);

    resultado = String(encryptedText)
    document.getElementById("resultado").innerHTML = String(encryptedText);
    
    document.querySelector('.preEncrypt').style.visibility="hidden";
    document.querySelector('.encrypt').removeAttribute("hidden");

    
    

    
    
}
        

function decrypt(){

    encryptedText = document.getElementById("enteringText").value;

    encryptedText = String(encryptedText);

    encryptedText = encryptedText.replace(/ai/g,'a');

    encryptedText = encryptedText.replace(/enter/g,'e');

    encryptedText = encryptedText.replace(/imes/g,'i');

    encryptedText = encryptedText.replace(/ober/g,'o');

    encryptedText = encryptedText.replace(/ufat/g,'u');

    decryptedText = encryptedText

    console.log(decryptedText)

    resultado = String(decryptedText)
    document.getElementById("resultado").innerHTML = String(decryptedText);

    document.querySelector('.preEncrypt').style.visibility="hidden";
    document.querySelector('.encrypt').removeAttribute("hidden");


}


function copyText(){
    navigator.clipboard.writeText(resultado);

    alert("Copiado!");
}



function noMayus(){
    inputText = document.getElementById("enteringText").value
    let sinMayus = /([A-ZáéíóúÁÉÍÓÚ])/g;
    matchResult = sinMayus.test(inputText);
    if (matchResult) {
        alert('Introduzca solo letras minúsculas y sin acentos por favor.')
        document.getElementById("enteringText").value = ""
        
    }
}

noMayus();

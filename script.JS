/*
La letra e = enter
         i = imes
         a = ai
         o = ober
         u = ufat
*/

var texto = document.querySelector(".texto");
var resultText = document.querySelector(".resultado");

resultText.style.display = "none";

var btnEncrypt = document.querySelector(".encrypt");
var btnDecrypt = document.querySelector(".decrypt");
var btnCpy = document.querySelector(".cpy");

btnCpy.style.display = "none";

var imageNotFound = document.querySelector(".notFoundMessage");


function encrypt() {
    
    var encryptedText = texto.value;
    
    
    if(encryptedText.trim() != "" && /^[a-zñ,.;: ]+$/.test(encryptedText) ){
       
        encryptedText = encryptedText.replaceAll("e", "enter");
        encryptedText = encryptedText.replaceAll("i", "imes");
        encryptedText = encryptedText.replaceAll("a", "ai");
        encryptedText = encryptedText.replaceAll("o", "ober");
        encryptedText = encryptedText.replaceAll("u", "ufat");
        
        imageNotFound.style.display = "none";
        resultText.style.display = "inline";
        btnCpy.style.display = "inline";
    
        
        resultText.value = encryptedText;
        texto.value = "";
    
        texto.focus();
        
        return null;
    }
    
    resultText.value = "Ha insertado un caracter erroneo, o su texto es nulo!";
    texto.focus();

}


function decrypt() {
    var encryptedText = texto.value;
    
    if(encryptedText.trim() != "" ){
        encryptedText = encryptedText.replaceAll("enter", "e");
        encryptedText = encryptedText.replaceAll("imes", "i");
        encryptedText = encryptedText.replaceAll("ai", "a");
        encryptedText = encryptedText.replaceAll("ober", "o");
        encryptedText = encryptedText.replaceAll("ufat", "u");
    
        imageNotFound.style.display = "none";
        resultText.style.display = "inline";
        btnCpy.style.display = "inline";
        
        resultText.value = encryptedText;
        texto.value = "";
        
        texto.focus();
        
        return null;
    }
    
    resultText.value = "Ha insertado un caracter erroneo, o su texto es nulo!";
    texto.focus();
    
}


texto.focus();

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

btnCpy.onclick = function() {
    navigator.clipboard.writeText(resultText.value);
    texto.focus();
};

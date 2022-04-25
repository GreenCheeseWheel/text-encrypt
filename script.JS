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
       
        encryptedText =  replaceSubstring(encryptedText, "e", "enter");
        encryptedText = replaceSubstring(encryptedText, "i", "imes");
        encryptedText = replaceSubstring(encryptedText, "a", "ai");
        encryptedText = replaceSubstring(encryptedText, "o", "ober");
        encryptedText = replaceSubstring(encryptedText, "u", "ufat");
        
        imageNotFound.style.display = "none";
        resultText.style.display = "inline";
        btnCpy.style.display = "inline";
    
        
        resultText.value = encryptedText;
        texto.value = "";
    
        texto.focus();
        
        alert(encryptedText);
        
        return null;
    }
    
    resultText.value = "Ha insertado un caracter erroneo, o su texto es nulo!";
    texto.focus();

}



function decrypt() {
    var encryptedText = texto.value;
    
    if(encryptedText.trim() != "" ){
        encryptedText = replaceSubstring(encryptedText, "enter", "e");
        
            
        encryptedText = replaceSubstring(encryptedText, "imes", "i");
   
        
        encryptedText = replaceSubstring(encryptedText, "ai", "a");
        
   
        
        encryptedText = replaceSubstring(encryptedText, "ober", "o");
        
        
        encryptedText = replaceSubstring(encryptedText, "ufat", "u");
       
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

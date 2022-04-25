function replaceSubstring (stringPrincipal, stringSecundario, subString) {
    
    var largoPrincipal = stringPrincipal.length;
    var largoSecundario = stringSecundario.length;
    var largoSub = subString.length;
    
    var stringHelper = "";
    
    if (largoSub > largoPrincipal || largoSecundario > largoPrincipal){
        return "";
    }
    if(largoSecundario >= largoSub){
        
            for(var i = 0; i < largoPrincipal; i++){
    
            var stringCheckRight = stringPrincipal.substring(i, i+largoSecundario);
            if(i+largoSub > largoPrincipal){
                stringHelper += stringPrincipal.substring(i);
                break;
            }
    
            if(stringCheckRight == stringSecundario){

                stringHelper += subString;
                i += largoSecundario-1;
    
                continue;
            } 
                stringHelper += stringPrincipal[i];
            }
        
        return stringHelper;
        
    }
        
    for(var j = 0; j < largoPrincipal; j++){
        
        var stringCheckRightTwo = stringPrincipal.substring(j, j+largoSecundario);
        if(j+largoSecundario > largoPrincipal){
            break;
        }
    
        if(stringCheckRightTwo == stringSecundario){

            stringHelper += subString; 
            continue;
        } 
            
        stringHelper += stringPrincipal[j];
        
    }
    
    return stringHelper;
}



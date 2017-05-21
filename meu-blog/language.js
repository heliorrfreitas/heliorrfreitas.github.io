function isPortuguese() {
    var idioma = (navigator.browserLanguage !== undefined) ?  navigator.browserLanguage : navigator.language;
    var language = idioma.substring(0,2);
    
    return language.toLowerCase() === "pt";
}

function setText() {
    if (isPortuguese()) {
        
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "sobre-mim_pt.md", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
        
    }else{
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "sobre-mim_en.md", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                    
                    document.getElementById("interests_detail").innerHTML = allText;
                }
            }
        }
        rawFile.send(null);

    }
}
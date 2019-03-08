window.onload = CrearPaneles;
function CrearPaneles(){
    for(var i=1;i<7;i++){
        var midiv = document.createElement("div");
        midiv.setAttribute("id","panel"+i);
        midiv.setAttribute("class","panel");
        document.getElementById('cuerpo').appendChild(midiv);

        /*var botones = document.createElement("button");
        botones.setAttribute("class","botones");
        document.getElementsByClassName('panel').appendChild(botones);*/
    }
}
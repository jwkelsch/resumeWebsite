//darkmode toggle button

darkmodeButton = document.getElementById("darkmodetoggle");
links = document.getElementById("links");
var toggle = 0;

darkmodeButton.addEventListener("click", function(){
    if (toggle==0){
        document.body.style.background = "#121212";
        document.body.style.color = "rgba(91, 108, 124, 0.842)";
        //links.style.color = "lightsteelblue"
        toggle++;
    }
    else{
        document.body.style.background = "white";
        document.body.style.color = "black";
        toggle--;
    }
});
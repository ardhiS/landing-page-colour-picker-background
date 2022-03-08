
let localTheme = localStorage.getItem("theme");
    
if(theme = null){
    setTheme("light")
} else {
    setTheme(localTheme);
}

let themeDot = document.getElementsByClassName("theme-dot");

for( var i = 0; themeDot.length >= i; i++){
    themeDot[i].addEventListener("click", function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}


function setTheme(mode){
    if(mode == "light"){
        document.getElementById("theme-style").href = "default.css";
    } else if (mode == "blue"){
        document.getElementById("theme-style").href = "blue.css";
    } else if (mode == "green"){
        document.getElementById("theme-style").href = "green.css";
    } else {
        document.getElementById("theme-style").href = "purple.css";
    }

    localStorage.setItem("theme", mode);

}
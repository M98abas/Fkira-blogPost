var x = document.getElementById("light-mode");
var y = document.getElementById("dark-mode");

function handelClickDark(){
    x.className = "active";
    x.classList.add("active");
    y.classList.remove("active");
}

function handelClickLight(){
    y.className = "active";
    x.classList.remove("active");
    y.classList.add("active");

}
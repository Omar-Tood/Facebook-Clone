// alert("hello world!");

let settingMenu  = document.querySelector(".setting-menu");
let darkBtn= document.getElementById("dark-btn")

function settingMenuToggle(){
    settingMenu.classList.toggle("setting-menu-height");

}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-them");
}




#Files Wali wxaa kusoda isbadal marka waxan kuso update garey donaa inshall'Allah.


>waxa ka maqan fileka javascript oo an dib u so update garey donaa.


* index.html
* styles.css
* app.js

  
## Wali ma dhamestrin marka dib ayaan uso updategrey donaa.

`<p>Waxan Kudhisay Javascript Html CSS! with No Frameworks</p>`


#Now Hada Waxan Kuso daray Javascript file sidokle waxan kusodary other section side,

* dropdown menu
* settings
* private
  
>Wali waxan ii shaqeyn la Qeebta javascript markan kudhafto ima so baxayo Dropdown menu.

#Halkan Ka arag simple yar Picture Sida u egyahay projectskena.

[Simple Image](/images/SimplePicuter.png)

>Wali waxaa ii shaqeyn La Qeebta Menu Setting Toogle Dark-them inshall dib ayan ka sameydonaa.

```javascript

let settingMenu  = document.querySelector(".setting-menu");
let darkBtn= document.getElementById("dark-btn")

function settingMenuToggle(){
    settingMenu.classList.toggle("setting-menu-height");

}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-them");
}
```
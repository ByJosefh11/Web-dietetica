"use strict"

document.querySelector("#all").hidden = true;
window.addEventListener('load', () => {


setTimeout(()=>{document.querySelector("#load-container").hidden = true;
document.querySelector("#all").hidden = false;
},2000)
});




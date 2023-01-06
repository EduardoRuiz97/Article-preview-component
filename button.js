let buttonShare = [...document.querySelectorAll(".share")];
let infoSection = document.querySelector(".infoSection");
let shareSection = document.querySelector(".shareSection");

buttonShare.forEach( button =>{
  button.addEventListener("click", ()=> {
    infoSection.classList.toggle("dissapear");
    shareSection.classList.toggle("appear")
  })
})
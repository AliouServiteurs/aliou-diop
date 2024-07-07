const menuMobile = document.querySelector(".header-menu");
const buttonMenue = document.querySelector(".header-menu-mobile");
const pointFermeture1 = document.querySelector(".fermer1");
const pointFermeture2 = document.querySelector(".fermer2");
const pointFermeture3 = document.querySelector(".fermer3");
const pointFermeture4 = document.querySelector(".fermer4");



const fermerMenueOuverture = ()=>{
    menuMobile.classList.toggle("active");
    if(menuMobile.classList.contains("active")){
        document.querySelector("button .material-icons").innerHTML = "close";
    }else{
        document.querySelector("button .material-icons").innerHTML = "menu";
    }
}

const fermeture = ()=>{
    if(menuMobile.classList.contains("active")){
        menuMobile.classList.remove("active");
        document.querySelector("button .material-icons").innerHTML = "menu";
    }
}

buttonMenue.addEventListener("click",fermerMenueOuverture);

pointFermeture1.addEventListener("click",fermeture);
pointFermeture2.addEventListener("click",fermeture);
pointFermeture3.addEventListener("click",fermeture);
pointFermeture4.addEventListener("click",fermeture);

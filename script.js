let nav = document.querySelector(".nav");
document.querySelector("#fa-bars ").onclick= ()=>{
    nav.classList.toggle("active");
    cartitem.classList.remove("act");
    search.classList.remove("act");
}
let cartitem = document.querySelector(".cart-item-container");
document.querySelector("#cart ").onclick= ()=>{
    cartitem.classList.toggle("act");
    nav.classList.remove("active");
    search.classList.remove("act");
}
let search = document.querySelector(".search-form");
document.querySelector("#searchicon ").onclick= ()=>{
    search.classList.toggle("act");
    nav.classList.remove("active");
    cartitem.classList.remove("act");
}
// window.onscroll= () =>{
//     nav.classList.remove("active");
//     cartitem.classList.remove("act");
//     search.classList.remove("act");
// }


let navbarBrand = document.querySelector(".navbar-brand");
let item__one = document.querySelector(".item__one");
let item__three = document.querySelector(".item__three");
window.addEventListener("scroll" , function ( ) {
    if(this.scrollY >= 20 ){
        navbarBrand.classList.add("displayNone")
    } else {
        navbarBrand.classList.remove("displayNone")
    }
    if(this.scrollY >= 120) {
        item__one.classList.add("displayNone")
        
    } else {
        item__one.classList.remove("displayNone")

    }
    if(this.scrollY >= 120) {
        item__three.classList.add("displayNone")
        
    } else {
        item__three.classList.remove("displayNone")

    }
})
window.addEventListener("load",(e)=>{
    
    let burger = document.getElementById("menu-burger")
    let navbar = document.getElementById("nav-bar-categories")
    let isMenuHidden=true
    // Hide menu, if click in body 
    document.body.addEventListener("click",(e)=>{
        if (!isMenuHidden) {
            burger.classList.toggle("menu-close")
            isMenuHidden= !isMenuHidden
            navbar.classList.toggle("hide-this")
        }
    })
    // Toggle menu
    burger.addEventListener("click",(e)=>{
        e.stopPropagation()
        burger.classList.toggle("menu-close")
        isMenuHidden= !isMenuHidden
        navbar.classList.toggle("hide-this")
    })

})
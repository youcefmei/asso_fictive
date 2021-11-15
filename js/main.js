window.addEventListener("load",(e)=>{
    
    let burger = document.getElementById("menu-burger")
    burger.addEventListener("click",(e)=>{
        e.stopPropagation()
        console.log("tttt")
    })

})
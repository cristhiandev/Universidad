


document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("header__login").addEventListener("click",()=>{
        document.getElementById("login__intranet").setAttribute("style","display:block;");
    });

    document.getElementById("form__login-x").addEventListener("click",()=>{
        document.getElementById("login__intranet").setAttribute("style","display:none;");
    });

    document.getElementById("icon-bars-menu").addEventListener("click",()=>{
    	document.getElementById("menu__movil").setAttribute("style","right:0;");
    });

    document.getElementById("form__login-x-2").addEventListener("click",()=>{
    	document.getElementById("menu__movil").setAttribute("style","right:-100%;");
    });
    

});
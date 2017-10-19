document.addEventListener("DOMContentLoaded",()=>{

    if(document.getElementById("cerrar__panel")){
        document.getElementById("cerrar__panel").addEventListener("click",()=>{
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            localStorage.removeItem("imagen");
            location.href="index.html";
        });
    }

    document.getElementById("boton__perfil").addEventListener("click",()=>{
        document.getElementById("main__perfil").setAttribute("style","display:block;");
        document.getElementById("main__cursos").setAttribute("style","display:none;");
        document.getElementById("horarios").setAttribute("style","display:none;");
        document.getElementById("notificaciones").setAttribute("style","display:none;");
    });

    document.getElementById("boton__cursos").addEventListener("click",()=>{
        document.getElementById("main__perfil").setAttribute("style","display:none;");
        document.getElementById("main__cursos").setAttribute("style","display:block;");
        document.getElementById("horarios").setAttribute("style","display:none;");
        document.getElementById("notificaciones").setAttribute("style","display:none;");
    });


    document.getElementById("boton__horarios").addEventListener("click",()=>{
        document.getElementById("main__perfil").setAttribute("style","display:none;");
        document.getElementById("main__cursos").setAttribute("style","display:none;");
        document.getElementById("horarios").setAttribute("style","display:block;");
        document.getElementById("notificaciones").setAttribute("style","display:none;");
    });

    document.getElementById("boton__notificaciones").addEventListener("click",()=>{
        document.getElementById("main__perfil").setAttribute("style","display:none;");
        document.getElementById("main__cursos").setAttribute("style","display:none;");
        document.getElementById("horarios").setAttribute("style","display:none;");
        document.getElementById("notificaciones").setAttribute("style","display:block;");
    });


});
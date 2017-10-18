


<<<<<<< HEAD

document.addEventListener("DOMContentLoaded",()=>{


// BD

let universidad=
[

    {
        docente:"Juan Perez",
        usuario:"juan",
        clave:"perez",
        imagen:"user1.png"
    },

    {
        docente:"Linda Zorrilla",
        usuario:"linda",
        clave:"zorrilla",
        imagen:"user2.jpg"
    }

];


// BD


let login=(user,pass)=>{

    let resultado=false;
console.log(user+" "+pass);

    for(let i=0;i<universidad.length;i++)
    {
        if(user==universidad[i].usuario){
            if(pass==universidad[i].clave)
            {
                localStorage.username=user;
                localStorage.password=pass;
                localStorage.imagen=universidad[i].imagen;
                location.reload();
                // document.getElementById("mensaje__login").innerHTML="Bienvenido";
  
            }        
            else
            {
                document.getElementById("mensaje__login").innerHTML="Contraseña Incorrecta";
 
            }

            resultado=true;
            return;
        }
    }

    if(!resultado){
        document.getElementById("mensaje__login").innerHTML="Usuario No Existe";
    }

    

};


let boton__login=document.getElementById("form__login-boton");
boton__login.addEventListener("click",()=>{

    let user__input=document.getElementById("user__input").value;
    let pass__input=document.getElementById("pass__input").value;

    if(user__input.trim()=="" || pass__input.trim()==""){
        document.getElementById("mensaje__login").innerHTML="Faltan Datos";
        return;
    }

    login(user__input,pass__input);
});



        // let cerrar1=document.getElementById("alertaCerrar1");
        // let cerrar2=document.getElementById("alertaCerrar2");
        // cerrar1.addEventListener("click",()=>{
        //     document.getElementById("alerta").classList.toggle("ocultar");
        // });
        // cerrar2.addEventListener("click",()=>{
        //     document.getElementById("alerta").classList.toggle("ocultar");
            
        // });





















    if(document.getElementById("header__login")){

        document.getElementById("header__login").addEventListener("click",()=>{
            document.getElementById("login__intranet").setAttribute("style","display:block;");
        });
        
    }

=======
document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("header__login").addEventListener("click",()=>{
        document.getElementById("login__intranet").setAttribute("style","display:block;");
    });
>>>>>>> 0b056d5d0488310536aa63f5527cec10c8487ab8

    document.getElementById("form__login-x").addEventListener("click",()=>{
        document.getElementById("login__intranet").setAttribute("style","display:none;");
    });

    document.getElementById("icon-bars-menu").addEventListener("click",()=>{
    	document.getElementById("menu__movil").setAttribute("style","right:0;");
    });

    document.getElementById("form__login-x-2").addEventListener("click",()=>{
    	document.getElementById("menu__movil").setAttribute("style","right:-100%;");
    });

    document.getElementById("intranet-movil").addEventListener("click",()=>{
        document.getElementById("login__intranet").setAttribute("style","display:block;");
    });
<<<<<<< HEAD

    document.getElementById("header__login__close").addEventListener("click",()=>{
        document.getElementById("sesion").classList.toggle("ocultar");
    });
    
    document.getElementById("cerra__sesion").addEventListener("click",()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("imagen");
        location.reload()
    });

    document.getElementById("cerrar__sesion2").addEventListener("click",()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("imagen");
        location.reload()
    });
=======
    
>>>>>>> 0b056d5d0488310536aa63f5527cec10c8487ab8

});
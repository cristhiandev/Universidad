
/*agregamos las funciones al evento del documento, cuando
cargue todo el contenido del documento.*/
document.addEventListener("DOMContentLoaded",()=>{

let contenedor=document.getElementById("juego__contenedor");

/*FUNCIONES GENERALES*/

let resetear=(elemento)=>{
    elemento.innerHTML="";
}; 


let llenarPrincipal=(elemento)=>{
    contenedor.appendChild(elemento);
};



    let pantallaInicio=()=>{
        
        let jPlataforma=document.createElement("div");
        jPlataforma.setAttribute("Id","juego__plataforma");
        jPlataforma.setAttribute("class","juego__plataforma");

        let botonInicio=document.createElement("span");
        botonInicio.setAttribute("Id","botonIniciar");
        botonInicio.setAttribute("class","boton__iniciar");
        botonInicio.innerHTML="INICIAR EL JUEGO";

        resetear(contenedor);

        jPlataforma.appendChild(botonInicio);
        llenarPrincipal(jPlataforma);

        /* BOTON DE ININICAR JUEGO */
            
        let botonInicio2=document.getElementById("botonIniciar");
        botonInicio2.addEventListener("click",introInicio);

    };


    let introInicio=()=>{
        let introContenedor=document.createElement("div");
        introContenedor.setAttribute("class","intro__contenedor");
        introContenedor.setAttribute("style","width:100%");

        let introVideo=document.createElement("video");
        introVideo.setAttribute("Id","introVideo");
        introVideo.setAttribute("class","intro__video");
        introVideo.setAttribute("autoplay",true);
        introVideo.setAttribute("style","width:100%");
        
        let introVideoSource=document.createElement("source");
        introVideoSource.setAttribute("src","vd/IntroFaperokos.mp4");
        introVideoSource.setAttribute("type","audio/mp4");

        resetear(contenedor);

        introVideo.appendChild(introVideoSource);
        introContenedor.appendChild(introVideo);
        llenarPrincipal(introContenedor);

        /* CUANDO TERMINE EL VIDEO */
            
        let introVideo2=document.getElementById("introVideo");
        introVideo2.addEventListener("ended",seleccionPersonaje);

    };


    let seleccionPersonaje=()=>{
        let datosJuego=document.createElement("div");
        datosJuego.setAttribute("Id","datosJuego");
        datosJuego.setAttribute("class","datos__juego");

        let datosTitulo=document.createElement("h2");
        datosTitulo.setAttribute("class","datos__titulo");
        datosTitulo.innerHTML="Elige el Personaje Que Deseas Usar E Ingresa Un Nombre De Usuario";

        let datosContenedorPersonaje=document.createElement("div");
        datosContenedorPersonaje.setAttribute("Id","datosContenedorPersonaje");
        datosContenedorPersonaje.setAttribute("class","datos__contenedor__personaje");

        let fIzquierda=document.createElement("span");
        fIzquierda.setAttribute("Id","datosIzquierda");
        fIzquierda.setAttribute("class","icon-chevron-left datos__izquierda");

        let datosPersonaje=document.createElement("span");
        datosPersonaje.setAttribute("Id","datosPersonaje");
        datosPersonaje.setAttribute("class","datos__personaje");

        let fDerecha=document.createElement("span");
        fDerecha.setAttribute("Id","datosDerecha");
        fDerecha.setAttribute("class","icon-chevron-right datos__derecha");

        let datosNombre=document.createElement("input");
        datosNombre.setAttribute("type","text");
        datosNombre.setAttribute("class","datos__nombre");
        datosNombre.setAttribute("name","datosNombre");
        datosNombre.setAttribute("Id","datosNombre");
        datosNombre.setAttribute("placeholder","Nombre de Usuario");

        let datosIniciar=document.createElement("a");
        datosIniciar.setAttribute("Id","datosIniciar");
        datosIniciar.setAttribute("class","datos__iniciar");
        datosIniciar.innerHTML="INICIAR JUEGO";

        resetear(contenedor);

        datosContenedorPersonaje.appendChild(fIzquierda);
        datosContenedorPersonaje.appendChild(datosPersonaje);
        datosContenedorPersonaje.appendChild(fDerecha);

        datosJuego.appendChild(datosTitulo);
        datosJuego.appendChild(datosContenedorPersonaje);
        datosJuego.appendChild(datosNombre);
        datosJuego.appendChild(datosIniciar);

        llenarPrincipal(datosJuego);

    };


pantallaInicio();

/* BOTONES DE INICIO */
let botonHomeS=document.getElementById("botonHomeS");
let botonHomeL=document.getElementById("botonHomeL");
botonHomeS.addEventListener("click",pantallaInicio);
botonHomeL.addEventListener("click",pantallaInicio);




});
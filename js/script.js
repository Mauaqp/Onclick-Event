//cambiar texto Login
function cambiar (element){
    element.innerText = "Logout";
}

// eliminar boton
function eliminar (element){
    element.remove();
}

// APORTE ADICIONAL
//Likes 
let a = 14;
function likes1 (element){
    element.innerText = (a++ + " likes");
}

//Likes 2
let b = 38;
function likes2 (element){
    
    element.innerText = (b++ + " likes");
}
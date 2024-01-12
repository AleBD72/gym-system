import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "../../config_firebase";



export default function atrapar_Inicio_sesion(url) {
    //Se verifica si esta iniciando sesion de manera correcta con el enlace magico
    if(isSignInWithEmailLink(auth,url)){
        const correoRegistro = localStorage.getItem("correo")
        
        signInWithEmailLink(auth,correoRegistro,url)
        .then((res)=>{
            console.log("exito",res);
        })
        .catch((error)=>{
            console.log("error",error.message)
        })

    }
    else{
        console.log("no es un enlace valido")
    }
}

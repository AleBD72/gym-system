import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../config_firebase";


function enviarEnlaceLogin(correo){
    const actionCodeSettings ={
        url: "http://localhost:5173/login-url",
        handleCodeInApp:true
    }
    sendSignInLinkToEmail(auth,correo,actionCodeSettings)
    .catch((error)=>{
        console.log("error",error)
    })
}

export default enviarEnlaceLogin
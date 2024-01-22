import { signOut } from "firebase/auth";
import { auth } from "../../config_firebase";

async function cerrarSesion(){
    signOut(auth).then(()=>{
        localStorage.clear()
    }).catch((error)=>{
        console.error(error)
    })
}
export {cerrarSesion}
import { addDoc,collection,query,where,getDocs} from "firebase/firestore";
import { db } from "../../config_firebase";

async function create_user(nombre,apellido,email,fecha_nacimiento,rol,genero,cedula){
    const correo_existe = await verificar_correo(email)
    if(correo_existe){
        console.error("Este correo ya existe")
    }
    else{
        const usuario_nuevo = {
          nombre,
          apellido,
          email,
          fecha_nacimiento,
          rol,
          genero,
          cedula,
        };

        const docRef = collection(db, "usuarios");
        addDoc(docRef, usuario_nuevo)
          .catch((error) => {
            console.log(error);
          });
    }
    
}

async function verificar_rol(roleId) {
  const rolesCollection = collection(db, "roles");
  const q = query(rolesCollection, where("id", "==", roleId));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

async function verificar_correo(email) {
  const usersCollection = collection(db, "usuarios");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

async function obtener_datos_correo(email) {
  const usersCollection = collection(db, "usuarios");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data();
    return userData;
  } else {
    return null; 
  }
}




export {create_user,verificar_rol,verificar_correo,obtener_datos_correo}


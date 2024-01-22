import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../config_firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import enviarEnlaceVerficacion from "../auth/verificacion_correo";

async function create_user(
  nombre,
  apellido,
  email,
  fecha_nacimiento,
  rol,
  genero,
  cedula
) {
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
  addDoc(docRef, usuario_nuevo).catch((error) => {
    console.log(error);
  });
}

async function verificar_rol(roleId) {
  const rolesCollection = collection(db, "roles");
  const q = query(rolesCollection, where("id", "==", roleId));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}
async function crear_usuario_firebase(
  email,
  password,
  nombre,
  apellido,
  fecha_nacimiento,
  rol,
  genero,
  cedula
) {
  const correo_existe = await verificar_correo(email);
  if (correo_existe) {
    console.error("Este correo ya existe");
    return false;
  } else {
    const datos_usuario_firebase = await create_user(
      nombre,
      apellido,
      email,
      fecha_nacimiento,
      rol,
      genero,
      cedula
    );

    if (!datos_usuario_firebase) {
      createUserWithEmailAndPassword(auth, email, password).then(
        (user_firebase) => {
          const user = user_firebase.user;
          console.log(user);
          enviarEnlaceVerficacion(user);

        }
      );

      return true;
    }
  }
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

export {
  create_user,
  verificar_rol,
  verificar_correo,
  obtener_datos_correo,
  crear_usuario_firebase,
};

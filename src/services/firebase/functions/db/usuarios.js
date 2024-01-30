import { addDoc, collection, query, where, getDocs,updateDoc,doc,deleteDoc } from "firebase/firestore";
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
  cedula,
  estado
) {
  const usuario_nuevo = {
    nombre,
    apellido,
    email,
    fecha_nacimiento,
    rol,
    genero,
    cedula,
    estado
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
  cedula,
  estado
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
      cedula,
      estado
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


async function actualizar_datos_usuario(correo, nuevosDatos) {
  const usuarioRef = collection(db, "usuarios");
  try {
    const querySnapshot = await getDocs(query(usuarioRef, where("email", "==", correo)));
    
    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const usuarioId = docSnapshot.id; // Obtén el ID del documento, que puede ser usado para construir la referencia del documento

      const usuarioDocRef = doc(db, "usuarios", usuarioId); // Utiliza el ID del documento para construir la referencia completa
      await updateDoc(usuarioDocRef, nuevosDatos);

      // Ahora puedes usar la función obtener_datos_correo con el ID del documento
      const usuarioActualizado = await obtener_datos_correo(usuarioId);
      return usuarioActualizado;
    } else {
      console.error('No existe este usuario');
      return null;
    }
  } catch (error) {
    console.error("Error al actualizar el usuario en Firebase:", error);
    return null;
  }
}

async function actualizarRolUsuario(correo, nuevoRol) {
  const usuariosRef = collection(db, "usuarios");

  try {
    const querySnapshot = await getDocs(
      query(usuariosRef, where("email", "==", correo))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const usuarioId = docSnapshot.id;

      const usuarioDocRef = doc(db, "usuarios", usuarioId);
      await updateDoc(usuarioDocRef, { rol: nuevoRol }); // Actualiza solo el campo "rol"

      // Después de actualizar, puedes obtener los datos actualizados si es necesario
      const usuarioActualizado = await obtener_datos_correo(correo);
      return usuarioActualizado;
    } else {
      console.error("No existe este usuario");
      return null;
    }
  } catch (error) {
    console.error("Error al actualizar el rol del usuario en Firebase:", error);
    return null;
  }
}

async function obtenerTodosLosUsuarios() {
  const usersCollection = collection(db, "usuarios");
  const q = query(usersCollection);
  const querySnapshot = await getDocs(q);

  const usuarios = [];

  querySnapshot.forEach((doc) => {
    usuarios.push(doc.data());
  });

  return usuarios;
}

async function obtenerUsuariosInactivos() {
  const usersCollection = collection(db, "usuarios");
  const q = query(usersCollection, where("status", "==", "Inactivo"));
  const querySnapshot = await getDocs(q);

  const usuarios = [];

  querySnapshot.forEach((doc) => {
    usuarios.push(doc.data());
  });

  return usuarios;
}

async function obtenerUsuariosActivos() {
  const usersCollection = collection(db, "usuarios");
  const q = query(usersCollection, where("status", "==", "Activo"));
  const querySnapshot = await getDocs(q);

  const usuarios = [];

  querySnapshot.forEach((doc) => {
    usuarios.push(doc.data());
  });

  return usuarios;
}
 export async function GuardarAsistenciaFirebase(attendedDates, userEmail) {
   try {
     const usuariosRef = collection(db, "usuarios");
     const q = query(usuariosRef, where("email", "==", userEmail));
     const querySnapshot = await getDocs(q);

     // Verifica si el usuario existe
     if (querySnapshot.empty) {
       console.error("El usuario no existe.");
       return;
     }

     const usuarioDoc = querySnapshot.docs[0];
     const usuarioId = usuarioDoc.id;

     // Verifica días existentes en el mes actual para este usuario
     const asistenciasRef = collection(db, "dias_asistidos");
     const asistenciasQuery = query(
       asistenciasRef,
       where("usuario", "==", userEmail),
       where("mes", "==", new Date().getMonth() + 1) // Mes actual
     );
     const asistenciasSnapshot = await getDocs(asistenciasQuery);
     const diasExistentes = asistenciasSnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));

     // Evita duplicados y elimina días deseleccionados
     const acciones = attendedDates.map(async (date) => {
       const existeDia = diasExistentes.find(
         (dia) => dia.dia === date.getDate()
       );
       if (!existeDia) {
         // Guarda la asistencia solo si el día no existe
         await addDoc(asistenciasRef, {
           usuario: userEmail,
           anio: date.getFullYear(),
           mes: date.getMonth() + 1,
           dia: date.getDate(),
         });
       }
     });

     // Elimina días deseleccionados
     diasExistentes.forEach(async (dia) => {
       const date = new Date(dia.anio, dia.mes - 1, dia.dia);
       if (
         !attendedDates.some((d) => d.toDateString() === date.toDateString())
       ) {
         // Elimina el documento del día deseleccionado
         const diaRef = doc(db, "dias_asistidos", dia.id);
         await deleteDoc(diaRef);
       }
     });

     // Espera a que todas las acciones se completen
     await Promise.all(acciones);

     console.log("Datos de asistencia guardados en Firebase.");
   } catch (error) {
     console.error("Error al guardar datos de asistencia en Firebase:", error);
   }
 }


const obtenerFechasAsistidasDesdeFirebase = async (userEmail) => {
  try {
    const usuariosRef = collection(db, "usuarios");
    const q = query(usuariosRef, where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("El usuario no existe.");
      return [];
    }

    const usuarioDoc = querySnapshot.docs[0];

    // Ahora, consulta las fechas de asistencia del usuario desde la colección "dias_asistidos"
    const asistenciasRef = collection(db, "dias_asistidos");
    const asistenciasQuery = query(
      asistenciasRef,
      where("usuario", "==", userEmail)
    );
    const asistenciasSnapshot = await getDocs(asistenciasQuery);
    const fechasAsistidas = asistenciasSnapshot.docs
      .map((asistenciaDoc) => {
        const { anio, mes, dia } = asistenciaDoc.data();

        // Formatea la fecha y asegúrate de que sea válida
        const fechaFormateada = new Date(anio, mes - 1, dia);
        return isNaN(fechaFormateada.getTime()) ? null : fechaFormateada;
      })
      .filter((fecha) => fecha !== null); // Filtra las fechas nulas (inválidas)
    return fechasAsistidas;
  } catch (error) {
    console.error(
      "Error al obtener las fechas de asistencia desde Firebase:",
      error
    );
    return [];
  }
};

async function eliminarCamposYCambiarEstado(correo) {
  const usuarioRef = collection(db, "usuarios");

  try {
    const querySnapshot = await getDocs(
      query(usuarioRef, where("email", "==", correo))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const usuarioId = docSnapshot.id;

      const usuarioDocRef = doc(db, "usuarios", usuarioId);

      // Utiliza updateDoc para actualizar campos específicos
      await updateDoc(usuarioDocRef, {
        metodo_pago: null, // Establecer el campo metodo_pago a null
        membresia: null, // Establecer el campo membresia a null
        status: "Inactivo", // Cambiar el campo status a "inactivo"
      });

      // Ahora puedes usar la función obtenerDatosCorreo con el ID del documento
      const usuarioActualizado = await obtener_datos_correo(correo);
      return usuarioActualizado;
    } else {
      console.error("No existe este usuario");
      return null;
    }
  } catch (error) {
    console.error("Error al actualizar campos en Firebase:", error);
    return null;
  }
}

export {
  create_user,
  obtenerTodosLosUsuarios,
  actualizarRolUsuario,
  verificar_rol,
  verificar_correo,
  obtener_datos_correo,
  crear_usuario_firebase,
  actualizar_datos_usuario,
  obtenerFechasAsistidasDesdeFirebase,
  obtenerUsuariosInactivos,
  obtenerUsuariosActivos,
  eliminarCamposYCambiarEstado
};

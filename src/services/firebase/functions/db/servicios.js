import { addDoc,collection, getDocs,updateDoc,doc,query,where,deleteDoc } from "firebase/firestore";
import { db } from "../../config_firebase";
import {v4 as idv4} from"uuid"

async function serviciosFirebase(){
    const servicios = collection(db,'servicios')
    try {
      const querySnapshot = await getDocs(servicios);
      if (!querySnapshot.empty) {
        const servicios = querySnapshot.docs.map((doc) => doc.data());
        return servicios;
      } else {
        return [];
      }
    } catch (error) {
      console.error(
        "Error al obtener todos los servicios desde Firebase:",
        error
      );
      return [];
    }
    
}

async function obtenerServicioPorCampoId(campoId) {
  const serviciosRef = collection(db, "servicios");

  try {
    const querySnapshot = await getDocs(
      query(serviciosRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      // Solo debería haber un documento con ese campo ID, pero puedes manejar múltiples resultados si es necesario
      const docSnapshot = querySnapshot.docs[0];
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null; // No se encontró ningún documento con el campo ID especificado
    }
  } catch (error) {
    console.error("Error al obtener el servicio desde Firebase:", error);
    return null;
  }
}

async function actualizarServicioPorCampoId(campoId, nuevosDatos) {
  const serviciosRef = collection(db, "servicios");

  try {
    const querySnapshot = await getDocs(
      query(serviciosRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const servicioId = docSnapshot.id;

      // Actualizar los datos del horario con los nuevos datos proporcionados
      const servicioRef = doc(db, "servicios", servicioId);
      await updateDoc(servicioRef, nuevosDatos);

      // Obtener el horario actualizado
      const servicioActualizado = await obtenerServicioPorCampoId(campoId);
      return servicioActualizado;
    } else {
      console.error(
        "No se encontró ningún documento con el campo ID especificado"
      );
      return null;
    }
  } catch (error) {
    console.error("Error al actualizar el servicio en Firebase:", error);
    return null;
  }
}

async function eliminarServicioPorCampoId(campoId) {
  const serviciosRef = collection(db, "servicios");

  try {
    const querySnapshot = await getDocs(
      query(serviciosRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const servicioId = docSnapshot.id;

      // Eliminar el documento del horario
      const servicioRef = doc(db, "servicios", servicioId);
      await deleteDoc(servicioRef);

      console.log("servicio eliminado correctamente");
      return true;
    } else {
      console.error(
        "No se encontró ningún documento con el campo ID especificado"
      );
      return false;
    }
  } catch (error) {
    console.error("Error al eliminar el servicio desde Firebase:", error);
    return false;
  }
}

async function crear_servicio(servicio, descripcion) {
  try {
    const id_servicio = idv4()
    const servicio_nuevo = {
      id: id_servicio,
      servicio,
      descripcion
    };

    const docRef = collection(db, "servicios");
    await addDoc(docRef, servicio_nuevo);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}

async function editar_servicio(id, nuevosDatos) {
  try {
    const docRef = doc(db, "servicios", id);
    await updateDoc(docRef, nuevosDatos);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}
export{serviciosFirebase,crear_servicio,editar_servicio,obtenerServicioPorCampoId,actualizarServicioPorCampoId,eliminarServicioPorCampoId}
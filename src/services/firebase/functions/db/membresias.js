import { collection, getDocs,updateDoc,doc,query,where} from "firebase/firestore";
import { db } from "../../config_firebase";
//import {v4 as idv4} from"uuid"

async function membresiasFirebase(){
    const membresias = collection(db,'membresias')
    try {
      const querySnapshot = await getDocs(membresias);
      if (!querySnapshot.empty) {
        const membresias = querySnapshot.docs.map((doc) => doc.data());
        return membresias;
      } else {
        return [];
      }
    } catch (error) {
      console.error(
        "Error al obtener todos los datos de membresías desde Firebase:",
        error
      );
      return [];
    }
    
}

async function obtenerMembresiaPorCampoId(campoId) {
  const membresiasRef = collection(db, "membresias");

  try {
    const querySnapshot = await getDocs(
      query(membresiasRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      // Solo debería haber un documento con ese campo ID, pero puedes manejar múltiples resultados si es necesario
      const docSnapshot = querySnapshot.docs[0];
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null; // No se encontró ningún documento con el campo ID especificado
    }
  } catch (error) {
    console.error("Error al obtener la membresía desde Firebase:", error);
    return null;
  }
}

async function actualizarMembresiaPorCampoId(campoId, nuevosDatos) {
  const membresiasRef = collection(db, "membresias");

  try {
    const querySnapshot = await getDocs(
      query(membresiasRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const membresiaId = docSnapshot.id;

      // Actualizar los datos del horario con los nuevos datos proporcionados
      const membresiaRef = doc(db, "membresias", membresiaId);
      await updateDoc(membresiaRef, nuevosDatos);

      // Obtener membresía actualizada
      const membresiaActualizada = await obtenerMembresiaPorCampoId(campoId);
      return membresiaActualizada;
    } else {
      console.error(
        "No se encontró ningún documento con el campo ID especificado"
      );
      return null;
    }
  } catch (error) {
    console.error("Error al actualizar el horario en Firebase:", error);
    return null;
  }
}


async function editar_membresia(id, nuevosDatos) {
  try {
    const docRef = doc(db, "membresias", id);
    await updateDoc(docRef, nuevosDatos);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}
export{membresiasFirebase,editar_membresia,obtenerMembresiaPorCampoId,actualizarMembresiaPorCampoId}
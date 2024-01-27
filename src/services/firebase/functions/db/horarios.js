import { addDoc,collection, getDocs,updateDoc,doc,query,where,deleteDoc } from "firebase/firestore";
import { db } from "../../config_firebase";
import {v4 as idv4} from"uuid"

async function horariosFirebase(){
    const horarios = collection(db,'horario')
    try {
      const querySnapshot = await getDocs(horarios);
      if (!querySnapshot.empty) {
        const horarios = querySnapshot.docs.map((doc) => doc.data());
        return horarios;
      } else {
        return [];
      }
    } catch (error) {
      console.error(
        "Error al obtener todos los horarios desde Firebase:",
        error
      );
      return [];
    }
    
}

async function obtenerHorarioPorCampoId(campoId) {
  const horariosRef = collection(db, "horario");

  try {
    const querySnapshot = await getDocs(
      query(horariosRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      // Solo debería haber un documento con ese campo ID, pero puedes manejar múltiples resultados si es necesario
      const docSnapshot = querySnapshot.docs[0];
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null; // No se encontró ningún documento con el campo ID especificado
    }
  } catch (error) {
    console.error("Error al obtener el horario desde Firebase:", error);
    return null;
  }
}

async function actualizarHorarioPorCampoId(campoId, nuevosDatos) {
  const horariosRef = collection(db, "horario");

  try {
    const querySnapshot = await getDocs(
      query(horariosRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const horarioId = docSnapshot.id;

      // Actualizar los datos del horario con los nuevos datos proporcionados
      const horarioRef = doc(db, "horario", horarioId);
      await updateDoc(horarioRef, nuevosDatos);

      // Obtener el horario actualizado
      const horarioActualizado = await obtenerHorarioPorCampoId(campoId);
      return horarioActualizado;
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

async function eliminarHorarioPorCampoId(campoId) {
  const horariosRef = collection(db, "horario");

  try {
    const querySnapshot = await getDocs(
      query(horariosRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const horarioId = docSnapshot.id;

      // Eliminar el documento del horario
      const horarioRef = doc(db, "horario", horarioId);
      await deleteDoc(horarioRef);

      console.log("Horario eliminado correctamente");
      return true;
    } else {
      console.error(
        "No se encontró ningún documento con el campo ID especificado"
      );
      return false;
    }
  } catch (error) {
    console.error("Error al eliminar el horario desde Firebase:", error);
    return false;
  }
}

async function crear_evento(name, horaFin, horaInicio, entrenador, dia) {
  try {
    const id_evento = idv4()
    const evento_nuevo = {
      id: id_evento,
      name,
      horaFin,
      horaInicio,
      entrenador,
      dia,
    };

    const docRef = collection(db, "horario");
    await addDoc(docRef, evento_nuevo);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}

async function editar_evento(id, nuevosDatos) {
  try {
    const docRef = doc(db, "horario", id);
    await updateDoc(docRef, nuevosDatos);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}
export{horariosFirebase,crear_evento,editar_evento,obtenerHorarioPorCampoId,actualizarHorarioPorCampoId,eliminarHorarioPorCampoId}
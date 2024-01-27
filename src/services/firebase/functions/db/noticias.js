import { addDoc,collection, getDocs,updateDoc,doc,query,where,deleteDoc } from "firebase/firestore";
import { db } from "../../config_firebase";
import {v4 as idv4} from"uuid"

async function noticiasFirebase(){
    const noticias = collection(db,'noticias')
    try {
      const querySnapshot = await getDocs(noticias);
      if (!querySnapshot.empty) {
        const noticias = querySnapshot.docs.map((doc) => doc.data());
        return noticias;
      } else {
        return [];
      }
    } catch (error) {
      console.error(
        "Error al obtener todos los noticias desde Firebase:",
        error
      );
      return [];
    }
    
}

async function obtenerNoticiaPorCampoId(campoId) {
  const noticiasRef = collection(db, "noticias");

  try {
    const querySnapshot = await getDocs(
      query(noticiasRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      // Solo debería haber un documento con ese campo ID, pero puedes manejar múltiples resultados si es necesario
      const docSnapshot = querySnapshot.docs[0];
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null; // No se encontró ningún documento con el campo ID especificado
    }
  } catch (error) {
    console.error("Error al obtener la noticia desde Firebase:", error);
    return null;
  }
}

async function actualizarNoticiaPorCampoId(campoId, nuevosDatos) {
  const noticiasRef = collection(db, "noticias");

  try {
    const querySnapshot = await getDocs(
      query(noticiasRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const noticiaId = docSnapshot.id;

      // Actualizar los datos del horario con los nuevos datos proporcionados
      const noticiaRef = doc(db, "noticias", noticiaId);
      await updateDoc(noticiaRef, nuevosDatos);

      // Obtener la notica actualizada
      const noticiaActualizado = await obtenerNoticiaPorCampoId(campoId);
      return noticiaActualizado;
    } else {
      console.error(
        "No se encontró ningún documento con el campo ID especificado"
      );
      return null;
    }
  } catch (error) {
    console.error("Error al actualizar la noticia en Firebase:", error);
    return null;
  }
}

async function eliminarNoticiaPorCampoId(campoId) {
  const noticiasRef = collection(db, "noticias");

  try {
    const querySnapshot = await getDocs(
      query(noticiasRef, where("id", "==", campoId))
    );

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const noticiaId = docSnapshot.id;

      // Eliminar el documento del horario
      const noticiaRef = doc(db, "noticias", noticiaId);
      await deleteDoc(noticiaRef);

      console.log("noticia eliminada correctamente");
      return true;
    } else {
      console.error(
        "No se encontró ningún documento con el campo ID especificado"
      );
      return false;
    }
  } catch (error) {
    console.error("Error al eliminar la noticia desde Firebase:", error);
    return false;
  }
}

async function crear_noticia(titulo, autor, fecha,  resumen, contenido) {
  try {
    const id_noticia = idv4()
    const noticia_nueva = {
      id: id_noticia,
      titulo,
      autor,
      fecha,
      resumen,
      contenido
    };

    const docRef = collection(db, "noticias");
    await addDoc(docRef, noticia_nueva);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}

async function editar_noticia(id, nuevosDatos) {
  try {
    const docRef = doc(db, "noticias", id);
    await updateDoc(docRef, nuevosDatos);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}
export{noticiasFirebase,crear_noticia,editar_noticia,obtenerNoticiaPorCampoId,actualizarNoticiaPorCampoId,eliminarNoticiaPorCampoId}
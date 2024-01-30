import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config_firebase";
//import {v4 as idv4} from"uuid"

async function estadisticas_membresias() {
  const usuariosCollection = collection(db, "usuarios");
  const membresiasCollection = collection(db, "membresias");

  try {
    const usuariosQuerySnapshot = await getDocs(usuariosCollection);
    const membresiasQuerySnapshot = await getDocs(membresiasCollection);

    if (!usuariosQuerySnapshot.empty && !membresiasQuerySnapshot.empty) {
      const usuariosData = usuariosQuerySnapshot.docs.map((doc) => doc.data());
      const membresiasData = membresiasQuerySnapshot.docs.map((doc) =>
        doc.data()
      );

      // Conteo de membresías utilizadas por usuarios
      const conteoMembresias = membresiasData.reduce((contador, membresia) => {
        const vecesUsada = usuariosData.filter(
          (usuario) => usuario.membresia === membresia.id
        ).length;
        contador[membresia.nombre] = vecesUsada;
        return contador;
      }, {});

      return conteoMembresias;
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error al obtener datos desde Firebase:", error);
    return {};
  }
}
async function estadisticas_noticias() {
  const noticiasCollection = collection(db, "noticias");

  try {
    const noticiasQuerySnapshot = await getDocs(noticiasCollection);

    if (!noticiasQuerySnapshot.empty) {
      const noticiasData = noticiasQuerySnapshot.docs.map((doc) => doc.data());

      // Conteo de noticias por autor
      const conteoNoticiasPorAutor = noticiasData.reduce(
        (contador, noticia) => {
          const autor = noticia.autor || "Desconocido";
          contador[autor] = (contador[autor] || 0) + 1;
          return contador;
        },
        {}
      );

      return conteoNoticiasPorAutor;
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error al obtener datos desde Firebase:", error);
    return {};
  }
}
async function estadisticas_eventos_por_dia() {
  const horariosCollection = collection(db, "horario");

  try {
    const horariosQuerySnapshot = await getDocs(horariosCollection);

    if (!horariosQuerySnapshot.empty) {
      const horariosData = horariosQuerySnapshot.docs.map((doc) => doc.data());

      // Conteo de eventos por día
      const conteoEventosPorDia = horariosData.reduce((contador, horario) => {
        const dia = horario.dia || "Desconocido";
        contador[dia] = (contador[dia] || 0) + 1;
        return contador;
      }, {});

      return conteoEventosPorDia;
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error al obtener datos desde Firebase:", error);
    return {};
  }
}

export { estadisticas_membresias,estadisticas_noticias,estadisticas_eventos_por_dia };

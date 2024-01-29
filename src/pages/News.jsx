import { NewsAdmin } from "../components"
import styles from "../style"
import { useState, useEffect } from "react"
import { noticiasFirebase, eliminarNoticiaPorCampoId } from "../services/firebase/functions/db/noticias"
import Swal from "sweetalert2"
import { mostrarError } from "../utils/warnings"


const News = () => {
  //obetner datos a mostrar de la base de datos
  const [noticias, setNoticias]= useState([]);

  
  useEffect(()=>{
    const obtenerNoticias = async () =>{
      try {
        const noticiasObtenidas = await noticiasFirebase();
        setNoticias(noticiasObtenidas)
      } catch (error) {
        console.error(error);
        setNoticias([]);
      }
    }
    obtenerNoticias();
    
  }, [])

  // Funcion eliminar para CRUD
  const handleDelete = async(id) => {
    try {
      const resultado = await Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará la noticia. ¿Estás seguro de continuar?',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'font-poppins',
          title: 'font-poppins',
          popup: 'bg-gray-100',
        }
      });

      if(resultado.isConfirmed){
        await eliminarNoticiaPorCampoId(id);
        const noticiasObtenidas = await noticiasFirebase();
        setNoticias(noticiasObtenidas);
        console.log ('Se elimino la noticia correctamente');
      } else {
        console.log("Operación de eliminación cancelada");
      }
    } catch (error) {
      console.log('Esta noticia tuvo problemas para eliminarse'+error);
      mostrarError();
    }
  };

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.heading2} text-center mb-5`}>Administración de Noticias</h2>
          <NewsAdmin
            news={noticias}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>


  )
}

export default News
import { NewsAdmin } from "../components"
import styles from "../style"
import { useState, useEffect } from "react"
import { noticiasFirebase, eliminarNoticiaPorCampoId } from "../services/firebase/functions/db/noticias"


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
      await eliminarNoticiaPorCampoId(id);
      const noticiasObtenidas = await noticiasFirebase();
      setNoticias(noticiasObtenidas);
      console.log ('Se elimino la noticia correctamente');
    } catch (error) {
      console.log('Esta noticia tuvo problemas para eliminarse'+error);
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
import { EditNewsForm } from "../components"
import styles from "../style"
import { obtenerNoticiaPorCampoId } from "../services/firebase/functions/db/noticias"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const NewUpdate = () => {
  const[noticia, setNoticia] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    const obtener_datos = async()=>{
      try {
        const datos= await obtenerNoticiaPorCampoId(id)
        if(datos){
          setNoticia(datos)
        }else{
          console.error('estos datos no existen')
        }
      } catch (error) {
        console.log(error)
      }
    }
    obtener_datos();
  }, [id])

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
              <EditNewsForm noticia={noticia}/>
            </div>
        </div>
    </div>
  )
}

export default NewUpdate
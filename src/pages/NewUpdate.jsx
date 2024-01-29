import { EditNewsForm } from "../components"
import styles from "../style"
import { obtenerNoticiaPorCampoId } from "../services/firebase/functions/db/noticias"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"

const NewUpdate = () => {
  const[noticia, setNoticia] = useState({});
  const {id} = useParams();

  const [contador, setContador] = useState(0);
  
  
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
    console.log('Actualizar noticias (obtener datos):'+ contador);
    setContador(contador + 1);
  }, [id])

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
              <Link to="../news" className={`${styles.backButton} text-white font-poppins`}>
                <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
              </Link>
              <EditNewsForm noticia={noticia}/>
            </div>
        </div>
    </div>
  )
}

export default NewUpdate
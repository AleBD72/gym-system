import styles from "../style";
import { obtenerServicioPorCampoId } from "../services/firebase/functions/db/servicios";
import { useParams, Link } from "react-router-dom";
import { EditServiceForm } from "../components";
import { useEffect, useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const ServiceUpdate = () => {
    const {id}= useParams();
    const [servicio, setServicio]= useState({})

    const [contador, setContador] = useState(0);
    useEffect(()=>{ 
        
        const obtener_datos = async()=>{
            try{
                const datos = await obtenerServicioPorCampoId(id)
                if (datos){
                    setServicio(datos)
                }
                else{
                    console.error('estos datos no existen')
                }
            }catch(error){
                console.log(error)
            }
        }
        obtener_datos();
        console.log('Editar Servicio (obtener datos):'+ contador);
        setContador(contador + 1);
    }, [id])

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
                <Link to="../services" className={`${styles.backButton} text-white font-poppins`}>
                    <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
                </Link>
                <EditServiceForm servicio={servicio}/>
            </div>
        </div>
    </div>
  )
}

export default ServiceUpdate
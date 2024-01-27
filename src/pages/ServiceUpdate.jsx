import styles from "../style";
import { obtenerServicioPorCampoId } from "../services/firebase/functions/db/servicios";
import { useParams } from "react-router-dom";
import { EditServiceForm } from "../components";
import { useEffect, useState } from "react";


const ServiceUpdate = () => {
    const {id}= useParams();
    const [servicio, setServicio]= useState({})

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
    }, [id])

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
                <EditServiceForm servicio={servicio}/>
            </div>
        </div>
    </div>
  )
}

export default ServiceUpdate
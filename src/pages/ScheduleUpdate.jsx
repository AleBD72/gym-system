import { useEffect, useState } from "react";
import { EditEventForm } from "../components"
import styles from "../style"
import { useParams } from "react-router-dom";
import { obtenerHorarioPorCampoId } from "../services/firebase/functions/db/horarios";

const ScheduleUpdate = () => {
    const {id} = useParams();
    const [horario,setHorario] =useState({})

    useEffect(() =>{
        const obtener_datos = async () =>{
            try {
                const datos = await obtenerHorarioPorCampoId(id)
                if (datos){
                    setHorario(datos)
                }
                else{
                    console.error("estos datos no existen")
                }
            } catch (error) {
                console.log(error)
                
            }
        }
        obtener_datos();
    },[id])

    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden h-screen`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <h2 className={`${styles.heading2Col} text-center`}>Editar datos del Evento</h2>
                    <EditEventForm horario={horario}/>
                </div>
            </div>
        </div>
    )
} 

export default ScheduleUpdate
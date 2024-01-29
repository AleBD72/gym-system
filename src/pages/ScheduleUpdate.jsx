import { useEffect, useState } from "react";
import { EditEventForm } from "../components"
import styles from "../style"
import { useParams } from "react-router-dom";
import { obtenerHorarioPorCampoId } from "../services/firebase/functions/db/horarios";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ScheduleUpdate = () => {
    const {id} = useParams();
    const [horario,setHorario] =useState({})

    const [contador, setContador] = useState(0);
  
  
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
        console.log('Actualizar eventos (obtener datos):'+ contador);
        setContador(contador + 1);
    },[id])

    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden h-screen`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <Link to="../schedule-view" className={`${styles.backButton} text-white font-poppins`}>
                        <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
                    </Link>
                    <h2 className={`${styles.heading2Col} text-center`}>Editar datos del Evento</h2>
                    <EditEventForm horario={horario}/>
                </div>
            </div>
        </div>
    )
} 

export default ScheduleUpdate
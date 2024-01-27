import { MembershipsForm } from "../components"
import { useEffect, useState } from "react";
import styles from "../style";
import { useParams } from "react-router-dom";
import { obtenerMembresiaPorCampoId } from "../services/firebase/functions/db/membresias";

const MembershipUpdate = () => {
    const {id}= useParams();
    const[membresia, setMembresia]= useState({})

    useEffect(()=>{
        const obtener_datos = async ()=>{
            try{
                const datos = await obtenerMembresiaPorCampoId(id)
                if (datos){
                    setMembresia(datos)
                } else {
                    console.error("estos datos no existen")
                }
            } catch(error){
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
                    <MembershipsForm membresia={membresia}/>
                </div>
            </div>
        </div>
    )
}

export default MembershipUpdate
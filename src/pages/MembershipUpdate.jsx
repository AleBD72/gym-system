import { MembershipsForm } from "../components"
import { useEffect, useState } from "react";
import styles from "../style";
import { useParams } from "react-router-dom";
import { obtenerMembresiaPorCampoId } from "../services/firebase/functions/db/membresias";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const MembershipUpdate = () => {
    const {id}= useParams();
    const[membresia, setMembresia]= useState({})

    const [contador, setContador] = useState(0);
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
        console.log('Actualizar Membresía (obtener datos):'+ contador);
        setContador(contador + 1);
    },[id])

    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <Link to="../memberships" className={`${styles.backButton} text-white font-poppins`}>
                        <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
                    </Link>
                    <MembershipsForm membresia={membresia}/>
                </div>
            </div>
        </div>
    )
}

export default MembershipUpdate
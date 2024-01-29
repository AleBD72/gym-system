import styles from '../style'
import { TableSchedule } from '../components';
import { horariosFirebase } from "../services/firebase/functions/db/horarios";
import { useEffect, useState } from "react";

const Schedule = () => {
  const [horarios,setHorarios] = useState([]);
  const [contador, setContador] = useState(0);
  
  
  useEffect(()=>{
    const horarios_eventos = async () => {
      try {
        const horarios = await horariosFirebase();
        console.log(horarios)
        setHorarios(horarios)
      } catch (error) {
        console.error(error);
        setHorarios([]);
      }
    };
    console.log('Obtener horarios 1:'+ contador);
    horarios_eventos();
    setContador(contador + 1);
  },[])

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.heading2} text-center`}>Horarios de Servicios y Eventos</h2>
          <TableSchedule horarios={horarios} />
        </div>
      </div>
    </div>

  )
}

export default Schedule
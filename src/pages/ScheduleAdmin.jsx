import styles from "../style";
import { TableSchedule } from "../components";
import { horariosFirebase } from "../services/firebase/functions/db/horarios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScheduleAdmin = () => {
  const [horarios, setHorarios] = useState([]);
  useEffect(() => {
    const horarios_eventos = async () => {
      try {
        const horarios = await horariosFirebase();
        setHorarios(horarios);
      } catch (error) {
        console.error(error);
        setHorarios([]);
      }
    };
    horarios_eventos();
  }, []);

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className={`${styles.heading2} text-center`}>
            Horarios de Servicios y Eventos
          </h2>
          <TableSchedule horarios={horarios} />
          <div className={`${styles.flexCenter} ${styles.marginTop} text-white`}>
            <button
              type="button"
              className="text-white font-poppins bg-fifthCol hover:bg-secondaryCol focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5"
            >
              <Link to="/admin/home/schedule-view">Administrar Eventos y Servicios</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleAdmin
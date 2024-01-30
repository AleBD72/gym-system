import { GymCalendar } from "../components"
import styles from "../style"
import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from "../context/AutProvider";
import { GuardarAsistenciaFirebase,obtenerFechasAsistidasDesdeFirebase } from "../services/firebase/functions/db/usuarios";

const Assistance = () => {
  const {auth} = useContext(AuthContext)
  const [attendedDates, setAttendedDates] = useState([]);

  useEffect(() => {
    const obtenerAsistenciasDesdeFirebase = async () => {
      try {
       
        const asistencias = await obtenerFechasAsistidasDesdeFirebase(
          auth.email
        );
        
        setAttendedDates(asistencias);
        
      } catch (error) {
        console.error(
          "Error al obtener las fechas de asistencia desde Firebase:",
          error
        );
      }
    };

    obtenerAsistenciasDesdeFirebase();
  }, []);

  const isFutureDate = (date) => {
    const today = new Date();
    return date > today;
  };

  const isSameMonth = (date) => {
    const today = new Date();
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  const handleDateSelect = (date) => {
    if(isFutureDate(date) || !isSameMonth(date)){
      Swal.fire({
        title: 'Error',
        text: 'No puedes marcar fechas en el futuro o de otros meses.',
        icon: 'error',
        confirmButtonColor: '#d33',
        customClass:{
          title: 'font-poppins',
          popup: 'bg-gray-100',
          confirmButton: 'font-poppins',
          container: 'font-poppins',
        }
      });
    }
    else if (attendedDates.some((d) => d.toDateString() === date.toDateString())) {
      setAttendedDates((prevDates) =>
        prevDates.filter((d) => d.toDateString() !== date.toDateString())
      );
    } else {
      Swal.fire({
        title: 'Confirmar asistencia',
        text: `¿Deseas confirmar que has asistido el ${date.toLocaleDateString()}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        customClass:{
          title: 'font-poppins',
          popup: 'bg-gray-100',
          confirmButton: 'font-poppins',
          container: 'font-poppins',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          handleAttendanceConfirmation(date);
        }
      });
    }
    
  };

  const handleAttendanceConfirmation = (date) => {
    setAttendedDates((prevDates) => [...prevDates, date]);
  };

  const saveDataToFirebase = () => {
    console.log('Datos guardados..');
    if (attendedDates.length === 0) {
      console.log("No hay datos de asistencia para guardar.");
      return;
    }
  
    try {
      // Intenta guardar los datos de asistencia en Firebase
      GuardarAsistenciaFirebase(attendedDates, auth.email);
      // Alerta de éxito si la operación fue exitosa
      Swal.fire({
        icon: 'success',
        title: 'Datos Guardados',
        text: 'Los datos de asistencia se han guardado correctamente!',
        confirmButtonColor: '#2C666E',
        customClass:{
          title: 'font-poppins',
          popup: 'bg-gray-100',
          confirmButton: 'font-poppins',
          container: 'font-poppins',
        }
      });
    } catch (error) {
      console.error('Error al guardar datos de asistencia:', error);
      // Alerta de error si la operación falla
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se produjo un error al guardar los datos de asistencia. Por favor, inténtalo de nuevo.',
        customClass:{
          title: 'font-poppins',
          popup: 'bg-gray-100',
          confirmButton: 'font-poppins',
          container: 'font-poppins',
        }
      });
    }
  };
  

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.heading2} text-center`}>Registro de Asistencia</h2>
          <div className="flex justify-center items-center flex-col mt-5">
            <GymCalendar onDateSelect={handleDateSelect} attendedDates={attendedDates} />
            <div className="flex justify-center items-center flex-col">
              <p className={`${styles.paragraph} mt-3`}>Días asistidos: <span className="text-fifthCol">{attendedDates.length}</span> </p>
              <button onClick={saveDataToFirebase} className="mt-3 bg-fifthCol hover:bg-secondaryCol text-white font-medium py-2 px-4 rounded font-poppins focus:outline-none focus:shadow-outline">Guardar Asistencia</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assistance
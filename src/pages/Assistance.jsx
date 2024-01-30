import { GymCalendar } from "../components"
import styles from "../style"
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Assistance = () => {
  const [attendedDates, setAttendedDates] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar las fechas asistidas desde Firebase
    // y actualizar el estado `attendedDates`.
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
        confirmButtonColor: '#d33'
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
    console.log('datos guardados..')
    // attendedDates.forEach(async (date) => {
    //   await db.collection('attendedDates').add({
    //     date: date,
    //   });
    // });
  };

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.heading2} text-center`}>Registro de Asistencia</h2>
          <div className="flex justify-center items-center flex-col mt-5">
            <GymCalendar onDateSelect={handleDateSelect} attendedDates={attendedDates} />
            <div className="flex justify-center items-center flex-col">
              <p className={`${styles.paragraph} mt-3`}>Días asistidos este mes: <span className="text-fifthCol">{attendedDates.length}</span> </p>
              <button onClick={saveDataToFirebase} className="mt-3 bg-fifthCol hover:bg-secondaryCol text-white font-medium py-2 px-4 rounded font-poppins focus:outline-none focus:shadow-outline">Guardar Asistencia</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assistance
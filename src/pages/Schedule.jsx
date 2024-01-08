//import { ScheduleForm, ScheduleList } from '../components'
//import { useState } from 'react'
import styles from '../style'
import { TableSchedule } from '../components';
//import { AddEventForm } from '../components'




const Schedule = () => {
  const horarios = [
    { id: 1, dia: 'Lunes', horaInicio: '10:00', horaFin: '12:00', name: 'Bailoterapia Grupal', entrenador: 'David'},
    { id: 2, dia: 'Miércoles', horaInicio: '15:00', horaFin: '16:00', name: 'Tratamientos de fisioterapia y estética', entrenador: 'Daniela' },
    { id: 3, dia: 'Lunes', horaInicio: '14:00', horaFin: '15:00', name: 'Yoga', entrenador: 'David' },
    { id: 4, dia: 'Jueves', horaInicio: '15:00', horaFin: '17:00', name: 'Asesoramiento Nutricional', entrenador: 'Diego' },
    { id: 5, dia: 'Viernes', horaInicio: '15:00', horaFin: '17:00', name: 'Levantamiento de Pesas', entrenador: 'Alexis' },
    { id: 6, dia: 'Miércoles', horaInicio: '15:00', horaFin: '17:00', name: 'Clase colectiva', entrenador: 'David' },
    { id: 7, dia: 'Martes', horaInicio: '15:00', horaFin: '17:00', name: 'Virtual Cycling', entrenador: 'Gabriela' },
    // Otros horarios
  ];

  //const [dia, setDia] = useState('');
  //const [horaInicio, setHoraInicio] = useState('');
  //const [horaFin, setHoraFin] = useState('');

 

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
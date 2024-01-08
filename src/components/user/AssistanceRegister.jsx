import { useState } from 'react';
import AssistanceDay from './AssistanceDay';
import AssistanceCounter from './AssistanceCounter';
import styles from '../../style';
import { assistanceImage } from '../../assets';


const AssistanceRegister = () => {
    const diasMes = Array.from({ length: 31 }, (_, index) => index + 1);
  const [asistencia, setAsistencia] = useState(Array(31).fill(false));

  const handleDiaAsistenciaChange = (dia) => {
    setAsistencia((prevAsistencia) => {
      const nuevaAsistencia = [...prevAsistencia];
      nuevaAsistencia[dia - 1] = !prevAsistencia[dia - 1];
      return nuevaAsistencia;
    });
  };

  return (
    <div className={`font-poppins text-white w-full ${styles.paddingY}`}>
      <div className={`calendar-container`}>
        {diasMes.map((dia) => (
          <AssistanceDay key={dia} dia={dia} asistio={asistencia[dia - 1]} onChange={handleDiaAsistenciaChange} />
        ))}
      </div>
      <AssistanceCounter asistencia={asistencia} />
      <div className='flex justify-center mt-6'>
        <img src={assistanceImage} alt="asistanceImage" />
      </div>
    </div>
  );
}

export default AssistanceRegister
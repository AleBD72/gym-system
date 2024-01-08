//Creación de un nuevo evento en el horario
import styles from "../../style"
import { useFormik } from "formik"
import { TextInput, Button, ComboBox } from "../index"
//import { scheduleImage } from "../../assets"
import { ScheduleValidate } from "../../utils/validateForms"
import { diasOption } from "../../constants"
import { useState } from "react"

const initialValues = {
  name: '',
  day: '',
  start: '',
  end: '',
  trainer: '',
};

const AddEventForm = () => {

  const [day, setDay] = useState('');

  const onSubmit = async (values) => {
    console.log(values)
  };

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ScheduleValidate,
  });

  return (
    <div className={`flex md:flex-row flex-col py-4 items-center justify-around translate-y-12 bg-principalCol`}>
      <div className="mt-1">
        <p className={styles.paragraph}>Bienvenido! Por favor ingresa los siguientes datos </p>
        <form onSubmit={handleSubmit}>
          <TextInput label="Nombre del evento" placeholder="Ingrese el nombre del evento" className="md:mt-7 mt-5" name='name' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.name}</small>
          <ComboBox label='Día' options={diasOption} selectedOption={day} onSelect={(selected) => (setDay(selected))} placeholder="Seleccione su genero..." name='day' setFieldValue={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.day}</small>
          <p className={styles.paragraph}>Horario:</p>
          <TextInput label="Inicio del Evento" placeholder="Ingrese la hora de inicio..." className="mt-2" name='start' onChange={handleChange} type="time" />
          <small className='text-red-500 font-poppins'>{errors?.start}</small>
          <TextInput label="Finalización del Evento" placeholder="Ingrese la hora de finalización..." className="mt-2" name='end' onChange={handleChange} type="time" />
          <small className='text-red-500 font-poppins'>{errors?.end}</small>
          <TextInput label="Entrenador a cargo" placeholder="Nombre del responsable" className="mt-2" name='trainer' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.trainer}</small>

          <Button label={"Registrar Evento"} type="submit" styles="text-center w-full bg-secondaryCol mt-5" />
        </form>
      </div>
      {/* <div className="flex justify-center items-center m-5">
        <img src={scheduleImage} alt="imageschedule" />
      </div> */}
    </div>
  )
}

export default AddEventForm
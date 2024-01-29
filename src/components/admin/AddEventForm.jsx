//Form de creación de un nuevo evento en el horario
import styles from "../../style";
import { useFormik } from "formik";
import { TextInput, Button, ComboBox } from "../index";
import { ScheduleValidate } from "../../utils/validateForms";
import { diasOption } from "../../constants";
import { useState } from "react";
import { crear_evento } from "../../services/firebase/functions/db/horarios";

const initialValues = {
  name: "",
  day: "",
  start: "",
  end: "",
  trainer: "",
};

const AddEventForm = () => {
  const [day, setDay] = useState("");

  const onSubmit = async (values, { resetForm }) => {
    const datos_evento = await crear_evento(
      values.name,
      values.end,
      values.start,
      values.trainer,
      day
    );
    console.log(datos_evento);
    if (datos_evento) {
      resetForm();
    }
  };

  const { handleChange, errors, handleSubmit, values, handleReset } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: ScheduleValidate,
    }
  );

  return (
    <div
      className={`flex md:flex-row flex-col py-4 items-center justify-around bg-principalCol`}
    >
      <div className="mt-1">
        <p className={styles.paragraph}>
          Bienvenido! Por favor ingresa los siguientes datos{" "}
        </p>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <p className={`${styles.paragraph} md:mt-7 mt-5`}>Datos generales:</p>
          <TextInput
            label="Nombre del evento"
            placeholder="Ingrese el nombre del evento"
            className="mt-3"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.name}</small>
          <ComboBox
            label="Día"
            options={diasOption}
            selectedOption={day}
            onSelect={(selected) => setDay(selected)}
            placeholder="Seleccione un día..."
            name="day"
            setFieldValue={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.day}</small>
          <TextInput
            label="Entrenador a cargo"
            placeholder="Nombre del responsable"
            className="mt-2"
            name="trainer"
            value={values.trainer}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.trainer}</small>
          <p className={`${styles.paragraph} mt-2`}>Horario del evento:</p>
          <TextInput
            label="Inicio del Evento"
            placeholder="Ingrese la hora de inicio..."
            className="mt-2"
            name="start"
            value={values.start}
            onChange={handleChange}
            type="time"
          />
          <small className="text-red-500 font-poppins">{errors?.start}</small>
          <TextInput
            label="Finalización del Evento"
            placeholder="Ingrese la hora de finalización..."
            className="mt-2"
            name="end"
            value={values.end}
            onChange={handleChange}
            type="time"
          />
          <small className="text-red-500 font-poppins">{errors?.end}</small>

          <Button
            label={"Registrar Evento"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;

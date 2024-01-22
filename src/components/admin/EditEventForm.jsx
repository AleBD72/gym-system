import styles, { layout } from "../../style";
import { useFormik } from "formik";
import { TextInput, Button, ComboBox } from "../index";
import { ScheduleValidate } from "../../utils/validateForms";
import { diasOption } from "../../constants";
import { useState, useEffect } from "react";
import { actualizarHorarioPorCampoId } from "../../services/firebase/functions/db/horarios";

const initialValues = {
  name: "",
  day: "",
  start: "",
  end: "",
  trainer: "",
};

const EditEventForm = ({ horario }) => {
  const [day, setDay] = useState("");

  const onSubmit = async (values) => {
    if (values) {
      const datos_nuevos = {
        name: values.name,
        dia: day,
        entrenador: values.trainer,
        horaFin: values.end,
        horaInicio: values.start,
      };
      const datos_actualizados = actualizarHorarioPorCampoId(
        horario.id,
        datos_nuevos
      );
      if (datos_actualizados) {
        console.log("datos actualizados con éxito");
      } else {
        console.error("No se actualizaron los datos prueba de nuevo");
      }
    }
  };

  const { handleChange, errors, handleSubmit, values, setValues } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ScheduleValidate,
  });

  useEffect(() => {
    if (horario) {
      setDay(horario.dia),
        setValues({
          name: horario.name || "",
          start: horario.horaFin || "",
          end: horario.horaInicio || "",
          trainer: horario.entrenador || "",
        });
    }
  }, [horario, setDay, setValues]);

  return (
    <div
      className={`${layout.section} items-center justify-around translate-y-12 bg-principalCol`}
    >
      <div className="mt-2">
        <p className={styles.paragraph}>
          Bienvenido! Por favor ingresa los siguientes datos{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <p className={styles.paragraph}>Datos generales:</p>
          <TextInput
            label="Nombre del evento"
            placeholder="Ingrese el nombre del evento"
            className="md:mt-7 mt-5"
            value={values.name}
            name="name"
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

          <p className={styles.paragraph}>Horario del evento:</p>
          <TextInput
            label="Inicio del Evento"
            placeholder="Ingrese la hora de inicio..."
            className="mt-2"
            name="start"
            value={values.start}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.start}</small>
          <TextInput
            label="Finalización del Evento"
            placeholder="Ingrese la hora de finalización..."
            className="mt-2"
            name="end"
            value={values.end}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.end}</small>

          <Button
            label={"Editar Evento"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;

import styles, { layout } from "../../style";
import { useFormik } from "formik";
import { TextInput, Button, ComboBox } from "../index";
import { ScheduleValidate } from "../../utils/validateForms";
import { diasOption } from "../../constants";
import { useState, useEffect } from "react";
import { actualizarHorarioPorCampoId } from "../../services/firebase/functions/db/horarios";
import Swal from "sweetalert2";
import { mostrarError, mostrarExito } from "../../utils/warnings";

const initialValues = {
  name: "",
  day: "",
  start: "",
  end: "",
  trainer: "",
};

const EditEventForm = ({ horario }) => {
  const [day, setDay] = useState("");
  const [contador, setContador] = useState(0);

  const onSubmit = async (values) => {
    if (values) {
      try {
        const resultado = await Swal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Esta acción actualizará el evento. ¿Estás seguro de continuar?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, actualizar',
          cancelButtonText: 'Cancelar',
          customClass:{
            title: 'font-poppins',
            popup: 'bg-gray-100',
            confirmButton: 'font-poppins',
            container: 'font-poppins',
          }
        });

        if (resultado.isConfirmed) {
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
            mostrarExito();
          } else {
            console.error("No se actualizaron los datos prueba de nuevo");
            mostrarError();
          }
        } else {
          console.log("Operación de actualización cancelada");
        }
      } catch (error) {
        console.error("Error al actualizar el servicio", error);
        mostrarError();
      }
    } else {
      console.log("No sirve");
    }
  };

  const { handleChange, errors, handleSubmit, values, setValues } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ScheduleValidate,
  });

  useEffect(() => {
    if (horario) {
      setDay(horario.dia);
      setValues({
        name: horario.name || "",
        start: horario.horaFin || "",
        end: horario.horaInicio || "",
        trainer: horario.entrenador || "",
      });  
    }
    console.log('Editar Evento horario Form:'+ contador);
    setContador(contador + 1);
    
  }, [horario, setDay, setValues]);

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className="mt-2">
        <p className={styles.paragraph}>
          Bienvenido! Por favor ingresa los siguientes datos{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <p className={`${styles.paragraph} md:mt-7 mt-5`}>Datos generales:</p>
          <TextInput
            label="Nombre del evento"
            placeholder="Ingrese el nombre del evento"
            className="mt-3"
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

          <p className={`${styles.paragraph} mt-2`}>Horario del evento:</p>
          <TextInput
            label="Inicio del Evento"
            placeholder="Ingrese la hora de inicio..."
            className="mt-2"
            name="start"
            type="time"
            value={values.start}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.start}</small>
          <TextInput
            label="Finalización del Evento"
            placeholder="Ingrese la hora de finalización..."
            className="mt-2"
            name="end"
            type="time"
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

import { useEffect, useState} from "react";
import { ServicesValidate } from "../../utils/validateForms";
import styles, {layout} from "../../style";
import { TextInput, Button, TextArea } from "../index";
import { useFormik } from "formik";
import { actualizarServicioPorCampoId } from "../../services/firebase/functions/db/servicios";
import { mostrarError, mostrarExito } from "../../utils/warnings";
import Swal from "sweetalert2";



const initialValues = {
  service: "",
  description: "",
};

const EditServiceForm = ({ servicio }) => {
  const onSubmit = async (values) => {
    if (values) {
      try {
        const resultado = await Swal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Esta acción actualizará el servicio. ¿Estás seguro de continuar?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, actualizar',
          cancelButtonText: 'Cancelar',
        });
        
        if (resultado.isConfirmed) {
          const datos_nuevos = {
            servicio: values.service,
            descripcion: values.description,
          };
          const datos_actualizados = actualizarServicioPorCampoId(
            servicio.id,
            datos_nuevos
          );
          if (datos_actualizados) {
            console.log("Datos actualizados con éxito");
            mostrarExito();
          } else {
            console.error("No se actualizaron los datos, intenta otra vez");
            mostrarError();
          }
        } else {
          console.log("Operación de actualización cancelada");
        }
      } catch (error) {
        console.error("Error al actualizar el servicio", error);
        mostrarError();
      }
      
    }
  };

  const { handleChange, errors, handleSubmit, values, setValues } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ServicesValidate,
  });

  const [contador, setContador] = useState(0);
  useEffect(()=>{
    if(servicio){
        setValues({
            service: servicio.servicio || "",
            description: servicio.descripcion || ""
        })
    }
    console.log('Editar Servicio:'+ contador);
    setContador(contador + 1);
  }, [servicio, setValues])

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className=" m-2">
        <h2 className={`${styles.heading2} text-center`}>Editar Servicio</h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes editar los datos de un servicio{" "}
        </p>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Nombre del servicio"
            placeholder="Ingrese el nombre"
            className="md:mt-6 mt-3"
            value={values.service}
            name="service"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.service}</small>
          <TextArea
            label="Descripción"
            placeholder="Ingrese una descripción del servicio "
            className="mt-2"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">
            {errors?.description}
          </small>

          <Button
            label={"Editar Servicio"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default EditServiceForm;

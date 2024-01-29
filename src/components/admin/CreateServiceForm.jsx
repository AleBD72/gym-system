import styles, { layout } from "../../style";
import { TextInput, Button, TextArea } from "../index";
import { ServicesValidate } from "../../utils/validateForms";
import { useFormik } from "formik";
import { crear_servicio } from "../../services/firebase/functions/db/servicios";
import { mostrarError, mostrarExito } from "../../utils/warnings";

const initialValues = {
  service: "",
  description: "",
};

const CreateServiceForm = () => {
  const onSubmit = async (values, {resetForm}) => {
    try {
      const datos_servicio = await crear_servicio(
        values.service,
        values.description
      );
      
      if(datos_servicio){
        mostrarExito();
        resetForm();
      }else{
        console.error("No se creó el servicio, inténtalo de nuevo");
        mostrarError();
      }
    } catch (error) {
      console.error("Error al crear el servicio", error);
      mostrarError();
    }
    
  };

  const { handleChange, errors, handleSubmit, values, handleReset } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ServicesValidate,
  });

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className=" m-2">
        <h2 className={`${styles.heading2} text-center`}>Agregar Servicio</h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes crear un nuevo servicio{" "}
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
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
            label={"Crear Servicio"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateServiceForm;

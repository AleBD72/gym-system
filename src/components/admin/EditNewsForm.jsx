import { useEffect } from "react";
import styles, { layout } from "../../style";
import { NewsValidate } from "../../utils/validateForms";
import { TextInput, Button, TextArea } from "../index";
import { useFormik } from "formik";
import { actualizarNoticiaPorCampoId } from "../../services/firebase/functions/db/noticias";
import { mostrarError, mostrarExito } from "../../utils/warnings";
import Swal from "sweetalert2";

const initialValues = {
  title: "",
  autor: "",
  date: "",
  abstract: "",
  content: "",
};

const EditNewsForm = ({noticia}) => {

  const onSubmit = async (values) => {
    if (values) {
      try {
        const resultado = await Swal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Esta acción actualizará la noticia. ¿Estás seguro de continuar?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, actualizar',
          cancelButtonText: 'Cancelar',
          customClass: {
            container: 'font-poppins',
            title: 'font-poppins',
            popup: 'bg-gray-100',
          }
        });

        if(resultado.isConfirmed){
          const datos_nuevos = {
            titulo: values.title,
            autor: values.autor,
            fecha: values.date,
            resumen: values.abstract,
            contenido: values.content,
          };
          
          const datos_actualizados = actualizarNoticiaPorCampoId(
            noticia.id,
            datos_nuevos
          );
          
          if (datos_actualizados) {
            console.log("datos actualizados con éxito");
            mostrarExito();
          } else {
            console.error("No se actualizaron los datos, intenta de nuevo");
            mostrarError();
          }
        }else{
          console.log("Operación de actualización cancelada");
        }
      } catch (error) {
        console.error("Error al actualizar la membresía", error);
        mostrarError();
      }
      
    } else {
      console.log("No sirve");
    }
  };

  const { handleChange, errors, handleSubmit, values, setValues } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: NewsValidate,
    }
  );


  useEffect(()=>{
    if(noticia){
      setValues({
        title: noticia.titulo || "",
        autor: noticia.autor || "",
        date: noticia.fecha || "",
        abstract: noticia.resumen || "",
        content: noticia.contenido || ""
      })
    }
    
  }, [noticia, setValues])

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className=" m-2">
        <h2 className={`${styles.heading2} text-center`}>Editar Noticia</h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes editar las noticia para los usuarios{" "}
        </p>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Título de la noticia"
            placeholder="Ingrese el título..."
            className="md:mt-6 mt-3"
            value={values.title}
            name="title"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.title}</small>
          <TextInput
            label="Autor"
            placeholder="Ingrese el autor"
            className="md:mt-6 mt-3"
            value={values.autor}
            name="autor"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.autor}</small>
          <TextInput
            label="Fecha de creación"
            placeholder="Ingrese la fecha"
            className="md:mt-6 mt-3"
            value={values.date}
            name="date"
            type="date"
            onChange={handleChange}
            readOnly
          />
          <small className="text-red-500 font-poppins">{errors?.date}</small>
          <TextArea
            label="Resumen"
            placeholder="Ingrese un pequeño resumen de la noticia "
            className="mt-2"
            name="abstract"
            value={values.abstract}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">
            {errors?.abstract}
          </small>
          <TextArea
            label="Contenido"
            placeholder="Ingresa el contenido de la noticia "
            className="mt-2"
            name="content"
            value={values.content}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.content}</small>

          <Button
            label={"Editar Noticia"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default EditNewsForm;

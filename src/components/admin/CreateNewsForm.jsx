import styles, { layout } from "../../style";
import { TextInput, Button, TextArea } from "../index";
import { NewsValidate } from "../../utils/validateForms";
import { useFormik } from "formik";
import { crear_noticia } from "../../services/firebase/functions/db/noticias";


const initialValues = {
    title: "",
    autor: "",
    abstract: "",
    content: "",
    date: "",
};

const CreateNewsForm = () => {
  const onSubmit = async (values, { resetForm }) => {
    const datos_servicio = await crear_noticia(
      values.title,
      values.autor,
      values.date,
      values.abstract,
      values.content,
      
    );
    console.log(datos_servicio);
    if (datos_servicio) {
      resetForm();
    }
  };

  const { handleChange, errors, handleSubmit, values, handleReset } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: NewsValidate,
    }
  );

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className=" m-2">
        <h2 className={`${styles.heading2} text-center`}>Agregar Noticia</h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes crear una nueva noticia para los usuarios{" "}
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
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
          <small className="text-red-500 font-poppins">
            {errors?.content}
          </small>

          <Button
            label={"Agregar Noticia"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateNewsForm;

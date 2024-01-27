import { MembershipValidate } from "../../utils/validateForms";
import { useFormik } from "formik";
import styles, { layout } from "../../style";
import { TextInput, Button, ComboBox, TextArea } from "../index";
import { membershipsImage } from "../../assets";
import { MembershipType } from "../../constants";
import { useState, useEffect } from "react";
import { actualizarMembresiaPorCampoId } from "../../services/firebase/functions/db/membresias";

const initialValues = {
  name: "",
  value: "",
  type: "",
  description: "",
};

const MembershipsForm = ({ membresia }) => {
  const [membership, setMembership] = useState("");

  const onSubmit = async (values) => {
    if (values) {
      const datos_nuevos = {
        nombre: values.name,
        precio: values.value,
        tipo: membership,
        detalles: values.description,
      };
      const datos_actualizados = actualizarMembresiaPorCampoId(
        membresia.id,
        datos_nuevos
      );
      if (datos_actualizados) {
        console.log("datos actualizados con éxito");
      } else {
        console.error("No se actualizaron los datos prueba de nuevo");
      }
    } else {
      console.log("No sirve");
    }
  };

  const { handleChange, errors, handleSubmit, values, setValues } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: MembershipValidate,
  });

  useEffect(() => {
    if (membresia) {
      setMembership(membresia.tipo),
        setValues({
          name: membresia.nombre || "",
          value: membresia.precio || "",
          description: membresia.detalles || "",
        });
    } else {
      console.log("no sirve");
    }
  }, [membresia, setMembership, setValues]);

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className=" m-2">
        <h2 className={`${styles.heading2} text-center`}>Editar Membresías</h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes modificar la información de membresías{" "}
        </p>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Nombre de la membresía"
            placeholder="Ingrese el nombre"
            className="md:mt-6 mt-3"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.name}</small>
          <TextInput
            label="Precio de membresía"
            placeholder="Ingrese el precio de la membresía"
            className="mt-2"
            name="value"
            value={values.value}
            onChange={handleChange}
            type="number"
          />
          <small className="text-red-500 font-poppins">{errors?.value}</small>
          <ComboBox
            label="Tipo de mebresía"
            options={MembershipType}
            selectedOption={membership}
            onSelect={(selected) => setMembership(selected)}
            placeholder="Seleccione el tipo de mebresía..."
            name="type"
            setFieldValue={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.genre}</small>
          
          {/* <TextInput
            label="Descripción"
            placeholder="Ingrese una descripción de la membresía "
            className="mt-2"
            name="description"
            value={values.description}
            onChange={handleChange}
          /> */}
          <TextArea 
            label="Descripción"
            placeholder="Ingrese una descripción de la membresía "
            className="mt-2"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">
            {errors?.description}
          </small>

          <Button
            label={"Modificar Membresía"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
      <div className="flex justify-center items-center m-5">
        <img src={membershipsImage} alt="imageMemberships" />
      </div>
    </div>
  );
};

export default MembershipsForm;

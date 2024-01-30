import TextInput from "../common/TextInput"; 
import ComboBox from "../common/ComboBox";
import Button from "../common/Button";
import styles, { layout } from "../../style";
import { useFormik } from "formik";
import { SuscriptionValidate } from "../../utils/validateForms";
import { UserState, PaymentMethod } from "../../constants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  actualizar_datos_usuario,
  obtener_datos_correo,
} from "../../services/firebase/functions/db/usuarios";
import { membresiasFirebase } from "../../services/firebase/functions/db/membresias";

const initialValues = {
  name: "",
  membership: "",
  pago: "",
  state: "",
};

const ActivateSuscriptionForm = () => {
  let { state } = useLocation();
  const [payment, setPayment] = useState("");
  const [usuario, setUsuario] = useState("");
  const [membershipOptions, setMembershipOptions] = useState([]);

  const [membership, setMembership] = useState("");
  const [status, setState] = useState("");
  useEffect(() => {
    const datos_usuario = async () => {
      try {
        const usuario = await obtener_datos_correo(state.email);
        const membresia = await membresiasFirebase();
        const opciones = membresia.map(({ id, nombre }) => ({
          value: id,
          label: nombre,
        }));
        setMembershipOptions(opciones);
        setUsuario(usuario);
        setValues({ name: usuario.nombre + " " + usuario.apellido });
      } catch (error) {
        console.error(
          "Error al obtener usuarios activos desde Firestore:",
          error
        );
      }
    };
    datos_usuario();
  }, []);

  const onSubmit = async (values) => {
    const datos_nuevos = {
      membresia: membership,
      metodo_pago: payment,
      status: status,
    };
    const nuevos_datos = await actualizar_datos_usuario(
      state.email,
      datos_nuevos
    );
    console.log(nuevos_datos);
  };

  const { handleChange, errors, handleSubmit, values, setValues } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: SuscriptionValidate,
  });

  return (
    <div
      className={`${layout.section} items-center justify-around translate-y-12 bg-principalCol`}
    >
      <div className="mt-2">
        <h2 className={`${styles.heading2} text-center`}>
          Activar Suscripción
        </h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes activar una suscripción para el usuario{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Nombre del Cliente"
            placeholder="Ingrese el nombre..."
            className="md:mt-6 mt-3"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.name}</small>
          <ComboBox
            label="Método de pago"
            options={PaymentMethod}
            selectedOption={payment}
            onSelect={(selected) => setPayment(selected)}
            placeholder="Seleccione el método de pago..."
            name="pago"
            setFieldValue={handleChange}
          />
          <ComboBox
            label="Membresía Seleccionada"
            options={membershipOptions}
            selectedOption={membership}
            onSelect={(selected) => setMembership(selected)}
            placeholder="Seleccione una membresía..."
            name="membership"
            setFieldValue={handleChange}
          />
          <ComboBox
            label="Estado del usuario"
            options={UserState}
            selectedOption={status}
            onSelect={(selected) => setState(selected)}
            placeholder="Seleccione el método de pago..."
            name="state"
            setFieldValue={handleChange}
          />
          <Button
            label={"Activar Usuario"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default ActivateSuscriptionForm;

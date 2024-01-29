import TextInput from "../common/TextInput";
import ComboBox from "../common/ComboBox";
import Button from "../common/Button";
import styles, { layout } from "../../style";
import { useFormik } from "formik";
import { SuscriptionValidate } from "../../utils/validateForms";
import { UserState, PaymentMethod, MembershipOption } from "../../constants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { obtener_datos_correo,actualizar_datos_usuario } from "../../services/firebase/functions/db/usuarios";

const initialValues = {
  name: "",
  membership: "",
  pago: "",
  state: "",
};

const EditSuscriptionForm = () => {
  const { state } = useLocation();
  const [payment, setPayment] = useState("");
  const [membership, setMembership] = useState("");
  const [status, setState] = useState("");
  const [usuario,setUsuario] = useState({})
  
  useEffect(() => {
    const datos_usuario = async () => {
      try {
        const usuario = await obtener_datos_correo(state.email);
        setUsuario(usuario);
        setValues({ name: usuario.nombre + " " + usuario.apellido });
        setPayment(usuario.metodo_pago)
        setMembership(usuario.membresia)
        setState(usuario.status)
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
        <h2 className={`${styles.heading2} text-center`}>Editar Suscripción</h2>
        <p className={styles.paragraph}>
          Bienvenido! Aquí puedes editar la suscripción del usuario{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Nombre del Cliente"
            placeholder="Ingrese el nombre..."
            className="md:mt-6 mt-3"
            value={values.name}
            name="name"
            onChange={handleChange}
            readOnly
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
            options={MembershipOption}
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
            readOnly
          />
          <Button
            label={"Editar Suscripción"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default EditSuscriptionForm;

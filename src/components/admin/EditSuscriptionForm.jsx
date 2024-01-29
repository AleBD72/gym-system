import TextInput from "../common/TextInput";
import ComboBox from "../common/ComboBox";
import Button from "../common/Button";
import styles,{ layout } from "../../style";
import { useFormik } from "formik";
import { SuscriptionValidate } from "../../utils/validateForms";
import { UserState, PaymentMethod, MembershipOption } from "../../constants";
import { useState } from "react";


const initialValues = {
    name: '',
    membership: '',
    pago: '',
    state: '',
}

const EditSuscriptionForm = () => {
    const [payment, setPayment] = useState("");
    const [membership, setMembership] = useState("");
    const [state, setState] = useState("");

    const onSubmit = async (values) => {
        console.log(values);
    }

    const { handleChange, errors, handleSubmit, values } = useFormik(
        {
            initialValues,
            onSubmit,
            validationSchema: SuscriptionValidate,
        }
    );

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
                selectedOption={state}
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
  )
}

export default EditSuscriptionForm
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { useFormik } from "formik";
import styles from "../../style";
import { Link } from "react-router-dom";
import { RecoverPasswordValidate } from "../../utils/validateForms";
import { password_reset } from "../../assets";
import { enviarCorreoRecuperacionContrasena } from "../../services/firebase/functions/auth/recover_password";
import {
  mostrarEnvioRecuperarContraseña,
  mostrarError,
} from "../../utils/warnings";

const initialValues = {
  email: "",
};

const RecoverPasswordForm = () => {
  const onSubmit = async (values) => {
    try {
      // Envía el correo de recuperación de contraseña
      await enviarCorreoRecuperacionContrasena(values.email);
      mostrarEnvioRecuperarContraseña();
    } catch (error) {
      console.error(
        "Error al enviar el correo de recuperación de contraseña",
        error
      );
      mostrarError();
    }
  };

  const { handleChange, errors, handleSubmit, values, handleReset } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: RecoverPasswordValidate,
    }
  );

  return (
    <div
      className={`flex md:flex-row flex-col items-center justify-around bg-principalCol`}
    >
      <div className=" m-5">
        <h2
          className={`text-center text-secondaryCol font-poppins font-medium xs:text-[32px] text-[30px] xs:leading-[58.8px] leading-[48.8px] w-full`}
        >
          OLVIDÉ MI CONTRASEÑA
        </h2>
        <p className={styles.paragraph}>
          Para recuperar tu contraseña, a continuación ingresa tu correo:
        </p>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <TextInput
            label="Correo"
            placeholder="Ingresa tu correo"
            className="md:mt-10 mt-5"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <small className="text-red-500 font-poppins">{errors?.email}</small>
          <Button
            label={"Recuperar Contraseña"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-5"
          />
          <div className="font-poppins mt-3 text-center md:text-[16px] text-[13px]">
            <p className="text-white">
              Regresar a
              <Link to="/login" className="ml-1">
                <span className="text-secondaryCol">Inicio de Sesión</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center md:ml-20 ml-0">
        <img src={password_reset} alt="resetpassword"/>
      </div>
    </div>
  );
};

export default RecoverPasswordForm;

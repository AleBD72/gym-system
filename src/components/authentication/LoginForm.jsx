//Código de formulario de inicio de sesión
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { useFormik } from "formik";
import { LoginValidate } from "../../utils/validateForms";
import { login_vector } from "../../assets";
import styles from "../../style";
import { verificar_correo } from "../../services/firebase/functions/db/usuarios";
import { iniciar_sesion_normal } from "../../services/firebase/functions/auth/iniciar_sesion";
import { Link } from "react-router-dom";
import { manejarInicioSesionIncorrecto } from "../../utils/warnings";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const onSubmit = async (values, { resetForm }) => {
    let verificacion = await verificar_correo(values.email);

    if (verificacion) {
      const datos_user = await iniciar_sesion_normal(values.email, values.password);
      if (datos_user) {
        localStorage.setItem("correo", values.email);
        window.location.href = "/login-url";
      }
      resetForm();
    } else {
      console.error("Este correo no existe");
      manejarInicioSesionIncorrecto();
    }
  };

  const { handleChange, errors, handleSubmit, values, handleReset } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: LoginValidate,
    }
  );

  return (
    <div
      className={`flex md:flex-row flex-col items-center justify-around bg-principalCol`}
    >
      <div className="m-5">
        <h2
          className={`text-center text-secondaryCol font-poppins font-medium xs:text-[32px] text-[30px] xs:leading-[58.8px] leading-[48.8px] w-full`}
        >
           INICIA SESIÓN
        </h2>
        <p className={styles.paragraph}>
          Bienvenido! Por favor ingresa tus credenciales
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <TextInput
            label="Correo"
            placeholder="Ingresa tu correo"
            className="md:mt-6 mt-3"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <small className="text-red-500 font-poppins">{errors?.email}</small>
          <TextInput
            label="Contraseña"
            placeholder="Ingrese la contraseña del usuario"
            className="mt-4"
            name="password"
            value={values.password}
            type="password"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">
            {errors?.password}
          </small>
          <div className="font-poppins mt-3 text-end md:text-[16px] text-[13px]">
              <Link to="/reset-password" className="ml-1">
                <span className="text-secondaryCol">Olvidé mi contraseña</span>
              </Link>
          </div>
          <Button
            label={"Iniciar Sesión"}
            type="submit"
            styles="text-center w-full bg-secondaryCol mt-3"
          />
          <div className="font-poppins mt-3 text-center md:text-[16px] text-[13px]">
            <p className="text-white">
              No tienes cuenta?
              <Link to="/user-registration" className="ml-1">
                <span className="text-secondaryCol">Regístrate Aquí!</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center md:ml-20 ml-0 mb-5">
        <img src={login_vector} alt="imagelogin" />
      </div>
    </div>
  );
};

export default LoginForm;

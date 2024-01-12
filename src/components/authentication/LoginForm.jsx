//Código de formulario de inicio de sesión
import TextInput from "../common/TextInput"
import Button from "../common/Button"
import { useFormik } from "formik"
import { LoginValidate } from "../../utils/validateForms";
import { login_vector } from "../../assets";
import styles, { layout } from "../../style";
import { verificar_correo } from "../../services/firebase/functions/db/usuarios";
import enviarEnlaceLogin from "../../services/firebase/functions/auth/enlaceMagico";
import { Link } from "react-router-dom";

const initialValues = {
  email: '',
}



const LoginForm = () => {

  const onSubmit = async (values,{resetForm}) => {
    let verificacion = await verificar_correo(values.email)
    if (verificacion){
      enviarEnlaceLogin(values.email);
      localStorage.setItem("correo",values.email)
      resetForm();
    }
    else{
      console.error("Este correo no existe");

    }
    
    
  }

  const { handleChange, errors, handleSubmit,values,handleReset } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: LoginValidate,
  })

  return (
    <div className={`${layout.section} items-center justify-around translate-y-12 bg-principalCol`}>
      <div className=" m-5">
        <h2 className={`text-center text-secondaryCol font-poppins font-medium xs:text-[32px] text-[30px] xs:leading-[58.8px] leading-[48.8px] w-full`}>
          INICIA SESIÓN
        </h2>
        <p className={styles.paragraph}>Bienvenido! por favor ingresa tus credenciales</p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <TextInput label="Correo" placeholder="Ingresa tu correo" className="md:mt-20 mt-6" name='email' onChange={handleChange} value={values.email} />
          <small className='text-red-500 font-poppins'>{errors?.email}</small>
          <div className="font-poppins mt-3 text-end md:text-[16px] text-[13px]">
            <p className="text-white">No tienes cuenta?
              <Link to="/user-registration" className="ml-1">
                <span className="text-secondaryCol">Registrate Aquí</span>
              </Link>
            </p>

          </div>

          <Button label={"Iniciar Sesión"} type="submit" styles="text-center w-full bg-secondaryCol mt-5" />
        </form>
      </div>
      <div className="flex justify-center items-center m-5">
        <img src={login_vector} alt="imagelogin" />
      </div>
    </div>
  )
}

export default LoginForm
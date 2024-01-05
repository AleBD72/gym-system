//Código de formulario de inicio de sesión
import TextInput from "../common/TextInput"
import Button from "../common/Button"
import { useFormik } from "formik"
import { LoginValidate } from "../../utils/validateForms";
import { login_vector } from "../../assets";
import { supabase_client } from "../../services/api";
// import { useEffect } from "react";
import styles, { layout } from "../../style";
// import { useNavigate } from "react-router-dom";
const initialValues = {
  email: '',
}



const LoginForm = () => {
  // const navigate = useNavigate()



  const onSubmit = async (values) => {
    try {

      const { data } = await supabase_client.from("UserData").select("*").eq("email", values.email).single()
      
      if(!data){
        console.log("No se encontró ningún usuario con el correo electrónico proporcionado. Debes crear una cuenta con el administrador.");
      }
      else {
        const resultado = await supabase_client.auth.signInWithOtp({ email: values.email });
        console.log(resultado)
      }

    } catch (error) {
      console.log(error.message)

    }
  }

  // useEffect(() => {
  //   if (!supabase_client.auth.getUser()) {
  //     navigate('/home')
  //   }
  // }, [navigate])

  const { handleChange, errors, handleSubmit } = useFormik({
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

        <form onSubmit={handleSubmit}>
          <TextInput label="Correo" placeholder="Ingresa tu correo" className="md:mt-20 mt-6" name='email' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.email}</small>
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
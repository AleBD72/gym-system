//Código de formulario de inicio de sesión
import TextInput from "../common/TextInput"
import Button from "../common/Button"
import { useFormik } from "formik"
import { LoginValidate } from "../../utils/validateForms";
import { supabase_client } from "../../services/api";
import { useEffect } from "react";
import styles, { layout } from "../../style";
import { useNavigate } from "react-router-dom";
import { login_vector } from "../../assets";
const initialValues = {
  email: '',
}



const LoginForm = () => {
  const navigate = useNavigate()



  const onSubmit = async (values) => {
    try {
        const {data,error} = await supabase_client.from("UserData").select("user_code").eq("email",values.email).single()
        if(error){
          console.log(error)
        }
        if(data && data.user_code){
            await supabase_client.auth.signInWithOtp({ email: values.email });
        }

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    if (!supabase_client.auth.getUser()) {
      navigate('/home')
    }
  }, [navigate])

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: LoginValidate,
  })

  return (
    <div className={`${layout.section} items-center justify-around translate-y-12`}>
      <div className=" m-5">
        <h2 className={`text-center text-secondaryCol font-poppins font-medium xs:text-[32px] text-[30px] xs:leading-[58.8px] leading-[48.8px] w-full`}>
          INICIA SESIÓN
        </h2>
        <p className={styles.paragraph}>Bienvenido! por favor ingresa tus credenciales</p>
        
        <form onSubmit={handleSubmit}>
          <TextInput label="Correo" placeholder="Ingresa tu correo" className="mt-10" name='email' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.email}</small>
          <Button label={"Iniciar Sesión"} type="submit" styles="text-center w-full bg-secondaryCol mt-5"/>
        </form>
      </div>
      <div className="flex justify-center items-center m-5">
        <img src={login_vector} alt="imagelogin" />
      </div>
    </div>
  )
}

export default LoginForm
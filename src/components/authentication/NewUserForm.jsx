import TextInput from "../common/TextInput"
import Button from "../common/Button"
import { useFormik } from "formik"
import { RegisterValidate } from "../../utils/validateForms";
import styles, { layout } from "../../style";
import { supabase_client } from "../../services/api";
import { register_image } from "../../assets";

const initialValues = {
  email: '',
  name: '',
  last_name: '',
  birth: '',
  cedula: '',
  rol: '',
  genre: '',
}

const NewUserForm = () => {
  const onSubmit = async (values, { resetForm }) => {

    console.log(values)

    try {
      const { data } = await supabase_client.from("UserData").select("*").eq("email", values.email).single()

      if (!data) {
        await supabase_client.from('UserData').insert({
          user_name: values.name,
          user_lastname: values.last_name,
          birth: values.birth,
          cedula: values.cedula,
          rol: values.rol,
          genre: values.genre,
          email: values.email
        })
        resetForm()
      }
      else {
        console.log("Este correo ya está en uso")
      }

    } catch (error) {
      console.log(error)
    }

  }

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: RegisterValidate,
  })

  return (
    <div className={`${layout.section} items-center justify-around translate-y-12 bg-principalCol`}>
      <div className=" m-5">
        <h2 className={`text-center text-secondaryCol font-poppins font-medium xs:text-[32px] text-[30px] xs:leading-[58.8px] leading-[48.8px] w-full`}>
          Registro de Nuevo Usuario
        </h2>
        <p className={styles.paragraph}>Bienvenido! Por favor ingresa los siguientes datos </p>
        <form onSubmit={handleSubmit}>
          <TextInput label="Correo" placeholder="Ingrese el correo del usuario" className="mt-4" name='email' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.email}</small>
          <TextInput label="Nombre" placeholder="Ingresa el nombre" className="mt-4" name='name' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.name}</small>
          <TextInput label="Apellido" placeholder="Ingresa el apellido" className="mt-4" name='last_name' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.last_name}</small>
          <TextInput label="Fecha de Nacimiento" placeholder="Ingrese la fecha de nacimeinto" className="mt-4" name='birth' onChange={handleChange} type="date" />
          <small className='text-red-500 font-poppins'>{errors?.birth}</small>
          <TextInput label="Cédula" placeholder="Ingresa la cédula" className="mt-4" name='cedula' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.cedula}</small>
          <TextInput label="Género" placeholder="Ingrese el genero" className="mt-4" name='genre' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.genre}</small>
          <TextInput label="Rol" placeholder="Ingresa el rol del usuario" className="mt-4" name='rol' onChange={handleChange} type="" />
          <small className='text-red-500 font-poppins'>{errors?.rol}</small>
          <br />
          <Button label={"Registrar Usuario"} type="submit" styles="w-full"/>
        </form>
      </div>
      <div className="flex justify-center items-center m-5">
        <img src={register_image} alt="imageregister" />
      </div>


    </div>
  )
}

export default NewUserForm
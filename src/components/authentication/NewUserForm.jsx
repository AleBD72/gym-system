import TextInput from "../common/TextInput"
import Button from "../common/Button"
import { useFormik } from "formik"
import { RegisterValidate } from "../../utils/validateForms";
import { supabase_client } from "../../services/api";
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
  const onSubmit = async (values) => {

    console.log(values)
    
    try {
      await supabase_client.from('UserData').insert({
        user_name: values.name,
        user_lastname: values.last_name,
        birth: values.birth,
        cedula: values.cedula,
        rol: values.rol,
        genre: values.genre,
        user_code: ""
      })
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
    <div>
      <h1>Registar un nuevo usuario</h1>
      <p>Bienvenido! por favor ingresa los datos del nuevo usuario</p>
      <form onSubmit={handleSubmit}>
        <TextInput label="Correo" placeholder="Ingrese el correo del usuario" className="m-3" name='email' onChange={handleChange} />
        <small className='text-red-500'>{errors?.email}</small>
        <TextInput label="Nombre" placeholder="Ingresa el nombre" className="m-3" name='name' onChange={handleChange} />
        <small className='text-red-500'>{errors?.name}</small>
        <TextInput label="Apellido" placeholder="Ingresa el apellido" className="m-3" name='last_name' onChange={handleChange} />
        <small className='text-red-500'>{errors?.last_name}</small>
        <TextInput label="Fecha de Nacimiento" placeholder="Ingrese la fecha de nacimeinto" className="m-3" name='birth' onChange={handleChange} type="date"/>
        <small className='text-red-500'>{errors?.birth}</small>
        <TextInput label="Cédula" placeholder="Ingresa la cédula" className="m-3" name='cedula' onChange={handleChange} />
        <small className='text-red-500'>{errors?.cedula}</small>
        <TextInput label="Género" placeholder="Ingrese el genero" className="m-3" name='genre' onChange={handleChange} />
        <small className='text-red-500'>{errors?.genre}</small>
        <TextInput label="Rol" placeholder="Ingresa el rol del usuario" className="m-3" name='rol' onChange={handleChange} type=""/>
        <small className='text-red-500'>{errors?.rol}</small>
        <br />
        <Button label={"Registrar Usuario"} type="submit" />
      </form>

    </div>
  )
}

export default NewUserForm
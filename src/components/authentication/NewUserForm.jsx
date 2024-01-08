import { useFormik } from "formik"
import { RegisterValidate } from "../../utils/validateForms";
import styles, { layout } from "../../style";
import { register_image } from "../../assets";
import { GenderOptions } from "../../constants";
import { useState } from 'react';
import { ComboBox, Button, TextInput} from '../index'

const initialValues = {
  email: '',
  name: '',
  last_name: '',
  birth: '',
  cedula: '',
  password: '',
  confirmation: '',
  genre: '',
}

const NewUserForm = () => {
  const [genero, setGenero] = useState('');

  const onSubmit = async (values) => {
    console.log(values)
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
        <TextInput label="Nombre" placeholder="Ingresa tu nombre" className="mt-2" name='name' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.name}</small>
          <TextInput label="Apellido" placeholder="Ingresa tu apellido" className="mt-2" name='last_name' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.last_name}</small>
          <TextInput label="Correo" placeholder="Ingrese su correo" className="mt-2" name='email' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.email}</small>
          {/* <TextInput label="Clave" placeholder="Ingrese su clave" className="mt-2" name='password' onChange={handleChange} type="password"/>
          <small className='text-red-500 font-poppins'>{errors?.password}</small>
          <TextInput label="Confirmar Clave" placeholder="Ingrese su clave nuevamente" className="mt-2" name='confirmation' onChange={handleChange} type="password"/>
          <small className='text-red-500 font-poppins'>{errors?.confirmation}</small> */}
          <TextInput label="Fecha de Nacimiento" placeholder="Ingrese la fecha de nacimeinto" className="mt-4" name='birth' onChange={handleChange} type="date" />
          <small className='text-red-500 font-poppins'>{errors?.birth}</small>
          <TextInput label="Cédula" placeholder="Ingresa la cédula" className="mt-2" name='cedula' onChange={handleChange} />
          <small className='text-red-500 font-poppins'>{errors?.cedula}</small>
          <ComboBox label='Género' options={GenderOptions} selectedOption={genero} onSelect={(selected)=>(setGenero(selected))} placeholder="Seleccione su genero..." name='genre' setFieldValue={handleChange}/>
          <small className='text-red-500 font-poppins'>{errors?.genre}</small>
          <Button label={"Registrar Usuario"} type="submit" styles="w-full mt-5"/>
        </form>
      </div>
      <div className="flex justify-center items-center m-5">
        <img src={register_image} alt="imageregister" />
      </div>


    </div>
  )
}

export default NewUserForm
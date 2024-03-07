//Código del formulario para editar el perfil del usuario
import { useFormik } from "formik";
import { ComboBox, Button, TextInput, TextArea } from "../index";
import styles from "../../style";
import { ProfileValidate } from "../../utils/validateForms";
import { GenderOptions } from "../../constants";
import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../../context/AutProvider";
import {actualizar_datos_usuario} from "../../services/firebase/functions/db/usuarios"
import Swal from "sweetalert2";
import { mostrarError, mostrarExito } from "../../utils/warnings";

const initialValues = {
  email: "",
  name: "",
  last_name: "",
  birth: "",
  cedula: "",
  genre: "",
  phone: "",
  address: ""
};

const EditProfileForm = () => {
  const {auth}= useContext(AuthContext);
  const [genero, setGenero] = useState(auth.genero);
  
  const initialUser = {
    firstName: auth.nombre,
    lastName: auth.apellido,
    cedula: auth.cedula,
    email: auth.email,
    birthdate: auth.fecha_nacimiento,
    gender: genero,
    phone: auth.telefono || "",
    address: auth.direccion || "",
  };
  
  const [user, setUser] = useState(initialUser);
  
  const onSubmit = async (values) => {
    if(values){
      try {
        const resultado = await Swal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Esta acción actualizará tu perfil. ¿Estás seguro de continuar?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, actualizar',
          cancelButtonText: 'Cancelar',
          customClass: {
            container: 'font-poppins',
            title: 'font-poppins',
            popup: 'bg-gray-100',
          }
        });

        if(resultado.isConfirmed){
          const datos_nuevos ={
            email: values.email,
            nombre: values.name,
            apellido: values.last_name,
            fecha_nacimiento: values.birth,
            cedula: values.cedula,
            genero: genero,
            telefono: values.phone,
            direccion: values.address
            }
            const datos_actualizados =  actualizar_datos_usuario(values.email,datos_nuevos);
            console.log(datos_actualizados);

            if(datos_actualizados){
               console.log("datos actualizados con éxito");
               mostrarExito();
               setTimeout(()=>{
                 window.location.href = "../home/profile";
               },2000)
            }
            else{
              console.error("Hubo un problema al actualizar los datos");
              mostrarError();
            }
        } else {
          console.log("Operación de actualización cancelada");
        }
      } catch (error) {
        console.error("Error al actualizar tu perfil", error);
        mostrarError();
      }
      
    }
  };

  const { handleChange, errors, handleSubmit, values, setValues} = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: ProfileValidate,
    }
  );

  useEffect(()=>{
    if(user){
      setValues({
        email: user.email || "",
        name: user.firstName || "",
        last_name: user.lastName || "",
        birth: user.birthdate || "",
        cedula: user.cedula  || "",
        genre:  user.gender || "",
        phone:  user.phone || "",
        address: user.address || "",

      })
    }
  },[user,setValues])

  return (
    
      <div className=" m-2">
        <h2 className={`${styles.heading2} text-center`}>Editar Perfil</h2>
        <p className={styles.paragraph}>
          Edita la información de tu perfil...{" "}
        </p>
      <form onSubmit={handleSubmit}>
          <TextInput
            label="Correo"
            placeholder="Ingresa tu correo"
            className="mt-4"
            name="email"
            value={values.email}
            readOnly
          />
          <small className="text-red-500 font-poppins">{errors?.email}</small>
          <TextInput
            label="Nombre"
            placeholder="Ingresa tu nombre"
            className="mt-4"
            name="name"
            value={values.name }
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.name}</small>
          <TextInput
            label="Apellido"
            placeholder="Ingresa tu apellido"
            className="mt-4"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.last_name}</small>
          <TextInput
            label="Fecha de Nacimiento"
            className="mt-4"
            name="birth"
            value={values.birth }
            onChange={handleChange}
            type="date"
          />
          <small className="text-red-500 font-poppins">{errors?.birth}</small>
          <TextInput
            label="Cédula"
            placeholder="Ingresa tu identificación"
            className="mt-4"
            name="cedula"
            value={values.cedula }
            readOnly
          />
          <small className="text-red-500 font-poppins">{errors?.cedula}</small>
          <ComboBox
            label="Género"
            options={GenderOptions}
            selectedOption={genero}
            onSelect={(selected) => setGenero(selected)}
            placeholder="Seleccione su genero..."
            name="genre" 
            setFieldValue={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.genre}</small>
          <TextInput
            label="Teléfono"
            placeholder="Ingresa tu número telefónico..."
            className="mt-4"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            type="number"
          />
          <small className="text-red-500 font-poppins">{errors?.phone}</small>
          <TextArea
            label="Domicilio"
            placeholder="Ingrese su dirección de domicilio... "
            className="mt-2"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">
            {errors?.address}
          </small>
          <br />
          <Button label={"Editar Perfil"} type="submit" styles="w-full" />
        </form>
      </div>
    // </div>
  )
}

export default EditProfileForm
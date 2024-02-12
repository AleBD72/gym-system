import { ComboBox, Button, TextInput } from "../index";
import { useFormik } from "formik";
import { RegisterValidate } from "../../utils/validateForms";
import styles, { layout } from "../../style";
import { scheduleImage } from "../../assets";
import { GenderOptions } from "../../constants";
import { useState } from "react";
import  {
  crear_usuario_firebase,
  verificar_rol,
} from "../../services/firebase/functions/db/usuarios";
import { useNavigate } from "react-router-dom";
import { manejarRegistroIncorrecto, mostrarError, mostrarRegistroExitoso } from "../../utils/warnings";

const initialValues = {
  email: "",
  name: "",
  last_name: "",
  password :"",
  confirmation :"",
  birth: "",
  cedula: "",
  rol: "2474007d-6849-4b62-b679-f00f878bc391",
  genre: "",
  status: "Inactivo"
};

const NewUserForm = () => {
  const [genero, setGenero] = useState("");
  const navigate = useNavigate();
  

  const onSubmit = async (values, { resetForm }) => {
    try {
      const RolValido = await verificar_rol(values.rol); 
        if (RolValido) {
          const creacion_usuario = await crear_usuario_firebase(
            values.email,
            values.password,
            values.name,
            values.last_name,
            values.birth,
            values.rol,
            genero,
            values.cedula,
            values.status,
          );
          resetForm();
          console.log(creacion_usuario)

          if(creacion_usuario == true){
            mostrarRegistroExitoso();
            navigate("/login");
          }
          else{
            console.log('no se registro el usuario');
            manejarRegistroIncorrecto();
          }
        }
        else{
          console.log('no se registro el usuario');
          manejarRegistroIncorrecto();
        }
    } catch (error) {
      console.log(error);
      mostrarError();
    }
  };

  const { handleChange, errors, handleSubmit, values, handleReset } = useFormik(
    {
      initialValues,
      onSubmit,
      validationSchema: RegisterValidate,
    }
  );

  return (
    <div
      className={`${layout.section} items-center justify-around bg-principalCol`}
    >
      <div className=" m-5">
        <h2
          className={`text-center text-secondaryCol font-poppins font-medium xs:text-[32px] text-[30px] xs:leading-[58.8px] leading-[48.8px] w-full`}
        >
          Registro de Nuevo Usuario
        </h2>
        <p className={styles.paragraph}>
          Bienvenido! Por favor ingresa los siguientes datos{" "}
        </p>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <TextInput
            label="Correo"
            placeholder="Ingresa tu correo"
            className="mt-4"
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
          />
          <small className="text-red-500 font-poppins">{errors?.email}</small>
          <TextInput
            label="Contraseña"
            placeholder="Ingrese la contraseña"
            className="mt-4"
            name="password"
            value={values.password}
            type='password'
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.password}</small>
          <TextInput
            label="Confirmar Contraseña"
            placeholder="Ingrese la contraseña nuevamente"
            className="mt-4"
            name="confirmation"
            type="password"
            onChange={handleChange}
          />
          <small className="text-red-500 font-poppins">{errors?.confirmation}</small>
          <TextInput
            label="Nombre"
            placeholder="Ingresa tu nombre"
            className="mt-4"
            name="name"
            value={values.name}
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
            value={values.birth}
            onChange={handleChange}
            type="date"
          />
          <small className="text-red-500 font-poppins">{errors?.birth}</small>
          <TextInput
            label="Cédula"
            placeholder="Ingresa tu identificación"
            className="mt-4"
            name="cedula"
            value={values.cedula}
            onChange={handleChange}
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
          <br />
          <Button label={"Registrar Usuario"} type="submit" styles="w-full" />
        </form>
      </div>
      <div className="flex justify-center items-center m-5">
        <img src={scheduleImage} alt="imageregister"/>
      </div>
    </div>
  );
};

export default NewUserForm;

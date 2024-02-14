import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const mostrarError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Se produjo un error durante la operación.',
      customClass:{
        title: 'font-poppins',
        popup: 'bg-gray-100',
        confirmButton: 'font-poppins',
        container: 'font-poppins',
      }
    });
};

const mostrarExito = () => {
    Swal.fire({
      icon: 'success',
      title: 'Accion realizada con éxito!',
      text: 'La acción solicitada se ejecutó sin problema.',
      confirmButtonColor: '#2C666E',
      customClass:{
        title: 'font-poppins',
        popup: 'bg-gray-100',
        confirmButton: 'font-poppins',
        container: 'font-poppins',
      }
    });
};

//Iniciar sesión y Registro de usuarios :)
const manejarInicioSesionIncorrecto = () => {
  Swal.fire({
    icon: 'error',
    title: 'Credenciales incorrectas',
    text: 'Verifica tus credenciales e inténtalo de nuevo.',
    confirmButtonColor: '#E74646',
    customClass:{
      title: 'font-poppins',
      popup: 'bg-gray-100',
      confirmButton: 'font-poppins',
      container: 'font-poppins',
    }
  });
};

//Manejar falta de verificación de correo
const manejarVerificacionIncorrectaCorreo = () => {
  Swal.fire({
    icon: 'error',
    title: 'Inicio de sesión incorrecto',
    text: 'Verifica tu correo antes de iniciar sesión',
    confirmButtonColor: '#2C666E',
    customClass:{
      title: 'font-poppins',
      popup: 'bg-gray-100',
      confirmButton: 'font-poppins',
      container: 'font-poppins',
    }
  });
};

const manejarRegistroIncorrecto = () => {
  Swal.fire({
    icon: 'error',
    title: 'Registro fallido',
    text: 'No se pudo completar el registro. Por favor, inténtalo de nuevo.',
    confirmButtonColor: '#2C666E',
    customClass:{
      title: 'font-poppins',
      popup: 'bg-gray-100',
      confirmButton: 'font-poppins',
      container: 'font-poppins',
    }
  });
};

const mostrarRegistroExitoso = () => {
  Swal.fire({
    icon: 'success',
    title: 'Te has registrado con éxito!',
    text: 'Revisa tu correo para activar tu cuenta.',
    confirmButtonColor: '#2C666E',
    customClass:{
      title: 'font-poppins',
      popup: 'bg-gray-100',
      confirmButton: 'font-poppins',
      container: 'font-poppins',
    }
  });
};

const mostrarEnvioRecuperarContraseña = () =>{
  Swal.fire({
    icon: 'info',
    title: 'Recuperación de Contraseña',
    text: 'Hemos enviado un correo electrónico de recuperación a tu dirección. Por favor, verifica tu bandeja de entrada.',
    confirmButtonColor: '#2C666E',
    customClass:{
      title: 'font-poppins',
      popup: 'bg-gray-100',
      confirmButton: 'font-poppins',
      container: 'font-poppins',
    }
  });
}

export {mostrarError, mostrarExito, manejarInicioSesionIncorrecto, manejarRegistroIncorrecto, mostrarRegistroExitoso, mostrarEnvioRecuperarContraseña, manejarVerificacionIncorrectaCorreo};
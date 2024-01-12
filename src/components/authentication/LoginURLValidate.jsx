import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import atrapar_Inicio_sesion from "../../services/firebase/functions/auth/token_Inicio_sesion";
import { obtener_datos_correo } from "../../services/firebase/functions/db/usuarios";
import { mailImage } from "../../assets";

const LoginURLValidate = () => {
  const navigate = useNavigate();
  const [destino, setDestino] = useState(""); // Utiliza un estado para almacenar el destino

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("correo");
        const datos_usuario = await obtener_datos_correo(email);

        // Definir la variable de destino según el rol del usuario
        let destinoLocal;

        if (datos_usuario.rol === "2474007d-6849-4b62-b679-f00f878bc391") {
          destinoLocal = "/usuario/home";
        } else if (
          datos_usuario.rol === "4bdb65d0-56b5-4af1-90f2-ffe939106d16"
        ) {
          destinoLocal = "/admin/home";
        } else {
          console.error("Estos roles no son válidos");
          return;
        }

        // Actualizar el estado con el destino
        setDestino(destinoLocal);
        atrapar_Inicio_sesion(window.location.href);
      } catch (error) {
        console.error("Error al obtener datos de usuario:", error);
      }
    };

    fetchData();
  }, [setDestino]);

  return (

    <div className="flex items-center justify-center h-screen bg-principalCol md:flex-row flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4 font-poppins">Inicio de Sesión Exitoso!</h1>
        <p className="text-lg text-dimWhite mb-4 font-poppins p-4">Gracias por logearte, ya puedes ir a la dashboard</p>
        {/* Utiliza el valor de destino para redirigir al usuario */}
        <button onClick={() => navigate(destino)} className="text-fifthCol hover:underline font-poppins">Ir a la dashboard</button>
      </div>
      <div className='flex items-center justify-center'>
        <img src={mailImage} alt="mailImage" className='md:mt-0 mt-6' />
      </div>
    </div>
  );
}; 

export default LoginURLValidate;

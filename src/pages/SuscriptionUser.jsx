import { useState, useContext } from "react";
import { AuthContext } from "../context/AutProvider";
import { Suscription } from "../components";

const SuscriptionUser = () => {
    const {auth}= useContext(AuthContext);

  const initialUser = {
    status: auth.status,
    membresia: auth.membresia,
    metodo_pago: auth.metodo_pago,
    precio: auth.email,
    tipo: auth.fecha_nacimiento,
    detalles: auth.genero,
  };

  const [user, setUser] = useState(initialUser);
  return (
    <div>
        <Suscription user={user}/>
        <div className="text-center  mt-4">
          <small className="text-fifthCol font-poppins text-center font-semibold">
            Asegúrate de solicitar la activación de tu suscripción a un administrador para obtener la información exclusiva de tu membresía en esta ventana. ¡No te pierdas los beneficios!
          </small>
        </div>
    </div>
  )
}

export default SuscriptionUser
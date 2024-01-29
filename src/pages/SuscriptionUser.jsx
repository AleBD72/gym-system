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
           <small className="text-secondaryCol font-poppins text-center font-semibold">No olvides activar tu suscipción para obtener la información de tu suscripción!</small>
        </div>
    </div>
  )
}

export default SuscriptionUser
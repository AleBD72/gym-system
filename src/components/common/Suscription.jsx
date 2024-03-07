import { useEffect, useState } from "react";
import { membresiasFirebase } from "../../services/firebase/functions/db/membresias";
const Suscription = ({ user }) => {
  const [membresias, setMembresia] = useState([]);

  useEffect(() => {
    const obtenerMembresias = async () => {
      try {
        // Realizar operaciones asíncronas para obtener membresias
        let membresiasCompletas = await membresiasFirebase();
        // Actualizar el estado con las membresias obtenidas
        setMembresia(membresiasCompletas);
      } catch (error) {
        console.error("Error al obtener las membresias:", error);
      }
    };

    obtenerMembresias();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="bg-principalCol p-8 shadow-lg shadow-fifthCol rounded-md">
        <h2 className="md:text-5xl text-3xl font-bold mb-4 font-poppins text-fifthCol">
          Detalles de tu Suscripción
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="font-poppins">
            <p className="text-dimWhite my-3">
              Tú estado actual:{" "}
              <span className="text-fifthCol">{user.status}</span>{" "}
            </p>
            <p className="text-dimWhite mb-3">
              Membresía:{" "}
              <span className="text-fifthCol">
                {membresias.map((membresia) =>
                  membresia.id === user.membresia ? membresia.nombre : null
                )}
              </span>
            </p>
            <p className="text-dimWhite my-3">
              Método de pago: 
              <span className="text-fifthCol"> {user.metodo_pago}</span>
              
            </p>
          </div>
          {/* <div className="font-poppins">
                <p className="text-dimWhite my-3">Valor a pagar (por mes o año): </p>
                <p className="text-dimWhite mb-3">Tipo de membresía: </p>
                <p className="text-dimWhite my-3">Detalles de membresía: </p>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Suscription;

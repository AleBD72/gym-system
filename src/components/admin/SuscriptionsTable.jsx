import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { membresiasFirebase } from "../../services/firebase/functions/db/membresias";

const SuscriptionsTable = ({ users, onDesactivar }) => {
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

  // Verificar si users es undefined o no es un array
  if (!users || !Array.isArray(users)) {
    console.error("La prop 'users' es undefined o no es un array");
    return null; // Puedes devolver algo diferente o simplemente no renderizar nada
  }
  return (
    <table className="w-full border border-gray-300 mb-4 text-center font-poppins ">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border-b">Usuario</th>
          <th className="py-2 px-4 border-b">Membresía</th>
          <th className="py-2 px-4 border-b">Método de Pago</th>
          <th className="py-2 px-4 border-b">Estado</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td className="py-2 px-4 border-b text-white">
              {user.nombre} {user.apellido}
            </td>
            <td className="py-2 px-4 border-b text-white text-sm">
              {membresias.map((membresia) =>
                  membresia.id === user.membresia ? membresia.nombre : null
              )}
            </td>
            <td className="py-2 px-4 border-b text-white text-sm">
              {user.metodo_pago}
            </td>
            <td className="py-2 px-4 border-b text-white text-sm">
              {user.status}
            </td>
            <td className="py-2 px-4 border-b">
              <Link to="../suscription-update" state={{ email: user.email }}>
                <button className="bg-secondaryCol text-white px-2 py-1 rounded mr-2 hover:bg-thirdCol focus:outline-none md:mb-0 mb-3">
                  Editar
                </button>
              </Link>

              <button
                className="bg-red-800 text-white px-2 py-1 rounded hover:bg-red-900 focus:outline-none md:mb-0 mb-3"
                onClick={() => onDesactivar(user.email)}
              >
                Desactivar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SuscriptionsTable;

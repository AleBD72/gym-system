//Vista para tabla edición de membresías mostradas en pagina principal
import { useState, useEffect } from "react";
import { membresiasFirebase } from "../../services/firebase/functions/db/membresias";
import { Link } from "react-router-dom";


const MembershipsList = () => {
  const [membresias, setMembresias] = useState([]);

  useEffect(()=>{
    const obtenerMembresias = async () => {
      try{
        const membresiasObtenidas = await membresiasFirebase();
        setMembresias(membresiasObtenidas);
      }catch (error){
        console.error(error);
        setMembresias([]);
      }
    }
    obtenerMembresias();
  },[]);
    

    
  return (
    <div className="overflow-x-auto shadow-lg shadow-fifthCol rounded-md">
      <table className="min-w-full bg-principalCol border text-center font-poppins  text-white ">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="py-4 px-4 border-b">Nombre</th>
            <th className="py-4 px-4 border-b">Precio</th>
            <th className="py-4 px-4 border-b">Tipo</th>
            <th className="py-4 px-4 border-b">Descripción</th>
            <th className="py-4 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {membresias.map((membresia) => (
            <tr key={membresia.id}>
              <td className="py-4 px-4 border-b">{membresia.nombre}</td>
              <td className="py-4 px-4 border-b text-fifthCol">{membresia.precio}</td>
              <td className="py-4 px-4 border-b">{membresia.tipo}</td>
              <td className="py-4 px-4 border-b text-sm">{membresia.detalles}</td>
              <td className="py-4 px-4 border-b">
                <Link to={`../membership-update/${membresia.id}`}>
                  <button
                    className="bg-secondaryCol text-white px-4 py-1 mr-2 rounded focus:outline-none focus:shadow-outline-blue"
                  >
                    Editar
                  </button>
                </Link>       
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MembershipsList
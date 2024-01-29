import { useEffect, useState } from "react";
import { eliminarHorarioPorCampoId, horariosFirebase } from "../services/firebase/functions/db/horarios";
import { Link } from "react-router-dom";
import styles from "../style";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const ScheduleView = () => {
  const [horarios, setHorarios] = useState([]);

  const [contador, setContador] = useState(0);
  useEffect(() => {
  
    const obtenerHorarios = async () => {
      try {
        const horariosObtenidos = await horariosFirebase();
        setHorarios(horariosObtenidos);
      } catch (error) {
        console.error(error);
        setHorarios([]);
      }
    };
    obtenerHorarios();
    console.log('Obtener horarios SV:'+ contador);
    setContador(contador + 1);
  }, []);



  const handleEliminarEvento = async(id) => {
    try {
      // Eliminar el horario
      await eliminarHorarioPorCampoId(id);
      
      // Obtener la lista actualizada de horarios
      const horariosObtenidos = await horariosFirebase();
      
      // Actualizar el estado con la lista actualizada
      setHorarios(horariosObtenidos);
      
      console.log("Se eliminó con éxito este evento");
    } catch (error) {
      console.error("Error al eliminar el evento", error);
    }
  };

  return (
    <div>
      <Link to="../schedule" className={`${styles.backButton} text-white font-poppins`}>
        <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
      </Link>
      <h2 className={`${styles.heading2} text-center`}>Administración de Horarios</h2>
      <Link to="../schedule-create">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none font-poppins mb-3">
          Agregar Evento
        </button>
      </Link>

      {horarios.length > 0 ? (
        <div>
          <table className="w-full border border-gray-300 mb-4 text-center font-poppins ">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Día de la Semana</th>
                <th className="py-2 px-4 border-b">Horario</th>
                <th className="py-2 px-4 border-b">Evento</th>
                <th className="py-2 px-4 border-b">Entrenador</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-white">{horario.dia}</td>
                  <td className="py-2 px-4 border-b text-white">{horario.horaInicio} - {horario.horaFin}</td>
                  <td className="py-2 px-4 border-b text-white text-sm">{horario.name}</td>
                  <td className="py-2 px-4 border-b text-white">{horario.entrenador}</td>
                  <td className="py-2 px-4 border-b text-white">
                    <Link to={`../schedule-update/${horario.id}`}>
                      <button className="bg-secondaryCol text-white px-2 py-1 rounded mr-2 hover:bg-thirdCol focus:outline-none md:mb-0 mb-3">
                        Editar
                      </button>
                    </Link>

                    <button
                      className="bg-red-800 text-white px-2 py-1 rounded hover:bg-red-900 focus:outline-none"
                      onClick={() => handleEliminarEvento(horario.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className={`${styles.paragraph} text-center`}>No hay eventos disponibles...</p>
      )}
    </div>
  );
};

export default ScheduleView;

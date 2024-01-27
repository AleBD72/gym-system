import { useEffect, useState } from "react";
import { eliminarHorarioPorCampoId, horariosFirebase } from "../services/firebase/functions/db/horarios";
import { Link } from "react-router-dom";
import styles from "../style";

const ScheduleView = () => {
  const [horarios, setHorarios] = useState([]);

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
  }, [horarios]);



  const handleEliminarEvento = (id) => {
    const eliminar_evento = eliminarHorarioPorCampoId(id)
    if (eliminar_evento) {
      console.log("Se elimino con exito este evento");
    } else {
      console.error("Este dato no se ha eliminado exitosamente");
    }
  };

  return (
    <div>
      <h2 className={`${styles.heading2} text-center`}>Administración de Horarios</h2>
      <Link to="../schedule-create">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none font-poppins">
          Agregar Evento
        </button>
      </Link>

      {horarios.length > 0 ? (
        <div>
          <table className="w-full border border-gray-300 mb-4 text-center font-poppins ">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Día de la Semana</th>
                <th className="py-2 px-4 border-b">Hora de Inicio</th>
                <th className="py-2 px-4 border-b">Hora de Fin</th>
                <th className="py-2 px-4 border-b">Evento</th>
                <th className="py-2 px-4 border-b">Entrenador</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-white">{horario.dia}</td>
                  <td className="py-2 px-4 border-b text-white">{horario.horaInicio}</td>
                  <td className="py-2 px-4 border-b text-white">{horario.horaFin}</td>
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
        <p className={`${styles.paragraph} text-center`}>No hay eventos disponibles.</p>
      )}
    </div>
  );
};

export default ScheduleView;

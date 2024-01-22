import { useEffect, useState } from "react";
import { eliminarHorarioPorCampoId, horariosFirebase } from "../services/firebase/functions/db/horarios";
import { Link } from "react-router-dom";

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
  }, []);



  const handleEliminarEvento = (id) => {
    const eliminar_evento = eliminarHorarioPorCampoId(id)
    if (eliminar_evento) {
      console.log("Se elimino con exito este evento");
    } else {
      console.error("Este dato se ha eliminado exitosamente");
    }
  };

  return (
    <div>
      <h2>Horarios</h2>
      <Link to="../schedule-create">
        <button className="bg-sky-500 hover:bg-sky-700">Agregar Evento</button>
      </Link>

      {horarios.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Día de la Semana</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Nombre</th>
                <th>Entrenador</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index}>
                  <td>{horario.dia}</td>
                  <td>{horario.horaInicio}</td>
                  <td>{horario.horaFin}</td>
                  <td>{horario.name}</td>
                  <td>{horario.entrenador}</td>
                  <td>
                    <Link to={`../schedule-update/${horario.id}`}>
                      <button className="bg-sky-500 hover:bg-sky-700">
                        Editar
                      </button>
                    </Link>

                    <button
                      className="bg-sky-500 hover:bg-sky-700"
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
        <p>No hay eventos disponibles.</p>
      )}
    </div>
  );
};

export default ScheduleView;

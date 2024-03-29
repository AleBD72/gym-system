import { useEffect, useState } from "react";
import { eliminarHorarioPorCampoId, horariosFirebase } from "../services/firebase/functions/db/horarios";
import { Link } from "react-router-dom";
import styles from "../style";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { mostrarError, mostrarExito } from "../utils/warnings";

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



  const handleEliminarEvento = async(id) => {
    try {
      const resultado = await Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el evento. ¿Estás seguro de continuar?',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'font-poppins',
          title: 'font-poppins',
          popup: 'bg-gray-100',
        }
      });
  
      if (resultado.isConfirmed) {
        // El usuario confirmó la acción, eliminar el horario
        await eliminarHorarioPorCampoId(id);
        // Obtener la lista actualizada de horarios
        const horariosObtenidos = await horariosFirebase();
        // Actualizar el estado con la lista actualizada
        setHorarios(horariosObtenidos);
        console.log("Se eliminó con éxito este evento");
        mostrarExito();
      } else {
        console.log("Operación de eliminación cancelada");
      }
    } catch (error) {
      console.error("Error al eliminar el evento", error);
      mostrarError();
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

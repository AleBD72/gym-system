import { Link } from "react-router-dom";
import styles from "../../style";

const ServicesTable = ({ services, onDelete }) => {
  return (
    <div>
        {services.length > 0 ? (
          <div className="overflow-x-auto rounded-md mb-4">
            <table className="w-full border border-gray-300  text-center font-poppins ">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Descripción</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="py-2 px-4 border-b text-white">{service.servicio}</td>
                  <td className="py-2 px-4 border-b text-white text-sm">{service.descripcion}</td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`../service-update/${service.id}`}>
                      <button
                        className="bg-secondaryCol text-white px-2 py-1 rounded mr-2 hover:bg-thirdCol focus:outline-none md:mb-0 mb-3"
                      >
                        Editar
                      </button>
                    </Link>
                  
                    <button
                      className="bg-red-800 text-white px-2 py-1 rounded hover:bg-red-900 focus:outline-none"
                      onClick={() => onDelete(service.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (<p className={`${styles.paragraph} text-center mt-5`}>No hay servicios registrados...</p>)}
    </div>
    
    
    
  );
}

export default ServicesTable
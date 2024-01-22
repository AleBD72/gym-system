

const ServicesTable = ({ services, onDelete, onEdit }) => {
  return (
    <table className="w-full border border-gray-300 mb-4 text-center font-poppins ">
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
            <td className="py-2 px-4 border-b text-white">{service.nombre}</td>
            <td className="py-2 px-4 border-b text-white text-sm">{service.descripcion}</td>
            <td className="py-2 px-4 border-b">
              <button
                className="bg-secondaryCol text-white px-2 py-1 rounded mr-2 hover:bg-thirdCol focus:outline-none md:mb-0 mb-3"
                onClick={() => onEdit(service.id)}
              >
                Editar
              </button>
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
  );
}

export default ServicesTable
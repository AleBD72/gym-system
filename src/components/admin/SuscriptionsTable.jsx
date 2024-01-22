

const SuscriptionsTable = ({ users, onEdit }) => {
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
          <tr key={user.id}>
            <td className="py-2 px-4 border-b text-white">{user.nombre}</td>
            <td className="py-2 px-4 border-b text-white text-sm">{user.membresia}</td>
            <td className="py-2 px-4 border-b text-white text-sm">{user.metodoPago}</td>
            <td className="py-2 px-4 border-b text-white text-sm">{user.estado}</td>
            <td className="py-2 px-4 border-b">
              <button
                className="bg-secondaryCol text-white px-2 py-1 rounded mr-2 hover:bg-thirdCol focus:outline-none md:mb-0 mb-3"
                onClick={() => onEdit(user.id)}
              >
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SuscriptionsTable
//Vista para tabla edición de membresías mostradas en pagina principal

const MembershipsList = () => {
    const data = [
        { id: 1, nombre: 'Producto 1', precio: '$10', tipo: 'Tipo 1', descripcion: 'Descripción 1' },
        { id: 2, nombre: 'Producto 2', precio: '$20', tipo: 'Tipo 2', descripcion: 'Descripción 2' },
        { id: 3, nombre: 'Producto 3', precio: '$30', tipo: 'Tipo 3', descripcion: 'Descripción 3' },
      ];
    
      const handleEdit = (id) => {
        // Lógica para editar el registro con el ID proporcionado
        console.log(`Editar registro con ID ${id}`);
      };
    
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
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="py-4 px-4 border-b">{item.nombre}</td>
                  <td className="py-4 px-4 border-b text-fifthCol">{item.precio}</td>
                  <td className="py-4 px-4 border-b">{item.tipo}</td>
                  <td className="py-4 px-4 border-b">{item.descripcion}</td>
                  <td className="py-4 px-4 border-b">
                    <button
                      className="bg-secondaryCol text-white px-4 py-1 mr-2 rounded focus:outline-none focus:shadow-outline-blue"
                      onClick={() => handleEdit(item.id)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default MembershipsList
import SuscriptionsTable from './SuscriptionsTable'
import { useState } from 'react'

const SuscriptionsAdmin = ({ users, onDesactivar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  //Filtrar usuarios por el término de búsqueda
  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcula el índice del último usuario en la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  // Calcula el índice del primer servicio en la página actual
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Obtiene los servicios de la página actual
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar usuarios..."
          className="p-2 border border-gray-300 rounded mr-4 font-poppins"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <SuscriptionsTable
        users={currentUsers}
        onDesactivar={onDesactivar}
      />
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-2 px-3 py-2 rounded-full font-poppins ${currentPage === index + 1 ? 'bg-secondaryCol text-white' : 'bg-gray-300'}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SuscriptionsAdmin
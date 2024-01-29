import UserCard from "../common/UserCard";
import styles from "../../style";
import { useState } from "react";

const UsersList = ({ usuarios, onEditarRol }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  // Filtrar usuarios basados en la búsqueda
  const usuariosFiltrados = usuarios.filter((usuario) => {
    const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`.toLowerCase();
    return nombreCompleto.includes(busqueda.toLowerCase());
  });

  return (
    <div>
      <h2 className={`${styles.heading2} text-center mb-4`}>
        Usuarios Registrados
      </h2>
      {/* Buscador de usuarios */}
      <input
        type="text"
        placeholder="Buscar por nombre o apellido..."
        className="p-2 border border-gray-300 rounded-lg mb-6 font-poppins "
        value={busqueda}
        onChange={handleBusquedaChange}
      />

      {usuariosFiltrados.map((usuario) => (
        <UserCard
          key={usuario.email}
          usuario={usuario}
          onEditarRol={onEditarRol}
        />
      ))}
    </div>
  );
};

export default UsersList;

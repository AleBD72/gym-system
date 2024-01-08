import UserCard from "../common/UserCard"

const UsersList = ({ usuarios, onEditarRol }) => {
    return (
        <div>
          <h2 className="text-2xl font-bold mb-6 font-poppins text-white">Lista de Usuarios</h2>
          {usuarios.map((usuario) => (
            <UserCard key={usuario.id} usuario={usuario} onEditarRol={onEditarRol} />
          ))}
        </div>
      );
}

export default UsersList
import UserCard from "../common/UserCard"
import styles from "../../style";

const UsersList = ({ usuarios, onEditarRol }) => {
    return (
        <div>
          <h2 className={`${styles.heading2} text-center mb-4`}>Usuarios Registrados</h2>
          {usuarios.map((usuario) => (
            <UserCard key={usuario.email} usuario={usuario} onEditarRol={onEditarRol} />
          ))}
        </div>
      );
}

export default UsersList
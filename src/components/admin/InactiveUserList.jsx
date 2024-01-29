import styles from "../../style";
import InactiveUserCard from "./InactiveUserCard";

const InactiveUserList = ({ usuarios }) => {
    return (
        <div>
          <h2 className={`${styles.heading2} text-center mb-4`}>Usuarios Inactivos</h2>
          {usuarios.map((usuario) => (
            <InactiveUserCard key={usuario.email} usuario={usuario}  />
          ))}
        </div>
      );
}

export default InactiveUserList
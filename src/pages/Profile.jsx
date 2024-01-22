import { UserProfile } from "../components"
import { useState } from "react";

const Profile = () => {

  const initialUser = {
    firstName: 'Camila',
    lastName: 'Mier',
    cedula: '1234567890',
    email: 'usuario@example.com',
    birthdate: '01/01/1990',
    gender: 'Femenino',
  };

  const [user, setUser] = useState(initialUser);

  const handleEditClick = () => {
    // Aquí  implementar la lógica para abrir un formulario de edición o navegar a una página de edición del perfil.
    console.log('Editar perfil');
  };

  return (
    <div>
      <UserProfile user={user} onEditClick={handleEditClick} />
    </div>
  );
}

export default Profile
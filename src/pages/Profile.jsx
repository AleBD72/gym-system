import { UserProfile } from "../components"
import { useState, useContext } from "react";
import { AuthContext } from "../context/AutProvider";


const Profile = () => {
  const {auth}= useContext(AuthContext);

  const initialUser = {
    firstName: auth.nombre,
    lastName: auth.apellido,
    cedula: auth.cedula,
    email: auth.email,
    birthdate: auth.fecha_nacimiento,
    gender: auth.genero,
    phone: auth.telefono,
    address: auth.direccion
  };

  const [user, setUser] = useState(initialUser);


  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
}

export default Profile
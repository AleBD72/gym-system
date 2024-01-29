//Código del perfil de un usuario
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-principalCol p-8 shadow-lg shadow-fifthCol rounded-md">
        <h2 className="text-5xl font-bold mb-4 font-poppins text-fifthCol">{`${user.firstName} ${user.lastName}`}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="font-poppins">
            <p className="text-dimWhite my-3">Cédula: {user.cedula}</p>
            <p className="text-dimWhite mb-3">Correo: <span className="text-fifthCol">{user.email}</span></p>
            <p className="text-dimWhite my-3">Teléfono: 0{user.phone}</p>
          </div>
          <div className="font-poppins">
            <p className="text-dimWhite my-3">Fecha de Nacimiento: {user.birthdate}</p>
            <p className="text-dimWhite mb-3">Género: {user.gender}</p>
            <p className="text-dimWhite my-3">Dirección: {user.address}</p>
          </div>
        </div>
        <Link to='../update-profile'>
          <button
            className="mt-4 bg-fifthCol hover:bg-secondaryCol text-white font-medium py-2 px-4 rounded font-poppins focus:outline-none focus:shadow-outline"
          >
            Editar Perfil
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default UserProfile;
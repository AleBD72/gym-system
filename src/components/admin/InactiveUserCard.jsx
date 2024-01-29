import { Link } from "react-router-dom";

const InactiveUserCard = ({ usuario, onEditarEstado }) => {
    const { nombre, apellido,email, estado } = usuario;

    return (
        <div className="bg-principalCol bg-opacity-55 rounded-lg shadow-lg shadow-fifthCol p-5 mb-4 flex flex-col md:flex-row items-center">
          <div className="mr-4 mb-1 md:mb-0">
  
          </div>
          <div className="flex-1 md:mb-0 mb-3">
            <h3 className="md:text-xl text-lg font-semibold font-poppins text-white">{`${nombre} ${apellido}`}</h3>
            <p className="text-dimWhite md:text-base text-sm font-poppins">
              <span className="text-fifthCol"> Correo: </span> {email}
            </p>
          </div>
          <Link to='../activate-suscription'>
            <button
                className="bg-fifthCol text-black font-medium font-poppins px-4 py-2 rounded-md hover:bg-gray-200"
            >
                Activar Suscripción
            </button>
          </Link>
          
        </div>
      );
}

export default InactiveUserCard


const UserCard = ({ usuario, onEditarRol }) => {
    const { nombre, apellido,rol,email, genero } = usuario;

    return (
      <div className="bg-principalCol bg-opacity-55 rounded-lg shadow-lg shadow-fifthCol p-5 mb-4 flex flex-col md:flex-row items-center">
        <div className="mr-4 mb-1 md:mb-0">

        </div>
        <div className="flex-1 md:mb-0 mb-3">
          <h3 className="md:text-xl text-lg font-semibold font-poppins text-white">{`${nombre} ${apellido}`}</h3>
          <p className="text-dimWhite md:text-base text-sm font-poppins">
            <span className="text-fifthCol"> Correo: </span> {email}
          </p>
          <p className="text-dimWhite md:text-base text-sm font-poppins">
            <span className="text-fifthCol"> Rol: </span>  {rol === '4bdb65d0-56b5-4af1-90f2-ffe939106d16' ? 'Administrador' : (rol === '2474007d-6849-4b62-b679-f00f878bc391' ? 'Cliente' : rol)}
          </p>
        </div>
        <button
          className="bg-fifthCol text-black font-medium font-poppins px-4 py-2 rounded-md hover:bg-gray-200"
          onClick={() => onEditarRol(usuario.email,usuario.rol)}
        >
          Editar Rol
        </button>
      </div>
    );
}

export default UserCard
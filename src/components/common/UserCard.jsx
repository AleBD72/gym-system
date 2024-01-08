

const UserCard = ({ usuario, onEditarRol }) => {
    const { nombre, rol, fotoPerfil } = usuario;

    return (
      <div className="bg-secondaryCol bg-opacity-55 rounded-lg shadow-md shadow-secondaryCol p-4 mb-4 flex items-center">
        <div className="mr-4 ">
          <div
            className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden border-2 border-gray-400"
            style={{ backgroundImage: `url(${fotoPerfil})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        </div>
        <div className="flex-1">
          <h3 className="md:text-xl text-lg font-semibold font-poppins text-white">{nombre}</h3>
          <p className="text-dimWhite md:text-base text-sm font-poppins">{rol}</p>
        </div>
        <button
          className="bg-white text-principalCol text-opacity-55 font-semibold font-poppins px-4 py-2 rounded-md hover:bg-gray-200"
          onClick={() => onEditarRol(usuario.id)}
        >
          Editar Rol
        </button>
      </div>
    );
}

export default UserCard
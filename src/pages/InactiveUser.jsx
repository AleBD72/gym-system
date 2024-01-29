import { InactiveUserList } from "../components";


const InactiveUser = () => {
  const usuarios = [
    { id: 1, nombre: 'Usuario1', apellido: 'Apellido ', email: 'correo1@correo.com', estado: 'Inactivo' },
    { id: 2, nombre: 'Usuario2', apellido: 'Apellido ', email: 'correo2@correo.com', estado: 'Inactivo' },
    { id: 3, nombre: 'Usuario3', apellido: 'Apellido ', email: 'correo3@correo.com', estado: 'Inactivo'  },
    { id: 4, nombre: 'Usuario4', apellido: 'Apellido ', email: 'correo4@correo.com', estado: 'Inactivo' },
    { id: 5, nombre: 'Usuario5', apellido: 'Apellido ', email: 'correo5@correo.com', estado: 'Inactivo'  },
    { id: 6, nombre: 'Usuario6', apellido: 'Apellido ', email: 'correo6@correo.com', estado: 'Inactivo'  },
    // Agrega más usuarios según sea necesario
  ];

  return (
    <div className="container mx-auto p-8 bg-principalCol">
        <InactiveUserList usuarios={usuarios}  />
    </div>
);
}

export default InactiveUser
import { actualizarRolUsuario, obtenerTodosLosUsuarios } from "../services/firebase/functions/db/usuarios";

import { UsersList } from "../components";
import { useEffect,useState } from "react";

const Users = () => {
     const [usuarios, setUsuarios] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const usuariosData = await obtenerTodosLosUsuarios();
           setUsuarios(usuariosData);
         } catch (error) {
           console.error("Error al obtener usuarios:", error);
         }
       };

       fetchData();
     }, [usuarios]);

    const handleEditarRol = async (useremail,userrol) => {
       
       let nuevoRol = "";

       if (userrol === "4bdb65d0-56b5-4af1-90f2-ffe939106d16") {
         nuevoRol = "2474007d-6849-4b62-b679-f00f878bc391";
       } else {
         nuevoRol = "4bdb65d0-56b5-4af1-90f2-ffe939106d16";
       }
       await actualizarRolUsuario(useremail, nuevoRol);
       setUsuarios((prevUsuarios) =>
         prevUsuarios.map((usuario) =>
           usuario.email === useremail ? { ...usuario, rol: nuevoRol } : usuario
         )
       );
    };

    return (
        <div className="container mx-auto p-8 bg-principalCol">
            <UsersList usuarios={usuarios} onEditarRol={handleEditarRol} />
        </div>
    );
}

export default Users
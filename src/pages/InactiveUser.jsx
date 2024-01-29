import { InactiveUserList } from "../components";
import { useEffect, useState } from "react";
import { obtenerUsuariosInactivos } from "../services/firebase/functions/db/usuarios";


const InactiveUser = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuariosInactivosFirebase = async () => {
      // Llama a tu función para obtener usuarios activos desde Firestore
      try {
        const usuariosInactivos = await obtenerUsuariosInactivos();
        setUsuarios(usuariosInactivos);
      } catch (error) {
        console.error(
          "Error al obtener usuarios activos desde Firestore:",
          error
        );
      }
    };

    obtenerUsuariosInactivosFirebase();
  }, []);

  return (
    <div className="container mx-auto p-8 bg-principalCol">
        <InactiveUserList usuarios={usuarios}  />
    </div>
);
}

export default InactiveUser
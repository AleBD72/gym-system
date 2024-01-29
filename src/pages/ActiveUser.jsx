import styles from "../style"
import { useEffect, useState } from "react";
import { SuscriptionsAdmin } from "../components"
import { eliminarCamposYCambiarEstado, obtenerUsuariosActivos } from "../services/firebase/functions/db/usuarios"


const ActiveUser = () => {
    const [usersActive, setUsersActive] = useState([]);

    useEffect(() => {
       const obtenerUsuariosActivosFirebase = async () => {
         // Llama a tu función para obtener usuarios activos desde Firestore
         try {
           const usuariosActivos = await obtenerUsuariosActivos();
           setUsersActive(usuariosActivos); 
         } catch (error) {
           console.error(
             "Error al obtener usuarios activos desde Firestore:",
             error
           );
         }
       };

       obtenerUsuariosActivosFirebase();
    }, []);

    //Función del CRUD
    const handleDesactivar = async(id) => {
        const datos_nuevos = await eliminarCamposYCambiarEstado(id)
      console.log(datos_nuevos)
      const usuariosActivos = await obtenerUsuariosActivos();
      setUsersActive(usuariosActivos);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className={`${styles.heading2} text-center mb-5`}>Usuarios Activos</h2>

            {/* Componente para administración de servicios */}
            <SuscriptionsAdmin
                users={usersActive}
                onDesactivar={handleDesactivar}
            />
        </div>
    )
}

export default ActiveUser
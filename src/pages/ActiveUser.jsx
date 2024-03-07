import styles from "../style"
import { useEffect, useState } from "react";
import { SuscriptionsAdmin } from "../components"
import { eliminarCamposYCambiarEstado, obtenerUsuariosActivos } from "../services/firebase/functions/db/usuarios"
import Swal from "sweetalert2"
import { mostrarError } from "../utils/warnings";


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
      try {
        const resultado = await Swal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Esta acción cambiará el estado del usuario y eliminará su información de membresía. ¿Estás seguro de continuar?',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, desactivar',
          cancelButtonText: 'Cancelar',
          customClass: {
            container: 'font-poppins',
            title: 'font-poppins',
            popup: 'bg-gray-100',
          }
        });

        if(resultado.isConfirmed){
          const datos_nuevos = await eliminarCamposYCambiarEstado(id)
          console.log(datos_nuevos)
          const usuariosActivos = await obtenerUsuariosActivos();
          setUsersActive(usuariosActivos);
        }
      } catch (error) {
        mostrarError();
      }
        
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
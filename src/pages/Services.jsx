import { ServicesAdmin } from "../components"; //, CarouselServices
import styles from "../style";
import { useEffect, useState } from "react";
import { serviciosFirebase, eliminarServicioPorCampoId } from "../services/firebase/functions/db/servicios";
import { mostrarError, mostrarExito } from "../utils/warnings";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';



const Services = () => {
  //Obtener datos a mostrar de la base de datos
  const [servicios, setServicios] = useState([]);

  useEffect(()=>{
   
    const obtenerServicios = async () => {
      try{
        const serviciosObtenidos = await serviciosFirebase();
        setServicios(serviciosObtenidos);
      }catch(error){
        console.error(error);
        setServicios([]);
      }
    };
    obtenerServicios();
  }, [])



  // Funciones para CRUD
  const handleDeleteServicio = async(id) => {
    try {
      const resultado = await Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el servicio. ¿Estás seguro de continuar?',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: 'font-poppins',
          title: 'font-poppins',
          popup: 'bg-gray-100',
        }
      });

      if(resultado.isConfirmed){
        //Eliminar el servicio 
        await eliminarServicioPorCampoId(id);

        //Lista actualizada de servicio
        const serviciosObtenidos = await serviciosFirebase();
        setServicios(serviciosObtenidos);
        console.log('Se eliminó correctamente este servicio');
        mostrarExito();
      }else{
        console.log("Operación de eliminación cancelada");
      }
    } catch (error) {
      console.log('Este servicio no se ha eliminado'+error);
      mostrarError();
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className={`${styles.heading2} text-center mb-5`}>Servicios Disponibles</h2>

      {/* Componente para administración de servicios */}
      <ServicesAdmin
        services={servicios}
        onDelete={handleDeleteServicio}
        
      />
    </div>
  );
}

export default Services
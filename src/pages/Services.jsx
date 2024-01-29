import { ServicesAdmin } from "../components"; //, CarouselServices
import styles from "../style";
import { useEffect, useState } from "react";
import { serviciosFirebase, eliminarServicioPorCampoId } from "../services/firebase/functions/db/servicios";


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
      //Eliminar el servicio 
      await eliminarServicioPorCampoId(id);

      //Lista actualizada de servicio
      const serviciosObtenidos = await serviciosFirebase();
      setServicios(serviciosObtenidos);
      console.log('Se eliminó correctamente este servicio');

    } catch (error) {
      console.log('Este servicio no se ha eliminado'+error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className={`${styles.heading2} text-center mb-5`}>Servicios Disponibles</h2>

      {/* Componente para mostrar servicios en carrusel */}
      {/* <CarouselServices services={services} /> */}

      {/* Componente para administración de servicios */}
      <ServicesAdmin
        services={servicios}
        onDelete={handleDeleteServicio}
        
      />
    </div>
  );
}

export default Services
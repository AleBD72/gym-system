import { ServicesAdmin } from "../components"; //, CarouselServices
import styles from "../style";

const Services = () => {
  // Datos de ejemplo para mostrar en los componentes
  const services = [
    { id: 1, nombre: 'Servicio 1', descripcion: 'Descripción 1' },
    { id: 2, nombre: 'Servicio 2', descripcion: 'Descripción 2' },
    { id: 3, nombre: 'Servicio 3', descripcion: 'Descripción 3' },
    { id: 4, nombre: 'Servicio 4', descripcion: 'Descripción 4' },
    { id: 5, nombre: 'Servicio 5', descripcion: 'Descripción 5' },
    { id: 6, nombre: 'Servicio 6', descripcion: 'Descripción 6' },
    { id: 7, nombre: 'Servicio 4', descripcion: 'Descripción 4' },
    { id: 8, nombre: 'Servicio 5', descripcion: 'Descripción 5' },
    { id: 9, nombre: 'Servicio 6', descripcion: 'Descripción 6' },
    { id: 10, nombre: 'Servicio 4', descripcion: 'Descripción 4' },
    { id: 11, nombre: 'Servicio 5', descripcion: 'Descripción 5' },
    { id: 12, nombre: 'Servicio 6', descripcion: 'Descripción 6' },
    //.. esta data es solo para ver el funcionamiento 
  ];

  // Funciones para CRUD
  const handleDelete = (id) => {
    console.log(`Eliminar servicio con ID ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Editar servicio con ID ${id}`);
  };

  const handleCreate = () => {
    console.log('Crear nuevo servicio');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className={`${styles.heading2} text-center mb-5`}>Servicios Disponibles</h2>

      {/* Componente para mostrar servicios en carrusel */}
      {/* <CarouselServices services={services} /> */}

      {/* Componente para administración de servicios */}
      <ServicesAdmin
        services={services}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onCreate={handleCreate}
      />
    </div>
  );
}

export default Services
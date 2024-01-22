import styles from "../style"
import { SuscriptionsAdmin } from "../components"

const ActiveUser = () => {
    // Datos de ejemplo para mostrar en los componentes
    const usersActive = [
        { id: 1, nombre: 'Usuario 1', membresia: 'Membresía 1', metodoPago: 'Metodo de Pago', estado: 'Activo' },
        { id: 2, nombre: 'Usuario 2', membresia: 'Membresía 2', metodoPago: 'Metodo de Pago', estado: 'Activo' },
        { id: 3, nombre: 'Usuario 3', membresia: 'Membresía 3', metodoPago: 'Metodo de Pago', estado: 'Activo' },
        { id: 4, nombre: 'Usuario 4', membresia: 'Membresía 1', metodoPago: 'Metodo de Pago', estado: 'Activo' },
        { id: 5, nombre: 'Usuario 5', membresia: 'Membresía 2', metodoPago: 'Metodo de Pago', estado: 'Activo' },
        { id: 6, nombre: 'Usuario 6', membresia: 'Membresía 3', metodoPago: 'Metodo de Pago', estado: 'Activo' },
    ];

    //Función del CRUD
    const handleEdit = (id) => {
        console.log(`Editar servicio con ID ${id}`);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className={`${styles.heading2} text-center mb-5`}>Usuarios Activos</h2>

            {/* Componente para administración de servicios */}
            <SuscriptionsAdmin
                users={usersActive}
                onEdit={handleEdit}
            />
        </div>
    )
}

export default ActiveUser
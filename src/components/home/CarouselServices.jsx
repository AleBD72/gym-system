import styles from "../../style";

const CarouselServices = ({ services }) => {
    return (
        <div>
            <h2 className={`${styles.heading2} text-center`}>Servicios Disponibles</h2>
            <div className="flex space-x-4 overflow-x-auto p-4">

                {services.map((service) => (
                    <div key={service.id} className="bg-white p-4 rounded shadow-md w-64">
                        <h3 className="text-lg font-semibold">{service.nombre}</h3>
                        <p className="text-gray-600">{service.descripcion}</p>
                    </div>
                ))}
            </div>
            {/* Rehacer esta vaina :) */}
        </div>

    );
}

export default CarouselServices
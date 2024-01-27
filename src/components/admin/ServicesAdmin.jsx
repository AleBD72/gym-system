import { useState } from 'react';
import ServicesTable from './ServicesTable';
import { Link } from 'react-router-dom';


const ServicesAdmin = ({ services, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 7;

    // Filtra los servicios según el término de búsqueda
    const filteredServices = services.filter((service) =>
        service.servicio.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calcula el índice del último servicio en la página actual
    const indexOfLastService = currentPage * servicesPerPage;
    // Calcula el índice del primer servicio en la página actual
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    // Obtiene los servicios de la página actual
    const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-4">
            
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Buscar servicios..."
                    className="p-2 border border-gray-300 rounded mr-4 font-poppins"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to='../service-create'>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none font-poppins"
                    >
                        Nuevo Servicio
                    </button>
                </Link>
                
                
            </div>
            <ServicesTable
                services={currentServices}
                onDelete={onDelete}
            />
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredServices.length / servicesPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`mx-1 px-3 py-2 rounded-full font-poppins ${currentPage === index + 1 ? 'bg-secondaryCol text-white' : 'bg-gray-300'}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ServicesAdmin
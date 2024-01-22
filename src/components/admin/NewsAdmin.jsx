import NewsTable from "./NewsTable"
import { useState } from 'react';

const NewsAdmin = ({ news, onDelete, onEdit, onCreate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 7;

    const filteredNews = news.filter((notice) =>
        notice.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calcula el índice de la ultima noticia en la página actual
    const indexOfLastNew = currentPage * newsPerPage;
    // Calcula el índice de la primera noticia en la página actual
    const indexOfFirstNew = indexOfLastNew - newsPerPage;
    // Obtiene los servicios de la página actual
    const currentNews = filteredNews.slice(indexOfFirstNew, indexOfLastNew);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-4">

            <div className="flex md:items-center items-start justify-between mb-4 md:flex-row flex-col">
                <input
                    type="text"
                    placeholder="Buscar noticia..."
                    className="p-2 border border-gray-300 rounded mr-4 font-poppins md:ml-0 ml-1"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none font-poppins md:mt-0 mt-2 ml-1"
                        onClick={onCreate}
                    >
                        Vista Previa
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none font-poppins md:ml-3 ml-1 md:mt-0 mt-3 "
                    >
                        Nueva Noticia
                    </button>
                </div>

            </div>
            <NewsTable
                news={currentNews}
                onDelete={onDelete}
                onEdit={onEdit}
            />
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredNews.length / newsPerPage) }, (_, index) => (
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

export default NewsAdmin
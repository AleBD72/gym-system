//Vista previa administradores
import { useState, useEffect } from "react";
import {
  NoticiasList,
  Paginacion,
  Buscador,
} from "../components";
import { noticiasFirebase } from "../services/firebase/functions/db/noticias";
import styles from "../style";
import MySwal from "sweetalert2";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";

const NewsView = () => {
    const [noticias, setNoticias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
  
    const cargarNoticias = async () => {
      try {
        const noticiasObtenidas = await noticiasFirebase();
        setNoticias(noticiasObtenidas);
      } catch (error) {
        console.error(error);
        setNoticias([]);
      }
    };
  
    // Función para manejar el cambio de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // Función para mostrar el modal de noticia completa
    const handleVerMasClick = (noticia) => {
      //  SweetAlert para mostrar la noticia completa
      MySwal.fire({
        title: noticia.titulo,
        html: 
          `<div>
              <small class='text-red'> Publicado el ${noticia.fecha} / Por ${noticia.autor}</small>
            
            <p><strong>${noticia.resumen}</strong></p>
            <p>${noticia.contenido}</p>
          </div>`
        ,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#2C666E',
        customClass:{
          title: 'font-poppins',
          popup: 'bg-gray-100',
          confirmButton: 'font-poppins',
          container: 'font-poppins',
        }
      });
    };
  
    
  
    // Función para realizar la búsqueda
    const handleSearch = (term) => {
      setSearchTerm(term);
      setCurrentPage(1); // Reiniciar la página al realizar una nueva búsqueda
    };
  
    // Efecto para cargar noticias al montar la página
    useEffect(() => {
      cargarNoticias();
      // Cargar la cantidad total de páginas aquí
      // setTotalPages(calcularTotalPages(noticias.length));
    }, []);
  
    // Filtrar noticias según el término de búsqueda
    const noticiasFiltradas = noticias.filter((noticia) =>
      noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Obtener noticias para la página actual
    const noticiasPaginaActual = noticiasFiltradas.slice(
      (currentPage - 1) * 9,
      (currentPage - 1) * 9 + 9
    );
  
    return (
      <div>
        <Link to="../news" className={`${styles.backButton} text-white font-poppins`}>
            <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
        </Link>
        <h2 className={`${styles.heading2} text-center mb-5`}>Noticias</h2>
        <Buscador onSearch={handleSearch}/>
        <NoticiasList
          noticias={noticiasPaginaActual}
          currentPage={currentPage}
          itemsPerPage={9}
          onPageChange={handlePageChange}
          onVerMasClick={handleVerMasClick}
        />
        
        <Paginacion
          totalPages={totalPages} // Ajusta esto según la cantidad total de páginas
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
}

export default NewsView
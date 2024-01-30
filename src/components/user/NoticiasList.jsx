import NoticiaCard from './NoticiaCard';

const NoticiasList = ({ noticias, currentPage, itemsPerPage, onPageChange, onVerMasClick }) => {
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedNoticias = noticias.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {paginatedNoticias.map((noticia) => (
        <NoticiaCard key={noticia.id} {...noticia}
            onVerMasClick={() => onVerMasClick(noticia)}
        />
      ))}
      {/* Aquí puedes agregar la lógica para mostrar la paginación */}
      {/* Por ejemplo: <Pagination totalPages={totalPages} onPageChange={onPageChange} /> */}
    </div>
  );
};

export default NoticiasList;
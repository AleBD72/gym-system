import { NewsAdmin } from "../components"
import styles from "../style"

const News = () => {
  const news = [
    { id: 1, titulo: 'Noticia 1', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 1' },
    { id: 2, titulo: 'Noticia 2', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 2' },
    { id: 3, titulo: 'Noticia 3', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 3' },
    { id: 4, titulo: 'Noticia 4', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 4' },
    { id: 5, titulo: 'Noticia 5', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 5' },
    { id: 6, titulo: 'Noticia 6', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 6' },
    { id: 7, titulo: 'Noticia 4', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 4' },
    { id: 8, titulo: 'Noticia 5', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 5' },
    { id: 9, titulo: 'Noticia 6', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 6' },
    { id: 10, titulo: 'Noticia 4', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 4' },
    { id: 11, titulo: 'Noticia 5', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 5' },
    { id: 12, titulo: 'Noticia 6', autor: 'Nombre Autor', fecha: '00-00-20XX', contenido: 'Descripción 6' },
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
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.heading2} text-center mb-5`}>Administración de Noticias</h2>
          <NewsAdmin
            news={news}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onCreate={handleCreate}
          />
        </div>
      </div>
    </div>


  )
}

export default News
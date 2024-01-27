import { Link } from "react-router-dom"
import styles from "../../style"

const NewsTable = ({ news, onDelete}) => {
  return (
    <div>
      {news.length > 0 ? (
        <div className="overflow-x-auto rounded-md mb-4">
          <table className="w-full border border-gray-300 text-center font-poppins ">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Título</th>
                <th className="py-2 px-4 border-b">Autor</th>
                <th className="py-2 px-4 border-b">Fecha</th>
                <th className="py-2 px-4 border-b">Resumen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {news.map((notice) => (
                <tr key={notice.id}>
                  <td className="py-2 px-4 border-b text-white">{notice.titulo}</td>
                  <td className="py-2 px-4 border-b text-white">{notice.autor}</td>
                  <td className="py-2 px-4 border-b text-white">{notice.fecha}</td>
                  <td className="py-2 px-4 border-b text-white text-sm">{notice.resumen}</td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`../new-update/${notice.id}`}>
                      <button
                        className="bg-secondaryCol text-white px-2 py-1 rounded mr-2 hover:bg-thirdCol focus:outline-none md:mb-0 mb-3"
                      >
                        Editar
                      </button>
                    </Link>
                    
                    <button
                      className="bg-red-800 text-white px-2 py-1 rounded hover:bg-red-900 focus:outline-none"
                      onClick={() => onDelete(notice.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (<p className={`${styles.paragraph} text-center mt-5`}>No hay servicios registrados...</p>)}
    </div>
    
  )
}

export default NewsTable
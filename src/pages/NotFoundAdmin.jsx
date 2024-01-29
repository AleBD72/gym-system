import { NotFound } from '../assets';
import { Link } from 'react-router-dom'; //para la navegación

const NotFoundAdmin = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-principalCol md:flex-row flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4 font-poppins">404</h1>
            <p className="text-lg text-dimWhite mb-4 font-poppins p-4">La página que buscas no fue encontrada.</p>
            <Link to="/admin/home" className="text-fifthCol hover:underline font-poppins">Volver al Dashboard</Link>
          </div>
          <div className='flex items-center justify-center'>
            <img src={NotFound} alt="NotFoundImage" className='md:mt-0 mt-6'/>
          </div>
        </div>
      );
}

export default NotFoundAdmin
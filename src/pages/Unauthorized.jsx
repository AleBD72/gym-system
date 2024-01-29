import { NotFound } from '../assets';

const Unauthorized = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-principalCol md:flex-row flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4 font-poppins">Permiso Denegado</h1>
            <p className="text-lg text-dimWhite mb-4 font-poppins p-4">No tienes permisos para poder ingresar...</p>
          </div>
          <div className='flex items-center justify-center'>
            <img src={NotFound} alt="NotFoundImage" className='md:mt-0 mt-6'/>
          </div>
        </div>
      );
};

export default Unauthorized
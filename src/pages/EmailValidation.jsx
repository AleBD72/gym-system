import { mailImage } from '../assets';
import { Link } from 'react-router-dom'; 

const EmailValidation = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-principalCol md:flex-row flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4 font-poppins">Correo Verificado!</h1>
            <p className="text-lg text-dimWhite mb-4 font-poppins p-4">Tu correo se ha verificado correctamente.</p>
            <Link to="/login" className="text-fifthCol hover:underline font-poppins">Iniciar sesión en la página web</Link>
          </div>
          <div className='flex items-center justify-center'>
            <img src={mailImage} alt="mailImage" className='md:mt-0 mt-6'/>
          </div>
        </div>
      );
}

export default EmailValidation



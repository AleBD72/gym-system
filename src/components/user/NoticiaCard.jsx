

const NoticiaCard = ({ titulo, autor, resumen, contenido , onVerMasClick }) => {
   
    return(
        <div className="shadow-md shadow-fifthCol p-4 rounded-lg">
        <h3 className="text-xl font-semibold font-poppins text-white">{titulo}</h3>
        <p className={`font-poppins font-normal text-dimWhite text-base mb-2`}>{autor}</p>
        <p className="text-sm text-white font-poppins">{resumen}</p>
        <button className="mt-2 text-fifthCol font-poppins" onClick={() => onVerMasClick({ titulo, autor, resumen, contenido })}>
            Ver más
        </button>
        </div>
    );
}
  export default NoticiaCard;
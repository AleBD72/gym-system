import { useState } from "react";

const Buscador = ({ onSearch }) => {
    const [term, setTerm] = useState('');
  
    const handleInputChange = (e) => {
      setTerm(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(term);
    };
  
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar noticias"
          value={term}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mr-4 font-poppins md:ml-0 ml-1"
        />
        <button className="ml-1 px-3 py-1 bg-fifthCol text-white rounded-full font-poppins" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    );
};
  
export default Buscador;
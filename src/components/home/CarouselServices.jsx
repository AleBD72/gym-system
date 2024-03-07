import { useEffect, useState, useRef } from "react";
import { serviciosFirebase } from "../../services/firebase/functions/db/servicios";
import styles from "../../style";

const CarouselServices = () => {
  const [servicios, setServicios] = useState([]);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const scrollSpeed = 75;
  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        let serviciosfirebase = await serviciosFirebase();
        setServicios(serviciosfirebase);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };
    obtenerServicios();
  }, []);

   const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

   const handleMouseMove = (e) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    const distance = (e.clientX - startX) * scrollSpeed; 
    container.scrollLeft -= distance;
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
    const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

    const handleTouchMove = (e) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    const distance = (e.touches[0].clientX - startX) * scrollSpeed; 
    container.scrollLeft -= distance;
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-hidden whitespace-no-wrap"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
            style={{ userSelect: "none" }}

    >
      {servicios.map((servicio) => (
        <div
          key={servicio.id}
          className= "inline-block min-w-64 p-5 mr-4 bg-gray-200 rounded-md feedback-card my-2 " 
        >
          <h1 className="text-xl font-bold font-poppins text-secondaryCol">{servicio.servicio}</h1>
          <p className={styles.paragraph}>{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default CarouselServices;

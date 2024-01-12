import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AutProvider";

const PrivateRoute = ({ rol_usuario, ...props }) => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Verificar si auth se ha cargado
    if (Object.keys(auth).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [auth]);
 
     const autenticado = localStorage.getItem("correo");
     if (!autenticado) {
       localStorage.removeItem("correo");
       return <Navigate to="/login" />;
     }
 

  if (loading) {
    return <p>Cargando...</p>;
  }

  
  if (!rol_usuario.includes(auth.rol)) {
    return <Navigate to="/unauthorized" />;
  }

  

  return <Outlet {...props} />;
};

export default PrivateRoute;

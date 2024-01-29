import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AutProvider";

const PrivateRoute = ({ rol_usuario, ...props }) => {
  const { auth, loading, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const autenticado = localStorage.getItem("correo");

    if (!autenticado) {
      localStorage.removeItem("correo");
      // Puedes reiniciar el estado de autenticación aquí
      setAuth({});
    }
  }, [setAuth]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!rol_usuario.includes(auth.rol)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet {...props} />;
  
};

export default PrivateRoute;

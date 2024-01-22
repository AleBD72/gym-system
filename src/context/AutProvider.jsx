import { createContext, useEffect, useState } from "react";
import { obtener_datos_correo } from "../services/firebase/functions/db/usuarios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  const perfil = async (user) => {
    try {
      const datos_usuario = await obtener_datos_correo(user);
      setAuth(datos_usuario);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("correo");
    if (email) {
      perfil(email);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {loading ? <p className="font-poppins text-center">Cargando...</p> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

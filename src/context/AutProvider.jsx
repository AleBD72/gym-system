import { createContext, useEffect, useState } from "react";
import { obtener_datos_correo } from "../services/firebase/functions/db/usuarios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const perfil = async (user) =>{
        try {
          const datos_usuario = await obtener_datos_correo(user)
          setAuth(datos_usuario)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
      const email = localStorage.getItem("correo")
      if(email){
        perfil(email);
      }
    },[])
    
    return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export{AuthProvider,AuthContext}

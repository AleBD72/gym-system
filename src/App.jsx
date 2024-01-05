import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, UserRegistration, ModulesPanel } from "./pages/index";
import { supabase_client } from "./services/api";
import { useEffect } from "react";


const App = () => {
  // const navigate = useNavigate();
  useEffect( () =>{
     supabase_client.auth.onAuthStateChange((event,session) =>{
      console.log(session,event)
      
     })
  })

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user-registration" element={<UserRegistration />}></Route>
        <Route path="/home" element={<ModulesPanel />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>

  )
}

export default App
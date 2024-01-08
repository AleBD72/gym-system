import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, UserRegistration, ModulesPanel, Schedule, ScheduleCreate, ScheduleUpdate, Profile, UpdateProfile, Assistance, Users, EmailValidation, Membership} from "./pages/index";
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
    <div >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user-registration" element={<UserRegistration />}></Route>
        <Route path="/user-roles" element={<Users/>}></Route>
        <Route path="/assistance" element={<Assistance />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/schedule-create" element={<ScheduleCreate />}></Route>
        <Route path="/schedule-update" element={<ScheduleUpdate />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/membership-edit" element={<Membership />}></Route>
        <Route path="/profile-update" element={<UpdateProfile />}></Route>
        <Route path="/email-verification" element={<EmailValidation />}></Route>
        <Route path="/home" element={<ModulesPanel />}></Route>
        
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>

  )
}

export default App
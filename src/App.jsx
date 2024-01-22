import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  NotFound,
  UserRegistration,
  Schedule,
  ScheduleCreate,
  ScheduleUpdate,
  Profile,
  //UpdateProfile,
  Assistance,
  Users,
  Membership,
  Unauthorized,
  LoginURL,
  Payments,
  News,
  Services,
  Stats,
  ScheduleView,
  ScheduleAdmin
} from "./pages/index";

import { AuthProvider } from "./context/AutProvider";
import PrivateRoute from "./routes/PrivateRoute";
import { AdminDashboard, UserDashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-url" element={<LoginURL />} />
          <Route path="/user-registration" element={<UserRegistration />} />

          <Route
            path="/usuario/*"
            element={
              <PrivateRoute
                rol_usuario={["2474007d-6849-4b62-b679-f00f878bc391"]}
              />
            }
          >
            <Route index element={<Navigate to="/usuario/home" />} />
            <Route path="home" element={<UserDashboard />}>
              <Route path="assistance" element={<Assistance />}></Route>
              <Route path="schedule" element={<Schedule />} />
              <Route path="news" element={<News />}></Route>
              <Route path="suscription" element={<Payments />}></Route>
              <Route path="profile-update" element={<Profile />}></Route>
              <Route path="profile" element={<Profile />}></Route>
            </Route>


            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path="/admin/*"
            element={
              <PrivateRoute
                rol_usuario={["4bdb65d0-56b5-4af1-90f2-ffe939106d16"]}
              />
            }
          >
            <Route index element={<Navigate to="/admin/home" />} />
            <Route path="home" element={<AdminDashboard />}>
              <Route path="user-roles" element={<Users />}></Route>
              <Route path="schedule" element={<ScheduleAdmin />}></Route>
              <Route path="schedule-view" element={<ScheduleView />}></Route>
              <Route
                path="schedule-create"
                element={<ScheduleCreate />}
              ></Route>
              <Route
                path="schedule-update/:id"
                element={<ScheduleUpdate />}
              ></Route>
              <Route path="memberships" element={<Membership />}></Route>
              <Route path="membership-edit" element={<Membership />}></Route>
              <Route path="profile-update" element={<Profile />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="suscriptions" element={<Payments />}></Route>
              <Route path="news" element={<News />}></Route>
              <Route path="services" element={<Services />}></Route>
              <Route path="stats" element={<Stats />}></Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

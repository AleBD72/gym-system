import { Admin_Dashboard } from "../components/admin/AdminDashboard";
import { User_Dashboard } from "../components/user/UserDashboard";

const UserDashboard = () => {
  return (
    <User_Dashboard/>
  )
}

const AdminDashboard = () => {
  return <Admin_Dashboard />;
};

export{
  UserDashboard,
  AdminDashboard
}
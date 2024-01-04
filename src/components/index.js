/* Archivo para exportación de los componentes, evitando la exportación tediosa */

//Componentes para administradores
import AddUserForm from "./admin/AddUserForm";

//Componnetes relacionados con la athenticación
import LoginForm from "./authentication/LoginForm";
import NewUserForm from "./authentication/NewUserForm"

//Componentes de uso comun
import Button from "./common/Button";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import TextInput from "./common/TextInput";

//Componentes para usuarios clientes
import EditProfileForm from "./user/EditProfileForm";
import UserProfile from "./user/UserProfile";

//Componentes para el home page
import PrincipalContent from "./home/PrincipalContent";
import LinksSection from "./home/LinksSection";
import Business from "./home/Business";
import ServicesCaroucel from "./home/ServicesCaroucel";
import Memberships from "./home/Memberships";
import Contacts from "./home/Contacts";
import PlanCard from "./home/PlanCard";



export {
    AddUserForm,
    LoginForm,
    Button,
    Navbar,
    EditProfileForm,
    UserProfile,
    PrincipalContent,
    LinksSection, 
    Business,
    ServicesCaroucel,
    Memberships,
    Contacts,
    Footer,
    PlanCard,
    NewUserForm,
    TextInput
};
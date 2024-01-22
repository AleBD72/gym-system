/* Archivo para exportación de los componentes, evitando la exportación tediosa */

//Componentes para administradores
import AddEventForm from "./admin/AddEventForm";
import UsersList from "./admin/UsersList";
import MembershipsForm from "./admin/MembershipsForm";
import EditEventForm from "./admin/EditEventForm";
import MembershipsList from "./admin/MembershipsList";
import ServicesAdmin from "./admin/ServicesAdmin";
import NewsAdmin from "./admin/NewsAdmin";
import SuscriptionsAdmin from "./admin/SuscriptionsAdmin";

//Componnetes relacionados con la authenticación
import LoginForm from "./authentication/LoginForm";
import NewUserForm from "./authentication/NewUserForm"
import LoginURLValidate from "./authentication/LoginURLValidate";

//Componentes de uso comun
import Button from "./common/Button";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import TextInput from "./common/TextInput";
import ComboBox from "./common/ComboBox";
import TableSchedule from "./common/TableSchedule";
import UserCard from "./common/UserCard";
import UserProfile from "./common/UserProfile";
import Tabs from "./common/Tabs";
import EditProfileForm from "./common/EditProfileForm";

//Componentes para usuarios clientes

import AssistanceRegister from "./user/AssistanceRegister";

//Componentes para el home page
import PrincipalContent from "./home/PrincipalContent";
import LinksSection from "./home/LinksSection";
import Business from "./home/Business";
import Memberships from "./home/Memberships";
import Contacts from "./home/Contacts";
import PlanCard from "./home/PlanCard";
import CarouselServices from "./home/CarouselServices";




export {
    LoginURLValidate,
    LoginForm,
    Button,
    Navbar,
    EditProfileForm,
    UserProfile,
    PrincipalContent,
    LinksSection, 
    Business,
    CarouselServices,
    Memberships,
    Contacts,
    Footer,
    PlanCard,
    NewUserForm,
    TextInput,
    ComboBox,
    AddEventForm,
    TableSchedule,
    AssistanceRegister,
    UserCard,
    UsersList,
    MembershipsForm,
    EditEventForm,
    MembershipsList,
    ServicesAdmin,
    NewsAdmin,
    Tabs,
    SuscriptionsAdmin
};
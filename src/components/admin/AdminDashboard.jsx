import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AutProvider";
import { useContext } from "react";
import { admin, profile } from "../../assets";
import { cerrarSesion } from "../../services/firebase/functions/auth/cerrar_sesion";

export const Admin_Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const { auth } = useContext(AuthContext);
  const autenticado = localStorage.getItem("correo");

  return (
    <div className="md:flex md:min-h-screen ">
      <div className="md:w-1/5 bg-principalCol px-5 py-4 bg-opacity-95">
        <h2 className="text-4xl font-bold font-poppins text-center text-white">
          FitnessHUB.
        </h2>

        <img
          src={admin}
          alt="img-client"
          className="m-auto mt-8 p-1 border-2 border-white rounded-full"
          width={120}
          height={120}
        />
        <p className="text-white text-center my-4 text-sm font-poppins">
          {" "}
          <span className="bg-green-600 w-3 h-3 inline-block rounded-full fon"></span>{" "}
          Bienvenido - {auth?.nombre}
        </p>
        <hr className="mt-5 border-white" />

        <ul className="mt-5">
          <li className="text-center">
            <Link
              to="/admin/home/profile"
              className={`${
                urlActual === "/admin/home/profile"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Perfil
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/user-roles"
              className={`${
                urlActual === "/admin/home/user-roles"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65 "
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Modificar Roles
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/schedule"
              className={`${
                urlActual === "/admin/home/schedule"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Horarios
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/memberships"
              className={`${
                urlActual === "/admin/home/memberships"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Membresías
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/services"
              className={`${
                urlActual === "/admin/home/services"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Servicios
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/news"
              className={`${
                urlActual === "/admin/home/news"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Noticias
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/suscriptions"
              className={`${
                urlActual === "/admin/home/suscriptions"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Suscripciones
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/admin/home/stats"
              className={`${
                urlActual === "/admin/home/stats"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Análisis
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col justify-between h-screen bg-principalCol">
        <div className="bg-principalCol py-2 flex md:justify-end items-center gap-5 justify-center bg-opacity-95 h-14">
          <div className="text-md font-mediaum text-slate-100 font-poppins">
            {auth?.nombre} {auth?.apellido}
          </div>
          <div>
            <Link
              to="/"
              className=" text-white mr-3 text-md block hover:bg-red-900 text-center
                    bg-red-800 px-4 py-1 rounded-l font-poppins"
              onClick={() => {
                cerrarSesion();
              }}
            >
              Salir
            </Link>
          </div>
        </div>
        <div className="overflow-y-scroll p-8">
          {autenticado ? <Outlet /> : <Navigate to="/login" />}
        </div>
        <div className="bg-principalCol h-12 bg-opacity-95">
          <p className="text-center text-slate-100 leading-[2.9rem] underline font-poppins">
            Todos los derechos reservados FitnessHUB 2023 Design by Camila Mier
          </p>
        </div>
      </div>
    </div>
  );
};

import { useLocation, Navigate, Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../context/AutProvider";
import { useContext } from "react";
import { client, profile } from "../../assets";
import { cerrarSesion } from "../../services/firebase/functions/auth/cerrar_sesion";

export const User_Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const { auth } = useContext(AuthContext);
  const autenticado = localStorage.getItem("correo");

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/5 bg-principalCol px-5 py-4 bg-opacity-95">
        <h2 className="text-4xl font-bold font-poppins text-center text-white">
          FitnesHUB.
        </h2>

        <img
          src={client}
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
              to="/usuario/home/profile-update"
              className={`${
                urlActual === "/usuario/home/profile-update"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Perfil
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/usuario/home/schedule"
              className={`${
                urlActual === "/usuario/home/schedule"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Horarios
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/usuario/home/news"
              className={`${
                urlActual === "/usuario/home/news"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Noticias
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/usuario/home/suscription"
              className={`${
                urlActual === "/usuario/home/suscription"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Suscripción
            </Link>
          </li>

          <li className="text-center">
            <Link
              to="/usuario/home/assistance"
              className={`${
                urlActual === "/usuario/home/assistance"
                  ? "text-slate-200 bg-fifthCol px-3 py-2 rounded-md text-center font-poppins bg-opacity-65"
                  : "text-white font-poppins text-base"
              } text-xl block mt-2 hover:text-white`}
            >
              Asistencia
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col justify-between h-screen bg-principalCol">
        <div className="bg-principalCol py-2 flex md:justify-end items-center gap-5 justify-center bg-opacity-95">
          <div className="text-md font-mediaum text-slate-100 font-poppins">
            Bienvenido - {auth?.nombre}
          </div>
          <div>
            <img
              src={profile}
              alt="img-client"
              className="border-2 border-green-600 rounded-full"
              width={50}
              height={50}
            />
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
            Todos los derechos reservados: FitnessHUB. 2023 Design by Camila
            Mier
          </p>
        </div>
      </div>
    </div>
  );
};

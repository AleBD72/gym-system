import { useEffect } from "react";
import Chart from "chart.js/auto";
import { obtenerTodosLosUsuarios } from "../services/firebase/functions/db/usuarios";

const StatsUser = () => {
  useEffect(() => {
    const obtenerDatosDeFirebase = async () => {
      try {
        const usuarios = await obtenerTodosLosUsuarios();
        const generoConteo = usuarios.reduce((contador, usuario) => {
          const genero = usuario.genero || "Desconocido";
          contador[genero] = (contador[genero] || 0) + 1;
          return contador;
        }, {});

        const canvas = document.getElementById("miGrafico");
        const ctx = canvas.getContext("2d");

        // Cambios en la configuración para ajustar el tamaño y color
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: Object.keys(generoConteo),
            datasets: [
              {
                label: "Estadística de género de los usuarios",
                data: Object.values(generoConteo),
                backgroundColor: [
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ], // Azul y Rosa
                borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true, // Hace la gráfica responsiva
            maintainAspectRatio: false, // Evita que la gráfica mantenga un aspect ratio fijo

            // Configuraciones adicionales según tus necesidades
          },
        });
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    obtenerDatosDeFirebase();
  }, []);

  return (
    <>
      <canvas id="miGrafico" className="font-poppins"></canvas>
    </>
  );
};

export default StatsUser;

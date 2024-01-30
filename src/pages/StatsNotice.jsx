import { useEffect } from "react";
import { estadisticas_noticias } from "../services/firebase/functions/db/stadisticas";
import Chart from "chart.js/auto";

const StatsNotice = () =>{
  useEffect(() => {
    const obtenerDatosDeFirebase = async () => {
      try {
        const noticia = await estadisticas_noticias();
        const autorNotica = Object.keys(noticia);
        const publicaciones = Object.values(noticia);

        const canvas = document.getElementById("miGrafico");
        const ctx = canvas.getContext("2d");

        // Cambios en la configuración para ajustar el tamaño y color
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: autorNotica,
            datasets: [
              {
                label: "Publicaciones",
                data: publicaciones,
                backgroundColor: [
                  "rgba(198, 240, 120, 0.2)",
                  "rgba(95, 189, 148, 0.2)",
                  "rgba(202, 142, 230, 0.2)",
                  "rgba(235, 139, 196, 0.2)",
                  "rgba(220, 233, 89, 0.2)",
                  "rgba(114, 112, 246, 0.2)",
                ],
                borderColor: ["rgba(198, 240, 120, 1)", "rgba(95, 189, 148, 1)","rgba(202, 142, 230, 1)", "rgba(235, 139, 196, 1)", "rgba(220, 233, 89, 1)","rgba(114, 112, 246, 1)" ],
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
      <canvas id="miGrafico"></canvas>
    </>
  );
}

export default StatsNotice
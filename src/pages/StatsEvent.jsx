import { useEffect } from "react";
import Chart from "chart.js/auto";
import { estadisticas_eventos_por_dia } from "../services/firebase/functions/db/stadisticas";
const StatsEvent = () => {
  useEffect(() => {
    const obtenerDatosDeFirebase = async () => {
      try {
        const eventosPorDia = await estadisticas_eventos_por_dia();
        console.log(eventosPorDia);

        const dias = Object.keys(eventosPorDia);
        const cantidadesEventos = Object.values(eventosPorDia);

        const canvas = document.getElementById("miGraficoEventosPorDia");
        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: dias,
            datasets: [
              {
                label: "Cantidad de eventos por día",
                data: cantidadesEventos,
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
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } catch (error) {
        console.error("Error al obtener datos de eventos por día:", error);
      }
    };

    obtenerDatosDeFirebase();
  }, []);

  return (
    <>
      <canvas id="miGraficoEventosPorDia"></canvas>
    </>
  );
};

export default StatsEvent;

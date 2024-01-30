import { useEffect } from "react";
import Chart from "chart.js/auto";
import { estadisticas_membresias } from "../services/firebase/functions/db/stadisticas";
const StatsMembership = () => {
  useEffect(() => {
    const obtenerDatosDeFirebase = async () => {
      try {
        const membresias = await estadisticas_membresias();
        console.log(membresias);

        const nombresMembresias = Object.keys(membresias);
        const cantidadesMembresias = Object.values(membresias);

        const canvas = document.getElementById("miGrafico");
        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: nombresMembresias,
            datasets: [
              {
                label: "Cantidad contratada de membresías",
                data: cantidadesMembresias,
                backgroundColor: [
                  "rgba(198, 240, 120, 0.2)",
                  "rgba(95, 189, 148, 0.2)",
                  "rgba(202, 142, 230, 0.2)",
                ],
                borderColor: ["rgba(198, 240, 120, 1)", "rgba(95, 189, 148, 1)","rgba(202, 142, 230, 1)" ],
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
        console.error("Error al obtener datos de membresías:", error);
      }
    };

    obtenerDatosDeFirebase();
  }, []);

  return (
    <>
      <canvas id="miGrafico"></canvas>
    </>
  );
};

export default StatsMembership;

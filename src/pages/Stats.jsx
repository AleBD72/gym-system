//Pagina de reportes estadísticos sobre el gimnasio
import styles from "../style";
import { Tabs } from "../components";
import StatsUser from "./StatsUser";
import StatsMembership from "./StatsMembership";
import StatsNotice from "./StatsNotice";
import StatsEvent from "./StatsEvent";

const Stats = () => {
  const tabs = [
    { label: "Usuarios y Clientes", content: <StatsUser/> },
    { label: "Membresías", content: <StatsMembership/> },
    { label: "Noticias", content: <StatsNotice/> },
    { label: "Eventos", content: <StatsEvent/> },
  ];

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
          <div className={`${styles.boxWidth} `}>
              <h2 className={`${styles.heading2} text-center mb-5`}>Estadísticas</h2>
              <Tabs tabs={tabs} />
          </div>
      </div>
    </div>
  )
}

export default Stats
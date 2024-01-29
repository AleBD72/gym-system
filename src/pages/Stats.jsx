//Pagina de reportes estadísticos sobre el gimnasio
import styles from "../style";
import { Tabs } from "../components";

const Stats = () => {
  const tabs = [
    { label: 'General', content: <p>Estadística General</p> },
    { label: 'Usuarios y Clientes', content: <p>Est de clientes</p>  },
    { label: 'Membresías', content: <p>Est de membresías</p>  },
    { label: 'Noticias', content: <p>Est de noticias</p>  },
    { label: 'Eventos', content: <p>Est de eventos por día</p>  },
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
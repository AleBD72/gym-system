import {Tabs} from '../components/index';
import styles from '../style';
import ActiveUser from './ActiveUser';
import InactiveUser from './InactiveUser';

const Payments = () => {
  const tabs = [
    { label: 'Activos', content: <ActiveUser/> },
    { label: 'Inactivos', content: <InactiveUser/> },
  ];

  return (
    
      <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <h2 className={`${styles.heading2} text-center mb-5`}>Suscripciones de Usuarios</h2>
                    <Tabs tabs={tabs} />
                </div>
            </div>
        </div>
      

      
    
  )
}

export default Payments
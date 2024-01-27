import { CreateServiceForm } from "../components";
import styles from "../style";


function ServiceCreate() {
  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden h-screen`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
                <CreateServiceForm />
            </div>
        </div>
    </div>
  )
}

export default ServiceCreate
import { AssistanceRegister } from "../components"
import styles from "../style"

const Assistance = () => {
  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <h2 className={`${styles.heading2} text-center`}>Registro de Asistencia</h2>
          <AssistanceRegister/>
        </div>
      </div>
    </div>
  )
}

export default Assistance
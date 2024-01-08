import { EditEventForm } from "../components"
import styles from "../style"

const ScheduleUpdate = () => {
    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden h-screen`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <h2 className={`${styles.heading2Col} text-center`}>Editar datos del Evento</h2>
                    <EditEventForm />
                </div>
            </div>
        </div>
    )
} 

export default ScheduleUpdate
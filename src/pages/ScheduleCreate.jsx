import { AddEventForm } from "../components"
import styles from "../style"

const ScheduleCreate = () => {
    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden h-screen`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <h2 className={`${styles.heading2Col} text-center`}>Crear un nuevo Evento</h2>
                    <AddEventForm />
                </div>
            </div>
        </div>
    )
}

export default ScheduleCreate
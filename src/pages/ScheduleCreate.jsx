import { AddEventForm } from "../components"
import styles from "../style"
import { Link } from "react-router-dom"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const ScheduleCreate = () => {
    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                <Link to="../schedule-view" className={`${styles.backButton} text-white font-poppins`}>
                    <ArrowLeftCircleIcon className="h-9 w-9 mr-1" /> Volver
                </Link>
                    <h2 className={`${styles.heading2Col} text-center`}>Crear un nuevo Evento</h2>
                    <AddEventForm />
                </div>
            </div>
        </div>
    )
}

export default ScheduleCreate
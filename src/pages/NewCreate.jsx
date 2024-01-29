import { CreateNewsForm } from "../components"
import styles from "../style"
import { Link } from "react-router-dom"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"

const NewCreate = () => {
    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <Link to="../news" className={`${styles.backButton} text-white font-poppins`}>
                        <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
                    </Link>
                    <CreateNewsForm/>
                </div>
            </div>
        </div>
      )
}

export default NewCreate
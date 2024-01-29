import { CreateServiceForm } from "../components";
import styles from "../style";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function ServiceCreate() {
  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden h-screen`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
                  <Link to="../services" className={`${styles.backButton} text-white font-poppins`}>
                    <ArrowLeftCircleIcon className="h-8 w-8 mr-1" /> Volver
                  </Link>
                <CreateServiceForm />
            </div>
        </div>
    </div>
  )
}

export default ServiceCreate
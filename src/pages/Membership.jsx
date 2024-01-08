import { MembershipsForm } from "../components"
import styles from "../style"

const Membership = () => {
    return (
    
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <h2 className={`${styles.heading2Col} text-center`}>Editar Membresías</h2>
                    <MembershipsForm/>
                </div>
            </div>
        </div>

    )
}

export default Membership
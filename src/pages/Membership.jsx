//Membership Details View

import { MembershipsList } from "../components"
import styles from "../style"

const Membership = () => {
    return (

        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <h2 className={`${styles.heading2} text-center mb-5`}>Información de Membresías</h2>
                    <MembershipsList />
                </div>
            </div>
        </div>

    )
}

export default Membership
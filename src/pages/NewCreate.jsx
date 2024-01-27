import { CreateNewsForm } from "../components"
import styles from "../style"

const NewCreate = () => {
    return (
        <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
                <div className={`${styles.boxWidth} `}>
                    <CreateNewsForm/>
                </div>
            </div>
        </div>
      )
}

export default NewCreate
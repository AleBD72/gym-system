import { EditProfileForm } from "../components"
import styles from "../style"


const EditProfile = () => {

  return (
    <div className={`${styles.paddingY} bg-principalCol w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
            <div className={`${styles.boxWidth} `}>
              <EditProfileForm />
            </div>
        </div>
    </div>
  )
}

export default EditProfile
import { NewUserForm } from "../components"
import styles from "../style"

const UserRegistration = () => {
  return (
    <div className="bg-principalCol w-screen h-screen">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <NewUserForm />
        </div>
      </div>
    </div>
  )
}

export default UserRegistration
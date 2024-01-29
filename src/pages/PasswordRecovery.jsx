import styles from "../style"
import { RecoverPasswordForm } from "../components"

const PasswordRecovery = () => {
  return (
    <div className="bg-principalCol w-screen h-screen flex items-center justify-center">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <RecoverPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default PasswordRecovery
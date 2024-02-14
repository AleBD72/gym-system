import { LoginForm } from "../components"
import styles from "../style"

const Login = () => {
  return (
    <div className={`bg-principalCol w-screen flex justify-center items-center sm:h-screen`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
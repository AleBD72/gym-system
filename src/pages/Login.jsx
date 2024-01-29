import { LoginForm } from "../components"
import styles from "../style"

const Login = () => {
  return (
    <div className="bg-principalCol w-screen h-screen flex items-center justify-center">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
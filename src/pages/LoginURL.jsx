import {LoginURLValidate}  from "../components";
import styles from "../style";

const LoginURL = () => {
  return (
    <div className="bg-principalCol w-screen ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-principalCol`}>
        <div className={`${styles.boxWidth} `}>
          <LoginURLValidate />
        </div>
      </div>
    </div>
  );
};

export default LoginURL;

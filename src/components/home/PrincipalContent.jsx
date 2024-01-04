import Button from "../common/Button"
import styles from "../../style"

/* contenido principal a mostrarse en la landing page */
const PrincipalContent = () => {
    return (
        <div className={`${styles.flexStart} flex-col`}>
            <div className='bg-principalCol bg-opacity-65 p-3 z-[5]'>
                <h1 className='font-poppins font-bold ss:text-[80px] text-[73px] text-white ss:leading-[86px] leading-[75px]'>
                    Fitness <br /> HUB<span className="text-secondaryCol">.</span>
                </h1>
                <h3 className='font-poppins font-semibold ss:text-[28px] text-[25px] text-white ss:leading-[20px] leading-[23px]'>
                    No Pain No Gain
                </h3>
            </div>
            <a href={'#memberships'}>
                <Button styles={"mt-2"} label={"UNETE AL CLUB"} />
            </a>

        </div>
    )
}

export default PrincipalContent
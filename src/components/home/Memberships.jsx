import styles from "../../style"
import PlanCard from "./PlanCard"
import { plans } from "../../constants"

const Memberships = () => (
    <section id="memberships" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>Nuestras <br className="sm:block hidden" /> Membresías</h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Descubre el plan perfecto para ti, diseñado a medida y al mejor precio.
                    Satisface tus necesidades con nuestras opciones exclusivas.
                </p>
            </div>
        </div>

        {/*card's div*/}
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {plans.map((card) => (
                <PlanCard key={card.id} {...card} />
            ))}
        </div>

    </section>
)


export default Memberships
import { details } from "../../constants";
import styles, { layout } from "../../style";


const DetailCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row rounded-[20px] ${index !== details.length - 1 ? "mb-6" : "mb-0"} feature-card p-3`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-light text-dimWhite text-[16px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
    return (
        <section id="services" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Conquista tus metas, <br className="sm:block hidden" />
                    nuestra misión es inspirarte<br className="sm:block hidden" />
                    a alcanzar tu mejor versión
                </h2>
                <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
                    Transforma tu cuerpo y mente en nuestro gimnasio de
                    vanguardia, donde la excelencia en fitness se encuentra
                    con la motivación constante.
                </p>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {details.map((feature, index) => (
                    <DetailCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Business
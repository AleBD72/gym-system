import styles, { layout } from "../../style";
import { contacts } from "../../constants";
import { fotogym } from "../../assets";

const Contacts = () => {
    return (
        <section id="contacts" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Contactos y Ubicación</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Ubicados en el corazón de la ciudad, nuestro gimnasio ofrece instalaciones
                    modernas y accesibles. Contáctanos para un estilo de vida saludable.
                    ¡Inspira tu transformación hoy!
                </p>

                <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-fit`}>
                    <div className="flex-1 flex flex-col md:flex-row">
                        <div className="bg-thirdCol md:w-1/2 rounded-xl p-4 md:pl-6 md:pr-3 w-full">
                            <h4 className="font-poppins font-medium text-[21px] leading-[32px] text-white mt-5 mb-3">
                                Información de Contacto
                            </h4>
                            <p className="font-poppins text-[16px] font-normal text-dimWhite mt-2 mb-4">
                                Llámanos o visítanos!
                            </p>
                            <ul className="list-none">
                                {contacts.map((contact, index) => (
                                    <li key={contact.key} className="flex flex-row m-8 items-center mb-4">
                                        <img src={contact.icon} alt={index} className="w-[21px] h-[21px] object-contain" />
                                        <p className="font-poppins md:text-[16px] text-[14px] font-normal text-white ml-3">
                                            {contact.info}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full md:mt-0 mt-3 md:ml-5 ml-0">
                            <img src={fotogym} alt="fotoGimnasio" className="rounded-xl w-full"/>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default Contacts
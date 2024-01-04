import styles, { layout } from "../../style";
import { contacts } from "../../constants";

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

                <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-full`}>
                    <div className="flex-1 flex md:flex-row flex-col">
                        <div className="bg-thirdCol md:m-2 rounded-[20px] p-4 md:w-[50%] w-full">
                            <h4 className="font-poppins font-medium text-[21px] leading-[32px] text-white mt-5 pl-3">
                                Información de Contacto
                            </h4>
                            <p className="font-poppins text-[16px] font-normal text-dimWhite ml-3 mt-2">
                                Llámanos o visítanos!
                            </p>
                            <ul className="list-none m-8">
                                {contacts.map((contact, index)=>(
                                    <li key={contact.key} className="flex flex-row m-8 items-center">
                                        <img src={contact.icon} alt={index} className={`w-[21px] h-[21px] object-contain`}/> 
                                        <p className="font-poppins md:text-[16px] text-[14px] font-normal text-white ml-3">
                                            {contact.info}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className={`${styles.paragraph} max-w-[470px] ml-5 md:mt-0 mt-4`}>
                            Everything you need to accept card payments and grow your business
                            anywhere on the planet.
                        </p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Contacts
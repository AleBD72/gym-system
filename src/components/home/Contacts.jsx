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

                <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-fit`}>
                    <div className="flex-1 flex md:flex-row flex-col">
                        <div className="bg-thirdCol md:m-2 rounded-[20px] p-4 md:w-1/2 w-full">
                            <h4 className="font-poppins font-medium text-[21px] leading-[32px] text-white mt-5 pl-3">
                                Información de Contacto
                            </h4>
                            <p className="font-poppins text-[16px] font-normal text-dimWhite ml-3 mt-2">
                                Llámanos o visítanos!
                            </p>
                            <ul className="list-none m-8">
                                {contacts.map((contact, index) => (
                                    <li key={contact.key} className="flex flex-row m-8 items-center">
                                        <img src={contact.icon} alt={index} className={`w-[21px] h-[21px] object-contain`} />
                                        <p className="font-poppins md:text-[16px] text-[14px] font-normal text-white ml-3">
                                            {contact.info}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.876567602816!2d-78.44114254418028!3d-0.32751858911920767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd74d856d127%3A0x8e9111268ab1a751!2sLa%20Cueva%20Xtreme!5e0!3m2!1ses-419!2sec!4v1704553284238!5m2!1ses-419!2sec"
                                width="600"
                                //height="450"
                                className="rounded-[20px] h-full p-3"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Contacts
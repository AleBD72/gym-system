/*Vista de la ventana principal*/
import styles from "../style";
import { Navbar, PrincipalContent, LinksSection, Business,  Memberships,CarouselServices, Contacts, Footer } from "../components/index"; 
import { landing_cover } from '../assets/index';

const Home = () => {
  return (
    <div className="bg-principalCol w-full overflow-hidden">
      {/* Este div corresponde al fondo de pantalla con imagen  */}
      <div className='h-screen w-screen bg-cover bg-center' style={{ backgroundImage: `url(${landing_cover})` }}>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-thirdCol bg-opacity-70 `}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/*Sección de contenido principal homepage */}
        <div className={`${styles.flexCenter} h-[80%] flex-col`}>
          {/*Nombre del gimnasio llamativo en medio de la pantalla */}
          <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
            <PrincipalContent />
          </div>
          {/*Footer pagina inicio (no general) */}
          <div className='absolute inset-x-0 bottom-0 h-1/4 bg-thirdCol bg-opacity-70 hidden sm:block'>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <LinksSection/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Fin del div correspondiente al fondo con imagen */}

      {/*Sección del contenido con más información del gimnasio */}
      <div className={`bg-principalCol ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business/>
          <CarouselServices/>
          <Memberships />
          <Contacts/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
import styles from "../../style"
import { socialMedia, footerLinks } from "../../constants"

const LinksSection = () => {
  return (
    <div className={`${styles.flexCenter} md:py-4 py-2 flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-2 w-full`}>
        <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-1 mt-3">
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px] ml-8">
              <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
              {footerLink.links.map((link, index)=>(
                <li key={link.id} className={`font-poppins font-normal tex-[16px] leading-[24px] text-dimWhite hover:text-fifthCol cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
              </ul>
            </div>
          ))}

          {socialMedia.map((social)=>(
            <div key={social.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
                {social.title}
              </h4>
              <ul className="list-none mt-4">
                {social.links.map((link, index)=>(
                  <li key={link.id} className={`font-poppins font-normal tex-[16px] leading-[24px] text-dimWhite hover:text-fifthCol cursor-pointer ${index !== social.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                    <div className="flex flex-row">
                    <img src={link.icon} alt={link.name} className={`w-[21px] h-[21px] object-contain cursor-pointer mr-2`}/>
                    {link.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinksSection
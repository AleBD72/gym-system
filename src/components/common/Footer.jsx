/*Código de Footer de Home si es necesario usar en otros lados*/
import styles from "../../style";
import { footerLinks, socialMedia } from "../../constants";
import { logo_footer } from "../../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo_footer}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          Forja tu fuerza, esculpe tu bienestar. Eleva tu vida con nosotros.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal tex-[16px] leading-[24px] text-dimWhite hover:text-fifthCol cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name === "Horarios" || link.name === "Noticias" ? (
                    <a href={link.go_to}>{link.name}</a>
                  ) : (
                    <a href={`#${link.link}`}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {socialMedia.map((social) => (
          <div
            key={social.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
              {social.title}
            </h4>
            <ul className="list-none mt-4">
              {social.links.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-poppins font-normal tex-[16px] leading-[24px] text-dimWhite hover:text-fifthCol cursor-pointer ${
                    index !== social.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <div className="flex flex-row">
                    <img
                      src={link.icon}
                      alt={link.name}
                      className={`w-[21px] h-[21px] object-contain cursor-pointer mr-2`}
                    />
                    <a href={`${link.link}`} target="_blank">{link.name}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[13px] leading-[27px] text-white">
        Copyright 2023 Fitness HUB. All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-center text-[13px] leading-[27px] text-white">
        Design by Camila Mier
      </p>
    </div>
  </section>
);

export default Footer;

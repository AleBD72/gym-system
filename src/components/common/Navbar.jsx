/* Código de Barra de navegación común */
import { useState } from "react"
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";
import { Button } from "../index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="fitnesshub" className="w-[154px] h-[30px]" />
      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
                font-normal cursor-pointer text-[15px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <Link to="/login">
      <Button styles={"ml-10 md:flex hidden bg-white"} label={"INICIAR SESIÓN"} />
      </Link>
      

      {/*Esto correspone al responsive de la aplicación */}
      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px]
              object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar z-50`}
        >
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins 
                    font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            
            <Link to="/login">
            <Button styles={" h-[40px] mt-4 bg-white"} label={"INICIAR SESIÓN"}/>
            </Link>

          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar
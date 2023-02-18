import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logoColorBg from "../assets/img/logo_colorBg.png";
import logoWhiteBg from "../assets/img/logo_whiteBg.png";
import { BG_COLOR_PAGES } from "../config";
import useMediaQuery from "../hooks/useMediaQuery";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {

  const { pathname } = useLocation();
  const bgColor = BG_COLOR_PAGES.includes(pathname);
  const md = useMediaQuery("(min-width: 960px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = !md && isOpen ? 'hidden' : 'visible'; // if current styling is *hidden* then change to visible, otherwise change to hidden
  }, [isOpen, md])

  return (
    <>
      {(md || isOpen) && <div className={md ? `
        flex space-x-10 justify-between items-center 
        absolute top-0 left-1/2 -translate-x-1/2 
        w-full max-w-5xl px-20 py-7
      ` : `
        w-screen h-screen sticky top-0 left-0 z-10 bg-gradient-to-b from-pink to-orange
        pl-20 pt-12
      `}>
        {!md && <div className="absolute top-10 right-10 z-30" onClick={() => setIsOpen(false)}>
          <IoMdClose className="fill-white" size={50}/>
        </div>}

        <img className="sm:w-40 max-sm:w-52" src={bgColor || !md ? logoColorBg : logoWhiteBg} alt="logo"></img>
        <div className={`
          flex md:justify-between
          md:flex-1 md:text-sm
          max-md:flex-col max-md:space-y-10 
          max-md:h-screen max-md:justify-center max-md:pb-20
          max-md:text-lg
          ${bgColor || !md ? "text-white" : "text-black"}
        `}>
          <a href="/" className={pathname === "/" ? "font-semibold" : ""}>HOME</a>
          <a href="/info" className={pathname === "/info" ? "font-semibold" : ""}>CHI SIAMO</a>
          <a href="/app" className={pathname === "/app" ? "font-semibold" : ""}>APP</a>
          <a href="/bookpoint" className={pathname === "/bookpoint" ? "font-semibold" : ""}>BOOKPOINT</a>
          <a href="/eventi" className={pathname === "/eventi" ? "font-semibold" : ""}>EVENTI</a>
          <a href="/contatti" className={pathname === "/contatti" ? "font-semibold" : ""}>CONTATTI</a>
        </div>
      </div>}

      {!md && !isOpen && <div className="absolute top-10 right-10 z-30" onClick={() => setIsOpen(true)}>
        <IoMdMenu className={bgColor ? "fill-white" : "fill-black"} size={50}/>
      </div>}
    </>
  )
}
export default Header;
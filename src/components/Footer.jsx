import { useLocation } from "react-router-dom";
import { FOOTER_TRANSPARENT_PAGES } from "../config";
import Cta from "./Cta";

import logoColorBg from "../assets/img/logo_colorBg.png";
import iconInstagram from "../assets/icons/instagram.png";
import iconFacebook from "../assets/icons/facebook.png";
import iconYoutube from "../assets/icons/youtube.png";
import logoSanPaolo from "../assets/img/compagnia_san_paolo.png"
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {

  const { pathname } = useLocation();
  const bgColor = FOOTER_TRANSPARENT_PAGES.includes(pathname);
  const sm = useMediaQuery("(min-width: 740px)");

  return (
    <div className={`
      absolute bottom-0 left-1/2 -translate-x-1/2 w-full
      ${bgColor ? "bg-opacity-0" : "bg-gradient-to-b from-pink to-orange"}
    `}>
      <div className="
        flex sm:space-x-10 md:space-x-[50px] justify-between sm:items-stretch
        w-full max-w-5xl pt-10 pb-16 mx-auto
        text-white text-xs px-20
        max-sm:flex-col max-sm:items-center max-sm:space-y-10
      ">
        <div className="flex flex-col justify-between max-sm:space-y-8 sm:space-y-3 sm:w-40 max-sm:items-center">
          {!sm && <>
            <div className="flex justify-between items-center space-x-10">
              <img className="w-40" src={logoColorBg} alt="logo"/>
              <img className="w-40" src={logoSanPaolo} alt="compagnia di san paolo"/>
            </div>
          </>}
          {sm && <img className="w-40" src={logoColorBg} alt="logo"/>}
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/book2book.app/">
              <img className="w-8 hover:opacity-80" src={iconInstagram} alt="instagram"/>
            </a>
            <a href="https://www.facebook.com/people/Book2Bookapp/100083225077823/">
              <img className="w-8 hover:opacity-80" src={iconFacebook} alt="facebook"/>
            </a>
            <a href="https://www.youtube.com/@book2booktorino160">
              <img className="w-8 hover:opacity-80" src={iconYoutube} alt="youtube"/>
            </a>
          </div>
        </div>

        {sm && <div className={"flex flex-col justify-between text-xs space-y-1"}>
          <a href="/" className="hover:opacity-80">HOME</a>
          <a href="/info" className="hover:opacity-80">CHI SIAMO</a>
          <a href="/app" className="hover:opacity-80">APP</a>
          <a href="/bookpoint" className="hover:opacity-80">BOOKPOINT</a>
          <a href="/eventi" className="hover:opacity-80">EVENTI</a>
          <a href="/contatti" className="hover:opacity-80">CONTATTI</a>
        </div>}
        <form action="https://book2book.us11.list-manage.com/subscribe/post?u=2f54dcbd57a21fe846f9954ac&amp;id=f9c12f98f8&amp;f_id=009e9ce0f0" method="post" 
        className="
          sm:flex-1 flex flex-col justify-between
          max-sm:w-full max-sm:space-y-3
        ">
          <label className="text-xs">ISCRIVITI ALLA NEWSLETTER</label>
          <input type="email" name="EMAIL" placeholder="E-mail" className="text-sm py-2 px-3 bg-transparent text-black"/>
          <div className="text-right w-full">
            <Cta size="sm">
              ISCRIVITI
            </Cta>
          </div>
        </form>

        {sm && <div className="my-0">
          <img src={logoSanPaolo} className="min-w-[50px] max-w-[180px] w-full" alt="compagnia di san paolo"/>
        </div>}
      </div>
    </div>
  )
}
export default Footer;
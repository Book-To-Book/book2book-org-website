import Page from "../components/Page";

import leggiPrestaIncontra from "../assets/img/5_Leggi,presta,incontra.png";
import Cta from "../components/Cta";

const ContactsPage = () => {

  const handleTextAreaInput = (e) => {
    e.target.style.cssText = 'height:auto;';
    e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
  }

  return (
    <Page bgColor>
      <div className="flex items-center justify-between sm:space-x-10 mb-20 max-sm:flex-col max-sm:space-y-10">
        <div className="text-xl font-semibold text-white sm:max-w-half">
          Leggi, presta <br/>& incontra
        </div>
        <img className="sm:max-w-half" src={leggiPrestaIncontra} alt="Leggi, presta, incontra"></img>
      </div>

      <form action="https://formsubmit.co/giuliano@mogoa.org" method="POST"
        className="flex flex-col space-y-10"
      >
        <div className="text-xl font-semibold text-white">Contattaci</div>
        <input name="nome" type="text" className="contact-form-input mb-10" placeholder="Nome"></input>
        <input name="telefono" type="tel" className="contact-form-input mb-10" placeholder="Telefono"></input>
        <input name="email" type="email" className="contact-form-input mb-10" placeholder="E-mail"></input>
        <textarea name="messaggio" rows="1" onChange={handleTextAreaInput}
          className="contact-form-input h-fit resize-none" placeholder="Il tuo messaggio"/>
        <div className="text-right text-white text-base pt-10">
          <Cta>
            INVIA
          </Cta>
        </div>
      </form>
    </Page>
  );
}

export default ContactsPage;
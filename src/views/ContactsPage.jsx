import Page from "../components/Page";

import leggiPrestaIncontra from "../assets/img/5_Leggi,presta,incontra.png";
import Cta from "../components/Cta";

const ContactsPage = () => {

  const handleTextAreaInput = (e) => {
    console.log(e)
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

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-10">
        <div className="text-xl font-semibold text-white">Contattaci</div>
        <input type="text" className="contact-form-input mb-10" placeholder="Nome"></input>
        <input type="tel" className="contact-form-input mb-10" placeholder="Telefono"></input>
        <input type="email" className="contact-form-input mb-10" placeholder="E-mail"></input>
        <textarea rows="1" onChange={handleTextAreaInput}
          className="contact-form-input h-fit" placeholder="Il tuo messaggio"/>
        <div className="text-right text-white text-base pt-10">
          <Cta onClick={() => console.log("Message sent!")}>
            INVIA
          </Cta>
        </div>
      </form>
    </Page>
  );
}

export default ContactsPage;
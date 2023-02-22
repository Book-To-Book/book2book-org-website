import Page from "../components/Page";

import chiSiamo from "../assets/img/3_chisiamo.png";
import mission from "../assets/img/4_mission.png";
import Cta from "../components/Cta";
import useMediaQuery from "../hooks/useMediaQuery";

const InfoPage = () => {

  const sm = useMediaQuery("(min-width: 740px)");

  return (
    <Page bgColor>
      <div className="flex items-center justify-between space-x-10 mb-10">
        <div className="text-base text-black sm:max-w-half">
          <div className="text-xl font-semibold text-pink mb-8">Chi siamo</div>
          <div className="mb-10 text-base font-semibold">
            Mogoa è un'Associazione di
            Promozione Sociale il cui scopo è
            supportare e generare progetti di
            inclusione sociale, aventi come focus
            la cultura, la prossimità e il digitale.
            Attraverso progetti di cittadinanza
            attiva sul territorio e l'utilizzo della
            cultura e del digitale come strumenti
            di incontro, promuove lo sviluppo di
            nuove reti sociali.
          </div>
          <div className="mb-10 text-base">
            Pensiamo che se vengono aperti i
            giusti canali di comunicazione e di
            contatto tra le persone, la cultura si
            possa diffondere autonomamente.
            L'obiettivo di Mogoa è tessere
            quella rete, iniziando con
            Book2Book.
          </div>
        </div>
        {sm && <div className="max-w-half">
          <img className="h-full img-bleed" src={chiSiamo} alt="chi siamo"/>
        </div>}
      </div>

      <div className="
        mt-20 mb-20 pt-10 pb-16 px-bleed text-white text-base text-center mx-auto
        bg-gradient-to-b from-pink to-orange
      ">
        <div className="text-xl mb-10 font-semibold">
          {sm ? <p>Wanna be a Book2Booker?</p> : <p>Wanna be a<br/>Book2Booker?</p>}
        </div>
        <Cta link="https://app.book2book.org/" alt="prova l'app">
          PROVA L'APP!
        </Cta>
      </div>

      <div className="flex items-center justify-between space-x-10 mb-10">
        {sm && <div className="max-w-half flex justify-end">
          <img className="img-bleed h-full" src={mission} alt="mission"></img>
        </div>}
        <div className="text-base text-black sm:max-w-half sm:text-right">
          <div className="text-xl font-semibold text-pink mb-8">Mission</div>
          <div className="mb-10 text-base font-semibold">
            Il nostro intento è rendere la
            cultura più accessibile
            attraverso la valorizzazione del
            territorio e la riacquisizione
            degli spazi di aggregazione.
            Attraverso la rete di scambio
            B2B promuove la cultura e la
            possibilità di tessere nuovi
            rapporti fra persone con
            interessi comuni.
          </div>
          <div className="mb-10 text-base">
            Questo stimola il dialogo, la crescita
            personale e la socialità. Book2Book è
            una mobilitazione nel mondo culturale
            per ricostruire le relazioni sociali, con
            attenzione ai bisogni delle persone. Il
            libro e la lettura si prestano quindi a
            essere strumenti di connessione
            umana e terreno di rinascita sociale.
          </div>
        </div>
      </div>
    </Page>
  );
}

export default InfoPage;
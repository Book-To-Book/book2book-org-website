import Page from "../components/Page";
import map from "../assets/img/map.png";
import arrowIcon from "../assets/icons/arrow.png";
import { BOOKPOINTS } from "../config";

const BookpointPage = () => {
  return (
    <Page bgColor>
      <div className="flex justify-center mb-10">
        <img className="w-screen img-bleed max-sm:min-w-[700px]" src={map} alt="map"></img>
      </div>

      <div className="mb-10">
        <div className="text-lg text-pink mb-3">Cosa sono i BookPoint</div>
        <div className="mb-10 text-md">
          Cosa sono? I BookPoint sono luoghi aggregativi della città, spazi socio-culturali di
          varia natura che hanno deciso di entrare a far parte della rete di Book2Book.
        </div>
      </div>

      <div className="mb-10">
        <div className="text-lg text-pink mb-3">Cosa ci puoi fare?</div>
        <div className="mb-10 text-md">
          I BookPoint sono dei luoghi accoglienti e stimolanti in cui rimanere, mettono a
          disposizione della community i propri spazi per ospitare lo scambio di libri tra
          persone. Alcuni hanno al loro interno anche un BookCorner. I libri dei BookPoint
          sono prenotabili sull'applicazione.
        </div>
      </div>

      <div className="mb-16">
        <div className="text-lg text-pink mb-3">Sì, ma dove sono?</div>
        <div className="mb-10 text-md">
          Al momento abbiamo 10 BookPoint sparsi per gran parte dei quartieri di Torino, fra
          cui San Salvario, Cenisia, San Donato, Barriera, Mirafiori e il Centro. Vuoi sapere
          qual è il BookPoint più vicino a te? Consulta la lista qui sotto!
        </div>
      </div>

      {BOOKPOINTS.map((bookpoint, idx) => <div key={idx} className="mb-10 text-md">
        <div className="flex items-center space-x-5 text-black">
          <img className="h-5" src={arrowIcon} alt="arrow"/>
          <p>{bookpoint.name}</p>
        </div>
        <p className="font-semibold">{bookpoint.address}</p>
      </div>)}

      <div className="
        my-20 pb-16 pt-5 text-white text-md
        flex justify-center
        relative
      ">
        <div className="w-screen h-full absolute -top-5 px-bleed bg-gradient-to-b from-pink to-orange"/>
        <div className="z-10">
          <div className="text-lg mb-3">
            Come diventare BookPoint
          </div>
          <div className="text-md">
            Gestisci uno spazio aperto al pubblico e vorresti diventare un BookPoint? Hai
            dei libri e ti piacerebbe renderli più accessibili? Vorresti attivare un
            BookCorner?
            Parliamone insieme, scrivi a info@mogoa.org!
            <br/><br/>
            Per essere o diventare BookPoint non ci sono dei requisiti particolari da
            rispettare, ma qualcosa di ancora più importante per noi: dobbiamo avere
            una visione comune. Infatti, per diventare BookPoint bisogna firmare un
            manifesto, qui i punti principali.
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-lg text-pink mb-3">I BookPoint si impegnano a</div>
        <div className="mb-10 text-md">
          Promuovere la filosofia di Book2Book, diffondendo la cultura e rendendola
          accessibile a tutt*!
          Mettere a disposizione i propri spazi i per creare uno luogo sicuro, inclusivo e non
          discriminante in cui accogliere gli scambi fra utenti della piattaforma.
          Se presenti, mettere a disposizione libri già presenti in loco, creando una piccola
          libreria (BookCorner) in cui le persone possono prendere in prestito i volumi.
          Supportare le attività di potenziamento e networking della rete territoriale.
          Promuovere il progetto tramite i canali virtuali (social) e quelli reali (frequentatori
          dei luoghi).
        </div>
      </div>
    </Page>
  );
}

export default BookpointPage;
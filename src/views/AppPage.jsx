import Page from "../components/Page";

import libreria from "../assets/img/1_LIBRERIA_Aggiungiunlibro.png";
import homepage from "../assets/img/2_HOMEPAGE_cerca.png";
import chat from "../assets/img/3_CHAT_messaggi_scrivi.png";
import profilo from "../assets/img/4_PROFILO.png";
import bookpoint from "../assets/img/5_BOOKPOINT_lista.png";
import schedaLibro from "../assets/img/6_SCHEDALIBRO_Guest.png";
import prestito from "../assets/img/7_PRESTITO_Tavola disegno 1.png";

const AppPage = () => {
  return (
    <Page bgColor>
      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col">
        <div className="text-base text-black sm:max-w-60p">
          <div className="text-lg text-pink mb-2">Carica il tuo libro</div>
          <div className="mb-10 text-base">
            Con Book2Book puoi creare il
            catalogo digitale dei libri che hai in
            casa. Come? Basta scansionare il
            codice ISBN del libro e si aggiungerà
            alla tua libreria digitale. Poi, puoi
            decidere se renderlo disponibile al
            prestito e iniziare a diffondere la
            cultura!
          </div>
        </div>
        <div className="sm:max-w-half sm:pr-14">
          <img style={{transform: "rotate(-10deg)"}} className="max-h-96" src={libreria} alt="libreria"/>
        </div>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col-reverse">
        <div className="sm:max-w-half sm:pl-14">
          <img style={{transform: "rotate(-5deg)"}} className="max-h-96" src={homepage} alt="homepage"/>
        </div>
        <div className="text-base text-black sm:max-w-60p sm:text-right">
          <div className="text-lg text-pink mb-2">Prendi un libro in prestito</div>
          <div className="mb-10 text-base">
            Sfoglia il catalogo di Book2Book,
            scegli cosa hai voglia di leggere e
            prenota il prestito del libro con un
            click!
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col">
        <div className="text-base text-black sm:max-w-60p">
          <div className="text-lg text-pink mb-2">Scrivi agli utenti</div>
          <div className="mb-10 text-base">
            Hai trovato il libro perfetto per te?
            Prenotalo e scrivi all'utente che lo ha
            caricato sull'applicazione, potrete
            accordarvi per l'orario e il luogo
            dell'incontro!
            Nella sezione chat trovi tutte le
            conversazioni presenti e passate.
          </div>
        </div>
        <div className="sm:max-w-half sm:pr-14">
          <img style={{transform: "rotate(10deg)"}} className="max-h-96" src={chat} alt="chat"/>
        </div>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col-reverse">
        <div className="sm:max-w-half sm:pl-14">
          <img style={{transform: "rotate(-15deg)"}} className="max-h-96" src={profilo} alt="profilo"/>
        </div>
        <div className="text-base text-black sm:max-w-60p sm:text-right">
          <div className="text-lg text-pink mb-2">Personalizza il tuo profilo</div>
          <div className="mb-10 text-base">
            Personalizzare il tuo profilo con una
            breve descrizione, la foto e il nome
            favorisce gli scambi! Invece il tuo
            indirizzo e la mail rimarranno
            privati.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col">
        <div className="text-base text-black sm:max-w-60p">
          <div className="text-lg text-pink mb-2">Trova i BookPoint</div>
          <div className="mb-10 text-base">
            Se non sai dove incontrare le persone
            per gli scambi, se cerchi un nuovo
            posto per leggere, o se vuoi
            semplicemente cambiare aria
            consulta la lista dei BookPoint sull'app
            di Book2Book. Troverai indirizzo, orari,
            servizi offerti, sito web, libri disponibili
            e distanza da te.
          </div>
        </div>
        <div className="sm:max-w-half sm:pr-14">
          <img style={{transform: "rotate(-5deg)"}} className="max-h-96" src={bookpoint} alt="bookpoint"/>
        </div>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col-reverse">
        <div className="sm:max-w-half sm:pl-14">
          <img style={{transform: "rotate(4deg)"}} className="max-h-96" src={schedaLibro} alt="scheda libro"/>
        </div>
        <div className="text-base text-black sm:max-w-60p sm:text-right">
          <div className="text-lg text-pink mb-2">Salva i tuoi libri preferiti</div>
          <div className="mb-10 text-base">
            Hai trovato un libro che ti piace
            mentre stai facendo altro, e non
            vuoi dimenticarlo? Salvalo nei tuoi
            preferiti per non perderli! Basta
            cercare il libro e cliccare sul cuore
            accanto a Prenota. Trovi i tuoi libri
            preferiti sul tuo profilo, nella
            sezione “i tuoi mi piace”
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mb-10 max-sm:flex-col">
        <div className="text-base text-black sm:max-w-60p">
          <div className="text-lg text-pink mb-2">E durante gli scambi?</div>
          <div className="mb-10 text-base">
            Se prendi in prestito: Dopo aver
            concordato il luogo di incontro,
            presentati all'appuntamento,
            scannerizza il codice QR presente sul
            telefono dell'altra persona e bevetevi
            un caffè insieme se ne avete voglia.
            In maniera automatica lo scambio
            dura 30 giorni, ma si può prorogare.
            Quando incontrerai la persona per
            restituirle il libro, scannerizzate di
            nuovo il QR e bevetevi qualcos'altro,
            se avete tempo: è così bello
            chiacchierare con qualcuno che ha
            letto il tuo stesso libro!
            <br/><br/>
            Se presti: Quando una persona
            prenota un tuo libro, ti appare un
            codice QR che devi farle
            scannerizzare sia quando glielo presti
            che quando te lo restituisce, magari
            mentre vi scambiate due chiacchiere
            sul perché vi piace proprio
            quell'autore. Lo scan segna l'inizio e la
            fine del prestito, che dura in
            automatico 30 giorni ma può essere
            prorogato.
          </div>
        </div>
        <div className="sm:max-w-half max-sm:max-w-[150px]">
          <img src={prestito} alt="prestito"/>
        </div>
      </div>
    </Page>
  );
}

export default AppPage;
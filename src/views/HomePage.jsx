import { Carousel } from "nuka-carousel/lib/carousel";
import { FallingLines } from "react-loader-spinner";
import Page from "../components/Page";
import Cta from "../components/Cta";

import leggiPrestaIncontra from "../assets/img/1_Leggi,presta,incontra.png";
import parlanoDiNoi from "../assets/img/2_Parlanodinoi.png";
import chiSiamo from "../assets/img/3_chisiamo.png";
import mission from "../assets/img/4_mission.png";
import useMediaQuery from "../hooks/useMediaQuery";
import useGoogleSheets from "../hooks/useGoogleSheets";

function renderPoints({slideCount, currentSlide, goToSlide}) {
  return <div className="flex space-x-5">
    {[...Array(slideCount)].map((e, key) =>
      <div 
        className={`
          p-2 rounded-full bg-white cursor-pointer
          ${currentSlide !== key ? "opacity-70" : undefined}`
        }
        key={key}
        onClick={() => goToSlide(key)}
      />
    )}
    </div>
}

const HomePage = () => {

  const sm = useMediaQuery("(min-width: 740px)");
  const { events } = useGoogleSheets()

  return (
    <Page bgColor>
      <div className="
        flex items-center justify-between sm:space-x-10
        max-sm:space-y-10 max-sm:flex-col
      ">
        <div className="text-xl font-semibold text-white sm:max-w-half">
          Leggi, presta <br/>& incontra
        </div>
        <img className="sm:max-w-half" src={leggiPrestaIncontra} alt="Leggi, presta, incontra"></img>
      </div>

      <div className="my-20 text-white text-base max-w-xl text-center mx-auto">
        <div className="mb-10">
          Con Book2Book scambi e presti libri in tutta Torino,
          creando la prima biblioteca di prossimità d'Italia!<br/>
          Entra anche tu nella community!
        </div>
        <Cta link="https://app.book2book.org/" alt="prova l'app">
          PROVA L'APP!
        </Cta>
      </div>

      <div className=" flex items-center justify-between sm:space-x-10 max-sm:flex-col-reverse">
        <div className="text-base text-white sm:max-w-half">
          <div className="text-sm font-semibold">CHI SIAMO</div>
          <div className="mb-10">
            Mogoa è un'Associazione di Promozione Sociale 
            il cui scopo è supportare e generare progetti di inclusione sociale,
            aventi come focus la cultura, la prossimità e il digitale.
          </div>
          <Cta link="/info" alt="chi siamo">
            SCOPRI DI PIÙ
          </Cta>
        </div>
        <img className="sm:max-w-half max-sm:mb-10" src={chiSiamo} alt="chi siamo"></img>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 mt-32 sm:text-right max-sm:flex-col max-sm:space-y-10">
        <img className="sm:max-w-half" src={mission} alt="mission"></img>
        <div className="text-base text-white sm:max-w-half">
          <div className="text-sm font-semibold">MISSION</div>
          <div className="mb-10">
            Il nostro intento è rendere la cultura più accessibile
            attraverso la valorizzazione del territorio e la riacquisizione
            degli spazi di aggregazione.
          </div>
          <Cta link="/info" alt="chi siamo">
            SCOPRI DI PIÙ
          </Cta>
        </div>
      </div>

      <div className="mt-40 mb-20 text-white text-base w-full text-center mx-auto">
        <div className="text-xl mb-10 font-semibold">
          Wanna be a Book2Booker?
        </div>
        <div className="mb-10">
          <p className="font-semibold">La nostra app è in fase di sperimentazione,<br/>vuoi testarla in anteprima?</p>
          <p>
            Compila questo form lasciandoci la tua mail, le prime 100
            persone prenderanno parte alla fase di testing.
            Immagina un'app quasi tutta per te, come un albergo appena inaugurato.
          </p>
          <p className="font-semibold mt-10">Presta i tuoi libri e crea la tua libreria digitale!</p>
        </div>
        <Cta link="https://app.book2book.org/" alt="prova l'app">
          PROVA L'APP!
        </Cta>
      </div>

      <div className="flex items-center justify-between sm:space-x-10 max-sm:flex-col-reverse max-sm:text-center">
        <div className="text-base text-white w-full sm:max-w-half">
          <div className="text-xl font-semibold">Parlano di noi</div>
          <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={4000}
            renderCenterRightControls={() => (null)}
            renderCenterLeftControls={() => (null)}
            renderBottomCenterControls={!sm && renderPoints}
            renderBottomLeftControls={sm && renderPoints}
          >
            <div className="h-48 pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Fanno cose, vedono gente"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Un tipo a caso</p>
            </div>
            <div className="h-48 pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Puzzano un po' ma sono simpatici"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Luca O.</p>
            </div>
            <div className="h-48 pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Wololoooooo"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Sant'Agostino</p>
            </div>
          </Carousel>
        </div>
        <img className="sm:max-w-half max-sm:mb-10" src={parlanoDiNoi} alt="parlano di noi"></img>
      </div>

      <div className="mt-28 text-white text-base w-full text-center mx-auto">
        <div className="text-xl mb-10 font-semibold">
          I nostri eventi
        </div>
        <div className="mb-10">
          Conosciamoci dal vivo!<br/>Ecco i prossimi eventi in programma
        </div>

        {events ? <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-4 mb-16">
          {events.slice(0, sm ? 3 : 2).map((event, idx) => 
            <div key={idx} className="rounded-3xl bg-salmon p-5 text-left">
              <div className="text-md mb-16">{event.date}</div>
              <div className="text-lg font-semibold">{event.title}</div>
            </div>
          )}
        </div>
          : <div className="mx-auto max-w-[100px] mb-24" >
          <FallingLines width="100" color="#ffaf9b"/>
        </div>
        }
        <Cta link="/eventi">TUTTI GLI EVENTI</Cta>
      </div>
    </Page>
  );
}

export default HomePage;

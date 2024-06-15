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
import { useAppDownloadLink } from "../hooks/useAppDownloadLink";

function renderPoints({ slideCount, currentSlide, goToSlide }) {
  return <div className="flex space-x-5">
    {[...Array(slideCount)].map((e, key) =>
      <div
        className={`
          p-2 rounded-full bg-white cursor-pointer hover:opacity-100
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

  const appLink = useAppDownloadLink();

  return (
    <Page bgColor>
      <div className="
        flex items-center justify-between sm:space-x-10
        max-sm:space-y-10 max-sm:flex-col
      ">
        <div className="text-xl font-semibold text-white sm:max-w-half">
          Leggi, presta <br />& incontra
        </div>
        <img className="sm:max-w-half" src={leggiPrestaIncontra} alt="Leggi, presta, incontra"></img>
      </div>

      <div className="my-20 text-white text-base max-w-xl text-center mx-auto">
        <div className="mb-10">
          Con Book2Book scambi e presti libri in tutta Torino,
          creando la prima biblioteca di prossimità d'Italia!<br />
          Entra anche tu nella community!
        </div>
        <Cta link={appLink} alt="prova l'app">
          SCARICA L'APP!
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
          <p className="font-semibold mt-10">Presta i tuoi libri e crea la tua libreria digitale!</p>
        </div>
        <Cta link={appLink} alt="prova l'app">
          SCARICA L'APP!
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
            <div className="h-[300px] pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Con l'applicazione B2B prende vita la prima biblioteca di prossimità d'Italia"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Comune di Torino</p>
            </div>
            <div className="h-[300px] pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Book2Book si presenta come un bell'esempio di <strong>ICT4SocialGood</strong> che sfrutta il potenziale tecnologico per una mission sociale a forte vocazione locale"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Secondo Welfare</p>
            </div>
            <div className="h-[300px] pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Una biblioteca “di tutti e tutte”, dove ogni cittadino può offrire libri personali o chiederli in prestito"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Italia che cambia</p>
            </div>
            <div className="h-[300px] pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"Grazie all'app Book to Book creeremo una biblioteca diffusa in cui i cittadini potranno scambiare i propri libri di casa, organizzandosi per farlo fisicamente proprio in questi spazi"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Torino oggi</p>
            </div>
            <div className="h-[300px] pt-5 text-white relative max-sm:text-center">
              <p className="text-base italic mb-5">"La startup torinese Book2Book tra le vincitrici della call Get it"</p>
              <p className="
                text-md font-semibold absolute bottom-12
                max-sm:right-1/2 max-sm:translate-x-1/2
              ">Torino Tech Camp</p>
            </div>
          </Carousel>
        </div>
        <img className="sm:max-w-half max-sm:mb-10" src={parlanoDiNoi} alt="parlano di noi"></img>
      </div>

      <div className="mt-28 text-white text-base w-full mx-auto">
        <div className="text-xl mb-10 font-semibold">
          I nostri eventi
        </div>
        <div className="mb-10">
          Conosciamoci dal vivo!<br />Ecco i prossimi eventi in programma
        </div>

        {events ? (
          <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-2 mb-16">
            {events.slice(0, sm ? 3 : 2).map((event, idx) => (
              <div
                key={idx}
                className={`rounded-3xl bg-salmon text-md p-5 flex flex-col justify-between space-y-4 ${
                  event.link && "cursor-pointer hover:opacity-90"
                }`}
                onClick={() => event.link && window.open(event.link, "_blank", "noreferrer")}
              >
                {(event.date || event.place) && (
                  <div>
                    {event.date && <div className="flex flex-wrap justify-between">
                      <div className="mr-4">{event.date}</div>
                      {event.time && <div className="text-white text-opacity-70">{event.time}</div>}
                    </div>}
                    {(event.place || event.address) && (
                      <>
                        {event.mapsLink ? (
                          <a
                            className="text-sm hover:opacity-80"
                            href={event.mapsLink}
                            target="_blank" rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="text-sm">
                              {event.place}
                            </div>
                            <div className="text-xs opacity-70">
                              {event.address}
                            </div>
                          </a>
                        ) : (
                          <>
                            <div className="text-sm">
                              {event.place}
                            </div>
                            <div className="text-xs opacity-70">
                              {event.address}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
                <div className="md:text-lg max-md:text-md font-semibold">{event.title}</div>
              </div>
            ))}
          </div>
        ) : <div className="mx-auto max-w-[100px] mb-24" >
            <FallingLines width="100" color="#ffaf9b" />
          </div>
        }
        <Cta link="/eventi">TUTTI GLI EVENTI</Cta>
      </div>
    </Page>
  );
}

export default HomePage;

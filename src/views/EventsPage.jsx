import { FallingLines } from "react-loader-spinner";
import Cta from "../components/Cta";
import Page from "../components/Page";
import useGoogleSheets from "../hooks/useGoogleSheets";
import useMediaQuery from "../hooks/useMediaQuery";

const EventsPage = () => {

  const sm = useMediaQuery("(min-width: 740px)");

  const { events } = useGoogleSheets();

  return (
    <Page bgColor>
      <div className=" mb-20">
        <div className="text-xl text-black font-semibold mb-3">I nostri eventi</div>
        <div className="mb-10 text-base">
          Conosciamoci dal vivo!<br/>
          Ecco i prossimi eventi in programma
        </div>
      </div>
      {events ? <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-2 mb-40">
        {events.map((event, idx) => 
          <div key={idx} className="rounded-3xl bg-salmon text-md p-5 flex flex-col justify-between space-y-4">
            {(event.date || event.place) && <div>
              {event.date && <div className="flex flex-wrap justify-between">
                <div className="mr-4">{event.date}</div>
                {event.time && <div className="text-black text-opacity-80">{event.time}</div>}
              </div>}
              {event.place && <div className="text-sm">{event.place}</div> }
            </div>}
            <div className="md:text-lg max-md:text-md font-semibold">{event.title}</div>
          </div>
        )}
      </div>
      : <div className="mx-auto max-w-[100px] mb-24" >
        <FallingLines width="100" color="#ffaf9b"/>
      </div>
      }

      <div className="
        mb-20 pt-16 pb-bleed px-bleed text-white text-base text-center mx-auto
        bg-gradient-to-b from-pink to-orange
      ">
        <div className="text-xl mb-10 font-semibold">
          {sm ? <p>Hai un evento da proporci?</p> : <p>Hai un evento<br/>da proporci?</p>}
        </div>
        <Cta link="/contatti" alt="prova l'app">
          CONTATTACI!
        </Cta>
      </div>
    </Page>
  );
}

export default EventsPage;
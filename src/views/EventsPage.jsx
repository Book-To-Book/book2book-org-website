import Cta from "../components/Cta";
import Page from "../components/Page";
import { EVENTS } from "../config";
import useMediaQuery from "../hooks/useMediaQuery";

const EventsPage = () => {

  const sm = useMediaQuery("(min-width: 740px)");

  return (
    <Page bgColor>
      <div className=" mb-20">
        <div className="text-xl text-black font-semibold mb-3">I nostri eventi</div>
        <div className="mb-10 text-base">
          Conosciamoci dal vivo!<br/>
          Ecco i prossimi eventi in programma
        </div>
      </div>
      <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-4 mb-40">
        {EVENTS.map((event, idx) => <div key={idx} className="rounded-3xl bg-salmon p-10">
          <div className="text-md mb-16">{event.date}</div>
          <div className="text-lg font-semibold">{event.title}</div>
        </div>)}
      </div>

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
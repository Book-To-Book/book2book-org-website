import Cta from "../components/Cta";

import Page from "../components/Page";

import { useAppDownloadLink } from "../hooks/useAppDownloadLink";

const DownloadApp = () => {

  const appLink = useAppDownloadLink();

  return (
    <Page bgColor>
      <div className="mb-20 text-center">
        <div className="text-xl text-black font-semibold mb-10">Scarica Book2Book!</div>
        <Cta link={appLink} alt="prova l'app">
          CLICCA QUI!
        </Cta>
      </div>
    </Page>
  );
};

export default DownloadApp;
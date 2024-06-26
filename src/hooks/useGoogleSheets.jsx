import { useEffect, useState } from "react";
import Papa from "papaparse";

const BOOKPOINTS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQO766ivjjGzKnN2CsA-uwIJ-q1sw3X602nsHZwXd0628GoT--drikO6IGs7JKhdh6jmpOrt_MCyyku/pub?gid=0&single=true&output=csv";
const EVENTS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQO766ivjjGzKnN2CsA-uwIJ-q1sw3X602nsHZwXd0628GoT--drikO6IGs7JKhdh6jmpOrt_MCyyku/pub?gid=1485184774&single=true&output=csv";

const useGoogleSheets = () => {
  const [bookpoints, setBookpoints] = useState(undefined);
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    Papa.parse(BOOKPOINTS_URL, {
      download: true,
      header: true,
      complete: (results) => {
        setBookpoints(results.data && results.data.map(e => ({
          name: e.nome || "Nessun nome",
          address: e.indirizzo || "Nessun indirizzo",
          coords: e.latitudine && e.longitudine ?[e.latitudine, e.longitudine] : undefined
        })));
      },
    });
  
    Papa.parse(EVENTS_URL, {
      download: true,
      header: true,
      complete: (results) => {
        setEvents(results.data && results.data.map(e => ({
          date: e.data,
          time: e.ora,
          link: e.link,
          place: e.luogo,
          address: e.indirizzo,
          mapsLink: e.maps,
          title: e.titolo || "Nessun titolo",
        })).reverse());
      },
    });
  }, [])

  return {
    bookpoints,
    events
  };
}

export default useGoogleSheets;
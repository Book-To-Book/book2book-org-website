import React from "react";
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppPage from "./views/AppPage";
import BookpointPage from "./views/BookpointPage";
import ContactsPage from "./views/ContactsPage";
import EventsPage from "./views/EventsPage";
import HomePage from "./views/HomePage";
import InfoPage from "./views/InfoPage";

const App = () => {
  return (
    <HashRouter>
      <div className="w-full relative">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/bookpoint" element={<BookpointPage />} />
          <Route path="/eventi" element={<EventsPage />} />
          <Route path="/contatti" element={<ContactsPage />} />
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App;

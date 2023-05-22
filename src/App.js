import React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppPage from "./views/AppPage";
import BookpointPage from "./views/BookpointPage";
import ContactsPage from "./views/ContactsPage";
import EventsPage from "./views/EventsPage";
import HomePage from "./views/HomePage";
import InfoPage from "./views/InfoPage";
import PrivacyPolicyPage from "./views/PrivacyPolicyPage";
import DownloadApp from "./views/DownloadApp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full relative">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/bookpoint" element={<BookpointPage />} />
          <Route path="/eventi" element={<EventsPage />} />
          <Route path="/contatti" element={<ContactsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/scarica-app" element={<DownloadApp />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;

import iphonesMockup from '../assets/img/mockups/Iphone_mockup_scaled.png';
import emailIcon from '../assets/img/icon_email_white.png';
import getItLogo from '../assets/img/logo_getit.png';
import getItLogoNeg from '../assets/img/logo_getit_negative.png';

import './Landing.css';

const Landing = () => (
  <div className="App">

    <header className="App-header">

      <div className="col-6 centered-flex">
        <img src={iphonesMockup} alt="Book2Book" title="Book2Book mockup" style={{ width: '100%' }} />
      </div>

      <div className="col-6 centered-flex">
        <div className="slide-in slider">
          <h2 className="superbold">Book2Book</h2>
          <h4 className="overflow-margin" style={{ textTransform: 'uppercase'}}>
            La prima biblioteca di prossimità in Italia
          </h4>
          <small>
            Stay tuned!
          </small>
          <br/>
          <a className="email" href="mailto:info@book2book.org">
            <img src={emailIcon} alt="Book2Book" title="Book2Book email"/> info@book2book.org
          </a>

          <div className="logo-getit">
            <img src={getItLogoNeg} alt="GetIt, percorsi di valore" title="Logo GetIt"/>
          </div>
        </div>
      </div>

    </header>

    <header className="App-header-mobile">

      <div style={{ padding: '0 1rem' }}>

        <div className="slide-in hidden-overflow slider" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="superbold" >Book2Book</h2>
          <h5 style={{ textTransform: 'uppercase' }}>
            La prima <b>biblioteca di prossimità</b> in Italia
          </h5>
          <small>
            <i>Stay tuned!</i>
          </small>
        </div>

        <div className="slide slide-in hidden-overflow slider-inverse">
          <img src={iphonesMockup} alt="Book2Book" title="Book2Book mockup" style={{ maxWidth: '90%' }} />
          <a className="email" href="mailto:info@book2book.org">
            <img src={emailIcon} alt="Book2Book" title="Book2Book email" /> info@book2book.org
          </a>

          <div className="logo-getit">
            <img src={getItLogoNeg} alt="GetIt, percorsi di valore" title="Logo GetIt"/>
          </div>
        </div>
      </div>

    </header>
  </div>
);

export default Landing;

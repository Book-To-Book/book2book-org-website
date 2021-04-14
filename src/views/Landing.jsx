import doubleMockup from '../assets/img/mockups/double-mockup.png';
import whiteMockup from '../assets/img/mockups/homepage-mockup-white-phone.png';

import './Landing.css';

const Landing = () => (
  <div className="App">

    {/* <nav className="top-navbar">
      <div>
        <img id="nav-logo" src={whiteIcon} alt="BandiPubblici" />
        <ul>
          <li>
            <a href="https://contrattipubblici.org">ContrattiPubblici.org</a>
          </li>
          <li>
            <a href="https://synapta.it">Synapta</a>
          </li>
        </ul>
      </div>
    </nav> */}

    <header className="App-header">

      <div className="col-5">
        <img src={doubleMockup} alt="Book2Book" style={{ width: '100%' }} />
      </div>

      <div className="col-7 hidden-overflow centered-flex">
        <div className="slide-in hidden-overflow slider-inverse">
          <h2 className="superbold">Book2Book</h2>
          <h5 style={{ textTransform: 'uppercase' }}>
            La prima <b>biblioteca di prossimità</b> in Italia
          </h5>
          <small>
            <i>Stay tuned!</i>
          </small>
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

        <div className="slide-in hidden-overflow slider-inverse">
          <img src={whiteMockup} alt="BandiPubblici" style={{ width: '200px' }} />
        </div>
      </div>

    </header>
  </div>
);

export default Landing;

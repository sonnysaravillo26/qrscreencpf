import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//PAGE
import QrScreentvTwo from './pages/QrScreentvTwo';
import QrScreentv from './pages/QrScreentv';
import QrScreen from './pages/QrScreen';
// import NoMatch from './pages/NoMatch';
// import Successful from './pages/Successful';
// import Unsuccessful from './pages/Unsuccessful';

//COMPONENT
import Layout from './components/Layout';

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <div> 
          <nav>
            
            <ul>
            <li>
              <Link to="/" target="_blank">Main Screen (1920 x 1080)</Link>
            </li>
            <li>
              <Link to="/QrScreentv" target="_blank"> QR Screen with Media (1920 x 1080) </Link>
            </li>
            <li>
              <Link to="/QrScreentvTwo" target="_blank"> QR Screen Portrait (1080 x 1920) </Link>
            </li>
          </ul>
          </nav>

          <Layout>
            <Routes>
              <Route path="/" element={<QrScreen />} />
              <Route path="/QrScreentv" element={<QrScreentv />} />
              <Route path="/QrScreentvTwo" element={<QrScreentvTwo />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
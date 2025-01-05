import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Page/home";
import Tour from "./Page/tour";
import DefaultLayout from "./Layouts/DefautlLayout/index";
import Rc from "./Page/rc";
import Kayaking from "./Page/kayaking";
import Dws from "./Page/dws";
import Trekking from "./Page/trekking";
import Np from "./Page/np";
import Gp from "./Page/gp";
import Faq from "./Page/faq";
import Booking from "./Page/booking";
import ScrollToTop from "./Components/Scrolltotop";
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/tour" element={<DefaultLayout><Tour /></DefaultLayout>} />
          <Route path="/tour/rockclimbing" element={<DefaultLayout><Rc /></DefaultLayout>} />
          <Route path="/tour/kayaking" element={<DefaultLayout><Kayaking /></DefaultLayout>} />
          <Route path="/tour/deep-water-solo" element={<DefaultLayout><Dws /></DefaultLayout>} />
          <Route path="/tour/trekking" element={<DefaultLayout><Trekking /></DefaultLayout>} />
          <Route path="/tour/national-park" element={<DefaultLayout><Np /></DefaultLayout>} />
          <Route path="/tour/glowing-plankton" element={<DefaultLayout><Gp /></DefaultLayout>} />
          <Route path="/faq" element={<DefaultLayout><Faq /></DefaultLayout>} />
          <Route path="/booking" element={<DefaultLayout><Booking /></DefaultLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
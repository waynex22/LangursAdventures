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
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/tour" element={<DefaultLayout><Tour /></DefaultLayout>} />
          <Route path="/tour/rockclimbing" element={<DefaultLayout><Rc /></DefaultLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
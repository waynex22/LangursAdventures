import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Page/home";
import DefaultLayout from "./Layouts/DefautlLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
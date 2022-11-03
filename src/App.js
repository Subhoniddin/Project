import "./App.css";
import UserTable from "./components/userTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/user" element={<UserTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

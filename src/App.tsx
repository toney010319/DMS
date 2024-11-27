// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import HomepageLayout from "./HomepageLayout";
import Discipline from "./pages/discipline/Discipline";
import Faqs from "./pages/faqs/Faqs";
import Nte from "./pages/nte/Nte";
import Policy from "./pages/policy/Policy";
import Ri from "./pages/ri/Ri";
import UserNta from "./pages/usernta/UserNta";

const App = () => {
  return (
    <Router>
      <HomepageLayout>
        <Routes>
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/nte" element={<Nte />} />
          <Route path="/ri" element={<Ri />} />
          <Route path="/usernta" element={<UserNta />} />
        </Routes>
      </HomepageLayout>
    </Router>
  );
};

export default App;

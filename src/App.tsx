// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomepageLayout from "./HomepageLayout";
import Discipline from "./pages/discipline/Discipline";
import Faqs from "./pages/faqs/Faqs";
import Nte from "./pages/nte/nte";

const App = () => {
  return (
    <Router>
      <HomepageLayout>
        <Routes>
          <Route path="/discipline" element={<Discipline />} />
          {/* <Route path="/policy" element={<Policy />} /> */}
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/nte" element={<Nte />} />
        </Routes>
      </HomepageLayout>
    </Router>
  );
};

export default App;

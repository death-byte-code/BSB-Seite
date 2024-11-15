import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VocationalTradeSchool from "./pages/VocationalTradeSchool";
import CommercialVocSchool from "./pages/CommercialVocSchool";
import SchoolToWorkTransition from "./pages/SchoolToWorkTransition";
import HomeEconSocialSciences from "./pages/HomeEconSocialSciences";
import VocationalColleges from "./pages/VocationalColleges";
import VocationalHighSchools from "./pages/VocationalHighSchools";
import { Box } from "@mui/material";
import BSB_Imprint from "./components/BSB_Imprint";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/abt/1"} element={<VocationalTradeSchool />} />
            <Route path={"/abt/2"} element={<CommercialVocSchool />} />
            <Route path={"/abt/3"} element={<SchoolToWorkTransition />} />
            <Route path={"/abt/4"} element={<HomeEconSocialSciences />} />
            <Route path={"/abt/5"} element={<VocationalColleges />} />
            <Route path={"/abt/6"} element={<VocationalHighSchools />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Box sx={{ bgcolor: "#bdcddd", p: 5 }}>
            <BSB_Imprint />
          </Box>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Banner from "./components/Banner";
import ComponentModal from "./components/ComponentModal";
import Footer from "./components/Footer";
import Section from "./components/layout/Section";
import SectionCertificate from "./components/layout/SectionCertificate";
import SectionContact from "./components/layout/SectionContact";
import SectionExperience from "./components/layout/SectionExperience";
import SectionProject from "./components/layout/SectionProject";
import SectionSkill from "./components/layout/SectionSkill";
import NavBar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <NavBar />
      <Section item={<Banner />} />
      <SectionSkill />
      <SectionExperience />
      <SectionProject setModalShow={setModalShow} />
      <SectionCertificate />
      <SectionContact />
      <Footer />
      <ComponentModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;

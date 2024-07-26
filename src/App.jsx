import "./App.css";
import Banner from "./components/Banner";
import ComponentModal from "./components/ComponentModal";
import Footer from "./components/Footer";
import MainLayout from "./components/layout/MainLayout";
import Section from "./components/layout/Section";
import SectionCertificate from "./components/layout/SectionCertificate";
import SectionContact from "./components/layout/SectionContact";
import SectionExperience from "./components/layout/SectionExperience";
import SectionProject from "./components/layout/SectionProject";
import SectionSkill from "./components/layout/SectionSkill";
import NavBar from "./components/Navbar";
import { useState } from "react";
import LoadingPage from "./pages/LoadingPage";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const [assets, setAssets] = useState("");
  const [shortcut, setShortcut] = useState([]);
  const handleDataFromChild = (data) => {
    const newShortcut = [...shortcut, data];
    setShortcut(newShortcut);
  };

  const handleClose = () => {
    setModalShow(false);
    setShortcut([]);
  };
  return (
    <>
      {/* <NavBar />
      <Section item={<Banner />} />
      <SectionSkill />
      <SectionExperience />
      <SectionProject setModalShow={setModalShow} />
      <SectionCertificate setModalShow={setModalShow} setAssets={setAssets} />
      <SectionContact />
      <Footer />
     */}
      {/* <MainLayout
        setModalShow={setModalShow}
        handleShortcut={handleDataFromChild}
      />
      <Footer data={shortcut} />
      {modalShow && (
        <ComponentModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onClose={() => handleClose()}
        />
      )} */}
      <LoadingPage />
    </>
  );
}

export default App;

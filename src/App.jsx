import "./App.css";
import ComponentModal from "./components/ComponentModal";
import Footer from "./components/Footer";
import MainLayout from "./components/layout/MainLayout";
import Wallpaper from "./assets/wallpaper.webp";
import { useState } from "react";
import LoadingPage from "./pages/LoadingPage";
function App() {
  const [modalShow, setModalShow] = useState([]);
  const [assets, setAssets] = useState("");
  const [shortcut, setShortcut] = useState([]);
  const [title, setTitle] = useState("");
  const [uniqueID, setUniqueID] = useState(1);

  const handleDataFromChild = (data) => {
    const newShortcut = [...shortcut, data];
    setShortcut(newShortcut);
  };
  const handleDataContent = (data) => {
    setTitle(data);
  };
  const handleOpenModal = (data) => {
    setUniqueID(uniqueID + 1);
    setModalShow([...modalShow, data]);
  };
  const handleClose = (uniqueId) => {
    const updatedModals = modalShow.filter(
      (modal) => modal.uniqueId !== uniqueId
    );
    const updatedShortcut = shortcut.filter(
      (item) => item.uniqueId !== uniqueId
    );
    setModalShow(updatedModals);
    setShortcut(updatedShortcut);
  };

  const handleHide = (uniqueId) => {
    const updatedModals = modalShow.filter(
      (modal) => modal.uniqueId !== uniqueId
    );

    setModalShow(updatedModals);
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
      <div
        style={{
          backgroundImage: `url(${Wallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <MainLayout
          setModalShow={handleOpenModal}
          handleShortcut={handleDataFromChild}
          handleContent={handleDataContent}
          uniqueID={uniqueID}
          setUniqueID={setUniqueID}
        />
        <Footer
          data={shortcut}
          setModalShow={handleOpenModal}
          active={modalShow}
          handleContent={handleDataContent}
          setUniqueId={setUniqueID}
        />
      </div>
      {modalShow.map((modal) => (
        <ComponentModal
          key={modal.id}
          show={true}
          onHide={() => handleHide(modal.uniqueId)}
          onClose={() => handleClose(modal.uniqueId)}
          content={modal.title}
          uniqueId={modal.id}
        />
      ))}
      {/* <LoadingPage /> */}
    </>
  );
}

export default App;

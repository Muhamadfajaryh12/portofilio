import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Section from "./components/layout/Section";
import SectionCertificate from "./components/layout/SectionCertificate";
import SectionContact from "./components/layout/SectionContact";
import SectionExperience from "./components/layout/SectionExperience";
import SectionProject from "./components/layout/SectionProject";
import SectionSkill from "./components/layout/SectionSkill";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Section item={<Banner />} />
      <SectionSkill />
      <SectionExperience />
      <SectionProject />
      <SectionCertificate />
      <SectionContact />
      <Footer />
    </>
  );
}

export default App;

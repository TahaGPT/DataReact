import Header from "./components/Header.jsx";
import MainComponent from "./components/MainComponent.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css"; // Assuming you have a styles.css file for global styles
export default function Web() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

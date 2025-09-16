// page
import Page from "./components/sections/Page";


// header
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Navigation from "./components/sections/Navigation";
import Reviews from "./components/sections/Reviews";


// Main
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import  Features  from './components/sections/Features';


import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import Footer from "./components/sections/Footer";
import Modal from "./components/sections/Modal/Modal";
import SignupModal from "./components/sections/Modal/SignupModal";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ModalContextProvider>
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
        <Reviews/>
      </Header>

      <Main>
        <Logos/>
        <Features/>
      </Main>

      <FAQs/>
      <Testimonials/>
      <Footer/>

      <Modal modal="sign-up">
        <SignupModal/>
      </Modal>
    </Page>
    </ModalContextProvider>
  )
}

export default App;

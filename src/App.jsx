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

function App() {
  return (
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
    </Page>
  )
}

export default App;

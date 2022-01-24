import React from "react";
import "./styles/App.scss";
import Headers from './components/Headers/Headers'
import Banner from './components/Banner/Banner'
import Cases from "./components/Cases/Cases";
import IntroOverlay from './components/IntroOverlay/IntroOverlay'

function App() {

  React.useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className='App'>
      <IntroOverlay />
      <Headers />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;

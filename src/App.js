import React from "react";
import "./styles/App.scss";
import Headers from './components/Headers/Headers'
import Banner from './components/Banner/Banner'

function App() {

  React.useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className='App'>
      <Headers />
      <Banner />
    </div>
  );
}

export default App;

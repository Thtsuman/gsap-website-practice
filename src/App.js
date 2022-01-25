import React from "react";
import "./styles/App.scss";
import Headers from './components/Headers/Headers'
import gsap from 'gsap'
import routes from './routes'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const debounce = (fn, ms) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

const App = () => {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    const vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);  
    // to clear out flash
    gsap.to("body", 0, { css: { visibility: 'visible' } });

    // to listen on change view port
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
    
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [dimensions.height, dimensions.innerHeight])

  return (
    <div>
      <Router>
        <Headers />
        <div className='App'>
          <Routes>
            {Object.values(routes).map(route => (
              <Route key={route.name} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </div>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./styles/App.scss";
import Headers from './components/Headers/Headers'
import gsap from 'gsap'
import pages from './pages/index'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const routes = [
  { path: '/', name: 'Home', component: pages.Home },
  { path: '/case-studies', name: 'Case Studies', component: pages.CaseStudies },
  { path: '/approach', name: 'Approach', component: pages.Approaches },
  { path: '/about-us', name: 'About Us', component: pages.About },
  { path: '/services', name: 'Services', component: pages.Services },
]

function App() {

  React.useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // to clear out flash
    gsap.to("body", 0, { css: { visibility: 'visible' } });
  }, [])

  return (
    <div className='App'>
      <Router>
          <Headers />
          <div>
            <Routes>
              {routes.map(route => (
                <Route key={route.name} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;

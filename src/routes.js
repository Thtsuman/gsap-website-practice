import pages from './pages/index';

const routes = {
    home: { path: '/', name: 'Home', component: pages.Home },
    caseStudies: { path: '/case-studies', name: 'Case Studies', component: pages.CaseStudies },
    approach: { path: '/approach', name: 'Approach', component: pages.Approaches },
    about: { path: '/about-us', name: 'About Us', component: pages.About },
    services: { path: '/services', name: 'Services', component: pages.Services },
}

export default routes;

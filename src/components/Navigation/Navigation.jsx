import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to={routes.caseStudies.path} end>
                                    Case studies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.approach.path} end>
                                    Approach
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.services.path} end>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.about.path} end>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" end>
                                        Get in touch with us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit" end>
                                        Get a free audit
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info label">Headquarters</li>
                                <li>Route du Jura 91</li>
                                <li>1700 Frigbourg</li>
                                <li>Switzerland</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info label">Phone</li>
                                <li>+41 0 43 433 34 34</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

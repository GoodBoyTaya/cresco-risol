import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="foot">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-start">
                    <span className="text-body-secondary">© 2025 Licuk Tbk.</span>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="#">
                            <svg className="bi" width="24" height="24">
                                {/*<use xlink:href="#twitter"></use>*/}
                            </svg>
                        </a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#">
                            <svg className="bi" width="24" height="24">
                                {/*<use xlink:href="#instagram"></use>*/}
                            </svg>
                        </a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#">
                            <svg className="bi" width="24" height="24">
                                {/*<use xlink:href="#facebook"></use>*/}
                            </svg>
                        </a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
export default Footer;
import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from "../components/footer/footer";
import DottedVerticalLine from "../components/verticalLine/DottedVerticalLine";
import image from "../photos/example-1.png";
import './style/pages.css'
import houseHeart from "../components/icons/Vector.png"

function AboutUs() {
    return (
        <body>
        <Navbar/>
        <div className="App">
            <div className="container-fluid background-div"></div>
            <div className="content">
                <p className="display-2 text-center" id="title"> Our Story</p>
                <p className="h3 text-center text-muted" id="sub-title">Cresco: Where Every Bite Tells a Delicious
                    Story.</p>
            </div>
            <div className="overlay"></div>

        </div>
        <div className="container justify-content-center">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col ms-auto mt-5 py-5">
                                <div className="mt-5 pt-5">

                                </div>
                                <p className="h1" id="title">Heading 1</p>
                                <p className="h6 text-muted">heading 6 muted</p>
                                <p className="h6">Lorem ipsum dolor sit amet consectetur.
                                    Aliquam in eget et ultrices etiam nec nisl fames diam.
                                    Id fermentum placerat tellus lectus velit sollicitudin.
                                    Dictumst diam pulvinar magna purus dictum nisl eu.
                                    Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem.
                                    Aliquam in eget et ultrices etiam nec nisl fames diam.
                                    Id fermentum placerat tellus lectus velit sollicitudin.
                                    Dictumst diam pulvinar magna purus dictum nisl eu.
                                    Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem.
                                    Aliquam in eget et ultrices etiam nec nisl fames diam.
                                    Id fermentum placerat tellus lectus velit sollicitudin.
                                    Dictumst diam pulvinar magna purus dictum nisl eu.
                                    Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem.</p>
                                <div className="col mt-5 pt-5">
                                    <div className="mt-5 pt-5">
                                        <br/><br/><br/><br/>
                                    </div>
                                    <div className="d-flex justify-content-end mt-5 pt-5">
                                        <img src={image} alt="example" className="img justify-content-center"
                                             id="img-ourstory"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <DottedVerticalLine/>
                </div>
                <div className="col">
                    <div className="row m-1">
                        <div className="container mt-5 pt-5">
                            <img src={image} alt="example" className="img" id="img-ourstory"/>
                        </div>
                    </div>
                    <div className="container mt-5 pt-5">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/> <br/>
                    </div>
                    <div className="row m-1">
                        <p className="h1" id="title">Heading 1</p>
                        <p className="h6 text-muted">heading 6 muted</p>
                        <p className="h6">Lorem ipsum dolor sit amet consectetur.
                            Aliquam in eget et ultrices etiam nec nisl fames diam.
                            Id fermentum placerat tellus lectus velit sollicitudin.
                            Dictumst diam pulvinar magna purus dictum nisl eu.
                            Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem.
                            Aliquam in eget et ultrices etiam nec nisl fames diam.
                            Id fermentum placerat tellus lectus velit sollicitudin.
                            Dictumst diam pulvinar magna purus dictum nisl eu.
                            Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem.
                            Aliquam in eget et ultrices etiam nec nisl fames diam.
                            Id fermentum placerat tellus lectus velit sollicitudin.
                            Dictumst diam pulvinar magna purus dictum nisl eu.
                            Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="container justify-content-center p-lg-5">
                <p className="display-5 text-center" id="title"> Our Vision</p>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src={houseHeart} alt=""/>
                            <div className="mt-4"></div>
                            <h4 className="card-title" id="title">Card title</h4>
                            {/*<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>*/}
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ac nisi et arcu fermentum vulputate.
                                Curabitur varius, tortor sit amet vulputate dictum, risus ligula tincidunt lorem, sit
                                amet laoreet odio tortor id elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src={houseHeart} alt=""/>
                            <div className="mt-4"></div>
                            <h4 className="card-title" id="title">Card title</h4>
                            {/*<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>*/}
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ac nisi et arcu fermentum vulputate.
                                Curabitur varius, tortor sit amet vulputate dictum, risus ligula tincidunt lorem, sit
                                amet laoreet odio tortor id elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src={houseHeart} alt=""/>
                            <div className="mt-4"></div>
                            <h4 className="card-title" id="title">Card title</h4>
                            {/*<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>*/}
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ac nisi et arcu fermentum vulputate.
                                Curabitur varius, tortor sit amet vulputate dictum, risus ligula tincidunt lorem, sit
                                amet laoreet odio tortor id elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container my-5">
                <h2 className="text-center mb-4">Meet the Team</h2>

                <div id="teamCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="card text-center">
                                        <img src={image}
                                             className="card-img-top rounded-circle mx-auto mt-3" alt="Team Member 1"/>
                                        <div className="card-body">
                                            <h5 className="card-title">John Doe</h5>
                                            <p className="card-text">CEO & Founder</p>
                                            <p className="card-text">John is responsible for the overall strategy and
                                                vision of the company.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="card text-center">
                                        <img src={image}
                                             className="card-img-top rounded-circle mx-auto mt-3" alt="Team Member 2"
                                             />
                                        <div className="card-body">
                                            <h5 className="card-title">Jane Smith</h5>
                                            <p className="card-text">CTO</p>
                                            <p className="card-text">Jane oversees all technical operations and product
                                                development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="card text-center">
                                        <img src={image}
                                             className="card-img-top rounded-circle mx-auto mt-3" alt="Team Member 3"
                                             />
                                        <div className="card-body">
                                            <h5 className="card-title">Mike Johnson</h5>
                                            <p className="card-text">Marketing Director</p>
                                            <p className="card-text">Mike leads the marketing team and drives brand
                                                awareness.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#teamCarousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#teamCarousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
        <Footer/>
        </body>
    );
}

export default AboutUs;
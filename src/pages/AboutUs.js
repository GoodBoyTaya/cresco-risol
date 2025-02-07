import React from 'react';
import Navbar from '../components/navbar/navbar';
import DottedVerticalLine from "../components/verticalLine/DottedVerticalLine";
import image from "../photos/example-1.png";
import './style/pages.css'

function AboutUs() {
    return (
        <body>
        <Navbar/>
        <div className="container justify-content-center">

            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container justify-content-center p-lg-5">
                <p className="display-5 text-center" id="title"> Our Story</p>
                <p className="h5 text-center text-muted" id="sub-title">Cresco: Where Every Bite Tells a Delicious
                    Story.</p>
            </div>
            {/*d-flex align-items-center justify-content-center p-5*/}
            <div className="row align-content-start pt-5 mt-5">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ms-auto mt-5">
                                <div className="container-fluid mt-5 pt-5">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
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
                                <div className="m-5 p-5">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>
                                <div className="row mt-5 pt-5">
                                    <img src={image} alt="example" className="img-fluid"/>
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
                            <img src={image} alt="example" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="container-fluid mt-5 pt-5">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/> <br/><br/><br/><br/> <br/><br/><br/><br/><br/>
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
        </body>
    );
}

export default AboutUs;
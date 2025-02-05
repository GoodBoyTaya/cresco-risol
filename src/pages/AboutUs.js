import React from 'react';
import Navbar from '../components/navbar/navbar';
import DottedVerticalLine from "../components/verticalLine/DottedVerticalLine";
import image from "../photos/example-1.png";

function AboutUs() {
    return (
        <div className="container-fluid">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container-fluid justify-content-center p-lg-5">
                <p className="display-5 text-center"> Our Story</p>
                <p className="h5 text-center text-muted">Cresco: Where Every Bite Tells a Delicious Story.</p>
            </div>
            {/*d-flex align-items-center justify-content-center p-5*/}
            <div className="row align-content-start">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ms-auto">
                                <p className="h6">Lorem ipsum dolor sit amet consectetur.
                                    Aliquam in eget et ultrices etiam nec nisl fames diam.
                                    Id fermentum placerat tellus lectus velit sollicitudin.
                                    Dictumst diam pulvinar magna purus dictum nisl eu.
                                    Ut massa posuere nibh nunc dis auctor mollis adipiscing lorem. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1">
                        <DottedVerticalLine/>
                </div>
                <div className="col-5">
                    <div className="me-auto">
                        <div className="container">
                            <div className="row">
                                <div className="col-5">
                                    <img src={image} alt="example" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
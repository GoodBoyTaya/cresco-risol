import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from "../components/footer/footer";
import image from "../photos/example-1.png";

function Home() {
  return (
    <div className="App">
      <Navbar />
        <div>
            <div className="container-fluid background-div-home"></div>
            <div className="content">
                <p className="display-5 text-center" id="home-title"> The Best Cireng & Risoles for Your Taste</p>
                <p className="h5 text-center text-muted" id="sub-title">Indulge in the authentic flavors of crispy cireng and soft, savory risoles. Perfect snacks to make every moment unforgettable!</p>
            </div>
            <div className="overlay"></div>
            <div className="row p-5 m-5">
                <div className="col px-5">
                    <div className="d-flex justify-content-center   ">
                        <img src={image} alt="example" className="img" id="img-home-story"/>
                    </div>
                </div>
                <div className="col pt-5 mt-5">
                    <p className="h1" id="title">Heading 1</p>
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

                    <a href="/our-story">
                        <button type="button" className="btn btn-outline-dark mt-4" id="our-story-button">Our Story</button>
                    </a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  );
}

export default Home;
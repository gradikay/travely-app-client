import React from "react";
import img2 from '../images/woman2.png';
import img1 from '../images/woman1.png';
import img4 from '../images/woman4.png';
import img5 from '../images/woman5.png';
import ImageCard from "../components/ImageCard";
import LandscapeImageCard from "../components/LandscapeImageCard";
import '../App.css';


export default function Home() {
  return (
    <section className="container">
      <div className="row mb-5"> 
        <div className="card-group col-12">
          <ImageCard image={img2} />
          <ImageCard image={img1} />
          <ImageCard image={img5} />

        </div>
        <div className="card-group col-12 mt-5">
          <ImageCard image={img2} />
          <ImageCard image={img4} />
          <ImageCard image={img1} />
          <ImageCard image={img5} />

        </div>

      </div>
      <div className="row mb-5"> 
        <div className="col-8 border border-end-0 p-5">
          <h1 className="brand" style={{fontSize:"4rem"}}> Travely </h1>
          <p style={{fontSize:"1.2rem"}}> 
            <strong> Each story in our ever growing library can be accessed through our membership program. Subscribe and receive instantaneous and unlimited access! </strong>
          </p>
        </div>
        <div className="col-4 border py-5  text-center align-content-center">
          <button type="button" className="btn border btn-outline-dark rounded-0 shadow-sm text-uppercase">
              <strong style={{fontSize:"1.5rem"}}> News Letter </strong>
          </button>
        </div>
      </div>

      <div className="row pt-3"> 
        <div className="col-3 p-0 align-content-center">
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img1} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img4} />
          <LandscapeImageCard image={img2} />

        </div>
        <div className="col-6 p-0">
          <ImageCard image={img5} />

        </div>
        <div className="col-3 align-content-center text-center">
          <LandscapeImageCard image="none" />
          <LandscapeImageCard image="none" />
          <LandscapeImageCard image="none" />
          <LandscapeImageCard image="none" />
          <LandscapeImageCard image="none" />
          <LandscapeImageCard image="none" />

        </div>

        <div className="row mb-5"> 
          <div className="col-8 border border-end-0 p-5">
            <p style={{fontSize:"1.2rem"}}> 
              <strong> Each story in our ever growing library can be accessed through our membership program. Subscribe and receive instantaneous and unlimited access! </strong>
            </p>
          </div>
          <div className="col-4 border py-5  text-center align-content-center">
            <button type="button" className="btn border btn-outline-dark rounded-0 shadow-sm text-uppercase">
                <strong style={{fontSize:"1.5rem"}}> News Letter </strong>
            </button>
          </div>
        </div>


      </div>
      <div className="row"> 
        <div className="col-8 align-content-center">
          <div className="card-group">
            <ImageCard image={img2} />
            <ImageCard image={img2} />

          </div>
        </div>
        <div className="col-4 p-0">
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />

        </div>
      </div>
      <div className="row my-5"> 
        <div className="col-8 border border-end-0 p-5">
          <p style={{fontSize:"1.2rem"}}> 
            <strong> Each story in our ever growing library can be accessed through our membership program. Subscribe and receive instantaneous and unlimited access! </strong>
          </p>
        </div>
        <div className="col-4 border py-5  text-center align-content-center">
          <button type="button" className="btn border btn-outline-dark rounded-0 shadow-sm text-uppercase">
              <strong style={{fontSize:"1.5rem"}}> News Letter </strong>
          </button>
        </div>
      </div>

      <div className="row"> 
        <div className="col-6 align-content-center">
          <div className="card-group">
            <ImageCard image={img2} />
          </div>
        </div>
        <div className="col-3 p-0">
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />

        </div>
        <div className="col-3 p-0">
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />
          <LandscapeImageCard image={img2} />

        </div>
      </div>
    </section>
  );
}

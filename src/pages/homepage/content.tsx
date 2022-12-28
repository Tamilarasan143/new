import React from "react";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/images/homepage/Spa.jpeg";
import img2 from "../../assets/images/homepage/Party.jpeg";
import img3 from "../../assets/images/homepage/Bar.jpeg";
import img4 from "../../assets/images/homepage/Spa.jpeg";
import img5 from "../../assets/images/homepage/Party.jpeg";
import img6 from "../../assets/images/homepage/Bar.jpeg";
import { Link } from "react-router-dom";

export default function HomeContent() {
  return (
    <div>
      <div className="container marketing">
        <div className="row mt-5">
          <div className="col-lg-4">
            <Image
              className="rounded-circle"
              width="140"
              height="140"
              src={img1}
            ></Image>
            <h2>Spa</h2>
            <p>
              Our first group revolves around the idea of relaxation, with “It"s
              time to relax!”.
            </p>
            <p>
              <Link className="btn btn-secondary" to={"details/spa"}>
                View details &raquo;
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <Image
              className="rounded-circle"
              width="140"
              height="140"
              src={img2}
            ></Image>

            <h2>Party Hall</h2>
            <p>
              A Party hall, function hall, or reception hall, is a special
              purpose room, or a building, used for hosting large social and
              business events.
            </p>
            <p>
              <Link className="btn btn-secondary" to={"details/party"}>
                View details &raquo;
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <Image
              className="rounded-circle"
              width="140"
              height="140"
              src={img3}
            ></Image>

            <h2>Bar and Restaurant</h2>
            <p>
              The emotions you want to inspire in your customers. “Happy” is not
              enough. Think about the most popular restaurants.
            </p>
            <p>
              <Link className="btn btn-secondary" to={"details/bar"}>
                View details &raquo;
              </Link>
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Turn off your mind, relax, and float downstream{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <Image
              className="featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={img4}
            ></Image>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              We offer premium yet affordable services under one roof. You need
              not be worried about decorations, music, lighting and food if we
              are with them. We are highly committed to make every event they
              organize to be a memorable one.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <Image
              className="featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={img5}
            ></Image>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <Image
              className="featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={img6}
            ></Image>
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

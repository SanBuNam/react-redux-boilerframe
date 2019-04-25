import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>The Amateur Chef's Play Ground</h1>
    <p>Learn to eat good and healty food.</p>
    <p>
      Cooking is one of the most useful and critical skills that you can do for
      yourself.
    </p>
    <p>
      Do you understand the art of eating? Hangout here to learn to understand
      the cusinary as a art.
    </p>
    <p>
      Start treat yourself with delicious and healty food and start seducing
      other with your magical cooking skils.
    </p>
    <p>Become Amateur Chef's After Today.</p>
    <p>
      Post it on your social network and become the must have person for all
      parties.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      react-router-dom : Link is used here
    </Link>
  </div>
);

export default HomePage;

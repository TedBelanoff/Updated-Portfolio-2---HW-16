import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio (){
  return (
    <div> 
    <h1 class="card-header">Portfolio</h1>
    <h3></h3>
    {/* Object Container */}
    <Container>
    {/* Links to Projects */}
    <Row>
      <Col sm={4} md={6}>
          <a href="https://tedbelanoff.github.io/Weather-Dashboard---HW6/" class="thumbnail">
          <img src="weather.png" alt="Weather Dashboard"/>
          </a>
          <h2>Weather Dashboard:</h2>
          <h5><a href="https://tedbelanoff.github.io/Weather-Dashboard---HW6/">Project</a></h5>
          <h5><a href="https://github.com/TedBelanoff/Weather-Dashboard---HW6">Repo</a></h5>
      </Col>
      <Col sm={4} md={6}>
          <a href="https://tedbelanoff.github.io/HW-5--Day-Planner/" class="thumbnail">
          <img src="scheduler.png" alt="Daily Scheduler"/>
          </a>
          <h2>Daily Scheduler:</h2>
          <h5><a href="https://tedbelanoff.github.io/HW-5--Day-Planner/">Project</a></h5>
          <h5><a href="https://github.com/TedBelanoff/HW-5--Day-Planner">Repo</a></h5>
      </Col>
      </Row>
      <Row>
      <Col sm={4} md={6}>
      <a href="https://bombichino.github.io/project-01/" class="thumbnail">
      <img src="stanbase.png" alt="StanBase"/>
      </a>
      <h2>StanBase:</h2>
      <h5><a href="https://bombichino.github.io/project-01/">Project</a></h5>
      <h5><a href="https://github.com/bombichino/project-01">Repo</a></h5>
      </Col>
      <Col sm={4} md={6}>
          <a href="https://whispering-garden-63170.herokuapp.com/" class="thumbnail">
          <img src="NoteTaker.png" alt="Note Taker"/>
          </a>
          <h2>Note Taker</h2>
          <h5><a href="https://whispering-garden-63170.herokuapp.com/">Project</a></h5>
          <h5><a href="https://github.com/TedBelanoff/HW11--NoteTaker">Repo</a></h5>
          </Col>
        </Row>
          <Row>
      <Col sm={4} md={6}>
          <a href="https://stormy-peak-37685.herokuapp.com/" class="thumbnail">
          <img src="Eat-da-Burger (Node Express).png" alt="Eat-Da-Burger"/>
          </a>
          <h2>Eat-Da-Burger</h2>
          <h5><a href="https://stormy-peak-37685.herokuapp.com/">Project</a></h5>
          <h5><a href="https://github.com/TedBelanoff/HW13-Node-Express-Handlebars">Repo</a></h5>
          </Col>
      <Col sm={4} md={6}>
          <a href="https://stormy-peak-37685.herokuapp.com/" class="thumbnail">
          <img src="Quarantini-Gifting.PNG" alt="Quarantini-Gifting"/>
          </a>
          <h2>Quarantini-Gifting</h2>
          <h5><a href="https://quarantini-gifting.herokuapp.com/">Project</a></h5>
          <h5><a href="https://github.com/TedBelanoff/Quarantini-Gifting">Repo</a></h5>
          </Col>
          </Row>
  </Container>
</div>
)}

export default Portfolio;

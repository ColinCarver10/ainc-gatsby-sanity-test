import * as React from "react";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import { Container, Row, Col } from "react-bootstrap";


const Startups = () => {
  return (
    <section id="startups">
      <Title className="pt-5 mb-3 text-uppercase text-center">Startups</Title>
      <Subtitle className="mb-5 text-uppercase text-center">Join Our Program</Subtitle>
      <Container>
        <Row>
          <Col>
            <div className="h-100 my-5">
            <a href='/idea'>
                <img className = 'd-block mx-auto w-50 m-5' src='../../../assets/svg/lightbulb-circle.svg' alt="Lightbulb Icon" />
              </a>
              <Subtitle className="text-center brand fw-bold">Pitch Your Idea</Subtitle>
              <p className="text-center">We offer outlets for your idea to be heard. Share your idea with us or learn more about events that promote entrepreneurship.</p>
            </div>
            
          </Col>
          <Col>
            <div className="h-100 my-5">
              <a href='/fellowship'>
                <img className = 'd-block mx-auto w-50 m-5' src='../../../assets/svg/rocket-circle.svg' alt="Rocket" />
              </a>
              <Subtitle className="text-center brand fw-bold">Accelerate Your Startup</Subtitle>
              <p className="text-center">Our Fellowship Program is mentor-driven, designed to accelerate your high-tech startup. Learn about the Fellowship Program as well as our other programs designed to foster your startup's growth.</p>
            </div>
          </Col>
          <Col>
            <div className="h-100 my-5">
              <a href='https://www.entrepreneurhof.com/'>
                <img className = 'd-block mx-auto w-50 m-5' src='../../../assets/svg/book-circle.svg' alt="Book" />
              </a>
              <Subtitle className="text-center brand fw-bold">Showcasing Kentucky Entrepreneurs</Subtitle>
              <p className="text-center">Discover the impact that Entrepreneurship has made in the Commonwealth.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Startups;
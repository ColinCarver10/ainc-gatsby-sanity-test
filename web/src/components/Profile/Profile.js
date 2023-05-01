import React, { useState } from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card, Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";
import * as styles from './Profile.module.scss'

import { btnGroupFullWidth } from "./Profile.module.scss";


const Profile = ({ variant, name, image, linkedin, github, website, position, occupation, fact, rule, song, favoritePerson }) => {

  const [showText, setShowText] = useState(false);

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
  };

  {/* /mentors cards */}
  const renderVariantOne = () => (
    <React.Fragment>
      <Card className='rounded-0'>
        <div>
          <GatsbyImage image={image} className="card-img-top" alt={name} />
        </div>
        <Card.Body>
          {position && <Ribbon position={position}></Ribbon>}
          <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
          {occupation && <p className='text-center text--micro mb-2'>{occupation}</p>}
          <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
            {website && <Button onMouseOver={MouseOver} onMouseOut={MouseOut} href={website} variant="outline-dark">
              Portfolio
            </Button>}
            {linkedin && <Button href={linkedin} variant="outline-dark">
              LinkedIn
            </Button>}
            {github && <Button href={github} variant="outline-dark">
              GitHub
            </Button>}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </React.Fragment>
  );

  {/* Team alpha cards */}
  const renderVariantTwo = () => (

    <React.Fragment>
      <Card className={`rounded-0 ${styles.profile}`}>
        <figure className={styles.figure}>
          <GatsbyImage
            image={image}
            className={`card-img-top ${styles.profileImage}`}
            alt={name}
          />

          <Card.Body>
            {position && <Ribbon position={position}></Ribbon>}
            <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
            {occupation && <p className='text-center text--micro mb-2'>{occupation}</p>}
            <div className='d-flex justify-content-center'>
              <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
                {fact && <Button className={styles.factButton} variant="outline-dark">
                  Fun Fact
                </Button>}
                <figcaption className={`row ${styles.figcaption}`}>
                  <p className={styles.lgxVerticalFact}>{fact}</p>
                </figcaption>
                {rule && <Button className={styles.ruleButton} variant="outline-dark">
                  Favorite Rule
                </Button>}
                <figcaption className={styles.figcaptionRule}>
                  <p className={styles.lgxVerticalRule}>{rule}</p>
                </figcaption>
                {song && <Button className={styles.songButton} variant="outline-dark">
                  Favorite Song
                </Button>}
                <figcaption className={styles.figcaptionSong}>
                  <p className={styles.lgxVerticalSong}>{song}</p>
                </figcaption>
                {favoritePerson && <Button className={` rounded-end ${styles.personButton}`} variant="outline-dark">
                  Favorite Person</Button>}
                <figcaption className={styles.figcaptionPerson}>
                  <p className={styles.lgxVerticalPerson}>{favoritePerson}</p>
                </figcaption>
              </ButtonGroup>
            </div>
            <div className={styles.test}></div>


          </Card.Body>
        </figure>
      </Card>
    </React.Fragment>
  );

  const renderContent = () => {
    switch (variant) {
      case "one": // profile card regular
        return renderVariantOne();
      case "two": // team alpha card
        return renderVariantTwo();
      default: //(default) profile card regular
        return renderVariantOne();
    }
  };

  return (
    <div>
      {renderContent()}
    </div>

  );
};

export default Profile;

import * as React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import BrandButton from '../UI/BrandButton/BrandButton'
import { FaEnvelope, FaPhone, FaClock, FaTwitter, FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import * as styles from './IndiaFooter.module.scss'

const IndiaFooter = () => {
    return (
        <section className={styles.footerBackground}>
        <Container>
            <Row>
                <Col xs md={7} lg={6}>
                    <Row className='justify-content-center'>
                    <Link className={styles.aincLogoGap} href='/india'>
                        <StaticImage src='../../images/ainc-logo-text-triangle-layer-red.png' alt='Awesome Inc Logo' />
                    </Link>
                    </Row>
                    <Row className={styles.firstColRow}>
                        <ul className={styles.infoList}>
                            <li className={styles.mainLine}>
                                Bhopal, Madhya Pradesh, India
                            </li>
                        
                        <li>
                            <FaEnvelope className={styles.redIcon}/>
                            <Link to='mailto:info_india@awesomeinc.org'>info_india@awesomeinc.org</Link>
                        </li>
                        </ul>
                    </Row>
                </Col>

                <Col xs={6} sm={6} md={2}>
                    <h2 className={styles.infoListTitle}>quicklinks</h2>
                    <ul className={styles.infoList}>
                        <li><Link to='/india/about'>About Us</Link></li>
                        <li><Link to='/#core-values'>Core Values</Link></li>
                    </ul>
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <h2 className={styles.infoListTitle}>courses</h2>
                    <ul className={styles.infoList}>
                        <li><Link href='https://docs.google.com/forms/d/e/1FAIpQLSeXn05oQn5hM3egYp9czGxLd2kPZhcdvUhK0jDrwIc_4Bx5aw/viewform'>
                            Week of Code</Link></li>
                        <li><Link to=''>Coding Club <small>(Coming Soon)</small></Link></li>
                    </ul>
                </Col>
            </Row>
            <Row className={styles.bottomRow}>
                <Col>
                <ul className={styles.copyrightInlineList}>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/privacy'>Privacy Policy</Link></li>
                    <li><Link to='/terms'>Terms of Service</Link></li>
                    </ul>
                    </Col>
                    <Col>
                    <ul class={styles.socialsInlineList}>
                        <li><Link to='https://www.linkedin.com/company/awesome-inc-india/'><FaLinkedinIn/></Link></li>
                    </ul>
                    </Col>
            </Row>
        </Container>
        </section>
    )
}

export default IndiaFooter
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import * as styles from './india.module.scss'
import IndiaLayout from '../../components/IndiaLayout/IndiaLayout'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import Card from 'react-bootstrap/Card'

const IndiaPage = () => {
    return (
        <IndiaLayout>
        <Container fluid className={styles.bhopal}>
        <Col xs={12} sm={12} md={{ span: 7 }} lg={{ span: 6, offset: 1 }} xl={{ span: 3, offset: 1 }}>
            <Title className={`mb-4 pt-5 text-start text-uppercase text-white`}>bhopal</Title>
            <Subtitle className={`mb-5 text-start text-white`}>In Person Coding Courses for those 9 - 16</Subtitle>
            <Subtitle className={`mt-1 text-start fw-bold`}>Starting Early 2023</Subtitle>            
            <p className={`text-white mt-2 mb-1`}>Wednesdays: 4-7 PM</p>
            <p className={`text-white mb-5`}>Saturdays: 3-7 PM</p>
            </Col>
            <Row>
            <Col xs={12} sm={12} md={{ span: 7 }} lg={{ span: 6, offset: 1 }} xl={{ span: 5, offset: 1 }}>
            <p className={`text-white mb-4 mt-3`}>Our coding school offers students an opportunity to learn how to code from professional 
            software developers, in person, and to do it with like-minded peers. We inspire kids by introducing them to the awesome
             power of coding! Our students experience the joy of building their own games and apps in an engaging and safe space, 
             whether in-person or online. And you'll love it too, knowing your kids are developing a practical skill, building a 
             creative portfolio, and making great friends along the way.</p>
             <BrandButton className={` ${styles.joinButton}`}>join club now</BrandButton>
             </Col>
             </Row>
             <Col sm={6} md={{ span: 5 }} lg={{ span: 4, offset: 1 }} xl={{ span: 3, offset: 3 }}>
             {/* program guide will go here */}
             </Col>
        </Container>
        <Container>
            <Row>
                <Col sm={{ span: 4 }} md={{ offset: 0, span: 4 }} lg={{ span: 5, offset: 1 }} xl={{ offset: 1, span: 4 }} >
                    <StaticImage className={styles.phone} src='../../../images/learn/header-phone.png' alt='phone'></StaticImage>
                </Col>
                <Col sm={12} md={8} lg={6} xl={6}>
                    <Title className='mt-4 text-uppercase text-start'>why should my child learn to code?</Title>
                    <p className='text-start'>Technology is all around us. Whether you are an app developer or an English professor, 
                    you will utilize technology in your daily work. Awesome Inc exists to take your child's screen time and turn it 
                    into career-skill time. Our courses increase communication, public speaking, organization, and social skills in a 
                    fun learning environment.</p>
                </Col>
            </Row>
            <Row>
                <Title className='mt-5 mb-4 text-uppercase text-center'>two coding programs</Title>
                <Col sm={{ offset: 2, span: 8 }} md={{ offset: 1, span: 4 }} lg={{ offset: 1, span: 4 }} xl={{ span: 4 }}>
                <Card bg='light' className={`my-3 p-0 ${styles.cards}`}>
                    <Card.Header className={`p-3 fw-bold text-center ${styles.cardHeaders}`}>
                     Coding Club - Coming Early 2023   
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className='my-4'>
                    This is for any child at any level who wants to keep developing their coding ability. 
                    They will receive in person instruction from expert developers as your child develops websites, 
                    apps and video games. Each student will work on their own individual projects so the program is 
                    specialized to the skill level and interest of your child.
                    </Card.Text>
                    <ul>
                    <li>Cost: <strike>₹4000/mo</strike> ₹2000/mo</li>
                    <li>Immersive Environment</li>
                    <li>Builds Confidence</li>
                    </ul>
                   <a className='d-flex justify-content-center' href='https://docs.google.com/forms/d/e/1FAIpQLSeZR3oNFEjkpWVP4Bdmqj1eJFee5O466K7_UAFowuRVPKJzvg/viewform?vc=0&c=0&w=1&flr=0'><BrandButton className=''>apply now</BrandButton></a> 
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={{ span: 8, offset: 2 }} md={4} lg={4} xl={4}>
                <Card bg='light' className={`my-3 p-0 ${styles.cards}`}>
                    <Card.Header className={`fw-bold text-center p-3 ${styles.cardHeaders}`}>
                     Week of Code - Spring 2023 
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className='my-4'>
                    This is an intro course for any child 9-17 that may be interested in learning to code. 
                    They will learn the basics and actually develop a website, an app and a video game.” -schedule: monday- learn to 
                    develop a website, tuesday- learn to develop an app, wednesday- develop a game, thursday- finish projects and present 
                    to parents.
                    </Card.Text>
                    <ul>
                    <li>Cost: ₹5000/mo</li>
                    </ul>
                    <a className='d-flex justify-content-center' href='https://docs.google.com/forms/d/e/1FAIpQLSeXn05oQn5hM3egYp9czGxLd2kPZhcdvUhK0jDrwIc_4Bx5aw/viewform'><BrandButton >join waitlist</BrandButton></a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            <Container className={styles.engaged}>
            <Row>
                <Col sm={{ offset: 2, span: 8 }} md={{ offset: 1, span: 4 }} lg={{ span: 5, offset: 1 }} xl={{ span: 5, offset: 1 }}>
                <StaticImage className='mt-3 mb-5' src='../../images/india/youth-computer-india.png' alt='laptop'></StaticImage>
                </Col>
                <Col sm={{ offset: 2, span: 8 }} md={{ span: 5 }} lg={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 1 }}>
                <Title className={`text-uppercase mb-4 mt-3`}>keep your kids engaged</Title>
                <p className={` mb-3`}>Your kids will have the support of our instructors - 
                professional coders just a step, or click away!</p>
                <a href='https://www.awesomeinc.org/india/about'><BrandButton>about us</BrandButton></a> 
                </Col>
            </Row>
            </Container>
            <Container className={styles.questions}>
                <Row>
                    <Col>
                <Title className={`text-white text-center`}>Still have questions?</Title>
                <a className='d-flex justify-content-center' href='https://www.awesomeinc.org/india/faq'><BrandButton className={styles.faqButton}>see our faqs</BrandButton></a>
                </Col>
                </Row>
            </Container>
        </IndiaLayout>
    )
}

export default IndiaPage;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Layout from '../../../components/Layout/Layout';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import * as styles from "../interview/interview.module.scss"
import { FaSquare } from 'react-icons/fa';
import {
    Routes,
    Route,
    useSearchParams,
    BrowserRouter
  } from "react-router-dom"

  

const InterviewPage = () => {
    const [isTimerComplete, setIsTimerComplete] = useState(false);
    const [queryParameters] = useSearchParams()

   

    const handleTimerComplete = () => {
      setIsTimerComplete(true);

    };
    return (
      <Layout>
        <Container>
            <Col lg={{span:12, offset: 0}}  className='' >
                <Row>
                    <h1 className=" my-1">Bootcamp Interview Schedule</h1>
                </Row>
                <Row>
                    <p  className='ms-3' style={{fontSize: "1.5 rem"}}>  Thank you for scheduling a call with us {queryParameters.get("assigned_to")}. Please check your inbox and confirm that you can make the scheduled time. </p>
                </Row>
                <Row className='justify-content-center'> 
                    {!isTimerComplete ? (
                        <CountdownCircleTimer 
                            isPlaying
                            duration={290} // 4 minutes 50 seconds 
                            onComplete={handleTimerComplete}
                            colors={[['#ff0000']]}
                            strokeLinecap = {'square'}
                            strokeWidth= {'5'}
                            size={60}
                            >
                            {({ remainingTime}) => (
                                <div>
                                <h1 style={{ fontSize: 16, marginLeft: "25px", marginTop: "5px", fontWeight: "bold"}}>{`${Math.floor(remainingTime / 60).toString().padStart(2, '0')}:${(remainingTime % 60).toString().padStart(2, '0')}`}</h1>
                                </div>
                            )}
                        </CountdownCircleTimer>
                    ) : (
                        null
                    )}


        </Row>
                <Row>
                    <ul className='ms-5'>
                        <li>
                            <p>
                                <a  className = {styles.link} style={{fontSize: "1.5 rem"}} href="https://forms.zohopublic.com/virtualoffice9155/form/BootcampApplicationBasicChallengesF20/formperma/eyRW9Evft9ta2yt2rE4dpWtevNxIo_W804G-905H9d4">
                                    Before your scheduled Call, please complete these basic challenges.
                                </a>
                            </p>
                           
                        </li>
                        <li>
                            <p>
                            <a  className = {styles.link} style={{fontSize: "1.5 rem"}} href="https://www.awesomeinc.org/blog/what-we-look-for-bootcamp-student">
                               Want to know what we'll talk about on our call? Check out our blog here!
                            </a>
                            </p>
                        </li>
                    </ul>
                </Row>
                <Row>
                    <p className='ms-4'>
                        Didn't receive an email? You can call or text 859.960.4600 directly to confirm your interview.
                    </p>
                </Row>
               
            </Col>
          
        </Container>
      </Layout>
  
    )
  }

  export default InterviewPage;
  
  
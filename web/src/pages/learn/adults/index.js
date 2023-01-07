import * as React from 'react'
// import ReactTable from "react-table"
import Layout from '../../../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby";
import Title from '../../../components/UI/Title/Title'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import "../../../styles/main.scss"
import * as styles from './adults.module.scss'

const AdultsPage = ({ data }) => {


    const [timeFilter, setTimeFilter] = React.useState('');
    const [selectedFTClass, setSelectedFTClass] = React.useState('');
    const [selectedPTClass, setSelectedPTClass] = React.useState('');
    const [selectedAllClass, setSelectedAllClass] = React.useState('');

    const handleRadioChangeTime = (e) => {
        const value = e.target.value;
        setTimeFilter(value);
        setSelectedFTClass(timeFilter === 'full-time' ? '' : styles.selected);
        setSelectedPTClass(timeFilter === 'part-time' ? '' : styles.selected);
        setSelectedAllClass(timeFilter === 'part-time' && timeFilter === 'full-time' ? '' : styles.selected);
      };
    

    console.log(timeFilter)
    console.log(selectedFTClass)

    // console.log(option1)
    const TimeCourses = data.allSanityCourses.edges.filter((course) => course.node.timeRequirement === timeFilter)
    // const partialTimeCourses = TimeCourses.filter((course) => course.node.timeRequirement === "part-time" && course.node.courseType === "coding")
    
    const tableColumns = ["COURSE", "FORMAT", "TOPICS", "TECHNOLOGIES", "SCHEDULE", "DESIGNED FOR", "LEARN MORE"]

    return (
        <Layout>
            <Container className=''>
                <Row className='pt-5 mt-5'>

                    <Col col="5" className={`my-5 all-padding`}>
                        <Row className={`justify-content-center`}>
                            <Col md="3"/>
                            <Col md="9">
                                <Title className="">ADULT</Title>
                                <h5 className=''><i>Coding Courses</i></h5>
                            </Col>
                            <Col md="6" className=''>
                                <h6><i>Full and Part-Time Courses for Career Switchers, Professionals, and Hobbyists</i></h6>
                            </Col>
                        </Row>
                        
                    </Col>
                    
                    <Col col="6">
                        <StaticImage quality="100" className="img-responsive" src='../../../images/mac-code.png' alt='computer with code' height={"400"} width={"400"}/>

                    </Col>
                </Row>
                {/* <Container className='mx-5'> */}
                <Row className='mt-5'>
                    <Col xl="1"/>
                    <Col className='text-center mb-5'>
                        <p>Learning to code is difficult, but so is learning to salsa dance or learning to play the guitar. Consistent practice, week after week, is how you become a great programmer.</p>
                    </Col>
                    <Col xl="1"/>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <a href="https://youtu.be/mL5h5DqhXjM">
                            <StaticImage src='../../../images/macbook-youtube-video.png' alt='macbook youtube' quality="100" />
                        </a>
                    </Col>
                    <Col xs="12" md="6" className='d-flex align-items-end mb-5'>
                        <h6><i>"Starbucks to Software Developer in 12 Weeks."
                        <br/>Web Developer Bootcamp Student Spotlight: David V.</i></h6>
                    </Col>
                </Row>
                {/* </Container> */}
                <Row>
                    <Col>
                        <h5 className="my-5">Options: </h5>
                        <label className={selectedAllClass}>
                            <input
                            type="radio"
                            name="all"
                            value="all"
                            checked={timeFilter === 'part-time' || timeFilter === 'full-time'}
                            onChange={handleRadioChangeTime}
                            />
                            All
                        </label>
                        <br/>
                        <label className={selectedFTClass}>
                            <input
                            type="radio"
                            name="full-time"
                            value="full-time"
                            checked={timeFilter === 'full-time'}
                            onChange={handleRadioChangeTime}
                            
                            />
                            Full Time
                        </label>
                        <br/>
                        <label className={selectedPTClass}>
                            <input
                            type="radio"
                            name="part-time"
                            value="part-time"
                            checked={timeFilter === 'part-time'}
                            onChange={handleRadioChangeTime}
                            />
                            Part Time
                        </label>
                    </Col>
                </Row>
                <Row className='mt-5 white-space-auto overflow-auto'>
                    <Col>
                        <table>
                            <tr>
                                {tableColumns.map((column) => (
                                    <th className={styles.titleCell}><h5>{column}</h5></th>
                                    
                                ))}
                                
                            </tr>
                            {TimeCourses.map((course) => (
                                <tr>
                                    <td className={styles.cell}>
                                        <a href={course.node.courseLink}>
                                            <GatsbyImage alt={course.node.courseTitle} image={course.node.picture.asset.gatsbyImageData} height="100" width="100"/>
                                        </a>
                                        <br/>
                                        {course.node.courseSeason}
                                    </td>
                                    <td className={styles.cell}><h6>{course.node.timeRequirement}<br/>{course.node.format}</h6></td>                                                                                                                                                                                
                                    <td className={styles.cell}><h6>{course.node.topics}</h6></td>
                                    <td className={styles.cell}><h6>{course.node.technologies}</h6></td>
                                    <td className={styles.cell}><h6>{course.node.startDate} - {course.node.endDate}
                                    <br/>{course.node.schedule}</h6></td>
                                    <td className={styles.cell}><h6>{course.node.designedFor ? course.node.designedFor : ""}</h6></td>
                                    <td className={`${styles.cell}`}><BrandButton className="p-1">Application Closed</BrandButton></td>
                                </tr>
                            ))}
                            
                        </table>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
query {
    allSanityCourses {
      edges {
        node {
          courseTitle
          courseType
          courseSeason
          timeRequirement
          description
          designedFor
          startDate(formatString: "MMMM d, YYYY")
          endDate(formatString: "MMMM d, YYYY")
          picture {
            asset {
              gatsbyImageData(layout: CONSTRAINED, width: 65, height: 65, aspectRatio: 0.5)
            }
          }
          topics
          technologies
          schedule
          courseLink
          ageGroup
          format
        }
      }
    }
  }
  
`;

export default AdultsPage;
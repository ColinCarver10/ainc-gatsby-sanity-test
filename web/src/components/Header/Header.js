import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { AiFillCaretDown } from "react-icons/ai";
import { ImPlus } from "react-icons/im";
import { useLocation } from "@reach/router";
import "./header.scss"
import "../../styles/main.scss"
import { 
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from 'react-bootstrap'

import { navbarBrand } from './Header.module.scss'
import BrandButton from '../UI/BrandButton/BrandButton';


const Header = () => {

  const [active, setActive] = React.useState("")
  const [open, setOpen] = React.useState(false)

  function handleClick(activeValue) {
    
    if(active === activeValue){
      setOpen(!open)
      return
    }
    if(open === false) {
      setOpen(!open)
    }
    // setOpen(!open)
    setActive(activeValue)
    // setOpen(!open)
  }


  React.useEffect(() => {
    const navbar_selected = (window.localStorage.getItem('navbar_selected') !== null);
    const open_selected = (window.localStorage.getItem('open') !== null);
    if (navbar_selected) {
      setActive(JSON.parse(navbar_selected !== null ? navbar_selected : ''));
    }
    if (open_selected) {
      setOpen(JSON.parse(open_selected !== null ? open_selected : false)); 
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('navbar_selected', JSON.stringify(active));
    window.localStorage.setItem('open', JSON.stringify(open));
  }, [active, open]);
  console.log(active, open)

  return (
    <Navbar className="sticky-top navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className={navbarBrand}>
          <Link to="/">
            <StaticImage
              src="../../images/ainc-logo-horizontal-white-text.png"
              width={200}
              className="img-responsive d-inline-block align-top"
              alt="Awesome Inc Logo"
              loading="eager"
            />
          </Link>
        </Navbar.Brand>
        {useLocation().pathname === '/bootcamp/' && ( 
          <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 ps-2 pb-3'>
            <a href="/bootcamp/apply"><BrandButton>Apply Now</BrandButton></a>
          </Row>

        )}
        <Navbar.Toggle aria-controls="learn-to-code-navbar" className='text-white shadow-none border-white'/>
        <Navbar.Collapse id="learn-to-code-navbar">
          <Nav>
            <Col className="desktop">
              <Nav.Link href="/learn" className="text--white">Learn To Code  <AiFillCaretDown size={10}/></Nav.Link>
              <div className='hover-options'>
                <Link to="/learn/youth" className='pt-0'>Youth Courses</Link>
                <Link to="/learn/adults">Adult Courses</Link>
                <Link to="/learn">Kids Camps</Link>
                <Link to="/bootcamp">Bootcamp</Link>
              </div>
            </Col>
            
              
            <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 ps-2'>
              <Navbar className="sticky-top sub-navbar" variant="dark" expand="lg" expanded={active === "Learn To Code" && open === true ? true : false}>
                <Container className='border border-top-0 border-start-0 border-end-0 border-bottom-2 pb-1'>
                  <Navbar.Brand>
                    <Link to="/learn">
                      Learn To Code
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => handleClick("Learn To Code")} className={`${active === "Learn To Code" && open === true ? "" : "collapsed"} bg-none border-2 border-white text-white shadow-none`}>{active === "Learn To Code" && open === true ? <ImPlus size={20} style={{transform: 'rotate(45deg)'}}/> : <ImPlus size={20}/>}</Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav" className='border-top-0'>
                    <Nav>
                      <Row className="d-flex flex-column flex-lg-row flex-nowrap align-items-center justify-content-around">
                        <Col xs={{span: 10}} className={`d-flex flex-column py-2 border-0`}>

                          <a href="/learn/youth">Youth Courses</a>
                          <a href="/learn/adults">Adult Courses</a>
                          <a href="/learn">Kids Camps</a>
                          <a href="/bootcamp">Bootcamp</a>
                          <a href="/salesforce">Salesforce Career Accelerator</a>
                        </Col>
                      </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

            <Col className="desktop">
              <Nav.Link href="/fellowship" className="text--white">Startups <AiFillCaretDown size={10}/></Nav.Link>
              <div className={`hover-options`}>
                <Link to="/idea" className='pt-0'>I Have an Idea</Link>
                <Link to="/fellowship">Startup Accelerator</Link>
                <Link to="/events/5across">5 Across</Link>
                <a>Community Yearbook</a> {/*Need to add yearbooks and possibly other assets*/}
              </div>
            </Col>

            <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 ps-2'>
              <Navbar className="sticky-top sub-navbar" variant="dark" expand="lg" expanded={active === "Startups" && open === true ? true : false}>
                <Container className='border border-top-0 border-start-0 border-end-0 border-bottom-2 pb-1'>
                  <Navbar.Brand>
                    <Link to="/fellowship">
                      Startups
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="startup-basic-navbar-nav" onClick={() => handleClick("Startups")} className={`${active === "Startups" && open === true ? "" : "collapsed"} bg-none border-2 border-white bg-none border-2 border-white text-white shadow-none`}>{active === "Startups" && open === true ? <ImPlus size={20} style={{transform: 'rotate(45deg)'}}/> : <ImPlus size={20}/>}</Navbar.Toggle>
                  <Navbar.Collapse id="startup-navbar" className='border-top-0'>
                    <Nav>
                      <Row className="d-flex flex-column flex-lg-row flex-nowrap align-items-center justify-content-around">
                        <Col xs={{span: 10}} className={`d-flex flex-column py-2 border-0`}>
                          <Link to="/idea">I Have an Idea</Link>
                          <Link to="/fellowship">Startup Accelerator</Link>
                          <Link to="/events/5across">5 Across</Link>
                          <Link to="#">Community Yearbook</Link> {/*Need to add yearbooks and possibly other assets*/}
                        </Col>
                      </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

            <Col className="desktop">
              <Nav.Link href="/workspace" className="text--white">Workspace <AiFillCaretDown size={10}/></Nav.Link>
              <div className='hover-options'>
                <a href="https://calendly.com/awesometour/30min?month=2023-03" target="_blank" className='pt-0'>Schedule a Tour</a>
                <Link to="/workspace#become-a-member">Office Space</Link>
                <Link to="/events">Events</Link>
              </div>
            </Col>

            <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 ps-2'>
              <Navbar className="sticky-top sub-navbar" variant="dark" expand="lg" expanded={active === "Workspace" && open === true ? true : false}>
                <Container className='border border-top-0 border-start-0 border-end-0 border-bottom-2 pb-1'>
                  <Navbar.Brand>
                    <Link to="/workspace">
                      Workspace
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="workspace-basic-navbar-nav" onClick={() => handleClick("Workspace")} className={`${active === "Workspace" && open === true ? "" : "collapsed"} bg-none border-2 border-white bg-none border-2 border-white text-white shadow-none`}>{active === "Workspace" && open === true ? <ImPlus size={20} style={{transform: 'rotate(45deg)'}}/> : <ImPlus size={20}/>}</Navbar.Toggle>
                  <Navbar.Collapse id="workspace-navbar" className='border-top-0'>
                    <Nav>
                      <Row className="d-flex flex-column flex-lg-row flex-nowrap align-items-center justify-content-around">
                        <Col xs={{span: 10}} className={`d-flex flex-column py-2 border-0`}>
                          <a href="/https://calendly.com/awesometour/30min?month=2023-03" target="_blank">Schedule a Tour</a>
                          <Link to="/workspace#become-a-member">Office Space</Link>
                          <Link to="/events">Events</Link>
                        </Col>
                      </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

            <Col className="desktop">
              <Nav.Link href="https://apaxsoftware.com/" className="text--white">Web & App Development <AiFillCaretDown size={10}/></Nav.Link>
              <div className='hover-options'>
                <a href="https://apaxsoftware.com/" className=''>Apax Software</a>
              </div>
            </Col>

            <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 ps-2'>
              <Navbar className="sticky-top sub-navbar" variant="dark" expand="lg" expanded={active === "Web & App Development" && open === true ? true : false}>
                <Container className='border border-top-0 border-start-0 border-end-0 border-bottom-2 pb-1'>
                  <Navbar.Brand>
                    <a  href="https://apaxsoftware.com/">
                      Web & App Development
                    </a>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="web-app-development-basic-navbar-nav" onClick={() => handleClick("Web & App Development")} className={`${active === "Web & App Development" && open === true ? "" : "collapsed"} bg-none border-2 border-white text-white shadow-none`}>{active === "Web & App Development" && open === true ? <ImPlus size={20} style={{transform: 'rotate(45deg)'}}/> : <ImPlus size={20}/>}</Navbar.Toggle>
                  <Navbar.Collapse id="web-app-development-navbar" className='border-top-0'>
                    <Nav>
                      <Row className="d-flex flex-column flex-lg-row flex-nowrap align-items-center justify-content-around">
                        <Col xs={{span: 10}} className={`d-flex flex-column py-2 border-0`}>
                          <a href="https://apaxsoftware.com/" target="_blank">Web & App Development</a>
                        </Col>
                      </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

            <Col className="desktop">
              <Nav.Link href="/about" className="text--white">Be Awesome <AiFillCaretDown size={10}/></Nav.Link>
              <div className='hover-options'>
                <Link to="/about" className='pt-0'>About</Link>
                <Link to="/about">Core Values</Link>
                <Link to="/blog/">Blog</Link>
                <Link to="/press">Press</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/internships">Internships</Link>
                <Link to="/events">Events</Link>
              </div>
            </Col>

            <Row className='d-sm-none d-flex flex-row justify-content-between gx-0 ps-2 pb-3'>
              <Navbar className="sticky-top sub-navbar" variant="dark" expand="lg" expanded={active === "Be Awesome" && open === true ? true : false}>
                <Container className='border border-top-0 border-start-0 border-end-0 border-bottom-2 pb-1'>
                  <Navbar.Brand>
                    <Link  to="/about">Be Awesome</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="awesome-navbar" onClick={() => handleClick("Be Awesome")} className={`${active === "Be Awesome" && open === true ? "" : "collapsed"} bg-none border-2 border-white text-white shadow-none`}>{active === "Be Awesome" && open === true ? <ImPlus size={20} style={{transform: 'rotate(45deg)'}}/> : <ImPlus size={20}/>}</Navbar.Toggle>
                  <Navbar.Collapse id="awesome-navbar" className='border-top-0'>
                    <Nav>
                      <Row className="d-flex flex-column flex-lg-row flex-nowrap align-items-center justify-content-around">
                        <Col xs={{span: 10}} className={`d-flex flex-column py-2 border-0`}>
                          <Link to="/about">About</Link>
                          <Link to="/about">Core Values</Link>
                          <Link to="/blog/">Blog</Link>
                          <Link to="/press">Press</Link>
                          <Link to="/careers">Careers</Link>
                          <Link to="/internships">Internships</Link>
                          <Link to="/events">Events</Link>
                        </Col>
                      </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

          {useLocation().pathname === '/bootcamp/' && (
            <Col className="desktop" style={{paddingLeft: "8%",}}>
                <a href='/bootcamp/apply' className=""><BrandButton style={{padding: '1.5 rem 2 rem', fontSize: '1.25rem'}}>Apply Now</BrandButton></a>
            </Col>
          )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

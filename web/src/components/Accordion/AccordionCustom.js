import * as React from 'react'
import { Col, Row, Container, Badge } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

const AccordionCustom = (props) => {

    console.log(props)


    return (
        <div>
            <Col className='mt-5' xl={{span: 10, offset: 1}}>
                    <Accordion className='mb-5 pb-4' >
                        {props.faq.questions.map((node, index ) => (
                        // const faq ={
                        //     questions: [
                        //         {
                        //         q: "put question here",
                        //         a: "put answer here"
                        //     },
                        //     {
                        //         q: "second question",
                        //         a: "etc.."
                        //     }
                        //     ]
                    
                        // }
                        
                        <AccordionItem eventKey={index}>
                            <Accordion.Header><Badge className=' my-3 me-2 rounded-circle' bg="danger" >{index + 1}</Badge>{node.q}</Accordion.Header>
                            <AccordionBody styles="">
                            {node.a}
                            </AccordionBody>
                        </AccordionItem>
                        ))}
                        </Accordion>
                        </Col>
                        </div>
    );
};

export default AccordionCustom;
import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import ProjectPic from '../assets/images/proj1.png'

function ProjectCard() {
    const [show, setShow]=useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
  return (
    <>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width={"100%"} src={ProjectPic} onClick={handleShow}/>
      <Card.Body>
        <Card.Title>aproject Title</Card.Title>
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                    <img src={ProjectPic} width={"100%"} alt=" "/>
                    </Col>
                    <Col md={6}>
                    <h1>Project title</h1>
                    <h3>Language:react</h3>
                    <p><span>Overview:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe perspiciatis eius nulla corrupti facilis architecto itaque consequuntur, omnis minima amet, corporis est, quasi ab? Cumque repudiandae esse qui assumenda?
                    Delectus facere ullam est nemo fugit eos, cupiditate facilis sit nostrum nam eveniet repellendus fugiat odit? Sapiente dolore consequatur eveniet, possimus qui cumque assumenda ex temporibus accusamus illo non quam.</p>
                    </Col>
                </Row>
                <div className="mt-2">
                    <a href="" target='_blank' className='me-3 btn text-dark'><i class="fa-brands fa-github fa-2x"></i></a>
                    <a href="" target='_blank' className='me-3 btn text-dark'><i class="fa-brands fa-link fa-2x"></i></a>
                </div>
            </Modal.Body>
    </Modal>
    </>
  )
}

export default ProjectCard

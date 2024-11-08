import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'


function Projects() {
  return (
    <>
      <Header/>
      <div className="projects mt-5">
        <h1 className='text-center mb-5'>
          All projects
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex border w-50 rounded mb-3">
            <input type='text' className='form-control' placehonder='search by technologies'/>
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
      </div>
      <Row>
        <Col sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
      </Row>
    </>
  )
}

export default Projects

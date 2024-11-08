import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import titleImage from"../assets/images/sample1.gif"
import ProjectCard from '../Components/ProjectCard'



function Home() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate =useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)

    }else{
      setIsLoggedIn(false)
    }
  },[])
  const hamdleProjectsPage=()=>{
    if(sessionStorage.getItem("token")){
      navigate("/projects")
    }else{
      toast.warning("please login to explore our products")
    }
  }
  return (
    <>
      <div style={{ width: "100%", height: "90vh" }} className="container-fluid rounded bg-info">
        <Row className="d-flex align-items-center p-5">
          <Col sm={12} md={6} className='mt-5'>

            <h1 style={{ fontSize: '80px' }} className='fw-bolder text-light'><i className="fa-solid fa-list-check me-2"></i>Project-Fair</h1>

            <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci voluptate saepe eos tenetur delectus placeat exercitationem nihil tempora expedita, qui quia modi. Laboriosam ad rerum, eaque quis quisquam natus laborum!</p>

            <Link to={'/login'} className='btn btn-warning'>Start to Explore</Link>

          </Col>


          <Col sm={12} md={6} className='mt-5'>

            <img src={titleImage} alt="" width={"500px"} />

          </Col>
        </Row>
      </div>

      <div className="all-projects mt-3">
        <h1 className='text-info text-center fs-1'>Explore your Projects</h1>

        <marquee scrollAmount={25}>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
        </marquee>

        <div className='d-flex justify-content-center text-dark mt-5 btn'><p className='fs-3'>View more projects</p></div>



      </div>



    </>
  )
}

export default Home
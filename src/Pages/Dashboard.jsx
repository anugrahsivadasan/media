import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'


function Dashboard() {
  const[username,setUsername]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }else{
      setUsername("")
    }
  },[])
  return (
    <>
      <Header/>
      <div style={{width:"100%",height:"90vh"}}>

      <Row>
        {/*my projects*/}
        <Col sm={12} md={8}>
        <h2>Welcome <span className='text-warning fw-bolder'>{username}</span></h2>
        <MyProjects/>

        </Col>
        <Col sm={12} md={4}>
        <Profile/>
        </Col>
      </Row>

      </div>
    </>
  )
}

export default Dashboard

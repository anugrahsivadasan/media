import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
  const [open,setOpen] = useState(false)
  return (
    <>
    <div style={{marginTop:"50px"}}>
      <div className="card shadow mt-5 p-5 me-2">
        <div className="d-flex justify-content-between">
          <h1>Profile</h1>
          <button onClick={()=>setOpen(!open)}
            className='btn btn-outline-info'><i className='fa-solid fa-angle-down'></i></button>
             </div>
     
      <Collapse in={open}>
      
      <div className="row justify-content-center p-5">
        <label>
          <input type="file" style={{display:'none'}}/>
          <img width={'200px'} height={'200px'} src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png" alt="profile" />
        </label>
        <div className="mt-5">
          <input type="text" placeholder='Github link' className='form-control'/>
          <br/>
          <input type="text" placeholder='LinkedIn link' className='form-control'/>
          <div className="d-grid mt-5">
            <button className='btn btn-warning'>Update</button>
          </div>
        </div>
      </div>
      
      </Collapse>
      </div>
      </div>
    </>
  )
}
export default Profile

import React from 'react'
import AddProject from '../Components/Addproject'

function MyProjects() {
  return (
    <>
      <div className="card shadow mt-5">
        <div className="d-flex">
          <h2>My Projects</h2>
        </div>
        <div className="ms-auto">
          <AddProject/>
        </div>
        <div className="mt-4 border container-fluid"></div>
        <h2>Project Title</h2>
        <div className="d-flex ms-auto">
          <a className='me-3 btn text-dark'><i className='fa-solid fa-pen-to-square'></i></a>
          <a className='me-3 btn text-dark'><i className='fa-brands fa-github'></i></a>
          <button className='btn text-dark'><i class="fa-solid fa-trash"></i></button>
        </div>
        <p className='text-danger fw-bolder'>No Projects Added Yet...</p>
      </div>
    </>
  )
}

export default MyProjects

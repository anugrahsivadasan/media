import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function Addproject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  setProjectData({
    title: "", languages: "", github: "", overview: "", website: "", projectImage: ""
  })
  const handleShow = () => setShow(true);

  const [projectData, setProjectData] = useState({
    title: "", languages: "", github: "", overview: "", website: "", projectImage: ""
  });

  const [preview, setPreview] = useState("");
  const [fileStatus, setFileStatus] = useState(false);

  useEffect(() => {
    if (
      projectData.projectImage.type === 'image/png' ||
      projectData.projectImage.type === 'image/jpeg' ||
      projectData.projectImage.type === 'image/jpg'
    ) {
      console.log("generate url");
      setFileStatus(false);
      setPreview(URL.createObjectURL(projectData.projectImage));
    } else {
      console.log("please upload following formats");
      setFileStatus(true);
      setProjectData({ ...projectData, projectImage: "" });
    }
  }, [projectData.projectImage]);

  // console.log(projectData);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={e => setProjectData({ ...projectData, projectImage: e.target.files[0] })}
                />
                <img
                  height={"350px"}
                  width={"100%"}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXuwU7ehMo4znydfl96BXW5vQy2AOVDdEZQ&s'
                  alt=''
                />
              </label>
              {fileStatus && <div className="mt-3 text-danger">please upload the following file extensions (jpeg/png/jpg)</div>}
            </div>
            <div className="col-6">
              <Form>
                <FloatingLabel controlId="floatingInput1" label="Project Title" className='mb-3'>
                  <Form.Control
                    type="text"
                    placeholder="Project Title"
                    onChange={e => setProjectData({ ...projectData, title: e.target.value })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput2" label="Languages used" className='mb-3'>
                  <Form.Control
                    type="text"
                    placeholder="Languages used"
                    onChange={e => setProjectData({ ...projectData, languages: e.target.value })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput3" label="Overview" className='mb-3'>
                  <Form.Control
                    type="text"
                    placeholder="Overview"
                    onChange={e => setProjectData({ ...projectData, overview: e.target.value })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput4" label="Github" className='mb-3'>
                  <Form.Control
                    type="text"
                    placeholder="Github"
                    onChange={e => setProjectData({ ...projectData, github: e.target.value })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput5" label="Website" className='mb-3'>
                  <Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={e => setProjectData({ ...projectData, website: e.target.value })}
                  />
                </FloatingLabel>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject;

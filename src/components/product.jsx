import React, { useEffect, useState } from "react";
import "../styles/product.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toContainElement } from "@testing-library/jest-dom/dist/matchers";

export default function Product(props) {
  const [count, setCount] = useState(0);
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="divlisproduct">
      <div className="imagelist">
        <img src={props.img} alt="imageproduct" />
      </div>
      <h3>{props.title}</h3>
      <p> {props.name} </p>
      <button className="button+" onClick={() => setCount(count + 1)}>
        {" "}
        +{" "}
      </button>
      <button className="button+" onClick={() => setCount(count - 1)}>
        {" "}
        -{" "}
      </button>
      {/* <h3>{props.prix}</h3> */}
      <p className="prixarticle">{props.parag}</p>
      <>
        <Button variant="primary" onClick={handleShow}>
          Commander
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Votre nom</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Votre nom"
                  
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter email"
                  
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="phone"
                  
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

// <div className='pageproduct'>
//     <div>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAXoTfZ7p5tcszRM_Sin6W4DikK1O-O3OJg&usqp=CAU" alt="imageproduct" />
//     </div>
//     <h3>Gucci</h3>
//      <button>-</button>

//     <button>+</button>
//     <h3>Prix: 120dt</h3>
// </div>

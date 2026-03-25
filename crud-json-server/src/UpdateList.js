import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function UpdateList(props) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: props.item.id,
    title: props.item.title,
    author: props.item.author
  });

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setFormData({
      id: props.item.id,
      title: props.item.title,
      author: props.item.author
    });
    setShow(true);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <React.Fragment>
      <Button variant="warning" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="d-block my-3"
          />

          <input
            type="text"
            placeholder="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="d-block my-3"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

<Button
  variant="primary"
  onClick={(event) => {
    handleClose();
    props.updateList(event, props.elementId);
  }}
>
  Update
</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default UpdateList;
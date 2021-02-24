/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

const AddNewsModal = (props) => {
  const {
    className,
    client
  } = props;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [contact, setContact] = useState('');

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <button onClick={toggle} className="btn add-button-famtrack">Add</button>
      <Modal style={{ "maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'" }} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1 style={{ "marginLeft": "20px" }}>Add</h1></ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup row className="mt-3">
              <Label for="exampleText" sm={2}>Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="exampleUrl">Image</Label>
              <Input
                type="url"
                name="url"
                id="exampleUrl"
                placeholder="Image"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Active</Label>
              <Input type="select" name="select" id="exampleSelect" value={gender}>
                <option value="Pria">True</option>
                <option value="Wanita">False</option>
              </Input>
            </FormGroup>
            <button className="btn btn-primary m-3" type="submit">Submit</button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddNewsModal;

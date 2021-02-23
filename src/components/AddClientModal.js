/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddClientModal = (props) => {
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
      <Modal style={{"maxWidth": "800px", "padding": "5px"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1 style={{"marginLeft": "20px"}}>Add</h1></ModalHeader>
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
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="email"
                id="exampleAddress"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
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
              <Label for="exampleNumber">Contact</Label>
              <Input
                type="number"
                name="number"
                id="exampleNumber"
                placeholder="Contact"
                value={contact}
                onChange={e => setContact(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Birth Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="Birth Date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Gender</Label>
              <Input type="select" name="select" id="exampleSelect" value={gender}>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
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

export default AddClientModal;

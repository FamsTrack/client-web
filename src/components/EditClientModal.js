/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { fetchBaseData } from '../store/actions/baseAction';
import { useDispatch } from 'react-redux';

const EditClientModal = (props) => {
  const {
    className,
    client
  } = props;
  const [name, setName] = useState(client.name);
  const [image, setImage] = useState(client.img);
  const [address, setAddress] = useState(client.address);
  const [gender, setGender] = useState(client.gender);
  const [birthDate, setBirthDate] = useState(new Date(client.birth_date));
  const [contact, setContact] = useState(client.contact);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [error, setError] = useState([]);
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setName(client.name);
    setImage(client.img);
    setAddress(client.address);
    setGender(client.gender);
    setBirthDate(new Date(client.birth_date));
    setContact(client.contact);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.put(`http://localhost:3000/clients/${client.id}`, {
        name,
        img: image,
        address,
        gender,
        birthDate,
        contact
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchBaseData());
    } catch (err) {
      await setError(err.response.data.errors);
      await setVisible(true);
    }
  }

  const onDismiss = () => setVisible(false);

  const handleImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }
  
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  return (
    <div>
      <a onClick={toggle} className="btn btn-warning m-2">Edit</a>
      <Modal style={{"maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1 style={{"marginLeft": "20px"}}>Edit</h1></ModalHeader>
        <ModalBody>
          <Alert color="danger" isOpen={visible} onClick={onDismiss}>
            {'Error: ' + error.join(', ')}
          </Alert>
          <Form onSubmit={handleSubmit}>
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
            <FormGroup className="d-flex flex-column">
              <Label for="exampleFile">Image</Label>
              <Input type="file" name="file" id="exampleFile" onChange={handleImg} />
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
                value={`${birthDate.getFullYear()}-${(birthDate.getMonth() + 1) > 9 ? (birthDate.getMonth() + 1) : '0' + (birthDate.getMonth() + 1)}-${birthDate.getDate() > 9 ? birthDate.getDate() : '0' + birthDate.getDate()}`} onChange={e => setBirthDate(new Date(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Gender</Label>
              <Input type="select" name="select" id="exampleSelect" value={gender} onChange={e => setGender(e.target.value)}>
              <option value=""></option>
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
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

export default EditClientModal;

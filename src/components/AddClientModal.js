/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import axios from 'axios';
import { fetchBaseData } from '../store/actions/baseAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const AddClientModal = (props) => {
  const dispatch = useDispatch();
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
  const [error, setError] = useState([]);
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:3000/clients', {
        name,
        img: image,
        address,
        gender,
        birth_date: birthDate,
        contact
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchBaseData());
      history.push('/devices');
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
      <button onClick={toggle} className="btn add-button-famtrack">Add</button>
      <Modal style={{ "maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'" }} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1 style={{ "marginLeft": "20px" }}>Add</h1></ModalHeader>
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
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
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

export default AddClientModal;

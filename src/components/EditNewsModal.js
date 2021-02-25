/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Alert } from 'reactstrap';
import { fetchNewsById } from '../store/actions/newsAction';

const EditNewsModal = (props) => {
  const {
    className,
    data
  } = props;
  const { id } = useParams();
  const [name, setName] = useState(data.name);
  const [image, setImage] = useState(data.image);
  const [description, setDescription] = useState(data.description);
  const [active, setActive] = useState(data.active);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [error, setError] = useState([]);
  const [visible, setVisible] = useState(false);

  const toggle = () => setModal(!modal);

  const addNews = async (e) => {
    try {
      e.preventDefault();

      await axios.put(`https://famstrack.herokuapp.com/news/${id}`, {
        name,
        image,
        description,
        active
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchNewsById(id));
      setName('');
      setImage('');
      setDescription('');
      setActive('');
      setModal(false);
    } catch (err) {
      console.log(err.response.data.errors);
      await setError(err.response.data.errors);
      await setVisible(true);
    }
  }

  const handleImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  const onDismiss = () => setVisible(!visible);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <button onClick={toggle} className="btn btn-warning">Edit</button>
      <Modal style={{ "maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'" }} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1 style={{ "marginLeft": "20px" }}>Add</h1></ModalHeader>
        <ModalBody>
          <Alert color="danger" isOpen={visible} onClick={onDismiss}>
            {
              typeof error == 'string' ? error : 'Error: ' + error.join(', ')
            }
          </Alert>
          <Form onSubmit={addNews} className="d-flex flex-column">
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
              <Label for="exampleName">Description</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                autoComplete="off"
              />
            </FormGroup>
            <FormGroup className="mt-3 mb-3">
              <Label for="exampleUrl">Image</Label>
              <Input
                type="file"
                name="file"
                id="exampleUrl"
                placeholder="Image"
                onChange={handleImg}
                className="ms-3"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Active</Label>
              <Input type="select" name="select" id="exampleSelect" value={active} onChange={e => setActive(e.target.value)}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
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

export default EditNewsModal;

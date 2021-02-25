/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { fetchGroups } from "../store/actions/groupsAction";
import { useDispatch } from 'react-redux';

const EditGroupModal = (props) => {
  const {
    className,
    group
  } = props;
  const [name, setName] = useState(group.name);
  const [year, setYear] = useState(new Date(group.year));
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [error, setError] = useState([]);
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setName(group.name);
    setYear(new Date(group.year));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.put(`https://famstrack.herokuapp.com/groups/${group.id}`, {
        name,
        year
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchGroups());
    } catch (err) {
      await setError(err.response.data.errors);
      await setVisible(true);
    }
  }

  const onDismiss = () => setVisible(false);
  
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  return (
    <>
      <a onClick={toggle} className="btn btn-warning m-2">Edit</a>
      <Modal style={{"maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1 style={{"marginLeft": "20px"}}>Edit</h1></ModalHeader>
        <ModalBody>
          <Alert color="danger" isOpen={visible} onClick={onDismiss}>
            {'Error: ' + error/*.join(', ')*/}
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
              <Label for="exampleDate">Year</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="Birth Date"
                value={`${year.getFullYear()}-${(year.getMonth() + 1) > 9 ? (year.getMonth() + 1) : '0' + (year.getMonth() + 1)}-${year.getDate() > 9 ? year.getDate() : '0' + year.getDate()}`} onChange={e => setYear(new Date(e.target.value))}
              />
            </FormGroup>
            <button className="btn btn-primary m-3" type="submit">Submit</button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default EditGroupModal;

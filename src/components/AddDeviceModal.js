/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { fetchDevices } from '../store/actions/devicesAction'; 
import axios from 'axios';

const AddDeviceModal = (props) => {
  const {
    className
  } = props;
  const dispatch = useDispatch();
  const { devices } = useSelector(state => state.devicesResolver);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [add, setAdd] = useState(false);
  const [addInp, setAddInp] = useState('');
  const [editInp, setEditInp] = useState('');
  const [error, setError] = useState([]);
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setModal(!modal)
  
    return dispatch(fetchDevices());
  };

  const toEdit = (e) => {
    setEdit(true);
    setAdd(false);
    setDataEdit(e);
    setEditInp(e.arduinoUniqueKey);
  }

  const toAdd = () => {
    setEdit(false);
    setAdd(true);
  }

  const toDef = () => {
    setEdit(false);
    setAdd(false);
  }

  const onDismiss = () => setVisible(false);

  const handleAdd = async (e) => {
    try {
      e.preventDefault();

      await axios.post('http://localhost:3000/devices', {
        arduinoUniqueKey: addInp,
        latitude: 21.42308112484804,
        longitude: 39.82571323893904,
        panicStatus: false,
        buzzerStatus: false
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchDevices());
      setAddInp('');
      toDef();
    } catch (err) {
      setError(err.response.data.errors);
      setVisible(true);
    }
  }

  const handleEdit = async (e) => {
    try {
      e.preventDefault();

      await axios.put(`http://localhost:3000/devices/${dataEdit.id}`, {
        arduinoUniqueKey: editInp,
        latitude: dataEdit.latitude,
        longitude: dataEdit.longitude,
        panicStatus: dataEdit.panicStatus,
        buzzerStatus: dataEdit.buzzerStatus
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchDevices());
      toDef();
    } catch (err) {
      setError(err.response.data.errors);
      setVisible(true);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/devices/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchDevices());
    } catch (err) {
      setError(err.response.data);
      setVisible(true);
    }
  }
  
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  return (
    <div>
      <button onClick={toggle} className="btn add-button-famtrack" style={{"marginLeft": "10px"}}>Devices</button>
      <Modal style={{"maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'", "cursor": "default"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>
          <div className="d-flex align-items-center justify-content-around container">
            <h1>Devices</h1>
            <a className="add-button-famtrack ms-5" onClick={toAdd} style={{"textDecoration": "none"}}>Add</a>
          </div>
        </ModalHeader>
        {
          add ? <ModalBody>
            <Alert color="danger" isOpen={visible} onClick={onDismiss}>
              {'Error: ' + error.join(', ')}
            </Alert>
            <Form className="ms-4" onSubmit={handleAdd}>
              <FormGroup>
                <Label for="exampleAddress">Arduino Unique Key</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="Arduino Unique Key" value={addInp} onChange={e => setAddInp(e.target.value)} />
              </FormGroup>
              <div>
                <button className="btn btn-primary m-2 mt-3" type="submit">Add</button>
                <a className="btn btn-secondary m-2 mt-3" onClick={toDef}>Cancel</a>
              </div>
            </Form>
          </ModalBody> : (edit ? <ModalBody>
            <Alert color="danger" isOpen={visible} onClick={onDismiss}>
              {'Error: ' + error.join(', ')}
            </Alert>
            <h2 style={{"fontSize": "20px", "fontWeight": "500px"}}>From:</h2>
            <h2 className="m-3" style={{"fontSize": "20px", "fontWeight": "500px"}}>{dataEdit.arduinoUniqueKey}</h2>
            <h2 style={{"fontSize": "20px", "fontWeight": "500px"}}>To:</h2>
            <Form className="m-3" onSubmit={handleEdit}>
              <FormGroup>
                <Label for="exampleAddress">Arduino Unique Key</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="Arduino Unique Key" value={editInp} onChange={e => setEditInp(e.target.value)} />
              </FormGroup>
              <div>
                <button className="btn btn-primary mt-3" type="submit">Set</button>
                <a className="btn btn-secondary ms-2 mt-3" onClick={toDef}>Cancel</a>
              </div>
            </Form>
          </ModalBody> : <ModalBody>
            {
              devices.map(e => {
                return <div className="mb-3 d-flex align-items-center justify-content-around">
                  <h1 style={{"fontWeight": "300", "fontSize": "20px"}}>{e.arduinoUniqueKey}</h1>
                  <div>
                    <button className="btn btn-outline-warning" onClick={() => toEdit(e)}>Edit</button>
                    <button className="btn btn-outline-danger ms-3" onClick={() => handleDelete(e.id)}>Delete</button>
                  </div>
                </div>
              })
            }
          </ModalBody>
            
            )
        }
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddDeviceModal;

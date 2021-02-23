/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { fetchDevices } from '../store/actions/devicesAction';

const AddDeviceModal = (props) => {
  const {
    className
  } = props;
  const dispatch = useDispatch();
  const { devices } = useSelector(state => state.devicesResolver);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
  
    return dispatch(fetchDevices());
  };
  
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <button onClick={toggle} className="btn add-button-famtrack" style={{"marginLeft": "10px"}}>Devices</button>
      <Modal style={{"maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>
          <div className="d-flex align-items-center justify-content-around container">
            <h1>Devices</h1>
            <a className="add-button-famtrack ms-5" style={{"textDecoration": "none"}}>Add</a>
          </div>
        </ModalHeader>
        <ModalBody>
          {
            devices.map(e => {
              return <div className="mb-3 d-flex align-items-center justify-content-around">
                <h1 style={{"fontWeight": "300"}}>{e.arduinoUniqueKey}</h1>
                <div>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger ms-3">Delete</button>
                </div>
              </div>
            })
          }
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddDeviceModal;

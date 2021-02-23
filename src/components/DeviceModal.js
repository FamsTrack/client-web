/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeviceModal = (props) => {
  const {
    className,
    device
  } = props;
  const { loadingFamily } = useSelector(state => state.baseResolver);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  return (
    <div>
      <a onClick={toggle} style={{"color": "#0d6efd", "textDecoration": "underline", "fontSize": "12px", "padding": "0"}}>Manage Device</a>
      <Modal style={{"maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1>Manage Device</h1></ModalHeader>
        <ModalBody>
          <h1>Device</h1>
          {
            device ? <h1 style={{"fontWeight": "300", "marginLeft": "20px"}}>{device.arduinoUniqueKey}</h1> : <h1></h1>
          }
          <button className="btn btn-secondary mt-3">Change</button>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeviceModal;

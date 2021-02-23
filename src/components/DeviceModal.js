/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeviceModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <a onClick={toggle} style={{"color": "#0d6efd", "textDecoration": "underline", "fontSize": "10px", "padding": "0"}}>Manage Device</a>
      <Modal style={{"maxWidth": "800px", "padding": "5px"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1>Manage Device</h1></ModalHeader>
        <ModalBody>
          Test
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeviceModal;

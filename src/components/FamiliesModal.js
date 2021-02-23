/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { fetchFamilies, fetchUsers } from '../store/actions/familiesAction';

const FamiliesModal = (props) => {
  const {
    className,
    family
  } = props;
  const dispatch = useDispatch();
  const { users, families, loadingFamily } = useSelector(state => state.familiesResolver);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    
    if (family) {
      dispatch(fetchFamilies(family));
    } else {
      dispatch(fetchUsers());
    }
  };
  
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  return (
    <div>
      <a onClick={toggle} style={{"color": "#0d6efd", "textDecoration": "underline", "fontSize": "12px", "padding": "0"}}>Manage Family</a>
      <Modal style={{"maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'"}} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1>Manage Family</h1></ModalHeader>
        <ModalBody>
          {
            loadingFamily ? <h1 style={{"fontSize": "15px", "marginTop": "10px"}}>
              Loading...
              </h1> : (families.name ? <div>
                <h1>{families.name}</h1>
                <h3 style={{"fontSize": "20px"}}>Contact</h3>
                <h3 style={{"fontSize": "15px", "margin": "10px"}}>{families.contact}</h3>
                <h3 style={{"fontSize": "20px"}}>Email</h3>
                <h3 style={{"fontSize": "15px", "margin": "10px"}}>{families.user.email}</h3>
                <h3 style={{"fontSize": "20px"}}>Address</h3>
                <h3 style={{"fontSize": "15px", "margin": "10px"}}>{families.address}</h3>
                <a className="btn btn-secondary mt-3">Change</a>
              </div> : <div>Yaaa</div>)
          }
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FamiliesModal;

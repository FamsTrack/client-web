/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { clearFamilies, fetchFamilies, fetchUsers } from '../store/actions/familiesAction';

const FamiliesModal = (props) => {
  const {
    className,
    family
  } = props;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users, families, loadingFamily } = useSelector(state => state.familiesResolver);
  const { client } = useSelector(state => state.baseResolver);
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [familiesId, setFamiliesId] = useState(family);

  const toggle = () => {
    dispatch(clearFamilies());
    setModal(!modal)
    
    if (family) {
      dispatch(fetchFamilies(familiesId));
    }

    dispatch(fetchUsers());
  };

  const handleChange = async (e) => {
    try {
      e.preventDefault();
      
      await axios.put(`https://famstrack.herokuapp.com/clients/${id}`, {
        name: client.name,
        img: client.img,
        address: client.address,
        gender: client.gender,
        birth_date: client.birth_date,
        contact: client.contact,
        familiesId
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      dispatch(fetchFamilies(familiesId));
    } catch (err) {
      console.log(err.response);
    }
  }

  const handleRemove = async () => {
    try {
      await axios.put(`https://famstrack.herokuapp.com/clients/${id}`, {
        name: client.name,
        img: client.img,
        address: client.address,
        gender: client.gender,
        birth_date: client.birth_date,
        contact: client.contact,
        familiesId: null
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      await setFamiliesId(null);

      await dispatch(clearFamilies());
    } catch (err) {
      console.log(err.response);
    }
  }
  
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
                <div className="d-flex align-items-center">
                  <h1>{families.name}</h1><a className="btn ms-3 btn-outline-danger" onClick={handleRemove}>Remove</a>
                </div>
                <h3 style={{"fontSize": "20px"}}>Contact</h3>
                <h3 style={{"fontSize": "15px", "margin": "10px"}}>{families.contact}</h3>
                <h3 style={{"fontSize": "20px"}}>Email</h3>
                <h3 style={{"fontSize": "15px", "margin": "10px"}}>{families.user.email}</h3>
                <h3 style={{"fontSize": "20px"}}>Address</h3>
                <h3 style={{"fontSize": "15px", "margin": "10px"}}>{families.address}</h3>
                {
                  !dropdown ? <a className="btn btn-secondary mt-3" onClick={() => setDropdown(true)}>Change</a> : <Form className="m-2" onSubmit={handleChange}>
                  <FormGroup>
                    <Label for="exampleSelect">User</Label>
                    <Input type="select" name="select" id="exampleSelect" value={familiesId} onChange={e => setFamiliesId(e.target.value)}>
                      <option value=""></option>
                      {
                        users.map(user => {
                          return <option value={user.id}>{user.name}</option>
                        })
                      }
                    </Input>
                    <div>
                      <button className="btn btn-primary m-2 mt-3" type="submit">Change</button>
                      <a className="btn btn-secondary m-2 mt-3" onClick={() => setDropdown(false)}>Cancel</a>
                    </div>
                  </FormGroup>
                </Form>
                }
                
              </div>
               : <div className="d-flex align-items-center">
                <h3 style={{"fontSize": "20px", "fontWeight": "300"}}>No Family Yet</h3>
                {
                  !dropdown ? <a className="btn btn-primary ms-3" onClick={() => setDropdown(true)}>Add</a> : <Form className="m-2" onSubmit={handleChange}>
                  <FormGroup>
                    <Label for="exampleSelect">User</Label>
                    <Input type="select" name="select" id="exampleSelect" value={familiesId} onChange={e => setFamiliesId(e.target.value)}>
                      <option value=""></option>
                      {
                        users.map(user => {
                          return <option value={user.id}>{user.name}</option>
                        })
                      }
                    </Input>
                    <div>
                      <button className="btn btn-primary m-2 mt-3" type="submit">Change</button>
                      <a className="btn btn-secondary m-2 mt-3" onClick={() => setDropdown(false)}>Cancel</a>
                    </div>
                  </FormGroup>
                </Form>
                }
              </div>)
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

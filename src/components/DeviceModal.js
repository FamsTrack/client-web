/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchDevices } from '../store/actions/devicesAction';
import { fetchClient } from '../store/actions/baseAction';
import axios from 'axios';
import { useParams } from 'react-router';

const DeviceModal = (props) => {
  const {
    className,
    device
  } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { devices } = useSelector(state => state.devicesResolver);
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [newData, setNewData] = useState(null);
  const [data, setData] = useState(device);
  
  const toggle = () => {
    setModal(!modal)
    setDropdown(false);

    dispatch(fetchDevices());

    if (device.id != data.id) {
      dispatch(fetchClient(id));
    }
  };

  const handleChange = async (e) => {
    try {
      e.preventDefault();

      await axios.put(`https://famstrack.herokuapp.com/devices/${data.id}`, {
        arduinoUniqueKey: data.arduinoUniqueKey,
        latitude: data.latitude,
        longitude: data.longitude,
        panicStatus: data.panicStatus,
        buzzerStatus: data.buzzerStatus,
        clientId: null
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      await axios.put(`https://famstrack.herokuapp.com/devices/${newData.id}`, {
        arduinoUniqueKey: newData.arduinoUniqueKey,
        latitude: newData.latitude,
        longitude: newData.longitude,
        panicStatus: newData.panicStatus,
        buzzerStatus: newData.buzzerStatus,
        clientId: id
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      await dispatch(fetchDevices());
      await setData(newData);
      await setDropdown(false);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChangeInp = el => {
    devices.forEach(e => {
      if (e.id == el.target.value) {
        setNewData(e);
      }
    });
  }

  const handleAdd = async (e) => {
    try {
      e.preventDefault();

      await axios.put(`https://famstrack.herokuapp.com/devices/${newData.id}`, {
        arduinoUniqueKey: newData.arduinoUniqueKey,
        latitude: newData.latitude,
        longitude: newData.longitude,
        panicStatus: newData.panicStatus,
        buzzerStatus: newData.buzzerStatus,
        clientId: id
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      });

      await dispatch(fetchDevices());
      await setData(newData);
      await setDropdown(false);
    } catch (err) {
      console.log(err);
    }
  }

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

  return (
    <div>
      <a onClick={toggle} style={{ "color": "#0d6efd", "textDecoration": "underline", "fontSize": "12px", "padding": "0" }}>Manage Device</a>
      <Modal style={{ "maxWidth": "800px", "padding": "5px", "fontFamily": "'Poppins'" }} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader><h1>Manage Device</h1></ModalHeader>
        {
          data ? <ModalBody>
            <h1 style={{ "fontWeight": "500", "fontSize": "25px" }}>Connected Device</h1>
            <h1 style={{ "fontWeight": "400", "marginLeft": "15px", "fontSize": "20px" }}>{data.arduinoUniqueKey}</h1>
            {
                !dropdown ? <button className="btn btn-secondary mt-2" onClick={() => setDropdown(true)}>Change</button> : ''
              }
            {
              dropdown ? <Form className="m-2" onSubmit={handleChange}>
                <FormGroup>
                  <Label for="exampleSelect">Available Devices</Label>
                  <Input type="select" name="select" id="exampleSelect" value={newData?.id} onChange={handleChangeInp}>
                    <option value=""></option>
                    {
                      devices.map(device => {
                        if (!device.clientId) {
                          return <option value={device.id} key={device.id}>{device.arduinoUniqueKey}</option>
                        }
                      })
                    }
                  </Input>
                  <div>
                    <button className="btn btn-primary m-2 mt-3" type="submit">Change</button>
                    <a className="btn btn-secondary m-2 mt-3" onClick={() => setDropdown(false)}>Cancel</a>
                  </div>
                </FormGroup>
              </Form> : ''
            }
          </ModalBody> : <ModalBody>
            <div className="d-flex align-items-center">
              <h2 style={{ "fontSize": "20px" }}>Not connected yet</h2>
              {
                !dropdown ? <button className="btn btn-primary ms-3" onClick={() => setDropdown(true)}>Add</button> : ''
              }
            </div>
            {
              dropdown ? <Form className="m-2" onSubmit={handleAdd}>
                <FormGroup>
                  <Label for="exampleSelect">Available Devices</Label>
                  <Input type="select" name="select" id="exampleSelect" value={newData?.id} onChange={handleChangeInp}>
                    <option value=""></option>
                    {
                      devices.map(device => {
                        if (!device.clientId) {
                          return <option value={device.id} key={device.id}>{device.arduinoUniqueKey}</option>
                        }
                      })
                    }
                  </Input>
                  <div>
                    <button className="btn btn-primary m-2 mt-3" type="submit">Add</button>
                    <a className="btn btn-secondary m-2 mt-3" onClick={() => setDropdown(false)}>Cancel</a>
                  </div>
                </FormGroup>
              </Form> : ''
            }
          </ModalBody>
        }
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeviceModal;

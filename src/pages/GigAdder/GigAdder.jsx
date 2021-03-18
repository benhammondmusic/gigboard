import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import Auth from '../../Models/Auth';

const GigAdder = ({ currentUserEmail }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('false');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [tags, setTags] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');

  // GIG POSTER CLICKS "POST GIG" BUTTON
  const handleSubmit = async (e) => {
    e.preventDefault();

    // BUNDLE GIG POST FORM DATA TOGETHER FROM STATE
    const gigPostFormData = { title, description, tip, location, urgency, tags, expirationDate, workStartDate, workEndDate };

    try {
      console.log('posting a gig:', gigPostFormData);
      axios.post(`${process.env.REACT_APP_API_URL}/api/gigs`, gigPostFormData);
    } catch (error) {
      console.log(error, 'Error posting gig:', gigPostFormData);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUser">
          <Form.Label className="form-title">
            <h3>{currentUserEmail}</h3>
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="input1">
          <Form.Label className="form-title">What's the Gig?</Form.Label>
          <Form.Control type="title" placeholder="Gig goes here" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} placeholder="Describe your available gig" onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onClick={() => (tip === 'false' ? setTip('true') : setTip('false'))} />
        </Form.Group>

        <Form.Group controlId="input3">
          <Form.Label className="form-title">Where's the Gig?</Form.Label>
          <Form.Control type="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Control as="select" type="urgency" onChange={() => setUrgency(this.state.value)}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Post Gig
        </Button>
      </Form>
    </>
  );
};

export default GigAdder;

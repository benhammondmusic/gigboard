import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Auth from '../../Models/Auth';

import './GigAdder.css';

const GigAdder = ({ currentUserEmail, currentUserId }) => {
  const tagOptions = [
    { id: 'entertainment', Industry: 'Entertainment' },
    { id: 'hospitality', Industry: 'Hospitality' },
    { id: 'food and beverage', Industry: 'Food & Beverage' },
    { id: 'automotive', Industry: 'Automotive' },
    { id: 'medical', Industry: 'Medical' },
    { id: 'construction', Industry: 'Construction' },
    { id: 'general labor', Industry: 'General Labor' },
    { id: 'administration', Industry: 'Administration' },
    { id: 'customer service', Industry: 'Customer Service' },
  ];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('false');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [tags, setTags] = useState(tagOptions);
  const [expirationDate, setExpirationDate] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');

  // GIG POSTER CLICKS "POST GIG" BUTTON
  const handleSubmit = async (e) => {
    e.preventDefault();

    // BUNDLE GIG POST FORM DATA TOGETHER FROM STATE
    // ! REMOVED TAGS FOR NOW AS THEY WERE BREAKING IT
    // ! tags,
    // !

    const gigPostFormData = { title, description, tip, location, urgency, expirationDate, workStartDate, workEndDate };

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

        <Form.Group controlId="urgencySelect">
          <Form.Control as="select" type="urgency" onChange={(e) => setUrgency(e.target.value)}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
          <Multiselect options={tags} displayValue="Industry" onChange={(e) => setTags(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="workStartDate">
          <Form.Label className="form-title">When does this Gig start?</Form.Label>
          <DatePicker selected={workStartDate} onChange={(date) => setWorkStartDate(date)} />
        </Form.Group>

        <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label>
          <DatePicker selected={workEndDate} onChange={(date) => setWorkEndDate(date)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = '/gigs')}>
          Post Gig
        </Button>

        <Link to="/gigs" className="btn btn-secondary">
          Cancel
        </Link>
      </Form>
    </>
  );
};

export default GigAdder;

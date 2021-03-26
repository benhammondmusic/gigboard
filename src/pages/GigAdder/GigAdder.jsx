import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useHistory } from 'react-router-dom';
import Gig from '../../Models/Gig';
// import Auth from '../../Models/Auth';

import './GigAdder.css';

const GigAdder = ({ currentUserEmail, currentUserId }) => {
  const tagOptions = [
    { id: 'Entertainment', Industry: 'Entertainment' },
    { id: 'Hospitality', Industry: 'Hospitality' },
    { id: 'FoodAndBeverage', Industry: 'Food & Beverage' },
    { id: 'Automotive', Industry: 'Automotive' },
    { id: 'Medical', Industry: 'Medical' },
    { id: 'Construction', Industry: 'Construction' },
    { id: 'GeneralLabor', Industry: 'General Labor' },
    { id: 'Administration', Industry: 'Administration' },
    { id: 'CustomerService', Industry: 'Customer Service' },
  ];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pay, setPay] = useState('');
  const [tip, setTip] = useState(false);
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [tags, setTags] = useState([]);
  // const [expirationDate, setExpirationDate] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');
  const [dateError, setDateError] = useState('');
  const history = useHistory();

  // NOTE checking to see if user is logged in
  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      history.push('/gigs');
    }
  });

  // make sure START DATE is always before END DATE
  useEffect(() => {
    console.log('useEffect() when workstart changes. START:', workStartDate, 'END:', workEndDate);
    // every time dates change, set error to false
    // setDateError('');
    // console.log('date error in useeffect:', dateError);
    if (workEndDate && workEndDate < workStartDate) {
      // when the dates are wrong, fix them and set error to true
      setWorkEndDate(workStartDate);
      setDateError('End date cannot be earlier than Start date.');
    }
  }, [workStartDate, workEndDate]);

  // GIG POSTER CLICKS "POST GIG" BUTTON
  const handleSubmit = async (e) => {
    e.preventDefault();

    // extract tag strings from their objects
    const tagStringArray = [];
    for (let tag of tags) {
      tagStringArray.push(tag.id);
    }

    // Add current logged in user (gig poster) to the gig posts' Form Data User field
    const gigPostFormData = { User: currentUserId, title, description, pay, tip, location, urgency, tags: tagStringArray, workStartDate, workEndDate };

    // POST the gig to backend -> create in database
    try {
      const jwtAdd = localStorage.getItem('jwt');
      await Gig.add(gigPostFormData, jwtAdd);
    } catch (error) {
      console.log(error, 'Error posting gig:', gigPostFormData);
    }

    // add this post reference object ID to the current logged in User's [Posts] array
  };

  return (
    <div className="GigAdder">
      <Form onSubmit={handleSubmit} className="post-it">
        <Form.Group controlId="input1">
          <Form.Label className="form-title">What's the Gig?</Form.Label>
          <Form.Control value={title} type="title" placeholder="Gig goes here" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} placeholder="Describe your available Gig (include how many hours)" onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="input3">
          <Form.Label className="form-title">What does the Gig pay?</Form.Label>
          <div className="pay-form-container">
            <span className="dollaSign">$</span>
            <Form.Control type="textarea" placeholder="Pay/day goes here" onChange={(e) => setPay(e.target.value)} />
          </div>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            // checkboxes use CHECKED for boolean status, not VALUE
            checked={tip}
            label="Check this box if this gig is GigWage + tips"
            onChange={() => {
              // flip the tip boolean

              setTip(!tip);
            }}
          />
        </Form.Group>
        <Form.Group controlId="input3">
          <Form.Label className="form-title">Where's the Gig?</Form.Label>
          <Form.Control type="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="urgencySelect">
          <Form.Label className="form-title">Urgency?</Form.Label>
          <Form.Control as="select" type="urgency" onChange={(e) => setUrgency(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
          <Multiselect
            options={tagOptions}
            displayValue="Industry"
            onSelect={(e) => {
              setTags(e);
            }}
          />
        </Form.Group>
        <Form.Group controlId="workStartDate">
          <Form.Label className="form-title">When does this Gig start?</Form.Label> &nbsp;
          <DatePicker
            selected={workStartDate}
            onClick={(e) => setDateError('')}
            onChange={(date) => {
              setWorkStartDate(date);
              setDateError('');
            }}
          />
        </Form.Group>
        <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label> &nbsp;
          <DatePicker
            selected={workEndDate}
            onChange={(date) => {
              setWorkEndDate(date);
              setDateError('');
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = '/gigs')}>
          Post Gig
        </Button>
        <Link to="/gigs" className="btn btn-secondary cncl-btn">
          Cancel
        </Link>
        <span className="error">{dateError}</span>
      </Form>
    </div>
  );
};

export default GigAdder;

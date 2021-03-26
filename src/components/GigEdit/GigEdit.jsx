import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Link, useParams, useHistory } from 'react-router-dom';
import Gig from '../../Models/Gig';

// import StateManager from 'react-select';
import './GigEdit.css';

const GigEdit = () => {
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

  // const [currentGig, setCurrentGig] = useState({});
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pay, setPay] = useState(0);
  const [tip, setTip] = useState(false);
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [tags, setTags] = useState(tagOptions);
  // const [expirationDate, setExpirationDate] = useState(new Date());
  const [workStartDate, setWorkStartDate] = useState(new Date());
  const [workEndDate, setWorkEndDate] = useState(new Date());

  const history = useHistory();

  // fetch all gigs on page load
  useEffect(() => {
    getGigData();
  }, []);

  // retrieve all gigs from API
  const getGigData = async () => {
    try {
      if (!localStorage.getItem('jwt')) {
        history.push('/gigs');
      }
      // set response from server to res
      const res = await Gig.show(id, localStorage.getItem('jwt'));

      // set state from retrieved response object
      setTitle(res.data.gig.title);
      setDescription(res.data.gig.description);
      setPay(res.data.gig.pay);
      setTip(res.data.gig.tip);
      setLocation(res.data.gig.location);
      setUrgency(res.data.gig.urgency);
      setTags(res.data.gig.tags);
      // setExpirationDate(res.data.gig.expirationDate ? new Date(res.data.gig.expirationDate) : '');

      setWorkStartDate(res.data.gig.workStartDate && new Date(res.data.gig.workStartDate));
      setWorkEndDate(res.data.gig.workEndDate && new Date(res.data.gig.workEndDate));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jwtCheck = localStorage.getItem('jwt');
      console.log('tip before update db:', tip);
      const res = await Gig.update(id, { title, pay, description, tip, location, urgency, tags, workStartDate, workEndDate }, jwtCheck);

      if (res.data.status === 200) {
        history.push(`/gigs`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to deal with DATABASE [tag strings] and TAG SELECTOR [{id: tag, Industry: Tag}]
  const tagObjectsToStrings = (tagObjects) => {
    const tagStringArray = [];
    for (let tag of tagObjects) {
      tagStringArray.push(tag.id);
    }
    return tagStringArray;
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="EditGig">
        <h4>Edit Gig Info:</h4>
        <hr></hr>
        <Form.Group controlId="input1">
          <Form.Label className="form-title">What's the Gig?</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="input3">
          <Form.Label className="form-title">What does the gig pay?</Form.Label>
          <Form.Control value={pay} onChange={(e) => setPay(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            checked={tip}
            type="checkbox"
            label="Check this box if this gig is GigWage + tips"
            onChange={() => {
              setTip(!tip);
            }}
          />
        </Form.Group>

        <Form.Group controlId="input3">
          <Form.Label className="form-title">Where's the Gig?</Form.Label>
          <Form.Control type="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="urgencySelect">
          <Form.Label className="form-title">Urgency?</Form.Label>
          <Form.Control value={urgency} as="select" type="urgency" onChange={(e) => setUrgency(e.target.value)}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
          <Multiselect
            options={tagOptions}
            displayValue="Industry"
            onSelect={(tagObjects) => {
              // extract tag strings from their form-option objects
              setTags(tagObjectsToStrings(tagObjects));
            }}
          />
        </Form.Group>

        {workStartDate && (
          <Form.Group controlId="workStartDate">
            <Form.Label className="form-title">What date does this Gig start?</Form.Label>
            <DatePicker
              selected={workStartDate}
              onChange={(formDate) => {
                setWorkStartDate(formDate);
              }}
            />
          </Form.Group>
        )}
        {workEndDate && (
          <Form.Group controlId="workEndDate">
            <Form.Label className="form-title">When does this Gig end?</Form.Label>
            <DatePicker
              selected={workEndDate}
              onChange={(formDate) => {
                setWorkEndDate(formDate);
              }}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
        <Link to="/gigs" className="btn btn-secondary cncl-btn">
          Cancel
        </Link>
      </Form>
    </>
  );
};

export default GigEdit;

import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useParams } from 'react-router-dom';
import Gig from '../../Models/Gig';
import StateManager from 'react-select';

const GigEdit = ({ props, gigId }) => {
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

  const [currentGig, setCurrentGig] = useState({});
  const { id } = useParams();
  const [title, setTitle] = useState('loading...');
  const [description, setDescription] = useState('loading...');
  const [tip, setTip] = useState('false');
  const [location, setLocation] = useState('loading...');
  const [urgency, setUrgency] = useState('Low');
  const [tags, setTags] = useState(tagOptions);
  const [expirationDate, setExpirationDate] = useState('loading...');
  const [workStartDate, setWorkStartDate] = useState('loading...');
  const [workEndDate, setWorkEndDate] = useState('loading...');

  useEffect(() => {
    getGigData();
  }, []);

  // fetch data about the specific gig to be edited
  const getGigData = async () => {
    try {
      console.log('getGigData() from gig:', id);

      // set response from server to res
      const res = await Gig.show(id);

      // set state from retrieved response object
      setTitle(res.data.gig.title);
      setDescription(res.data.gig.description);
      setTip(res.data.gig.tip);
      setLocation(res.data.gig.location);
      setUrgency(res.data.gig.urgency);
      setTags(res.data.gig.tags);
      setExpirationDate(res.data.gig.expirationDate);
      setWorkStartDate(res.data.gig.workStartDate);
      setWorkEndDate(res.data.gig.workEndDate);

      //Don't forget to refactor current gig to access state instead of res
      // create a current Gig to put into setCurrentGig
      const currentGig = {
        title: res.data.gig.title,
        description: res.data.gig.description,
        tip: res.data.gig.tip,
        location: res.data.gig.location,
        urgency: res.data.gig.urgency,
        tags: res.data.gig.tags,
        expirationDate: res.data.gig.expirationDate,
        workStartDate: res.data.gig.workStartDate,
        workEndDate: res.data.gig.workEndDate,
      };

      console.log('here is the currentGig', currentGig);
      // setting currentGig state
      setCurrentGig(currentGig);

      console.log('here is the response from getGigData: ', res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // my thought here is to pass updatedGig after Instantiate it, but I'm getting an error
      const res = await Gig.update(id, { title, description, tip, location, urgency, tags, expirationDate, workStartDate, workEndDate });

      console.log('here is the response from update: ', res);

      if (res.data.status === 200) {
        props.history.push(`/gigs/${gigId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>GigEditor</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="input1">
          <Form.Label className="form-title">Gig Title:</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onChange={() => setTip(!tip)} checked={tip ? true : ''} />
        </Form.Group>

        <Form.Group controlId="input3">
          <Form.Label className="form-title">Gig Location:</Form.Label>
          <Form.Control type="location" value={location} onChange={(e) => setLocation(e.target.value)} />
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

        {/*        <Form.Group controlId="workStartDate">
          <Form.Label className="form-title">When does this Gig start?</Form.Label>
          <DatePicker selected={workStartDate} placeholder={workStartDate} onChange={(date) => setWorkStartDate(date)} />
        </Form.Group> */}
        {/* 
        <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label>
          <DatePicker selected={workEndDate} placeholder={workEndDate} onChange={(date) => setWorkEndDate(date)} />
        </Form.Group> */}

        {/* <Link to="/gigs/editgig/${id}"gig={gig}><button className="btn btn-outline-dark" >Save Changes</button></Link> */}
        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = `/gigs`)}>
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default GigEdit;

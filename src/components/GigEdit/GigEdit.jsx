import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useParams } from 'react-router-dom';
import Gig from '../../Models/Gig';
import StateManager from 'react-select';

const GigEdit = (props) => {
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

  // const [currentGig, setCurrentGig] = useState({});
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

  // on page load, fetch info about this specific gig
  useEffect(() => {
    getGigData();
  }, []);

  // fetch data about the specific gig to be edited
  const getGigData = async () => {
    try {
      console.log('getGigData() from gig:', id);

      // set response from server to res
      const res = await Gig.show(id);

      console.log('getGigData() setting title from', title, ' to ', res.data.gig.title);

      // set state from retrieved response object
      setTitle(res.data.gig.title);
      // setDescription(res.data.gig.description);
      // setTip(res.data.gig.tip);
      // setLocation(res.data.gig.location);
      // setUrgency(res.data.gig.urgency);
      // setTags(res.data.gig.tags);
      // setExpirationDate(res.data.gig.expirationDate);
      // setWorkStartDate(res.data.gig.workStartDate);
      // setWorkEndDate(res.data.gig.workEndDate);

      //Don't forget to refactor current gig to access state instead of res
      // create a current Gig to put into setCurrentGig
      /*       const currentGig = {
        title: res.data.gig.title,
        description: res.data.gig.description,
        tip: res.data.gig.tip,
        location: res.data.gig.location,
        urgency: res.data.gig.urgency,
        tags: res.data.gig.tags,
        expirationDate: res.data.gig.expirationDate,
        workStartDate: res.data.gig.workStartDate,
        workEndDate: res.data.gig.workEndDate,
      }; */

      // setting currentGig state
      // setCurrentGig(currentGig);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // my thought here is to pass updatedGig after Instantiate it, but I'm getting an error

      // each pc of state should be up to date already if/when user makes any changes to the form fields
      // const res = await Gig.update(id, { title, description, tip, location, urgency, tags, expirationDate, workStartDate, workEndDate });
      const res = await Gig.update(id, { title });
      console.log('UPDATING GIG IN <GigEdit>/handleSubmit', res);

      // const updatedGig = {
      //   title: res.data.gig.title,
      //   description: res.data.gig.description,
      //   tip: res.data.gig.tip,
      //   location: res.data.gig.location,
      //   urgency: res.data.gig.urgency,
      //   tags: res.data.gig.tags,
      //   expirationDate: res.data.gig.expirationDate,
      //   workStartDate: res.data.gig.workStartDate,
      //   workEndDate: res.data.gig.workEndDate,
      // };

      if (res.data.status === 200) {
        console.log('SUCCESS UPDATING GIG');
        // redirect back to ALL gigs, since we don't have / don't need a single gig view
        props.gig.history.push(`/gigs`);
      }
    } catch (error) {
      console.log(error, 'ERROR UPDATING GIG');
    }
  };

  return (
    <>
      <h2>GigEditor</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="input1">
          <Form.Label className="form-title">Edit Your Gig:</Form.Label>
          <Form.Control type="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        {/* <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group> */}
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onChange={() => (tip === 'false' ? setTip('true') : setTip('false'))} />
        </Form.Group> */}
        {/* <Form.Group controlId="input3">
          <Form.Label className="form-title">Where's the Gig?</Form.Label>
          <Form.Control type="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group> */}
        {/* <Form.Group controlId="urgencySelect">
          <Form.Control as="select" type="urgency" onChange={(e) => setUrgency(e.target.value)}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group> */}
        {/* <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
          <Multiselect options={tags} displayValue="Industry" onChange={(e) => setTags(e.target.value)} />
        </Form.Group> */}
        {/* <Form.Group controlId="workStartDate">
          <Form.Label className="form-title">When does this Gig start?</Form.Label>
          <DatePicker selected={workStartDate} value={workStartDate} onChange={(date) => setWorkStartDate(date)} />
        </Form.Group> */}
        {/* <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label>
          <DatePicker selected={workEndDate} value={workEndDate} onChange={(date) => setWorkEndDate(date)} />
        </Form.Group> */}
        {/* thought about trying to use this link.... need to figure out the best option */}
        {/* <Link to="/gigs/editgig/${id}"gig={gig}><button className="btn btn-outline-dark" >Save Changes</button></Link> */}
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default GigEdit;

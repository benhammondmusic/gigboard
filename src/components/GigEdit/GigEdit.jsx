import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useParams } from 'react-router-dom';
import Gig from '../../Models/Gig';
import StateManager from 'react-select';
import './GigEdit.css';

const GigEdit = ({ gig, props, gigId }) => {
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

  const [currentGig, setCurrentGig] = useState({});
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pay, setPay] = useState('');
  const [tip, setTip] = useState('false');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [tags, setTags] = useState(tagOptions);
  const [expirationDate, setExpirationDate] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');

  // console.log('here is the gig ID:', id)
  // console.log('here is the Gig:', gig)

  useEffect(() => {
    getGigData();
  }, []);

  console.log('here is the currentGig', currentGig);

  const getGigData = async () => {
    try {
      // set response from server to res
      const res = await Gig.show(id);

      // set state from retrieved response object
      setTitle(res.data.gig.title);
      setDescription(res.data.gig.description);
      setPay(res.data.gig.pay);
      setTip(res.data.gig.tip);
      setLocation(res.data.gig.location);
      setUrgency(res.data.gig.urgency);
      setTags(res.data.gig.tags);
      setExpirationDate(res.data.gig.expirationDate);
      setWorkStartDate(res.data.gig.workStartDate);
      setWorkEndDate(res.data.gig.workEndDate);

      //Don't forget to refactor curent gig to access state instead of res
      // create a current Gig to put into setCurrentGig
      const currentGig = {
        title: res.data.gig.title,
        description: res.data.gig.description,
        pay: res.data.gig.pay,
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

      //   const updatedGig = {
      //   title: res.data.gig.title,
      //   description: res.data.gig.description,
      //   tip: res.data.gig.tip,
      //   location: res.data.gig.location,
      //   urgency: res.data.gig.urgency,
      //   tags: res.data.gig.tags,
      //   expirationDate: res.data.gig.expirationDate,
      //   workStartDate: res.data.gig.workStartDate,
      //   workEndDate: res.data.gig.workEndDate
      // }

      // console.log('this is the updated gig: ', updatedGig)

      if (res.data.status === 200) {
        props.history.push(`/gigs/${gigId}`);
      }
    } catch (error) {
      console.log(error);
    }
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
          <Form.Control type="textarea" value={pay} onChange={(e) => setPay(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onChange={() => (tip === 'false' ? setTip('true') : setTip('false'))} />
        </Form.Group>
        <Form.Group controlId="input3">
          <Form.Label className="form-title">Where's the Gig?</Form.Label>
          <Form.Control type="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="urgencySelect">
          <Form.Label className="form-title">Urgency?</Form.Label>
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
          <DatePicker
            // selected={workStartDate} // causing errors
            onChange={(date) => {
              console.log(date, 'event is new date');
              setWorkStartDate(date);
            }}
          />
        </Form.Group>
        <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label>
          <DatePicker
            // selected={workEndDate} // causing errors
            onChange={(date) => {
              console.log(date);
              setWorkEndDate(date);
            }}
          />
        </Form.Group>
        // thought about tryingg to use this link.... need to figure out the best option
        {/* <Link to="/gigs/editgig/${id}"gig={gig}><button className="btn btn-outline-dark" >Save Changes</button></Link> */}
        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = `/gigs`)}>
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default GigEdit;

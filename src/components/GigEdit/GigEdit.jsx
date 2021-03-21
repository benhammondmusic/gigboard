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
<<<<<<< HEAD
<<<<<<< HEAD
      setCurrentGig(currentGig)

      console.log('here is the response from getGigData: ', res)

=======
      // setCurrentGig(currentGig);
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
  }

 
=======
  };
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a
=======
      setCurrentGig(currentGig);

      console.log('here is the response from getGigData: ', res);
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // my thought here is to pass updatedGig after Instantiate it, but I'm getting an error
<<<<<<< HEAD
<<<<<<< HEAD
      const res = await Gig.update( id, { title, description, tip, location, urgency, tags, expirationDate, workStartDate, workEndDate} )

      console.log('here is the response from update: ', res)

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
=======
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a

      // each pc of state should be up to date already if/when user makes any changes to the form fields

      // const res = await Gig.update(id, { title, description, tip, location, urgency, tags, expirationDate, workStartDate, workEndDate });

      const res = await Gig.update(id, { title, description, location });
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
=======
      const res = await Gig.update(id, { title, description, tip, location, urgency, tags, expirationDate, workStartDate, workEndDate });

      console.log('here is the response from update: ', res);
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911

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
<<<<<<< HEAD
<<<<<<< HEAD
          <Form.Label className="form-title">What's the Gig?</Form.Label>
          <Form.Control placeholder={title} onChange={(e) => setTitle(e.target.value)}/>
=======
          <Form.Label className="form-title">Edit Your Gig:</Form.Label>
          <Form.Control type="title" value={title} onChange={(e) => setTitle(e.target.value)} />
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a
        </Form.Group>
        <Form.Group controlId="input2">
<<<<<<< HEAD
          <Form.Control as="textarea" rows={3} placeholder={description} onChange={(e) => setDescription(e.target.value)}/>
=======
          <Form.Label className="form-title">Gig Title:</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onChange={() => setTip(!tip)} checked={tip ? true : ''} />
        </Form.Group>

        <Form.Group controlId="input3">
          <Form.Label className="form-title">Gig Location:</Form.Label>
          <Form.Control type="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="urgencySelect">
<<<<<<< HEAD
=======
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onChange={() => setTip(!tip)} /> 
        </Form.Group>*/}
        <Form.Group controlId="input3">
          <Form.Label className="form-title">Gig Location</Form.Label>
          <Form.Control type="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>
        {/* <Form.Group controlId="urgencySelect">
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a
=======
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
          <Form.Control as="select" type="urgency" onChange={(e) => setUrgency(e.target.value)}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Control>
<<<<<<< HEAD
        </Form.Group> */}
        {/* <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
<<<<<<< HEAD
          <Multiselect options={tags} displayValue="Industry" onChange={(e) => setTags(e.target.value)}/>
=======
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
          <Multiselect options={tags} displayValue="Industry" onChange={(e) => setTags(e.target.value)} />
        </Form.Group>

<<<<<<< HEAD
        // thought about tryingg to use this link.... need to figure out the best option
        {/* <Link to="/gigs/editgig/${id}"gig={gig}><button className="btn btn-outline-dark" >Save Changes</button></Link> */}
        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = `/gigs`)}>
=======
          <Multiselect options={tags} displayValue="Industry" onChange={(e) => setTags(e.target.value)} />
        </Form.Group> */}
        {/* <Form.Group controlId="workStartDate">
=======
        {/*        <Form.Group controlId="workStartDate">
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
          <Form.Label className="form-title">When does this Gig start?</Form.Label>
          <DatePicker selected={workStartDate} placeholder={workStartDate} onChange={(date) => setWorkStartDate(date)} />
        </Form.Group> */}
        {/* 
        <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label>
          <DatePicker selected={workEndDate} placeholder={workEndDate} onChange={(date) => setWorkEndDate(date)} />
        </Form.Group> */}

        {/* <Link to="/gigs/editgig/${id}"gig={gig}><button className="btn btn-outline-dark" >Save Changes</button></Link> */}
<<<<<<< HEAD
        <Button variant="primary" type="submit">
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a
=======
        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = `/gigs`)}>
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default GigEdit;

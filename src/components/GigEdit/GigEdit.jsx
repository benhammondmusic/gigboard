import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {Link} from 'react-router-dom'


const GigEdit = (props) => {
    const [gig, setGig] = useState({});
    const gigId = props.match.params.gigId;

    updateGig = (gig, key) => {
        const gig = this.state.gig;

        if(gig.currentUserEmail.equals (currentUserEmail && currentUserEmail.gigId)){

            const handleSubmit = async (e) => {
                e.preventDefault();
            
                const gigPostFormData = { title, description, tip, location, urgency, expirationDate, workStartDate, workEndDate };
            
                try {
                  console.log('updating a gig:', gigPostFormData);
                  axios.post(`${process.env.REACT_APP_API_URL}/api/gigs/:gigId`, gigPostFormData);
                } catch (error) {
                  console.log(error, 'Error updating gig:', gigPostFormData);
                }
              };


            <form id="update" name="_method" method="PUT" action="http://localhost3000/gigs/:gigId">
        
        <Form onSubmit={handleSubmit}>

        <Form.Group controlId="input1">
          <Form.Label className="form-title">What's the Gig?</Form.Label>
          <Form.Control type="title" value={props.title}/>
        </Form.Group>

        <Form.Group controlId="input2">
          <Form.Control as="textarea" rows={3} value={props.description}/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check this box if this gig is GigWage + tips" onClick={() => (tip === 'false' ? setTip('true') : setTip('false'))} />
        </Form.Group>

        <Form.Group controlId="input3">
          <Form.Label className="form-title">Where's the Gig?</Form.Label>
          <Form.Control type="location" value={props.location}/>
        </Form.Group>

        <Form.Group controlId="urgencySelect">
          <Form.Control as="select" type="urgency">
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label className="form-title">What category tag(s) does this Gig fit?</Form.Label>
          <Multiselect options={tags} displayValue="Industry"/>
        </Form.Group>

        <Form.Group controlId="workStartDate">
          <Form.Label className="form-title">When does this Gig start?</Form.Label>
          <DatePicker selected={workStartDate} value={props.workStartDate}/>
        </Form.Group>

        <Form.Group controlId="workEndDate">
          <Form.Label className="form-title">When does this Gig end?</Form.Label>
          <DatePicker selected={workEndDate} value={props.workEndDate}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Post Gig
        </Button>
      </Form>
            </form>

        }
    }
}

export default GigEdit
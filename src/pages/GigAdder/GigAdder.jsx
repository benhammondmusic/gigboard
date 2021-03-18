import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import Auth from '../../Models/Auth';



const GigAdder = ({currentUsername}) => {



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

        
    } catch (error) {
       console.log(error)
    }
  }



  return (
    <>
      <Form onSubmit={handleSubmit} >

        <Form.Group controlId="formUser">
            <Form.Label className='form-title'><h3>{currentUsername}</h3></Form.Label>
        </Form.Group>

      </Form>
 
    </>
  );
};

export default GigAdder;

import { Link } from 'react-router-dom';
import React, { useState, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form,FormControl, Button,InputGroup } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function CreatePoll() {
  const [title, setTitle] = useState('')
  const [useremail, setEmail] = useState('')
  const [names, setNames] = useState([''])
  const [choices, setChoices] = useState([{name:'', count:0}])
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState({})
  const [register, setRegister] = useState(false);

  const handleFormChange = (event, index) => {
    let data = [...choices];
    data[index][event.target.name] = event.target.value;
    setChoices(data);
  }
  const addFields = () => {
    let object = {
      name: '',
      count: 0
    }
    setChoices([...choices, object])
  }
  const removeFields = (index) => {
    let data = [...choices];
    data.splice(index, 1)
    setChoices(data)
  }
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    
     const configuration = {
        method: "post",
        url: "http://localhost:4000/pollcreate",
        data: {
          title,
          useremail,
          choices,
        },
      };
        // make the API call
      axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
    };
    return (
      <div className="mx-5">
         <h2>Create poll</h2>
         {register ? (
          <p className="text-success">You have Successfully created a pole</p>
        ) : (
          <p className="text-danger">You Are Not polled</p>
        )}
        <Form>
        <Form.Group controlId="formBasictitle">
            <Form.Label>Enter the title of the poll</Form.Label>
            <Form.Select aria-label="Default select example"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            id="title">
            <option>Open this select menu</option>
            <option value="President">University President</option>
            <option value="VicePresident">Vice President</option>
            <option value="Secretary">Secretary General</option>
            <option value="DeputySecretary">Deputy Secretary General</option>
            <option value="CouncilTreasurer">University Council Treasurer</option>
            <option value="Council">Student Council</option>
            <option value="Spokesperson">Spokesperson</option>

            </Form.Select>
         </Form.Group>
            <Form.Group controlId="formBasicemail">
            <Form.Label>Enter the Email</Form.Label>
            <Form.Control
            type="email"
            name="useremail"
            value={useremail}
            onChange={(event) => setEmail(event.target.value)}
            id="useremail"
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Enter the Names of the Candidates</Form.Label>
          {choices.map((choice, index) => {
            return (
               <InputGroup key={index}>
               <Form.Control
                type="text"
                name="name"
                onChange={event => handleFormChange(event, index)}
                value={choice.name}
                />
                <InputGroup.Text><Button onClick={() => removeFields(index)}>Remove</Button></InputGroup.Text>
               </InputGroup>
            )
          })}
          <Button onClick={addFields}>Add More..</Button>
          </Form.Group>
          <br/>
          <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
        </Form>        
      </div>
    );
}
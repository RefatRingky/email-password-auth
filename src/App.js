import { getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import app from "./firebase.init";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const auth = getAuth(app);
function App() {
  const handleEmailBlur = event =>{
    console.log(event.target.value);
  }
  const handlePasswordBlur = event =>{
    console.log(event.target.value);
  }
  const handleFormSubmit = event =>{
    console.log('form submit');
    event.preventDefault();
  }
  return (
    <div >
      <div className="registration w-50 mx-auto">
        <h2 className="text-primary">Please Registration!</h2>
      <Form >
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur } type="password" placeholder="Password" />
          </Form.Group>
          
            
          <Button variant="primary" type="submit">
            Submit
          </Button>
   </Form>
      </div>
    </div>
  );
}

export default App;

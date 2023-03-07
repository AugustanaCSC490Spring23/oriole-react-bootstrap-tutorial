import {Alert, Form} from "react-bootstrap";
import Button from './Button';
const LoginForm = (props) => {
    return (
        <Form>
        <Form.Group className = "mb-3 mx-3" controlId = "formBasicEmail">
          <Form.Label>Email adress</Form.Label>
          <Form.Control type = "email" placeholder =  "Enter email"/>
          <Form.Text className='text-muted'>
            We will never share your your email with anyone 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 mx-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button label={props.label} onClick={props.onClick}  />

      </Form>
    )
}

export default LoginForm;

import {Button, Alert, Form} from "react-bootstrap";
const LoginForm = () => {
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

      <Button variant="secondary" type="submit">
        Submit
      </Button>

      </Form>
    )
}

export default LoginForm;

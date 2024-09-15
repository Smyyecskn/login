import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";

// REACT OBJE İLE LOGİN OLUŞTURMA

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { username, lastname, email, password } = value;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
    console.log("value", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ username: "", lastname: "", email: "", password: "" });
  };
  return (
    <Container className="text-center my-5 mx-5">
      <h2>LOGIN</h2>
      <Form
        className="w-75 bg-info border border-3 mx-5"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-4 w-75 mx-10">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            id="username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-75">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lastname"
            value={lastname}
            id="lastname"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-75">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Plaese enter email..."
            value={email}
            id="email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            E-postanızı asla başkalarıyla paylaşmayacağız.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4 w-75">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            id="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

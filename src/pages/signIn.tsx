import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../utilities/routePaths";
import {
  Button,
  Card,
  Form,
  Row,
  Col
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/actions/userAction";

export default function SignIn({auth}: any) {
  const [validated, setValidated] = useState(false);
  const [isItOtpTime, setOtpTime] = useState(false);
  const [Mobile, setMobile] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    // console.log("form.checkValidity()",form.checkValidity())
    // if(!UserName) return alert("Enter UserName");
    // if(!Password) return alert("Enter Password");
    // if(UserName !== "admin") return alert("UserName Wrong.");
    // if(Password !== "edcs@123") return alert("Password Wrong."); 
    if (form.checkValidity() === false) {
      event.stopPropagation();
      dispatch(userLoggedIn());
    }
    setValidated(true);
  };

  return (
    <div className="flex mt-8 justify-center items-center">
      <Card className="text-center pb-5">
      <Form noValidate className="flex flex-col p-10" validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-4 flex flex-col">
        <span className="pb-2 text-center font-bold">Login</span>
        <Form.Group className="flex flex-row" as={Col} md='12' controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            name="username"
            placeholder="UserName"
            value={UserName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4" as={Col} md="12" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            name="password"
            placeholder="Password"
            value={Password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
      </Card>
    </div>
  );
}

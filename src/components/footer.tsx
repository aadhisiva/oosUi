import React from "react";
import { Col, Image, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="h-10 bottom-0 w-full fixed bg-slate-600 border-b-1">
      <Row className="h-10 flex items-center justify-center w-full">
        <Col className="text-center text-sm text-white flex flex-row justify-center">
          Government of Karnataka 2023, <br/>
          Directorate Of EDCS Developed By Mobile One
          <Image className="h-10 w-10" src={require("../assests/Images/m1-T.png")} alt="M1 Logo" />
        </Col>
      </Row>
    </div>
  );
}

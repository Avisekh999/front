import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/newsearch/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} >
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder=""
            className="" 
            style={{width:300}}
          ></Form.Control>
        </Col>
        <Col  xs={6} sm={6} md={6} lg={6} xl={6}>
          <Button type="submit" variant="outline-success" className="">
          <i class="fas fa-search"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

function ArticleCard() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <p className="category">All Articles</p>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="2">
              <Card>
                <CardHeader>
                  <h4 className="category text-center">Fliter</h4>
                  <Row>
                    <Col className="mb-3 ml-4 center" lg="3" sm="6">
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox"></Input>
                          <span className="form-check-sign"></span>
                          Checked 
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>

                </CardHeader>
              </Card>

            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="10">
              <Row>
                <Col md="6" >
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="4" >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/julie.jpg")}
                          ></img>
                          <h3 className="text-center mt-3">Title</h3>
                          <h5 className="text-center mt-1">Author</h5>
                          <h6 className="text-center mt-1">Category</h6>
                          <h6 className="text-center mt-1">Date</h6>
                        </Col>
                        <Col md="8">
                          <p>
                            I think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level that
                            things could be at. So when you get something that has
                            the name Kanye West on it, it’s supposed to be pushing
                            the furthest possibilities. I will be the leader of a
                            company that ends up being worth billions of dollars,
                            because I got the answers. I understand culture. I am
                            the nucleus.
                          </p>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" >
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="4" >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/julie.jpg")}
                          ></img>
                        </Col>
                        <Col md="8">
                          <p>
                            I think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level that
                            things could be at. So when you get something that has
                            the name Kanye West on it, it’s supposed to be pushing
                            the furthest possibilities. I will be the leader of a
                            company that ends up being worth billions of dollars,
                            because I got the answers. I understand culture. I am
                            the nucleus.
                          </p>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" >
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="4" >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/julie.jpg")}
                          ></img>
                        </Col>
                        <Col md="8">
                          <p>
                            I think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level that
                            things could be at. So when you get something that has
                            the name Kanye West on it, it’s supposed to be pushing
                            the furthest possibilities. I will be the leader of a
                            company that ends up being worth billions of dollars,
                            because I got the answers. I understand culture. I am
                            the nucleus.
                          </p>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" >
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="4" >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/julie.jpg")}
                          ></img>
                        </Col>
                        <Col md="8">
                          <p>
                            I think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level that
                            things could be at. So when you get something that has
                            the name Kanye West on it, it’s supposed to be pushing
                            the furthest possibilities. I will be the leader of a
                            company that ends up being worth billions of dollars,
                            because I got the answers. I understand culture. I am
                            the nucleus.
                          </p>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ArticleCard;

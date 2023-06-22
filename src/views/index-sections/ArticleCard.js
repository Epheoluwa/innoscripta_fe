import React, { useContext, useEffect, useState } from "react";
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
  Button,
} from "reactstrap";
import { AuthContext } from "Context/AuthProvider";
import apiClient from "Utils/api";
import CardDetails from "components/Card/CardDetails";
import { StyledContainer } from "components/Card/StyledCard";
import { StyledFlexDiv } from "components/Card/StyledCard";
import Datetime from "react-datetime";
import { StyledDivider } from "components/Card/StyledCard";
import { StyledFlexDivSpace } from "components/Card/StyledCard";
import { StyledWith1 } from "components/Card/StyledCard";
import { StyledWith2 } from "components/Card/StyledCard";

function ArticleCard() {
  const [articles, SetActicles] = useState([]);
  const [search, SetSearch] = useState('news');
  const [fromDate, SetFromDate] = useState(null);
  const [toDate, SetToDate] = useState(null);
  const [category, SetCategory] = useState(null);
  const [sources, SetSources] = useState([]);
  const [selectedsources, setSelectedSources] = useState([]);

  const categoryList = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

  const handleCheckboxChange = (value) => {
    if (selectedsources.includes(value)) {
      setSelectedSources(selectedsources.filter((item) => item !== value));
    } else {
      setSelectedSources([...selectedsources, value]);
    }
  };

  console.log(selectedsources);

  const handleSearchInput = (e) => {
    SetSearch(e.target.value);
  }
  const handleSearch = () => {
    fetcharticles(search, fromDate, toDate, category)
  }

  const fetcharticles = (q, from, to, category) => {
    const params = {
      q,
      from,
      to,
      category
    };
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `api/fetcharticles?${queryString}`;
    apiClient.get(url)
      .then(response => {
        setSelectedSources([]);
        SetActicles(response.data);
        const art = response.data;
        art.forEach(element => {
          const src = element.Source;
          SetSources(prevSource => {
            if (!prevSource.includes(src)) {
              return [...prevSource, src];
            } else {
              return prevSource;
            }
          });
        });

      })
      .catch(error => {
        console.log(error);
      });
  };

  const filteredData = articles.filter((item) => selectedsources.includes(item.Source));

  console.log(filteredData);

  useEffect(() => {
    fetcharticles(search, fromDate, toDate, category)


  }, []);

  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="section section-tabs">
        <StyledContainer>
          <Card>
            <CardBody>


              <StyledFlexDivSpace>
                <StyledWith1>
                  <p className="text-center">Search</p>
                  <Row>
                    <Col xl="8" md="8"  >
                      <FormGroup>
                        <Input
                          className="form-control-success"
                          placeholder="Search Articles"
                          type="text"
                          value={search}
                          onChange={handleSearchInput}
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col xl="3" md="4">
                      <Button
                        className="btn btn-info mt-0"
                        onClick={handleSearch}
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>

                </StyledWith1>
                <div >
                  <StyledDivider />
                </div>

                <StyledWith2 >
                  <p className="text-center">Sort by Date</p>
                  <Row>
                    <Col md="6">
                      <div className="datepicker-container">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "From" }}
                          />
                        </FormGroup>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="datepicker-container">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "to" }}
                          />
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </StyledWith2>
                {/* <Col xl="8" sm="12" md="7">
                  <p className="text-center">Search</p>
                  <Row>
                    <Col xl="8" md="8"  >
                      <FormGroup>
                        <Input
                          className="form-control-success"
                          placeholder="Search Articles"
                          type="text"
                          value={search}
                          onChange={handleSearchInput}
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col xl="3" md="4">
                      <Button
                        className="btn btn-info mt-0"
                        onClick={handleSearch}
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>

                </Col>
                <Col xl="1" sm="1" md="1">
                  <StyledDivider />
                </Col>

                <Col xl="3" sm="12" md="4">
                  <p className="text-center">Sort by Date</p>
                  <Row>
                    <Col md="6">
                      <div className="datepicker-container">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "From" }}
                          />
                        </FormGroup>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="datepicker-container">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "to" }}
                          />
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </Col> */}
              </StyledFlexDivSpace>
            </CardBody>
          </Card>
          <Card>
            <p className="category mb-0 ml-4 mt-3 text-center">Fliter Category</p>
            <StyledFlexDiv>
              {categoryList.map((item, index) => {
                return (

                  <FormGroup check key={index}>
                    <Label check>
                      <Input type="checkbox" name={item} checked={selectedsources.includes(item)} onChange={() => handleCheckboxChange(item)}></Input>
                      <span className="form-check-sign"></span>
                      {item}
                    </Label>
                  </FormGroup>

                );
              })}
            </StyledFlexDiv>
          </Card>

          <Row>
            <Col className="ml-auto mr-auto" md="3" xl="2">
              <Card>
                <CardBody>
                  <Row>
                    <p className="category mb-0 ml-4">Fliter Source</p>
                    {sources.map((item, index) => {
                      return (
                        <Col className="mb-3 ml-2 center" lg="12" sm="6" key={index}>
                          <FormGroup check >
                            <Label check>
                              <Input type="checkbox" name={item} checked={selectedsources.includes(item)} onChange={() => handleCheckboxChange(item)}></Input>
                              <span className="form-check-sign"></span>
                              {item}
                            </Label>
                          </FormGroup>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="9" xl="10">
              <Row>
                {
                  selectedsources.length === 0 ?

                    articles.map((item, index) => {
                      return (
                        <Col md="6" key={index}>
                          {
                            <CardDetails title={item.Title} description={item.Description} author={item.Author} source={item.Source} published_at={item.Published_date} />
                          }

                        </Col>
                      );
                    })
                    :

                    filteredData.map((item, index) => {
                      return (
                        <Col md="6" key={index}>
                          {

                            <CardDetails title={item.Title} description={item.Description} author={item.Author} source={item.Source} published_at={item.Published_date} />
                          }

                        </Col>
                      );
                    })

                }
              </Row>

            </Col>

          </Row>
        </StyledContainer>
      </div>
    </>
  );
}

export default ArticleCard;

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
import Loader from "./Loader";

function ArticleCard() {
  const [articles, SetActicles] = useState([]);
  const [search, SetSearch] = useState('news');
  const [fromDate, SetFromDate] = useState(null);
  const [toDate, SetToDate] = useState(null);
  const [category, SetCategory] = useState(null);
  const [sources, SetSources] = useState([]);
  const [selectedsources, setSelectedSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryList = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = articles.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleCheckboxChange = (value) => {
    if (selectedsources.includes(value)) {
      setSelectedSources(selectedsources.filter((item) => item !== value));
    } else {
      setSelectedSources([...selectedsources, value]);
    }
  };

  const handleCategoryChange = (value) => {
    SetCategory(value)
    setLoading(true);
    fetcharticles(search, fromDate, toDate, value)
  };

  const handleFromChange = (e) => {
    const formattedDate = e.format('YYYY-MM-DD');
    SetFromDate(formattedDate)
    fetcharticles(search, formattedDate, toDate, category)
  };

  const handleToChange = (e) => {
    const formattedDate = e.format('YYYY-MM-DD');
    SetToDate(formattedDate)
    setLoading(true);
    fetcharticles(search, fromDate, formattedDate, category)
  };


  const handleSearchInput = (e) => {
    SetSearch(e.target.value);
  }
  const handleSearch = () => {
    setLoading(true);
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
        setLoading(false);
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
      <div className="section">
        <StyledContainer>
          <Card>
            <CardBody>
              <StyledFlexDivSpace>
                <StyledWith1>
                  <p className="text-center">Search</p>
                  <Row>
                    <Col xl="8" md="8" sm="8" >
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
                    <Col xl="3" md="4" sm="4">
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
                            dateFormat="YYYY-MM-DD"
                            onChange={handleFromChange}
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
                            dateFormat="YYYY-MM-DD"
                            onChange={handleToChange}
                          />
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </StyledWith2>
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
                      <Input type="checkbox" name={item} checked={category === item} onChange={() => handleCategoryChange(item)}></Input>
                      <span className="form-check-sign"></span>
                      {item}
                    </Label>
                  </FormGroup>

                );
              })}
            </StyledFlexDiv>
          </Card>
          {loading && <Loader />}
          <Row>
            <Col className="ml-auto mr-auto" md="3" xl="2" sm="3">
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
            <Col className="ml-auto mr-auto" md="9" xl="10" sm="9">
              <Row>
                {
                  selectedsources.length === 0 ?

                    currentItems.map((item, index) => {
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
              {Array.from({ length: Math.ceil(articles.length / itemsPerPage) }, (_, index) => (
                <button
                  className='btn center'
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  disabled={currentPage === index + 1}
                >
                  {index + 1}
                </button>

              ))}

            </Col>

          </Row>
        </StyledContainer>
      </div>
    </>
  );
}

export default ArticleCard;

import apiClient from 'Utils/api';
import { StyledContainer } from 'components/Card/StyledCard'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import IndexNavbar from 'components/Navbars/IndexNavbar';

const Personalised = () => {
    const navigate = useNavigate();
    const [allSources, setSources] = useState([]);
    const categoryList = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

    const [selectedSources, setSelectedSources] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSourcesSelect = (value) => {
        if (selectedSources.includes(value)) {
            setSelectedSources(selectedSources.filter((item) => item !== value));
        } else {
            setSelectedSources([...selectedSources, value]);
        }
    };

    const handleCategorySelect = (value) => {
        if (selectedCategories.includes(value)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== value));
        } else {
            setSelectedCategories([...selectedCategories, value]);
        }
    };

    const fetchallSources = () => {
        apiClient.get('/api/fetchsources')
            .then(response => {
                setSources(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleSubmt = () => {
        const data = {
            "sources": selectedSources,
            "category": selectedCategories,
        }

        apiClient.post('/api/postpersonalisedData', data)
            .then(response => {
                if (response.data.status === 201) {
                    navigate('/news')
                }
                
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchallSources();
    }, [])
    return (
        <>
        <IndexNavbar />
          <div className="section">
            <StyledContainer>
                <Card>
                    <CardHeader>
                        <h4 className="title title-up text-center">Preferences Setting</h4>
                    </CardHeader>
                    <Form>
                        <CardBody>
                            <p className='text-center'>Select Preferenced News Sources</p>
                            <Row>
                                {
                                    allSources.map((item, index) => {
                                        return (
                                            <Col md="2" className='m-1' key={index}>
                                                <FormGroup check >
                                                    <Label check>
                                                        <Input type="checkbox" name={item.id} checked={selectedSources.includes(item.id)} onChange={() => handleSourcesSelect(item.id)}></Input>
                                                        <span className="form-check-sign"></span>
                                                        {item.name}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>

                            <p className='text-center'>Select Preferenced Categories</p>
                            <Row>
                                {
                                    categoryList.map((item, index) => {
                                        return (
                                            <Col md="2" className='m-1' key={index}>
                                                <FormGroup check >
                                                    <Label check>
                                                        <Input type="checkbox" name={item} checked={selectedCategories.includes(item)} onChange={() => handleCategorySelect(item)}></Input>
                                                        <span className="form-check-sign"></span>
                                                        {item}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            <p className='text-center'>Select Authors</p>
                        </CardBody>
                        <CardFooter>
                            <div className="modal-footer">
                                <Button color="default" type="button" onClick={handleSubmt}>
                                    Save Preferences
                                </Button>

                            </div>
                        </CardFooter>
                    </Form>
                </Card>
            </StyledContainer>

        </div>
        </>
      
    )
}

export default Personalised
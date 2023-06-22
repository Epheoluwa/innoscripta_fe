import apiClient from 'Utils/api';
import { StyledContainer } from 'components/Card/StyledCard'
import IndexNavbar from 'components/Navbars/IndexNavbar';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row, } from 'reactstrap';
import Loader from './index-sections/Loader';

const PersonalisedNews = () => {
    const [allNews, setAllNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [loading, setLoading] = useState(true);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the current page items
    const currentItems = allNews.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const fetUserNews = () => {
        apiClient.get('/api/personalisednews')
            .then(response => {
                setAllNews(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetUserNews();
    }, [])
    return (
        <>
            <IndexNavbar />
            <div className="section">
                <StyledContainer>
                    { loading && <Loader /> }
                    
                    <Row>
                        {currentItems.map((item, index) => {

                            return (
                                <Col md="4" key={index}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md="12">
                                                    <h4 className="mt-3">{item.Name ? "Name" : "Title"}: {item.Name ? item.Name : item.Title}</h4>
                                                    <p>
                                                        Description: {item.Description}
                                                    </p>
                                                    <h5 className="mt-1">{item.Category ? "Category" : "Author"}: {item.Category ? item.Category : item.Author} </h5>
                                                    <h6 className="mt-1">{item.Country ? "Country" : "Source"}: {item.Country ? item.Country : item.Source}</h6>
                                                    <h6 className="mt-1">{item.Published_date ? "Published At:" : ""} {item.Published_date ? item.Published_date : ""}</h6>
                                                </Col>
                                            </Row>

                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                    {Array.from({ length: Math.ceil(allNews.length / itemsPerPage) }, (_, index) => (
                        <button
                            className='btn center'
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                        >
                            {index + 1}
                        </button>

                    ))}


                </StyledContainer>
            </div>
        </>

    )
}

export default PersonalisedNews
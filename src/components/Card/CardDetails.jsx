import React from 'react'
import {
    Card,
    CardBody,
    Row,
    Col,
} from "reactstrap";
const CardDetails = ({title, description, author, source, published_at}) => {
    return (
        <Card>
            <CardBody>
                <Row>
                    <Col md="12">
                        <h4 className="mt-3">{title}</h4>
                        <p>
                            {description}
                        </p>
                        <h5 className="mt-1">Author: {author}</h5>
                        <h6 className="mt-1">Source: {source}</h6>
                        <h6 className="mt-1">Published At: {published_at}</h6>
                    </Col>
                </Row>

            </CardBody>
        </Card>
    )
}

export default CardDetails
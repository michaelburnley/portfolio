import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import LangImg from '../../Image/LangImg';

const Block = (props) => {

    const bullets = _.map(props.bullets, bullet => (<li>{bullet}</li>));

    return (
        <div>
            <div className="about-wrapper__image">
                <LangImg alt={props.name} filename={props.img} />
            </div>
            <div>{props.title}</div>
            <div>{props.business}</div>
            <div>{props.location}</div>
            <div>{props.dates}</div>
            <ul>{bullets}</ul>
            <div>{props.description}</div>
        </div>
    );
}

export default (props) => {

    const { data } = props;

    const items = _.map(data, item => (<Block {...item} />));

    return (
        <Row className="about-wrapper">
            {items}
        </Row>
    );
}
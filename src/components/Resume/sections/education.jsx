import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import LangImg from '../../Image/LangImg';

const Block = (props) => (
    <div>
        <div className="about-wrapper__image">
            <LangImg alt={props.name} filename={props.img} />
        </div>
        <div>{props.name}</div>
        <div>{props.dates}</div>
        <div>{props.location}</div>
    </div>
);

export default (props) => {

    const { data } = props;

    const items = _.map(data, item => (<Block {...item} />));

    return (
        <Row className="about-wrapper">
            {items}
        </Row>
    );
}
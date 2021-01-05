import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import LangImg from '../../Image/LangImg';

const Block = (props) => (
    <div>
        <div className="language-wrapper__image">
            <LangImg alt={props.name} filename={props.img} />
        </div>
        <div className="language-wrapper__namee">{props.name}</div>
    </div>
);

export default (props) => {

    const { data } = props;

    const items = _.map(data, item => (<Block {...item} />));

    return (
        <Row className="language-wrapper">
            {items}
        </Row>
    );
}
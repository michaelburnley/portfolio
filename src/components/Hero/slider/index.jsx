import React from 'react';
import _ from 'lodash';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import SlideImg from '../../Image/SlideImg';

import 'react-awesome-slider/dist/styles.css';
import './styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default (props) => {

    const media = _.map(props.images, (image, index) => {
        return (
            <div key={index} data-src={`../../../../${image}`} />
        );
    })

    console.log(media)

    return (
        <AutoplaySlider
            className="slider"
            play={true}
            showTimer={false}
            bullets={false}
            organicArrows={false}
            cancelOnInteraction={false}
            interval={300}
        >
            {media}
        </AutoplaySlider>
    );
}
import React from 'react';
import _ from 'lodash';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default (props) => {

    const media = _.map(props.images, (image) => {
        return (
            <div data-src={image} />
        );
    })

    console.log(media);

    return (
        <AutoplaySlider
            className="slider"
            play={true}
            showTimer={false}
            bullets={false}
            organicArrows={false}
            interval={2000}
        >
            {media}
        </AutoplaySlider>
    );
}
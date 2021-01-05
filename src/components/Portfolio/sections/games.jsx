import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import BannerImg from '../../Image/BannerImg';

const Game = (props) => {
    const {
        title,
        description,
        platform,
        development_tools,
        language,
        media,
        repo,
        url,
        design_docs
    } = props;

    const banner = _.find(media, { type: `banner` });
    const videos = _.filter(media, { type: `video` });
    const images = _.filter(media, { type: `image` })

    const game_images = _.map(images, img => (
        <div>
            <div className="game-wrapper__image">
                <BannerImg alt={img.alt || title} filename={img.file} />
            </div>
            {
                img.alt &&
                <div>{img.alt}</div>
            }
        </div>
    ));

    const game_videos = _.map(videos, video => (
        <div className="game-wrapper__video">
            <video controls className={videos.length < 2 ? `full` : ``}>
                <source src={video.file} type="video/mp4" />
            </video>
            <div className="subtitle">{video.alt}</div>
        </div>
    ));

    const docs = design_docs ?
        _.map(design_docs, doc => (
            <a className="cta-btn cta-btn--hero" href={doc.file} download>{doc.title}</a>
        )) : null;

    return (
        <div className="game">
            <Row className="game-wrapper__row">
                <Col md={6} sm={12}>
                    <h2 className="title">{title}</h2>
                    {
                        banner &&
                        <div className="game-wrapper__image">
                            <BannerImg alt={title} filename={banner.file} />
                        </div>
                    }
                </Col>
                <Col md={6} sm={12}>
                    <div className="description">{description}</div>
                    <Row className="details">
                        <div className="platform">Platform: <br />{platform}</div>
                        <div className="tools">Tools: <br />{development_tools}</div>
                        <div className="lang">Language: <br />{language}</div>
                    </Row>
                    <div className="buttons">
                        {docs}
                        {repo && <a className="cta-btn cta-btn--hero" href={repo}>View Repo</a>}
                        {url && <a className="cta-btn cta-btn--hero" href={url}>See More</a>}
                    </div>
                    <div className="media">
                        {game_videos}
                        {game_images}
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default (props) => {
    const { data } = props;

    const items = _.map(data, item => (<Game {...item} />));

    return (
        <Row className="game-wrapper">
            {items}
        </Row>
    );
}
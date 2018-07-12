import React from 'react'
import PropTypes from 'prop-types'
import './carousel-news-item.css'
const CarouselNewsItem = ({className, image_path, image, title, topic, date}) => {
    return (
        <div className={['carousel-news-item', className].join(' ')}>
            <img className={'carousel-news-item__img'} alt={''} src={image} />
            <div className={'carousel-news-item__content'}>
                <div className={'carousel-news-item__title'}>{title}</div>
                <div className={'carousel-news-item__topic'}>{topic}</div>
                <div className={'carousel-news-item__date'}>{date}</div>
            </div>
        </div>
    )
}

CarouselNewsItem.propTypes = {
    className: PropTypes.string,
    image_path: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    topic: PropTypes.string,
    date: PropTypes.string
}

CarouselNewsItem.defaultProps = {
    className: ''
}

export default CarouselNewsItem
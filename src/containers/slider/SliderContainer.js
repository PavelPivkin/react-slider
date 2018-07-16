import React from 'react'
import Slider from "../../components/slider/Slider";
import CarouselNewsItem from "../../components/carousel-news-item/CarouselNewsItem";
import PropTypes from 'prop-types'


const items = [
    {
        title: 'Котики милейшие животные',
        topic: 'в целом мире',
        date: '',
        image: 'http://www.mixnews.lv/uploads/mixer/images/2016/10/13/kokoko_1_webmixerdetailed_jpg.jpg'
    },
    {
        title: 'Погладишь его',
        topic: 'и сразу тебе станет лучше',
        date: '',
        image: 'https://medialeaks.ru/wp-content/uploads/2017/10/catbread-02-586x500.jpg'
    },
    {
        title: 'А еще с ними прикольно играть',
        topic: 'только берегите руки!',
        date: '',
        image: 'http://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg'
    },
    {
        title: 'Погладишь его',
        topic: 'и сразу тебе станет лучше',
        date: '',
        image: 'https://medialeaks.ru/wp-content/uploads/2017/10/catbread-02-586x500.jpg'
    },
    {
        title: 'А еще с ними прикольно играть',
        topic: 'только берегите руки!',
        date: '',
        image: 'http://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg'
    },
    {
        title: 'Погладишь его',
        topic: 'и сразу тебе станет лучше',
        date: '',
        image: 'https://medialeaks.ru/wp-content/uploads/2017/10/catbread-02-586x500.jpg'
    },
    {
        title: 'А еще с ними прикольно играть',
        topic: 'только берегите руки!',
        date: '',
        image: 'http://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg'
    }
]

class SliderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0,
            isLoading: false,
            error: null,
            hideRightButton: false,
            hideLeftButton: true
        };
        this.shiftPercantage = 1;
    }

    onButtonClick = (scrollWidth, offsetWidth, direction) => {
        let shift = offsetWidth * this.shiftPercantage * direction;
        let nextPosition = this.state.currentPosition + shift;
        if (nextPosition <= 0) {
            if (nextPosition <= offsetWidth - scrollWidth) {
                this.setState({
                    currentPosition: offsetWidth - scrollWidth,
                    hideRightButton: true,
                    hideLeftButton: false
                })
                return;
            } else {
                this.setState ({
                    currentPosition: nextPosition,
                    hideRightButton: false,
                    hideLeftButton: false
                });
            }
        } else {
            this.setState({
                currentPosition: 0,
                hideLeftButton: true
            })
        }
    }


    getItems = () => {
        return items.map((item, index) => <CarouselNewsItem title={item.title} topic={item.topic} date={item.date} image={item.image}/>)
    }


    render() {
        return <Slider
            onMount={this.sliderMountHandler}
            position={this.state.currentPosition}
            onButtonClick={this.onButtonClick}
            shift={this.state.shift}
            hideRightButton={this.state.hideRightButton}
            hideLeftButton={this.state.hideLeftButton}
        >{this.getItems()}</Slider>;
    }
}

SliderContainer.propTypes = {
    items: PropTypes.array
}

export default SliderContainer
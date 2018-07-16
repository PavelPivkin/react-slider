import React, { Component } from 'react';
import Slider from "./components/slider/Slider";
import CarouselNewsItem from "./components/carousel-news-item/CarouselNewsItem";

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
];

const getItems = () => {
    return items.map((item, index) => <CarouselNewsItem title={item.title} topic={item.topic} date={item.date} image={item.image}/>)
};

class App extends Component {
  render() {
    return (
      <Slider items={getItems()}/>
    );
  }
}

export default App;

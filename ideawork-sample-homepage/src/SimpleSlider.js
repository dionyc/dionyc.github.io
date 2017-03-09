import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/slider1-ideawork.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false
    };
    return (
      <div className="slick-slider container">
        <Slider {...settings}>
            <div><img alt="Bureaux exquisite" role="presentation" src={Image1} /></div>
            <div><img alt="St Mortiz" role="presentation" src={Image1} /></div>
            <div><img alt="K-pop" role="presentation" src={Image1} /></div>
        </Slider>
      </div>
    );
  }
}
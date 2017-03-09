import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import 'react-bem-grid/dist/Grid.css';
import Image1 from '../assets/1-image-ideawork.jpg';
import Image2 from '../assets/2-image-ideawork.jpg';
import Image3 from '../assets/3-image-ideawork.jpg';
import Image4 from '../assets/4-image-ideawork.jpg';
import Image5 from '../assets/5-image-ideawork.jpg';
import Image6 from '../assets/6-image-ideawork.jpg';

export default class GridExample extends Component {
  render() {
    return (
      <Grid className='grid-container'>
        <Row>
            <Col xs={12} sm={8} md={6} lg={4}>
                <img src={Image1} alt="Bureaux exquisite delightful carefully curated." />
                <ul className='grid-item-ul'>
                    <li className='date'>FEBRUARY 10 2017</li>
                    <li className='Springville'>Bureaux exquisite delightful carefully curated.</li>
                    <li className='ACaslonPro'>Presented by <span>Lorem Ipsum</span></li>
                </ul>    
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
                <img src={Image3} alt="Sharp bureaux sleepy K-pop carefully curated." />
                  <ul className='grid-item-ul'>
                    <li className='date'>FEBRUARY 2 2017</li>
                    <li className='Springville'>Sharp bureaux sleepy K-pop carefully curated.</li>
                    <li className='ACaslonPro'>Presented by <span>Lorem Ipsum</span></li>
                </ul>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
                <img src={Image5} alt="St Moritz uniforms Beams." />
                <ul className='grid-item-ul'>
                    <li className='date'>JANUARY 27 2017</li>
                    <li className='Springville'>St Moritz uniforms Beams.</li>
                    <li className='ACaslonPro'>Presented by <span>Lorem Ipsum</span></li>
                </ul>                
            </Col>        
        </Row>
        <Row>
            <Col xs={12} sm={8} md={6} lg={4}>
                <img src={Image2} alt="Esse airport veniam ryokan soft power." />
                <ul className='grid-item-ul'>
                    <li className='date'>JANUARY 21 2017</li>
                    <li className='Springville'>Esse airport veniam ryokan soft power.</li>
                    <li className='ACaslonPro'>Presented by <span>Lorem Ipsum</span></li>
                </ul>                
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
                <img src={Image4} alt="K-pop extraordinary." />
                <ul className='grid-item-ul'>
                    <li className='date'>JANUARY 18 2017</li>
                    <li className='Springville'>K-pop extraordinary.</li>
                    <li className='ACaslonPro'>Presented by <span>Lorem Ipsum</span></li>
                </ul>                
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
                <img src={Image6} alt="Artisanal iconic cutting-edge business class." />
                <ul className='grid-item-ul'>
                    <li className='date'>JANUARY 12 2017</li>
                    <li className='Springville'>Artisanal iconic cutting-edge business class.</li>
                    <li className='ACaslonPro'>Presented by <span>Lorem Ipsum</span></li>
                </ul>                
            </Col>        
        </Row>        
      </Grid>
    );
  }
}
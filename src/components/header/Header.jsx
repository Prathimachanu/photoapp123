import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './header.css';

const Header = ({ loggedIn, handleLogout }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <Slider {...settings}>
        <div>
          <img
            className="headerImg"
            src="https://static.vecteezy.com/system/resources/thumbnails/024/264/951/small/blurred-spring-background-nature-with-blooming-glade-generative-ai-technology-free-photo.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="headerImg"
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
            alt=""
          />
        </div>
        <div>
          <img
            className="headerImg"
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt=""
          />
        </div>
      </Slider>
      <div className="headerTitles">
        <span className="headerTitleLg">Start Exploring</span>
        <span className="headerTitleSm">Photography Website</span>
        {loggedIn && (
          <button className="startExploringButton" onClick={scrollToCategories}>
            Start Exploring
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

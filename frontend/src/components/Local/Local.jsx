import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Local() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/store');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const carouselArrowStyles = {
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    backgroundColor: '#1E3A8A',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '13px',
    padding: '10px',
    cursor: 'pointer',
    zIndex: '1',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  };

  const carouselContainerStyles = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const titleStyles = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#000000',
  };

  return (
    <div style={carouselContainerStyles}>
      <h1 style={titleStyles}>También te pueden interesar</h1>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        infiniteLoop={true}
        centerMode={false}
        showIndicators={false}
        centerSlidePercentage={100 / 5}
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button onClick={onClickHandler} className="carousel-arrow" style={{ ...carouselArrowStyles, right: '0' }}>
              Next
            </button>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button onClick={onClickHandler} className="carousel-arrow" style={{ ...carouselArrowStyles, left: '0' }}>
              Prev
            </button>
          )
        }
      >
        {products.slice(0, 15).map((product) => (
          <div key={product.id} className="p-4" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '10px', color: '#000000' }}>{product.name}</h3>
            <img
              src={product.img}
              alt={product.name}
              style={{ width: '300px', height: 'auto', marginBottom: '10px' }}
            />
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px', color: '#000000' }}>${product.price}</p>
            <p style={{ marginBottom: '10px', color: '#000000' }}>{product.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
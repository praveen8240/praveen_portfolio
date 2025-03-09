import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import clg from './assets/clg.jpg';
import hackit from './assets/hackit.jpg';
import itgrp from './assets/itgrp.jpg';
import mern from './assets/mern.jpg';
import principal from './assets/principal.jpg';
import saisatish from './assets/saisatish.jpg';
import seminar from './assets/seminar.jpg';
import skelo from './assets/skelo.jpg';
import vr from './assets/vr.jpg';

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      image: mern,
      title: "🏆 Full-Stack Hackathon Winners",
      description: "Modern Web Development",
    },
    {
      image: vr,
      title: "🤖 AI Hackathon Champions",
      description: "At VR-Siddhartha College",
    },
    {
      image: hackit,
      title: "🛡️ HackIt Hackathon Winners",
      description: "Web Application Security",
    },
    {
      image: clg,
      title: "🥇 Ranked 1st Among 50 Teams",
      description: "Excellence in Education & Innovation",
    },
    {
      image: itgrp,
      title: "🤝 Teamwork Makes the Dream Work",
      description: "Collaborative Learning Environment",
    },
    {
      image: principal,
      title: "🎉 Celebration with Our College Principal",
      description: "Leading with Vision",
    },
    {
      image: saisatish,
      title: "📸 Winning Moment with Indian Servers CEO Sai Satish",
      description: "Celebrating Excellence",
    },
    {
      image: seminar,
      title: "💡 Idea Presentation",
      description: "Improving Communication Skills",
    },
    {
      image: skelo,
      title: "📝 Students Taking an Exam on Our Website Skelo",
      description: "Beyond Classroom Learning",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Resume auto-play after 3 seconds of user interaction
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next slide
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right - previous slide
      prevSlide();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <Container fluid className="p-2 p-md-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={10} lg={8}>
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Slide */}
            <div 
              style={{
                height: '300px',
                maxHeight: '70vh',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '@media (min-width: 768px)': {
                  height: '500px'
                }
              }}
              className="slide-container"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease-in-out'
                }}
              />
              
              {/* Text Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '1rem',
                  color: 'white',
                  transition: 'opacity 0.3s ease-in-out'
                }}
                className="slide-text"
              >
                <h2 
                  style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.25rem'
                  }}
                  className="slide-title"
                >
                  {slides[currentSlide].title}
                </h2>
                <p 
                  style={{ 
                    fontSize: '0.9rem',
                    margin: 0
                  }}
                  className="slide-description"
                >
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Navigation Buttons - Hidden on small mobile screens */}
              <button
                onClick={prevSlide}
                className="nav-button nav-button-prev d-none d-sm-block"
                aria-label="Previous slide"
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.5)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="nav-button nav-button-next d-none d-sm-block"
                aria-label="Next slide"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.5)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              >
                →
              </button>
            </div>

            {/* Enhanced Slide Indicators */}
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '6px',
                marginTop: '0.5rem',
                padding: '6px',
                flexWrap: 'wrap'
              }}
              className="slide-indicators"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: currentSlide === index ? '#007bff' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)',
                    opacity: currentSlide === index ? 1 : 0.6,
                    padding: 0,
                    margin: '0 2px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.3)';
                    e.target.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = currentSlide === index ? 'scale(1.2)' : 'scale(1)';
                    e.target.style.opacity = currentSlide === index ? '1' : '0.6';
                  }}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Add custom CSS for responsiveness */}
      <style>
        {`
        @media (min-width: 576px) {
          .slide-container {
            height: 350px !important;
          }
          .slide-title {
            font-size: 1.5rem !important;
          }
          .slide-description {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 768px) {
          .slide-container {
            height: 400px !important;
          }
          .slide-title {
            font-size: 1.75rem !important;
          }
          .slide-text {
            padding: 1.5rem !important;
          }
          .nav-button {
            width: 36px !important;
            height: 36px !important;
          }
        }
        
        @media (min-width: 992px) {
          .slide-container {
            height: 500px !important;
          }
          .slide-title {
            font-size: 2rem !important;
            margin-bottom: 0.5rem !important;
          }
          .slide-description {
            font-size: 1.1rem !important;
          }
          .nav-button {
            width: 40px !important;
            height: 40px !important;
          }
        }
        `}
      </style>
    </Container>
  );
};

export default Achievements;
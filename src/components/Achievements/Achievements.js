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
      const timer = setInterval(nextSlide, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Slide */}
            <div 
              style={{
                height: '500px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
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
                  padding: '2rem',
                  color: 'white',
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {slides[currentSlide].title}
                </h2>
                <p style={{ fontSize: '1.1rem' }}>
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.5)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.5)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              >
                →
              </button>
            </div>

            {/* Enhanced Slide Indicators */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '8px',
              marginTop: '1rem',
              padding: '8px'
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: currentSlide === index ? '#007bff' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)',
                    opacity: currentSlide === index ? 1 : 0.6
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
    </Container>
  );
};

export default Achievements;
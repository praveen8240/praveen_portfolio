import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div style={{ position: 'relative' }}>
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
                  transition: 'opacity 0.5s ease-in-out'
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
                  color: 'white'
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
                  cursor: 'pointer'
                }}
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
                  cursor: 'pointer'
                }}
              >
                →
              </button>
            </div>

            {/* Slide Indicators */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '8px',
              marginTop: '1rem' 
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: currentSlide === index ? '20px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: currentSlide === index ? '#007bff' : '#ccc',
                    border: 'none',
                    transition: 'all 0.3s ease'
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
import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About Quiz Quest</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p className="lead">
            Quiz Quest is an interactive platform designed to make learning fun and engaging through quizzes and educational content.
          </p>
          <p>
            Our mission is to provide an accessible and enjoyable way for people to test their knowledge and learn new things about various subjects, particularly focusing on science and history.
          </p>
          <h3 className="mt-4">Our Features</h3>
          <ul>
            <li>Interactive quizzes on various topics</li>
            <li>Educational content about famous scientists</li>
            <li>User-friendly interface</li>
            <li>Progress tracking</li>
            <li>Regular content updates</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About; 
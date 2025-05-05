import React, { useState } from 'react';
import { Container, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleText = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
      <Container className="mt-4">
        <Container className="text-center mt-5">
          <h1>Welcome to Quiz Quest</h1>
          <p>Challenge yourself with fun and interactive quizzes!</p>
          <ButtonGroup className="gap-2">
            <Link to="/quiz">
              <Button variant="primary" size="lg">Start Quiz</Button>
            </Link>
            <Link to="/register">
              <Button variant="success" size="lg">Register</Button>
            </Link>
          </ButtonGroup>
        </Container>
      </Container>

      <Container className="mt-4 p-4 bg-light rounded shadow">
        <h2 className="text-center mb-4">Most Famous Scientists</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/ilbert-istin.png" alt="Ilbert Istin" />
              <Card.Body className="text-center">
                <Card.Title>Ilbert Istin</Card.Title>
                <Card.Text>
                  Ilbert Istin was a significant figure in the history of the Indian judiciary during the British colonial period. He is best known for his role in the Ilbert Bill of 1883, which was a proposed legislation aimed at allowing Indian judges to preside over cases involving British subjects in India.
                  {expandedCards['1'] && (
                    <span> Although the bill was eventually modified, it marked an important moment in the Indian struggle for legal equality and contributed to the broader movement for civil rights during British rule.</span>
                  )}
                </Card.Text>
                <Button variant="primary" onClick={() => toggleText('1')}>
                  {expandedCards['1'] ? 'Read Less' : 'Read More'}
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/ibn-sina.png" alt="Ibn Sina" />
              <Card.Body className="text-center">
                <Card.Title>Ibn Sina</Card.Title>
                <Card.Text>
                  Ibn Sina, also known as Avicenna in the West, was a Persian polymath and one of the most influential thinkers of the Islamic Golden Age. Born in 980 CE in Bukhara (present-day Uzbekistan), he made significant contributions to various fields, including philosophy, medicine, astronomy, and mathematics.
                  {expandedCards['2'] && (
                    <span> Ibn Sina's work laid the foundation for later philosophers and scientists in both the East and the West, and he is regarded as one of the greatest medical scholars in history.</span>
                  )}
                </Card.Text>
                <Button variant="primary" onClick={() => toggleText('2')}>
                  {expandedCards['2'] ? 'Read Less' : 'Read More'}
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/isaac-newton.png" alt="Isaac Newton" />
              <Card.Body className="text-center">
                <Card.Title>Isaac Newton</Card.Title>
                <Card.Text>
                  Isaac Newton was an English mathematician, physicist, astronomer, and author, widely regarded as one of the most influential scientists of all time. Born in 1643, he is best known for developing the theory of gravitation, which revolutionized our understanding of the universe.
                  {expandedCards['3'] && (
                    <span> Newton's discoveries not only transformed physics but also shaped the course of scientific thought, influencing countless scientists and mathematicians for centuries.</span>
                  )}
                </Card.Text>
                <Button variant="primary" onClick={() => toggleText('3')}>
                  {expandedCards['3'] ? 'Read Less' : 'Read More'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home; 
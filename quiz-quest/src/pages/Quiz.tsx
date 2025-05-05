import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "Who is known as the father of modern physics?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: 2
  },
  // Add more questions as needed
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < sampleQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <Container className="mt-5 text-center">
        <Card>
          <Card.Body>
            <h2>Quiz Complete!</h2>
            <p>Your score: {score} out of {sampleQuestions.length}</p>
            <Button variant="primary" onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResults(false);
              setSelectedAnswer(null);
            }}>
              Restart Quiz
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Quiz</h2>
          <div className="mb-4">
            <h4>Question {currentQuestion + 1} of {sampleQuestions.length}</h4>
            <p>{sampleQuestions[currentQuestion].question}</p>
          </div>
          <Form>
            {sampleQuestions[currentQuestion].options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={`option-${index}`}
                label={option}
                name="answer"
                checked={selectedAnswer === index}
                onChange={() => handleAnswerSelect(index)}
                className="mb-2"
              />
            ))}
          </Form>
          <div className="text-center mt-4">
            <Button
              variant="primary"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              {currentQuestion + 1 === sampleQuestions.length ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Quiz; 
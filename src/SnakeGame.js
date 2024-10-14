import React, { useEffect, useRef, useState } from 'react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 100, y: 100 }]);
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 20) * 20,
    y: Math.floor(Math.random() * 20) * 20,
  });
  const [direction, setDirection] = useState({ x: 20, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  const CANVAS_SIZE = 400;
  const SNAKE_SIZE = 20;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -SNAKE_SIZE });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: SNAKE_SIZE });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -SNAKE_SIZE, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: SNAKE_SIZE, y: 0 });
        break;
      default:
        break;
    }
  };

  const checkCollision = (head) => {
    return (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= CANVAS_SIZE ||
      head.y >= CANVAS_SIZE ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    );
  };

  const gameLoop = () => {
    if (!canvasRef.current || gameOver) return;

    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Move the snake
    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (checkCollision(newHead)) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];

    // Check if snake eats the food
    if (newHead.x === food.x && newHead.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * 20) * 20,
        y: Math.floor(Math.random() * 20) * 20,
      });
    } else {
      newSnake.pop(); // Only remove the tail if no food was eaten
    }

    setSnake(newSnake);

    // Draw the snake
    ctx.fillStyle = 'green';
    newSnake.forEach((segment) => ctx.fillRect(segment.x, segment.y, SNAKE_SIZE, SNAKE_SIZE));

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, SNAKE_SIZE, SNAKE_SIZE);
  };

  useEffect(() => {
    const intervalId = setInterval(gameLoop, 100);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [snake, food, direction, gameOver]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>snake game</h1>
      <h2>score: {score}</h2>
      {gameOver && <h2>game over. refresh to play again</h2>}
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        style={{ border: '1px solid black' }}
      />
    </div>
  );
};

export default SnakeGame;

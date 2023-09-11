import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [start, setStart] = React.useState(false);
  React.useEffect(() => {
    start
      ? setInterval(() => {
          setCount(count + 1);
        }, 1000)
      : clearInterval(
          setInterval(() => {
            setCount(count + 1);
          }, 1000)
        );
  });

  const handleStartWatch = () => {
    setStart(true);
  };

  const handleStopWatch = () => {
    setStart(false);
  };
  return (
    <div>
      <button onClick={handleStartWatch}>Start</button>
      {count}
      <button onClick={handleStopWatch}>Stop</button>
    </div>
  );
}

import { useState, useEffect } from "react";
import styled from "styled-components";

export const UseStateChild = ({ callback }) => {
  // First render.
  const [count, setCount] = useState(0);

  // Second render, since the useState hook is mutated on mount.
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    callback(count);
  }, [count]);

  return (
    <Container>
      <h3>useState counter causing re-render</h3>
      <p>{`Count: ${count}`}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase count
      </button>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid lightgreen;
  border-radius: 10px;
  width: 400px;
  margin: 10px 0;
  padding: 0 10px 20px;
`;

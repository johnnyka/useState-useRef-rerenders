import { useRef, useEffect } from "react";
import styled from "styled-components";

// Un-memoized function being passed in, causing re-render of the FC.
export const UseRefChild = ({ callback }) => {
  const count = useRef(0);

  // No re-render by useEffect, since mutating a useRef object doesn't cause a re-render.
  useEffect(() => {
    count.current = count.current + 1;
  }, []);

  const handleClick = () => {
    count.current = count.current + 1;
    callback(count.current);
  };

  return (
    <Container>
      <h3>
        useRef counter not causing re-render, but un-memoized FC and prop
        causing re-render
      </h3>
      <p>{`Count: ${count.current}`}</p>
      <button onClick={handleClick}>Increase count</button>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid orange;
  border-radius: 10px;
  width: 400px;
  margin: 10px 0;
  padding: 0 10px 20px;
`;

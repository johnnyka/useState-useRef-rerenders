import { useRef, useEffect, memo } from "react";
import styled from "styled-components";

// (2) Memoized FC and memoized prop --> No re-render caused by the prop.
export const UseRefMemoizedChild = memo(({ callback }) => {
  const count = useRef(0);

  // (1) No re-render by useEffect, since mutating a useRef object doesn't cause a re-render.
  // (1) & (2) --> This FC will never re-render.
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
        No re-renders, since (1) counter is useRef and (2) memoized FC and prop
      </h3>
      <p>{`Count: ${count.current}`}</p>
      <button onClick={handleClick}>Increase count</button>
    </Container>
  );
});

const Container = styled.div`
  border: 2px solid blue;
  border-radius: 10px;
  width: 400px;
  margin: 10px 0;
  padding: 0 10px 20px;
`;

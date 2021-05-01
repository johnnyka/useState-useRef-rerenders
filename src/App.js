import { useState, useCallback } from "react";
import { UseStateChild } from "./UseStateChild";
import { UseRefChild } from "./UseRefChild";
import { UseRefMemoizedChild } from "./UseRefMemoizedChild";
import styled from "styled-components";

function App() {
  const [useStateCount, setUseStateCount] = useState("");
  const [useRefCount, setUseRefCount] = useState("");
  const [useRefMemoizedCount, setUseRefMemoizedCount] = useState("");

  const handleUseStateCount = (count) => {
    setUseStateCount(count);
  };

  const handleUseRefCount = (count) => {
    setUseRefCount(count);
  };

  const handleUseRefMemoizedCount = useCallback(
    (count) => {
      setUseRefMemoizedCount(count);
    },
    [setUseRefMemoizedCount]
  );

  return (
    <Container>
      <h1>Re-renders using useState vs useRef (with/without memoization)</h1>

      <h3>Count tracker</h3>
      <p>{`useState count: ${useStateCount}`}</p>
      <p>{`useRef count: ${useRefCount}`}</p>
      <p>{`useRefMemoized count: ${useRefMemoizedCount}`}</p>

      <UseStateChild callback={handleUseStateCount} />
      <UseRefChild callback={handleUseRefCount} />
      <UseRefMemoizedChild callback={handleUseRefMemoizedCount} />

      <QuoteContainer>
        <h5>Some info on useRef & memoization</h5>
        <Quote>
          Keep in mind that useRef doesn’t notify you when its content changes.
          Mutating the .current property doesn’t cause a re-render.{" "}
          <a href="https://reactjs.org/docs/hooks-reference.html#useref">
            link
          </a>
        </Quote>

        <Quote>
          useCallback will return a memoized version of the callback that only
          changes if one of the dependencies has changed. This is useful when
          passing callbacks to optimized child components that rely on reference
          equality to prevent unnecessary renders...{" "}
          <a href="https://reactjs.org/docs/hooks-reference.html#usecallback">
            link
          </a>
        </Quote>
      </QuoteContainer>
    </Container>
  );
}

export default App;

const Container = styled.main`
  margin: 20px;
`;

const Quote = styled.div`
  border-left: 3px solid grey;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const QuoteContainer = styled.div`
  margin-top: 20px;
  padding: 0 10px 20px;
  border: 1px solid black;
  background-color: lightgoldenrodyellow;
  width: 500px;
`;

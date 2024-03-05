/* eslint-disable no-unused-vars */
import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Container from "./components/Container";

function App() {
  const [state, setState] = useState(`Hello Guy's`);
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  return (
    <>
      {/* <div className={styles.calculator}>
        <Display handleOnChange={handleOnChange} />
        <p className={styles.pTag}>{state}</p>
        <ButtonsContainer />
      </div> */}

      <Container>
        <TodoList />
      </Container>
    </>
  );
}

export default App;

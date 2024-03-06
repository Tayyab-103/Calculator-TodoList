/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Container from "./components/Container";

function App() {
  // Calculator Version One
  // const [state, setState] = useState(`Hello Guy's`);
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setState(event.target.value);
  // };

  // Calculator Version Two:
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    // console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      {/* Calculator App */}
      <div className={styles.container}>
        <h1 className={styles.h1}>Calculator</h1>
        <div className={styles.calculator}>
          <Display displayValue={calVal} />
          <ButtonsContainer onButtonClick={onButtonClick} />
        </div>
      </div>

      {/* Calculator version 1 */}
      {/* <div className={styles.calculator}>
        <Display handleOnChange={handleOnChange} />
        <p className={styles.pTag}>{state}</p>
        <ButtonsContainer />
      </div> */}

      {/* Todo List: */}
      {/* 
      <Container>
        <TodoList />
      </Container> */}
    </>
  );
}

export default App;

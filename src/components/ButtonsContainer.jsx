import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  // handling Event:
  // const handleClickedButton = (event) => {
  //   console.log(event);
  //   console.log("Button per click ho raha hy");
  // };
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    "*",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        // <button key={buttonName} className={styles.button} type="button">
        <button
          key={buttonName}
          type="button"
          className={`btn btn-secondary m-1  `}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

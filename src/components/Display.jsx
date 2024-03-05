/* eslint-disable react/prop-types */
import styles from "./Display.module.css";
const Display = ({handleOnChange}) => {

  return (
    <input className={styles.display} type="text" onChange={handleOnChange} />
  );
};

export default Display;

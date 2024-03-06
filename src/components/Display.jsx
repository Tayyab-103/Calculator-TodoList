/* eslint-disable react/prop-types */
import styles from "./Display.module.css";
const Display = ({
  // handleOnChange,
  displayValue,
}) => {
  return (
    <input
      className={styles.display}
      type="text"
      readOnly
      value={displayValue}
      // onChange={handleOnChange}
    />
  );
};

export default Display;

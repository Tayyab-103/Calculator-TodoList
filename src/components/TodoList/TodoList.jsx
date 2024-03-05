import { useState } from "react";
import styles from "../TodoList/TodoList.module.css";

const TodoList = () => {
  const [listOfitems, setListOfitems] = useState([
    "Buiscuts",
    "Fruits",
    "Mango",
    "Roti",
  ]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newList = event.target.value;
      event.target.value = "";
      let newArray = [...listOfitems, newList];
      setListOfitems(newArray);
      console.log("Food Value entered is " + newList);
    }
  };

  //   const ListOfitems = [
  //     "Buiscuts",
  //     "Fruits",
  //     "Mango",
  //     "Roti",
  //     "Ghee",
  //     "Orange",
  //     "Vagetables",
  //   ];
  return (
    <>
      <div className="border">
        <h1 className="text-center">Todo List</h1>
        <input
          className={styles.InputField}
          placeholder="Enter Your Routine"
          type="text"
          onKeyDown={handleKeyDown}
        />

        <ul className="list-group">
          {listOfitems.map((items) => (
            <>
              <li
                key={items}
                className={`list-group-item `}
                >
                {items}

                <button
                  type="button"
                  className={`btn btn-info  ${styles.button}`}
                >
                  Buy
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;

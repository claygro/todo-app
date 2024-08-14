import { useState } from "react";
export default function Todo() {
  const [todo, setToDo] = useState(["please input your task in input box."]);

  const handleAddTodo = () => {
    const newtodo = document.querySelector(".inputodo").value;
    document.querySelector(".inputodo").value = "";
    setToDo([...todo, newtodo]);
  };
  const handleRemoveTodo = (index) => {
    setToDo(todo.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <div className="colorcontainer">
          <h1 className="first">Todo app</h1>
          <div className="inbtn">
            <input type="text" className="inputodo" />
            <button onClick={handleAddTodo} className="addbtn">
              Add
            </button>
          </div>
          <ul>
            {todo.map((todos, ind) => (
              <li key={ind}>
                <span key={ind} className="all-list">
                  {todos}
                </span>
                {/*hya map ma jun index lekheko xa tai nai onclick ko handleRemoveTodo ma rakhne
                           jastai map ma ind xa vane handleRemoveTodo pani tai nai rakhne ind nai*/}
                <button
                  onClick={() => handleRemoveTodo(ind)}
                  className="deletebtn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

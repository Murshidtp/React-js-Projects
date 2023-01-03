import { useState } from "react";
import "./ToDo.css";
import moment from 'moment';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const addItem = () => {
    if (!input) {
    } else {
      setList([...list, input]);
      setInput("");
    }
  };
  const removeItem = (index) => {
    const newItem = [...list];
    console.log(index);
    newItem.splice(index, 1);
    setList(newItem);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's { moment().format('dddd')} 🌝 ☕ </h2>
      </div>
      <br />
      <div className="input">
        <input
          type="text"
          placeholder="🖊️ Add item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <i className="fas fa-plus" title="Add" onClick={addItem}></i>
      </div>
      {list.map((obj, index) => {
        return (
          <>
            <div className="todos">
              <div className="todo">
                <div className="left"></div>
                <p key={index}>{obj}</p>
                <div className="right">
                  <i
                    className="fas fa-times"
                    title="Delete"
                    onClick={() => removeItem(index)}
                  ></i>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default App;

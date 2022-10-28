import { useReducer } from "react";
import "./App.css";

const Actions = {
  Increment: "increment",
  Decrement: "decrement",
};

const reducer = (state, action) => {
  if (action.type === Actions.Increment) {
    return { count: state.count + 1 };
  } else if (action.type === Actions.Decrement) {
    return { count: state.count - 1 };
  } else {
    return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log("rendered");

  const toIncreasehandler = () => {
    dispatch({ type: Actions.Increment });
  };

  const toDecreasehandler = () => {
    dispatch({ type: Actions.Decrement });
  };

  return (
    <div className="App">
      <div className="alignment-only">
        <button className="btn" onClick={toIncreasehandler}>
          +
        </button>
        <div className="count-text">{state.count}</div>
        <button className="btn" onClick={toDecreasehandler}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <div className="todoContainer">
        <div className="todoTitle">
          <h1>TODO's</h1>
        </div>
        <Todo />
      </div>
    </div>
  );
}

export default App;

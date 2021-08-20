
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import Todos from"./components/Todo";

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <CreateTodo/>
      <br/>
      <Todos/>
    </div>
  );
}

export default App;

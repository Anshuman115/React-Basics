import Todo from "./components/todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Make React Projects" />
    </div>
  );
}

export default App;

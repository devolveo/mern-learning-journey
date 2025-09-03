import "./App.css";
import DataFetcher from "./DataFetcher";
import UserList from "./UserList";
import ComplexProps from "./ComplexProps";

function App() {
  return (
    <div className="App">
      <h1>My First React Components</h1>
      <UserList />
      <DataFetcher />
      <ComplexProps />
    </div>
  );
}

export default App;

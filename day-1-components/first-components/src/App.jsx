import "./App.css";
import DataFetcher from "./DataFetcher";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <h1>My First React Components</h1>
      <UserList />
      <DataFetcher />
    </div>
  );
}

export default App;

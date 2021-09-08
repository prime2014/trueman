import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component= { Home } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

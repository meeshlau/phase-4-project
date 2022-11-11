import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    
    <BrowserRouter>
      <div className="App">
      
        <Switch>
          <Route path="/users/new">
            <h1>Sign Up</h1>
            < SignUpForm />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
            <LoginForm />
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>

      
    </BrowserRouter>

    
    
  );
}

export default App;
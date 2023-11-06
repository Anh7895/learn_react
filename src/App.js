import React from 'react';
import Splash from './pages/splash';

// import { BrowserRouter, Route, Router } from 'react-router-dom';
// import { Switch } from 'antd';
// import Login from './pages/login';
// import Register from './pages/register';
// import Home from './pages/home';

function App() {
  return (
    <Splash />


    // <BrowserRouter>
    //   <Router>
    //     <Switch>
    //       <Route path="/" exact component={Splash} />
    //       <Route path="/login" component={Login} />
    //       <Route path="/register" component={Register} />
    //       <Route path="/home" component={Home} />
    //     </Switch>
    //   </Router>
    // </BrowserRouter>
  );
}

export default App;

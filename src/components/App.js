import React from 'react';
import 
{ 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';

import Home from  './Home';
import About from './About';
import Header from './Header';
import Courses from './Courses';
import Teachers from './Teachers';
import Featured from './Featured';
import NotFound from  './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/courses"} component={Courses} />
        <Route path={"/teachers"} exact component={Teachers} />
        <Route path={"/teachers/:topic/:name"} component={Featured} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
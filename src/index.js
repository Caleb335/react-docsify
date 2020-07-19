import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from './components/app'
import docs from './components/docs/guide.md'

import "./css/app.css";

<Router>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="docs" component={docs} />
  </Switch>
</Router>

ReactDOM.render(<App />, document.querySelector("#app"));

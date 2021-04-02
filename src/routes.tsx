import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

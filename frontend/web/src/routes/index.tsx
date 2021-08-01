import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Repository from '../pages/Repository';
import AppProvider from '../hooks/index';

const Routes: React.FC = () => (
  <Switch>
        <AppProvider>
            <Route path= "/" exact component={SingIn}/>
            <Route path= "/SingUp" component={SingUp}/>
            <Route path= "/Repository" component={Repository} isPrivate />
        </AppProvider>
  </Switch>
)

export default Routes;
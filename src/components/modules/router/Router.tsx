import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import config from '@config';
import {Main, SmartumHelper, NotFound} from '@pages';

export const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={config.path.main} component={Main}/>
            <Route exact path={config.path.smartumHelper} component={SmartumHelper}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
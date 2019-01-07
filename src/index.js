import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Questions from './components/Questions';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';


ReactDOM.render((
    <BrowserRouter>
        <Switch>        
            <Route path="/questions" component={Questions} />
            <Route exact path="/" component={Homepage}/>
        </Switch>
    </BrowserRouter>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
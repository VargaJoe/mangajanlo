import 'babel-polyfill';
import * as React                           from 'react';
import * as ReactDOM                        from 'react-dom';
import { Provider }                         from 'react-redux';
import { combineReducers }                  from 'redux';
import './index.css';

import { JwtService }                       from '@sensenet/authentication-jwt';
import { Repository }                       from '@sensenet/client-core';
import { Reducers, Store }                  from '@sensenet/redux';

// custrom  reducers  
// import user                                 from './reducers/users';

import { 
    BrowserRouter
}                                           from 'react-router-dom'; 

import App                                  from './App';
const DATA = require('./config.json');

const sensenet = Reducers.sensenet;
const myReducer = combineReducers({ 
  sensenet,  
});

const repository = new Repository ({
    repositoryUrl: process.env.REACT_APP_SERVICE_URL || DATA.domain    
});
const jwtService = new JwtService(repository);
jwtService.checkForUpdate();

const options = {
    repository,
    rootReducer: myReducer,
} as Store.CreateStoreOptions<any>;
  
const store = Store.createSensenetStore(options);

ReactDOM.render(
    (
        <div>
            <span className="hidden">hello world!</span>
        <Provider store={store}>
            <BrowserRouter basename="/">
                    <App />
            </BrowserRouter>
        </Provider>
        </div>
    ),
    document.getElementById('root')
);
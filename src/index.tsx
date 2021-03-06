import 'es6-shim';
import 'url-search-params-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Global } from './models/Global';
import './assets/app.less';
import { LazyRouteLoader } from './components/LazyRouteLoader';

const App = () => (
    <Router history={Global.history}>
        <LazyRouteLoader routes={[
            { path: '/login', load: () => import('./views/LoginView/LoginView') },
            { path: '/recharge/:userId/:walletId', load: () => import('./views/RechargeView/RechargeView') },
            { path: '/home/:userId/:walletId', load: () => import('./views/HomeView/HomeView') },
            { path: '*', load: () => import('./views/LoginView/LoginView') },
        ]} />
    </Router>
);


ReactDOM.render(
    <App />,
    document.getElementById('main')
);
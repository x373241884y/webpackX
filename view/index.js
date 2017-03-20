import React from 'react';
import routes from './routes';
import ReactDOM from 'react-dom';
import { Router, Route, Link,hashHistory } from 'react-router';

ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
	document.getElementById("root"));
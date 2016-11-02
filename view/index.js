import React from 'react';
import routes from './routes';
import ReactDOM from 'react-dom';
import { Router, Route, Link,browserHistory } from 'react-router';

ReactDOM.render(<Router history={browserHistory} routes={routes}/>,
	document.getElementById("root"));
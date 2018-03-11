import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const app=(
        <App/>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

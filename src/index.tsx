import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './core/containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducer } from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement);
registerServiceWorker();

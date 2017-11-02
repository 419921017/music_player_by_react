import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import Hello from './components/Hello/Hello';


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#app')
    );
}

render(Hello);

if (module.hot) {
    module.hot.accept('./components/Hello/Hello', () => { render(Hello) });
}
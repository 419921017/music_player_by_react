import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import Root from './Root';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#app')
    );
}

render(Root);

if (module.hot) {
    module.hot.accept('./components/Hello/Hello', () => { render(Root) });
}
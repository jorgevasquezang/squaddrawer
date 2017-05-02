import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import SquadBuilder from './components/SquadBuilder';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
};

render(SquadBuilder);

if (module.hot) {
    module.hot.accept('./components/SquadBuilder', () => {
        render(SquadBuilder)
    })
}
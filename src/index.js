import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import CounterContainer from './container/CounterContainer';
import {createStore} from 'redux';
import {reducers} from './reducer';


const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );

render(<App/>, document.getElementById('root'));

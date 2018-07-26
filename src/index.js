import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import {createStore} from 'redux';
import {reducers} from './reducer';


const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );

render(<App/>, document.getElementById('root'));

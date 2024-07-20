import React from 'react';
import Counter from './use-reducer-hook/Counter';
import Bank from './redux-v2-features';
import './App.css';
import MockFetch from './MockFetch/MockFetch';

const App = () => {
  return (
    <React.Fragment>
      {/* <Counter /> */}
      {/* <Bank /> */}
      <MockFetch />
    </React.Fragment>
  );
};

export default App;

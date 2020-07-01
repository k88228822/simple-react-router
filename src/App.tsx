import React from 'react';
import './App.css';
import {createBrowserHistory} from "./packages/history";

function App() {
  const history = createBrowserHistory();

  const onPushClick = () => {
    history.push('helloPush'+Math.random());
  };

  const onReplaceClick = () => {
    history.replace('helloReplaceName'+Math.random());
  };

  const onBackClick = () => {
    history.goBack();
  };

  const onForwardClick = () => {
    history.goForward();
  };

  return (
    <div className="App">
      <span onClick={onPushClick}>push</span>
      <span onClick={onReplaceClick}>replace</span>
      <span onClick={onBackClick}>back</span>
      <span onClick={onForwardClick}>forward</span>
    </div>
  );
}

export default App;

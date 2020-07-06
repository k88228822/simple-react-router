import React, {useContext} from 'react';
import './App.css';
import {createBrowserHistory} from "./packages/history";
import Router from './packages/react-router/Router';
import RouterContext from "./packages/react-router/RouterContext";
import Route from "./packages/react-router/Route";

function AppContent(){
  const {history} = useContext(RouterContext);

  const onPushClick = () => {
    history.push('helloPush' + Math.random());
  };

  const onReplaceClick = () => {
    history.replace('helloReplaceName' + Math.random());
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
  )
}


function App() {

  return (
    <Router history={createBrowserHistory()}>
      <Route path='/' component={AppContent} >
        <span>hello</span>
      </Route>
    </Router>
  );
}

export default App;

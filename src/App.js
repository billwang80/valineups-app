import AgentSelect from './components/AgentSelectPage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Provider } from 'react-redux'

import './App.css';
import store from './store/store'

import Maps from "./components/MapsPage"
import Agent from"./components/LineupsPage"

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={AgentSelect} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/lineups" component={Agent}/>
      </Switch>
    </Provider>
  );
}

export default App;

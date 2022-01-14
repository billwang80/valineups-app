import AgentSelect from './components/AgentSelectPage'
import { BrowserRouter as Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './App.css';
import { store, persistor } from './store/store'

import Maps from "./components/MapsPage"
import Agent from"./components/LineupsPage"
console.log(store)
console.log(persistor)

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Switch>
          <Route exact path="/" component={AgentSelect} />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/lineups" component={Agent}/>
        </Switch>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;

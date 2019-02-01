import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import  {List} from './componentes/list';
import Datajson from './data/data.json';


class App extends React.Component {
  public render() {
   
    return (
      <div >
        <div className=" App">
        <header className="App-header App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        </div>
     
        <List datos={Datajson}/>
      </div>
    );
  }
}

export default App;

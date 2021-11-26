import './App.css';
import Router from './Router/Router';
import { useContext } from 'react';
import AsideContext from './Context/Aside-context';

function App() {
  const {classAside} = useContext(AsideContext)

  return (
      <div id="App" className={classAside}>
        <Router/>
      </div>
  );
}

export default App;

import Registration from './components/registration';

import './styles/App.css';
import './styles/animation.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="first">
          { process.env.REACT_APP_COMP_NAME_FIRST.toUpperCase() }
        </span>
        <span className="last">
          { process.env.REACT_APP_COMP_NAME_LAST.toUpperCase() }
        </span>
      </header>
      <div className="Content">
        <div className="Container">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;

import './index.css';
import StartButton from './StartButton';
import Section1 from './Section1';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom' ;
import Section2 from './Section2';
import Finish from './Finish';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <StartButton />
          </Route>
          <Route path="/start">
            <Section1 />
          </Route>
          <Route path="/section2">
            <Section2 />
          </Route>
          <Route path="/finish">
            <Finish />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

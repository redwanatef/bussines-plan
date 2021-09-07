import './index.css';
import StartButton from './StartButton';
import Section1 from './Section1';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom' ;
import Section2 from './Section2';
import Finish from './Finish';



function App() {
  const final_results = []; 
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <StartButton />
          </Route>
          <Route path="/start">
            <Section1 result = {final_results} />
          </Route>
          <Route path="/section2">
            <Section2 result = {final_results} />
          </Route>
          <Route path="/finish">
            <Finish result = {final_results} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

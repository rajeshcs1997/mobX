import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import UserStore from './UserStore'

const App = () =>{
	const store = new UserStore()
  return (
    <div className="App">
      <Home store= {store} />
    </div>
  );
}

export default App;

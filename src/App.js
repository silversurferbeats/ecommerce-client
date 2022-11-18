import './App.css';
import { 
	Switch, 
	Route 
} from "react-router-dom";
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import CreateForm from './components/CreateForm';
import Details from './components/Details';
import Shop from './components/Shop';




function App() {
  return (
    <div className="App">
    	<Navbar />
		<Switch>
			<Route exact path="/" component={ProductList} />
			<Route exact path="/create" component={CreateForm} />
			<Route path="/details/:id" render={(props) => <Details {...props} />} />
			<Route path="/shop" component={Shop} />
		</Switch> 
    </div>
  );
}

export default App;

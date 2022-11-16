import './App.css';
// import { Button } from '@mui/material';
import { 
	Switch, 
	Route 
} from "react-router-dom";
import Navbar from './components/Navbar';
import Carousel from './components/Carrusel';
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      
    	<Navbar />
		<Carousel />	

		
		<Switch>
			<Route exact path="/" component={ProductList} />
			{/* 
			<Route path="/details/:id" render={(props) => <Details {...props} />} />

			<Route path="/cart" component={Cart} /> 
			*/}
		</Switch> 
		
      
    </div>
  );
}

export default App;

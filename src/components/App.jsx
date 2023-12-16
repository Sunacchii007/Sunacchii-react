import NavBar from './navbar';
import Footer from '../pages/footer';
import Theprds from '../pages/product'
import Contact from '../pages/Contact'
import { All } from '../data/datax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Costum from '../pages/Costum';
import Login from '../pages/login';
import Signin from '../pages/signin';
import ShoppingCart from '../pages/shoppingcart';



function App() {
	return (
		<Router>
				<NavBar/>
				<div className='pages'> 
					 <Routes> 
						<Route path="/Sunacchii-react" element={<Theprds data={All}/>} />
						<Route path="/Sunacchii-react/costume" element={<Costum/>}/>
						<Route path="/Sunacchii-react/account" element={<Login/>}/>  
						<Route path="/Sunacchii-react/sign-in" element={<Signin/>}/>  
						<Route path="/Sunacchii-react/shopping-cart" element={<ShoppingCart/>}/>	
						</Routes> 
				</div>
				<Contact />
				<Footer/>
		</Router>
	);
}


export default App;
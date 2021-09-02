import React, {useState} from 'react'
import Header from './components/Layout/Header'
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AddMeal from './components/Layout/AddMeal';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	}

	const addMealHandler = async (enteredMealData) => {
		const response = await fetch('/add_meals', {
			method: 'POST',
			body: JSON.stringify(enteredMealData),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(await response.json());
	}

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler}/>}
			<Header onShowCart={showCartHandler}/>
			<main>
				<Switch>
					<Route path='/browse-meals'>
						<Meals/>
					</Route>
            		<Route path='/add-a-meal'>
            			<AddMeal onAddMeal={addMealHandler}/>
            		</Route>
            	</Switch>
			</main>
		</CartProvider>
	);
}

export default App;

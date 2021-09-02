import { Fragment} from 'react'
import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import { NavLink } from 'react-router-dom';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <NavLink to='/browse-meals'>Browse Meals</NavLink>
            <NavLink to='/add-a-meal'>Add a Meal</NavLink>
            <HeaderCartButton onClick={props.onShowCart}/> 
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table"/>
        </div>
        
    </Fragment>
}

export default Header;
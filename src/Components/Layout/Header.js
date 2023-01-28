import React from 'react';
import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header =()=>{
    return (
            <React.Fragment>
                <header className={classes.header}>
                    <h1>React Meals</h1>
                    <HeaderCartButton></HeaderCartButton>
                </header>
                {/* here the classes.main-header syntax is wrong because the class name should only contains number or alphabets and no dash or 
                underslash. But still you want to use dash then you have to write like classes['main-header'] as written below */}
                {/* <div className={classes.main-header}> */}
                <div className={classes['main-image']}>
                    <img src={mealsImage} alt='a delecious food' />
                </div>
            </React.Fragment>
    )
}
export default Header;
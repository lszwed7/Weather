import React from 'react';
import Form from '../Form/Form';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss'
const Header = ({showWeather,writeCity,search,mobile})=>{
    return(
        <header className={styles.wrapper}>
            <Form showWeather={showWeather} writeCity={writeCity} search={search}/>
            {mobile ? <Nav />:null}
        </header>
    )
}

export default Header
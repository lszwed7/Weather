import React from 'react';
import styles from './Form.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const searchIcon = <FontAwesomeIcon icon={faSearch} style={{fontSize:'30px'}} />
const Form =({showWeather,writeCity,search})=>{
    return(
        <form onSubmit = {showWeather} className={styles.wrapper}>
        <button className={styles.btn_search} >{searchIcon}</button>
        <input className={styles.input} onChange={writeCity} type='text' name='city' id='city' value={search} required autoComplete='off'/>
        <label className={styles.label} htmlFor='city'>City name</label>
      </form>
    )
}

export default Form
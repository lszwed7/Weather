import React from 'react';
import styles from './Hourly.module.scss';
import Hour from '../Param/Param'
import Error from '../Error/Error'
const Hourly = ({hourly})=>{
    return(
        hourly!==null?<section className={styles.wrapper}>
            <ul className={styles.list}>
                {hourly.map(hour=><Hour params = {hour} paramsName = {'hour'} key={hour.dt}/>)}
            </ul>
        </section>:<Error />
    )
}

export default Hourly
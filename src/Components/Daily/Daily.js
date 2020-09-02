import React from 'react';
import Error from '../Error/Error';
import Param from '../Param/Param';
import styles from './Daily.module.scss'
const Daily = ({daily})=>{
    return(

        daily!==null?<section className={styles.wrapper}>
            <ul className={styles.list}>
                {daily.map(day=><Param params = {day} paramsName = {'day'} key={day.dt}/>)}
            </ul>
        </section>:<Error />
    )
}

export default Daily


import React from 'react';
import styles from './Current.module.scss'
import Error from '../Error/Error';
const Current = ({current,city})=>{
    return(
        current!==null? <article className={styles.wrapper}>
            <header className={styles.header}>
                <h1 className={styles.city}>{city.charAt(0).toUpperCase()+city.slice(1)}</h1>
                <time className={styles.date}>{new Date().toLocaleDateString()}</time>
            </header>
            <section className={styles.main_parameters}>
                <img className={styles.icon} src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}width="100" height="100" alt='weater icon'/>
                <p className={styles.description}>{current.weather[0].description}</p>
                <p className={styles.temp}>{Math.round(current.temp)}°C</p>
            </section>
            <ul className={styles.param_list}>
                <li className={styles.param}>Wind {Math.round(current.wind_speed * 3.6)}km/h</li>
                <li className={styles.param}>Pressure {current.pressure}hPa</li>
                <li className={styles.param}>Humidity {current.humidity}%</li>
                <li className={styles.param}>Feels like {Math.round(current.feels_like)}°C</li>
            </ul>
        </article>:<Error />
    )
}

export default Current
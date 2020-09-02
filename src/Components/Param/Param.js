import React from 'react'
import styles from './Param.module.scss'

const Param = ({params,paramsName})=>{
        const  {temp,dt,pressure,weather,wind_speed} = params
        const date = paramsName==='day'?new Date(dt *1000).toLocaleDateString():new Date(dt *1000).toLocaleTimeString().slice(0,5)
        const temperature = paramsName==='day' ? 
        <>
        <p>{`Max:${Math.round(temp.max)}°C`}</p>
        <p>{`Min:${Math.round(temp.min)}°C`}</p>
        </>:
        <p>{Math.round(temp)}°C</p>
    return(
        <li className={styles.wrapper}>
            <div className={styles.date}>
                <p>{date}</p>
                <img src = {`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} width="70px" height="70px" alt='weather icon'></img>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    {temperature}
                </li>
                <li className={styles.item}>
                    <p>{pressure}hPa</p>
                </li>
                <li className={styles.item}>
                    <p>{Math.round(wind_speed * 3.6)}km/h</p>
                </li>
            </ul>
        </li>
    )
}

export default Param;
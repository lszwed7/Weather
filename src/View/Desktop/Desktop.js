import React from 'react'
import Header from '../../Components/Header/Header';
import Current from '../../Components/Current/Current';
import Hourly from '../../Components/Hourly/Hourly';
import Daily from '../../Components/Daily/Daily';
import Error from '../../Components/Error/Error';
import Home from '../../Components/Home/Home';

const Desktop = ({handleClick,handleChange,error,city,daily,search,current,hourly,mobile})=>{
    return(
        <>
        <Header showWeather={handleClick} writeCity={handleChange} search={search} mobile={mobile}/>
        {error ? <Error /> : null}
         {!error&&city ? <><Current current = {current} city={city}/> 
         <Daily daily={daily} city={city}/>
         <Hourly hourly={hourly} city={city}/></>:!city? <Home />:null} 
          </>
    )
}
export default Desktop
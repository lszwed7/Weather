import React from 'react'
import Header from '../../Components/Header/Header';
import Current from '../../Components/Current/Current';
import Hourly from '../../Components/Hourly/Hourly';
import Daily from '../../Components/Daily/Daily';
import Error from '../../Components/Error/Error';
import Home from '../../Components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Mobile = ({handleClick,handleChange,error,city,daily,search,current,hourly,mobile})=>{
    return(
        <Router>
        <Header showWeather={handleClick} writeCity={handleChange} search={search} mobile={mobile}/>
        {error ? <Error /> : null}
          <Route exact path='/weather' component={Home}/>
          <Route  path='/weather/current' component={()=><Current current = {current} city={city}/>}/>
          <Route path='/weather/hourly' component={()=><Hourly hourly={hourly} city={city}/>}/>
          <Route path='/weather/daily' component={()=><Daily daily={daily} city={city}/>}/>
        </Router>
    )
}
export default Mobile
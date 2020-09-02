import React from 'react';
import './App.scss';
import Mobile from './View/Mobile/Mobile'
import Desktop from './View/Desktop/Desktop';

class App extends React.Component {

  state={
    search:'',
    city:'',
    coords:[],
    daily:null,
    current:null,
    hourly:null,
    error:false,
    mobile:true,
    }
  handleError=(res)=>{
    if(!res.ok){
      throw new Error(res.statusText)
    }
    this.setState({
      error:false
    })
    return res
  }
  handleClick=(e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(this.handleError)
    .then(res => res.json())
    .then(res => this.setState(
      {
      coords:res.coord
    })).catch(error=>{
      this.setState({
        error:true
      })
    })
    .then(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coords.lat}&lon=${this.state.coords.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(res => this.setState(
        {
          daily:res.daily,
          current:res.current,
          hourly:res.hourly,
          search:'',
          city:this.state.search
        }
        ))
    })
  }

  handleChange=(e)=>{
    let value = e.target.value
    this.setState({
      search:value
    })
  }
  handleWidth=()=>{
    if(window.innerWidth>700){
      this.setState({mobile:false})
    }else{
      this.setState({mobile:true})
    }
  }

  componentDidMount(){
    this.handleWidth()
    window.addEventListener('resize',this.handleWidth)
  }

  render(){
    const{current,hourly,daily,error,city, search,mobile} = this.state
    const prop ={
      current,
      hourly,
      daily,
      error,
      city,
      search,
      mobile
    }
    return(
    <main>
      {mobile ? <Mobile handleClick={this.handleClick} handleChange={this.handleChange} {...prop} />:<Desktop handleClick={this.handleClick} handleChange={this.handleChange} {...prop}/>}
    </main>
    )
  }
}

export default App;

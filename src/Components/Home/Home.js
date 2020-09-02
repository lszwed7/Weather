import React from 'react';
import styles from './Home.module.scss'
class Home extends React.Component{
    state={
        clock:''
    }

    componentDidMount(){
        this.setDate = setInterval(()=>{
            const date = new Date();
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
            this.setState({
                clock:{
                    hour,
                    min,
                    sec
                    }
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.setDate)
    }
    render(){
        const {hour,min,sec} = this.state.clock
        return(
        <section className={styles.wrapper}>
            <time className={styles.clock}>
               {this.state.clock==='' ? 'Loading...':`${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`}
            </time>
        </section>

        )
    }
}

export default Home
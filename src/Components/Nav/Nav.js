import React from 'react'
import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{
    state={
        btnOpen:false
    }
    changeHandle = ()=>{
        this.setState(prevState =>{
            return(
                {
                    btnOpen:!prevState.btnOpen
                }
            )
        })
    }
    render(){
        return(
            <nav className={styles.wrapper}>
                <button onClick={this.changeHandle} className={styles.btn_hamb}>
                    <span className={`${styles.btn_hamb_line1} ${this.state.btnOpen?styles.clicked_first:null}`}></span>
                    <span className={`${styles.btn_hamb_line2} ${this.state.btnOpen?styles.clicked_second:null}`}></span>
                    <span className={`${styles.btn_hamb_line3} ${this.state.btnOpen?styles.clicked_third:null}`}></span>
                </button>
                <ul className={`${styles.list} ${this.state.btnOpen?styles.list_open:null}`}>
                    <li className={styles.item}><NavLink exact activeClassName={styles.active} to='/weather/current'>Current</NavLink></li>
                    <li className={styles.item}><NavLink activeClassName={styles.active} to='/weather/hourly'>Hourly</NavLink></li>
                    <li className={styles.item}><NavLink activeClassName={styles.active} to='/weather/daily'>Daily</NavLink></li>
    
                </ul>
            </nav>
        )
    }
    
}

export default Nav
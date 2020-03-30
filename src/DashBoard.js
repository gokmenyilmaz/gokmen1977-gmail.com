import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home">Ana Sayfa</NavLink>
                <NavLink to="/personeller">Personeller</NavLink>

                { this.props.isLogIn==true && <NavLink to="/adres">Adres</NavLink> }
                
            </div>
        )
    }
}

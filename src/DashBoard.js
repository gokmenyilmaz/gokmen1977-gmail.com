import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <NavLink to="/personeller">Personeller</NavLink>
                <NavLink to="/home">Ana Sayfa</NavLink>
            </div>
        )
    }
}

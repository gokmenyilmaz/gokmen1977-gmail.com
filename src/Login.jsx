import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.loginHandle()}>Giriş</button>

                <button onClick={()=>this.props.loginOutHandle()}>Log Out</button>
            </div>
        )
    }
}

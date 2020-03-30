import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch,Route, Link,NavLink } from "react-router-dom";
import DashBoard from './DashBoard'
import Home from './Home'
import Personeller from './Personeller'
import Adres from './Adres'
import Login from './Login'
import RcIf, {RcElse} from 'rc-if';

import logo from './logo.svg';
import './App.css';



export default class App  extends React.Component{

  constructor(props)
  {
    super(props);
  }

  state={
    isLogIn:false
  };

  loginHandle=()=>
  {
    this.setState({isLogIn:true});
  
    console.log("login oldu");
  }

  loginOutHandle=()=>
  {
    this.setState({isLogIn:false});
  
    console.log("Log Out oldu");
  }

  render()
  {
    return (

      <section>

        <div>
          App Başlık
        </div>

       
     
        <article style={{border:'solid', borderColor:'green', margin:'10px'}}>
          <div>Router içi</div>
          <BrowserRouter>

      

           <RcIf if={this.state.isLogIn==true}>
              <nav style={{border:'solid', borderColor:'red', margin:'10px'}}>
                <div>Dashboard</div>
                <DashBoard isLogIn={this.state.isLogIn}/>
              </nav>
            </RcIf>

            <RcIf if={this.state.isLogIn!=true}>
              <nav style={{border:'solid', borderColor:'red', margin:'10px'}}>
                <div>Login</div>
                <Login loginHandle={this.loginHandle} loginOutHandle={this.loginOutHandle}/>
              </nav>
            </RcIf>
               
            <article style={{border:'solid', borderColor:'red', margin:'10px'}}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/personeller" component={Personeller}/>
                <Route exact path="/adres" component={Adres}/>
                <Route exact path="/login" render={p => 
                        <Login loginHandle={this.loginHandle} loginOutHandle={this.loginOutHandle} />}/>
              </Switch>

            </article>
           

          </BrowserRouter>



        </article>
      
      
      </section>
      

     );
  }

}


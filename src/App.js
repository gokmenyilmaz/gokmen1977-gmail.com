import React from 'react';
import { BrowserRouter, Switch,Route, Link,NavLink } from "react-router-dom";
import DashBoard from './DashBoard'
import Home from './Home'

import logo from './logo.svg';
import './App.css';



export default class App  extends React.Component{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (

      <section>

        <div>
          App Başlık
        </div>

        <div style={{border:'solid', borderColor:'red', margin:'10px'}}>
          <nav>Dashboard</nav>
          <DashBoard/>
        </div>

     
        <article style={{border:'solid', borderColor:'green', margin:'10px'}}>
          <div>Router içi</div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/dashboard" component={DashBoard}/>
            </Switch>
          </BrowserRouter>
        </article>
      
      
      </section>
      

     );
  }

}


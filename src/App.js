import React from 'react';
import { BrowserRouter, Switch,Route, Link,NavLink } from "react-router-dom";
import DashBoard from './DashBoard'
import Home from './Home'
import Personeller from './Personeller'

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

       
     
        <article style={{border:'solid', borderColor:'green', margin:'10px'}}>
          <div>Router içi</div>
          <BrowserRouter>

            <nav style={{border:'solid', borderColor:'red', margin:'10px'}}>
              <div>Dashboard</div>
              <DashBoard/>
            </nav>


            <article style={{border:'solid', borderColor:'red', margin:'10px'}}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/dashboard" component={DashBoard}/>
                <Route exact path="/personeller" component={Personeller}/>
              </Switch>

            </article>
           

          </BrowserRouter>



        </article>
      
      
      </section>
      

     );
  }

}


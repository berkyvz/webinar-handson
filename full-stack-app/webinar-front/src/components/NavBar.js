import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '../config';


class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            host: undefined,
            hostPort:  undefined,
            status:  undefined,
         }
    }

    componentDidMount(){

       fetch(`${config.baseURL}/values/`)
      .then(response => response.json())
      .then(data => {
        this.setState({
            ...this.state,
            host: data.hostName,
            hostPort: data.hostPort,
            status: data.status
        });
      });
    }
    
    render(){
        return (      
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Host: {this.state.host ? this.state.host : `Can not Access..`}</span>
                    <span className="navbar-brand mb-0 h1">Port: {this.state.hostPort ? this.state.hostPort : `Loading...`}</span>
                    <span className="navbar-brand mb-0 h1">Status: {this.state.status ? this.state.status : `Loading..`}</span>
                </nav>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Covid-19 Tracking Demo App</span>
                </nav>
            </div>
        );
    }
  }

export default NavBar;
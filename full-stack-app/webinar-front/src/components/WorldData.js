import React, { Component } from 'react';
import axios from 'axios';
import { config } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';


class WorldData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            worldData: undefined
         }
    }

    componentDidMount(){
        setTimeout( () => {
            axios.get(`${config.baseURL}/worldstatus/`).then(resp => {
                if(process.env.NODE_ENV === 'development'){
                    this.setState({
                        ...this.state,
                        worldData: resp.data.response[0]
                    });
                }else {
                    this.setState({
                        ...this.state,
                        worldData: resp.data
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        }, 400);
    }
    
    render() { 
        const data = this.state.worldData;
        return ( 
             data ? (
             <div className="container">
                    <div className="jumbotron">
                    <div> World data at {data.day}</div>
                        <div className="card">
                            <div className="card-body">
                                <div className="alert alert-primary" role="alert">
                                    New Cases: <strong>{`${data.cases.new}`}</strong>
                                </div>
                                <div className="alert alert-primary" role="alert">
                                    Total Cases: <strong>{`${data.cases.total}`}</strong>
                                </div>
                                <div className="alert alert-primary" role="alert">
                                    Active Cases: <strong>{`${data.cases.active}`}</strong>
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    Critical Cases: <strong>{`${data.cases.critical}`}</strong>
                                </div>
                                <div className="row">
                                        <div className="col">
                                            <div className="alert alert-success" role="alert">
                                                Recovered Cases: <strong>{`${data.cases.recovered}`}</strong>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="alert alert-danger" role="alert">
                                                Deaths: <strong>{`${data.deaths.total}`}</strong>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
            )
             : 
            (
                <div className="spinner-border center" role="status">
                    <span className="sr-only"></span>
                </div>
            )
        );
    }
}
 


export default WorldData;
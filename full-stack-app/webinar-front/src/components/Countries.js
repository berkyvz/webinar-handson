import React, { Component } from 'react';
import axios from 'axios';
import Country from './Country';
import { config } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';


class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries:[],
            countryName:""
        }
        
    }

    componentDidMount(){
        axios.get(`${config.baseURL}/statistics/`).then(resp => {
            this.setState({
                ...this.state,
                countries:resp.data.response
            });
        }).catch(err => {
            console.log(err);
        });
    }

    search(){
        axios.get(`${config.baseURL}/statistics/${this.state.countryName}`).then(resp => {
            this.setState({
                ...this.state,
                countries:resp.data.response
            });
        }).catch(err => {
            console.log(err);
        });
    }

    onChangeSearch(e){
        this.setState({
            ...this.state,
            countryName: e.target.value
        });
    }
    
    render() {
        const data = this.state.countries;
        return ( data ? 
            (
                <div className="container">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Search By Country Name:</span>
                        </div>
                        <input value={this.state.countryName} onChange={(e) => this.onChangeSearch(e)} type="text" className="form-control" placeholder="Country Name..." aria-label="Username" aria-describedby="basic-addon1"/>
                        <button className="btn btn-primary" onClick={() => this.search()}>Search</button>
                    </div>
                    <div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Country Name</th>
                                <th scope="col">Total Cases</th>
                                <th scope="col">Active Cases</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">New</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map( (country) => (
                                            <Country key={country.country} item={country} />
                                        )
                                    )
                            }
                        </tbody>
                        </table>
                    </div>  
                </div>
                
            ) : 
            (
                <div>Loading..</div>
            )
        
        )
    }
}
 


export default Countries;
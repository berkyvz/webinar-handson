import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const country = this.props.item
        return ( 
            <tr>
                <th scope="row">{country.country}</th>
                <td>{country.cases.total}</td>
                <td>{country.cases.active}</td>
                <td>{country.cases.recovered}</td>
                <td>{country.deaths.total}</td>
                <td>{country.cases.new}</td>
          </tr>
        )
    }
}
 


export default Country;
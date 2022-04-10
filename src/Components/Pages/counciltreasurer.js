import React, { Component,useEffect } from 'react';
import axios from 'axios';
import DataTable from './databox.js';
import { Card} from "react-bootstrap";
export default class ViewPoll extends Component {
    constructor(props) {
        super(props);
        this.state = { usersCollection: [], Id: [],};
    }

        componentDidMount() {
            axios.get('http://localhost:4000/edit/CouncilTreasurer')
                .then(res => {
                    this.setState({ usersCollection: res.data,
                    Id: res.data._id  });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    
   
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }
    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                        <Card>
                        {this.dataTable()}
                        </Card>       
                </div>
            </div>
        )
    }
}
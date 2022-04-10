import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './editpoll2';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/getpolls')
            .then(res => {
                this.setState({ usersCollection: res.data });
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
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Email</td>
                                <td>choices</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
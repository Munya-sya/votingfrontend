import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form,FormControl, Button,InputGroup } from "react-bootstrap";
import axios from "axios";
class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = { voted:false };
    }
    getTotalVotes() {
        let totalVotes = 0

        this.props.obj.choices.forEach(choice => {
            totalVotes += choice.count
        })

        return totalVotes
    }
    getChoicePercentage(selectedChoice){
        const totalVotes = this.getTotalVotes()
        if(totalVotes === 0){
            return 0
        }
        return Math.round((selectedChoice.count / totalVotes) * 100)
    }
    deleterow(choice){
        window.location.reload(true);
        const configuration = {
            method: "delete",
            url: "http://localhost:4000/polldelete",
            data: {
                choice,
            },
          };
            // make the API call
          axios(configuration)
          .then((result) => {
            this.changestate();
          })
          .catch((error) => {
            error = new Error();
          });
    }
    render() {
        return (
            
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.useremail}
                </td>
                <td>
              { this.props.obj.choices.map(data => {
                   return(
                    <tbody>
                        <tr>
                            <td>
                                Name: {data.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                             Percentage: {this.getChoicePercentage(data)}%
                            </td>
                        </tr>
                        <tr>
                            <td>
                             Vote Count:   {data.count}
                            </td>
                        </tr>
                        <hr></hr>
                    </tbody>
                        
                    
                   );
                })}
                </td>
                <td><Button onClick={() => this.deleterow(this.props.obj._id)}>Delete</Button></td>
            </tr>
        );
    }
}
export default DataTable;
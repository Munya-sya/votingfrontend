import React, {useState,Component }from "react";
import { Link } from "react-router-dom";
import { Card,Form,Button} from "react-bootstrap";
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
    
    tally(choice){
        let votes = 0;
        votes = choice + 1;
        return votes;
    }
    changestate(){
        this.setState({ voted:true });
    }
    vote(choice,count){
        this.changestate();
        let counts =  this.tally(count)
        let id = this.props.obj._id
        const configuration = {
            method: "put",
            url: "http://localhost:4000/polledit",
            data: {
                choice,
                counts,
                id
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
    getChoicePercentage(selectedChoice){
        const totalVotes = this.getTotalVotes()
        if(totalVotes === 0){
            return 0
        }
        return Math.round((selectedChoice.count / totalVotes) * 100)
    }

render() {

return (
 <div>
  <Card.Title> {this.props.obj.title}</Card.Title>
    { this.props.obj.choices.map(data => {
       return(
         <div>
          <Card.Body>
              <Card.Text>{data.name}</Card.Text>
          {this.state.voted ? (
          <span className='text-blue-500'> Thank you for your Vote</span>
            ) :  <Button onClick={() => this.vote(data._id,data.count)}>Vote</Button>
            }

             </Card.Body>
            </div> 
                   );
                })}
        </div>
 
        );
    }
}
export default DataTable;
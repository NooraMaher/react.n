import react,{Component} from "react"
import { GetUsers } from "./api";
import React from "react";
import axios from "axios";

class Users extends Component {
    state = {  
Users: []

    } 
    handleDelete= async(user) => {
        await axios.delete("https://jisonplachoder.typicode.com/posts" + "/" +user.Id)
        const Users= this.state.Users.filter(u=>u.Id !== Users.Id)
        this.setState({
            User:Users
        })
    }
    handleDelete = async(user) => {
        user.name = "updated"
        user.Position="willupdate"
        await axios.put("https://jisonplachoder.typicode.com/posts" + "/" +user.id,user)
        await axios.patch("https://jisonplachoder.typicode.com/posts" + "/" + user.id,{name:"",position:""})
        const users = this.state.Users
        const index =Users.indexOf(user);
        Users['index']={...user}
        this.setState({
          
                user:Users
            })
    
        
    }

    async componentDidMount() {
        const {data: post} = await axios.post("https://jisonplachoder.typicode.com/posts", {name:"test" ,position: "ree"})
        console.log(post)
        const newUsers =[post,...this.state.Users]
        this.setState ({Users:newUsers})
    }




    render() { 
        return (
            <div>
               <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Position</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.Users.map(user => <tr key={user.Id}>
                            <td>{user.Id}</td>
                            <td>{user.Name}</td>
                            <td>{user.Position}</td>
                            <td>{user.Location}</td>
                            <tr>
                                <button onClick={() => this.handleDelete(user)}
                                className="btn btn-danger">Delete</button>
                            </tr>
                        </tr>
                        )}
                    
                </tbody>
               </table>
            </div>
        );
    }
}
 
export default Users;
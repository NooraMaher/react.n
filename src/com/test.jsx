import React,{Component} from "react";
// import Users from "../api/users";
import Tag from "./tag";

class Test extends Component {
    state = {  
        count:[{ id:1, value: 0},
         { id: 2, value: 0 },
         { id:3, value:0}
        
        ]
       
    } 
    render() { 
        return (
<div>
    {this.state.count.map(co=><Tag key={co.id } value={co.value}/>)}
    <h1> nonaa</h1>


   
</div>       
        );
    }
}
 
export default Test;
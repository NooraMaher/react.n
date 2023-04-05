import React, { Component } from 'react';
import Users from '../api/users';
import ButtonRedirect from './buttonRedirect';


class Tag extends Component {
    state = {  
        count:0,
        tags:[],
    
    } 

 
style={
    fontSize:"50px"
}    
    Format() {
        const test = this.state.count;
        console.log(test)
        return test == 0 ? "zero":test
    }
    Redirect=() =>{
        
    //     window.location.replace('/Users')
    }
    handelIncrement=() =>{
        var t = this.state.count
        console.log(t)
        console.log("clicked")
        this.setState({
            count: t+1,
        tags:[]
    })
     }
        handelDecrement = () => {
            var t = this.state.count
            console.log(t)
            console.log("clicked")
            this.setState({
                count: t - 1,
                tags: []
            })
    }
    render() { 
        let t= 'btn btn-'
        t += this.state.count === 0 ? "danger":"info"
        return (
            <div>
                <span style={this.style}>{ this.Format() } </span>
                <button onClick={this.handelIncrement} className={t} style={{marginLeft:"20px", marginTop:"20"}}> Increase</button>
                <button onClick={this.handelDecrement} className={t} style={{marginLeft:"20px",marginTop:"20"}}>Decrement</button>
                {/* {this.newMethod()} */}
                {this.state.tags.length ===0 && "no parameter"}

 <button className='btn btn-danger' on onClick={this.handelTest}></button>  
            
             <h1>Hello</h1>
         <ButtonRedirect>p={this.state.t}</ButtonRedirect>
            </div>
        );
    }

  
  

    newMethod() {
        if (this.state.tags.length === 0) return <p> no array </p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}

        </ul>;
    }
    }
    
    

 
export default Tag;
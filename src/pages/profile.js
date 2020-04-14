import React, { Component } from 'react'
import {Link} from "react-router-dom";
import DefaultLayout from "../layout/Default";
import {getUser, logout} from "../utils/auth";
class profile extends Component {
 
    state = {
        user:{}
    }
    componentDidMount() {
        let user = getUser()
        if(user) {
            this.setState({
                user: user
            })
        }
    }
        
    logmeOut = () => {
        logout()
        this.props.history.push('/')
    
    }
        
    render(){
        return (
        <div>
        
            <h1>Welcome to your Profile page {this.state.user.username}</h1>
            
            <div className="addBeerContainer">
                <form className="addBeerForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="tagline" value={this.state.tagline} onChange={this.handleChange} name="Tag"/>
                    <input type="text" placeholder="wod" value={this.state.wod} onChange={this.handleChange} name="wod"/>
                    <input type="text" placeholder="description" value={this.state.description} onChange={this.handleChange} name="description"/>
                    <button type="submit">Add Workout!</button>
                </form>
            </div>
            <button onClick={this.logmeOut}>log me out</button>
        </div>
        )
    }
    
}


export default profile




// const Profile = (props) => {
//     let user = getUser();
    
//     return (
//         <DefaultLayout>
//             <h1>Welcome to your profile page {user.username}</h1>
//             <button onClick={this.logmeOut}>log me out</button>
//         </DefaultLayout>
//     );
// }

// export default Profile;
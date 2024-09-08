import React from "react"

class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
           userInfo:{
            name : "",
            age: 0,
            location: "",
            avatar_url:""
           }
        }
        console.log("ChildComponent")
    }
    async componentDidMount(){
        console.log("Child - ComponentDidmount before api call")
        const response = await fetch("https://api.github.com/users/sankitdev")
        const data = await response.json()
        // console.log(data)
        this.setState({
            userInfo:data,
        })
        console.log("Child - ComponentDidmount after api call")
    }
    render(){
        console.log("childcomponent render")
        const{userInfo} = this.state
        return (
            <div>
                <h1>{userInfo.name}</h1>
                <h1>{userInfo.age}</h1>
                <h1>{userInfo.location}</h1>
                <img src={userInfo.avatar_url}/>
            </div>
        )
    }
}

export default ProfileClass
import React from 'react'
class Contact extends React.Component{
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Timer is running")
        },1000)
    }
    componentWillUnmount(){
        console.log("Component Unmount")
        clearInterval(this.timer)
        
    }
    render(){
        return <h1>Contact Page</h1>
    }
}
export default Contact
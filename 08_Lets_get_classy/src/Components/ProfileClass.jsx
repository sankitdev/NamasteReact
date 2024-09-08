import React from 'react'

class ProfileClass extends React.Component{
    
    render(){
        const {hello} = this.props
        return (
      <>
        <h1>Profile Class Test</h1>
        <h2>{hello}</h2></>
        )

    }
    
}
export default ProfileClass
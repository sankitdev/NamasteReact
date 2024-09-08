import {Component} from "react";
import ProfileClass from "./ProfileClass";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent - constructor")
    }
    componentDidMount(){
        // API Calls
        console.log("Parent- ComponentDidMount")
    }
    render(){
        console.log("Parent- render")
        return (
        <div>
            <h1>About</h1>
            <ProfileClass name="First-Child"/>
        </div>
    )
    }
}
export default About
import React from 'react'
import { Link } from 'react-router-dom';
class Nav extends React.Component{
    render(){
        return (
            <ul style={{display:'flex',listStyle:"none",gap:"1rem",fontSize:'1.2rem',justifyContent:"center",alignItems
                :'center',height:`3rem`,cursor:'pointer'
            }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/profile"}>Profile</Link></li>
            </ul>
        )
    }
}

export default Nav;
import React from 'react'
import { Link } from 'react-router-dom'

 function Header() {
    return (
        <div style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={{color:'white'}} to="/">Home</Link>|<Link style={{color:'white'}} to="/about">About</Link>
        </div>
    )
}
const headerStyle = {
    background:'black',
    color:'white',
    textAlign:'center',
    padding:'10px'
}
export default Header;
import React from 'react'

function Dashboard(props) {
    return (
    <div>
        <div>
            <h1>Dashboard</h1>
            <h1> Status: {props.loggedInStatus}</h1>
        </div>
    </div>
    )
}

export default Dashboard

import React from 'react'
import ContactCard from './card/ContactCard'

const Dashboard = () => {
    return (
        <div className="home-container">

        <div className='header'>
            <div className='user-name'> USER NAME</div>
            <div className='search-box'> SEARCH BOX</div>
            <div className='add-user'> ADD USER</div>
            <div className='add-user'> LOGOUT</div>

        </div>

        <div className='contact-list'>
            {[1,2,3,4,5,6,7].map(a => <ContactCard key={a}/>)}
        </div>

        </div>
    )
}

export default Dashboard

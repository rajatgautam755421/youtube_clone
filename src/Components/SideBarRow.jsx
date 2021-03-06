import React from 'react'
import './sidebarrow.css'
const SideBarRow = ({ selected, title, Icon }) => {
    return (
        <div className={`sidebarrow ${selected && 'selected'}`}>
            <Icon className='sidebarrow__icon' />
            <h2 className="sidebarrow__title" >{title}</h2>
        </div>
    )
}

export default SideBarRow

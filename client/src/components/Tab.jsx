import React from 'react'

const Tab = ({ tab, customStyles, handleClick }) => {
    return (
        <div className={`${customStyles} glassmorphism p-2.5 rounded-full  `} onClick={handleClick}>
            <img src={tab?.icon} alt="" />
        </div>
    )
}

export default Tab
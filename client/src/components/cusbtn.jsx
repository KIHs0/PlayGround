import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store/store'

const Cusbtn = ({ customStyle, type, title, handleClick }) => {
    const snap = useSnapshot(state)
    const buttonStyle = type === 'filled' ? { backgroundColor: snap.color } : { color: 'white' };
    return (
        <button className={` ${customStyle} px-2.5 rounded-2xl py-1.5 text-black capitalize font-bold`} style={buttonStyle} onClick={handleClick}>
            {`${title}`}
        </button>
    );
}

export default Cusbtn

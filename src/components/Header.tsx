import React from 'react'
import Settings from './Settings'
import '../styles/Settings.css'

interface iHeader {
    showSettings?: boolean
}

const Header = ({ showSettings = false }: iHeader) => {
    return (
        <div className='headerContainer'>
            {showSettings && <span />}
            <h1>Unsplash API Portal</h1>
            {showSettings && <Settings />}
        </div>
    )
}

export default Header
